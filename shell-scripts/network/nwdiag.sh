#!/bin/bash
TEST_EXT_IP="google.com" # IP used for testing if an external connection can be made
TEST_HOST="pisignage.com" # Test hostname used to check if DNS is working

PATH="/sbin:/usr/sbin:/bin:/usr/bin"
export PATH
netstatus="PASS"
dnstest="OK"
pingtest="OK"
linkstatus="DOWN"
dhcpserver="NO"

ETH_INTERFACE=$(sudo ls -1a /sys/class/net/ | egrep 'eth0|en')
WLAN_INTERFACE=$(sudo ls -1a /sys/class/net/ | egrep 'wl')

linkstatus=$(sudo ethtool $ETH_INTERFACE | grep "Link detected" |  cut -d':' --complement -s -f1)
if [ $linkstatus == "yes" ]; then
   linkstatus="UP"
else
   linkstatus="DOWN"
   netstatus="FAIL"
fi
if [ $linkstatus == "DOWN" ]; then
  linkstatus=$(sudo ethtool $WLAN_INTERFACE | grep "Link detected" |  cut -d':' --complement -s -f1)
  if [ $linkstatus == "yes" ]; then
     linkstatus="UP"
     netstatus="PASS"
  else
     linkstatus="DOWN"
     netstatus="FAIL"
  fi
fi

PING=$(ping -c1 -n $TEST_EXT_IP)
if [ "$?" -ne "0" ]; then
	netstatus="FAIL"
	pingtest="FAIL"
fi

dhcpserver=$(sudo nmap --script broadcast-dhcp-discover |grep "Server Identifier" |  cut -d':' --complement -s -f1)

RES=$(host $TEST_HOST)
dns=`echo $RES | awk '{print match($0,"pisignage")}'`;
if [ $dns -ne 0 ]; then
    dnstest="OK"
else
    dnstest="FAIL"
    netstatus="FAIL"
fi

echo  "{\"LINK\":\""$linkstatus"\",\"DHCP\":\""$dhcpserver"\",\"PING\":\""$pingtest"\",\"DNS\":\""$dnstest"\",\"NETSTATUS\":\""$netstatus"\" }"
