#!/bin/bash
set -e
if [[ ! -e /dev/usbflash ]]
then
    exit 0
fi

sudo mount /dev/usbflash /media
usb_drive=/media
home=/home/pi

base=${home}/piSignagePro
system_script=${base}/misc/system.sh
get_json_value_script=${base}/misc/get_json_value.js
piassets=${home}/media

archive_name=_export_assets
archive_guid=D9ADBB67-BB4F-4D15-B5AE-2859E02E13A3
zipfile=/media/${archive_guid}.zip

marker=_timestamp.txt
local_marker=${home}/${marker}

reboot=false
cpu_id=`cat /proc/cpuinfo | grep Serial | awk '{print $3}'`
if [[ ${cpu_id:0:1} == "1" ]] ; then cpu_id=9${cpu_id:1}; fi

settings_json=${home}/${archive_name}/${cpu_id}_settings.json
license_file=${home}/${archive_name}/license_${cpu_id}.txt
config_json=${home}/${archive_name}/_config.json

# If marker file present on a mounted USB drive and it has not been
# copied, copy archive from the USB
#

echo "$(date) ***USB IMPORT: importing data ***"
if [ -f ${zipfile} ]; then

    sudo unzip -d ${usb_drive} ${zipfile} ${archive_name}/${marker} > /dev/null 2>&1
    sudo mv ${usb_drive}/${archive_name}/${marker} ${usb_drive}/${marker}
    sudo rmdir ${usb_drive}/${archive_name}

    if test -f ${usb_drive}/${marker}; then
        cat ${usb_drive}/${marker}
    fi
    echo ""
    if test -f ${local_marker}; then
        cat ${local_marker}
    fi
    echo ""

    if test ! -f ${local_marker} || ! `cmp -s ${usb_drive}/${marker} ${local_marker} 2>/dev/null`; then
        cp ${usb_drive}/${archive_guid}.zip $home > /dev/null 2>&1
        unzip -d ${home} ${home}/${archive_guid}.zip > /dev/null 2>&1

        if test -f ${config_json}; then
            cp ${config_json} ${base}/config/_config.json
        fi

        if test -f ${license_file}; then
            cp ${license_file} ${home}
        fi

        if test -f ${home}/${archive_name}/htpasswd; then
            cp ${home}/${archive_name}/htpasswd ${base}/htpasswd
        fi
        if test -f ${home}/${archive_name}/.wgetrc; then
            cp ${home}/${archive_name}/.wgetrc ${home}/.wgetrc
        fi
        if test -d ${home}/${archive_name}/assets; then
            cp -a ${home}/${archive_name}/assets/. ${piassets}
        fi

        if test -f ${settings_json}; then
            reboot=true
            cp ${settings_json} ${base}/config/_settings.json
            sshPassword=$(node ${get_json_value_script} ${settings_json} sshPassword)
            if [ ! -z ${sshPassword} ]; then
                bash ${system_script} --change-ssh-password ${sshPassword}
            fi
            TZ=$(node ${get_json_value_script} ${settings_json} TZ)
            if [ ! -z ${TZ} ]; then
                sed -i  "s|.*TZ=.*|TZ=\'${TZ}\'; export TZ|" /home/pi/.bash_profile
            fi
            resolution=$(node ${get_json_value_script} ${settings_json} resolution)
            orientation=$(node ${get_json_value_script} ${settings_json} orientation)
            bash ${system_script} --resolution ${resolution} --orientation ${orientation}
        fi
        cp ${usb_drive}/${marker} ${home} > /dev/null 2>&1
        rm -rf ${home}/${archive_name}
        rm -f ${home}/${archive_guid}.zip
        if [ "$reboot" ]; then
            echo "Rebooting now"
            sudo systemctl reboot
        fi
    else
        echo "***USB IMPORT: Timestamps match and nothing to import from USB ***"
    fi
fi
