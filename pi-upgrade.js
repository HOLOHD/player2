var curVer = require('./package.json'),
    prevVer = require('../piSignagePro.prev/package.json'),
    async= require('async'),
    fs = require('fs'),
    execFile = require('child_process').execFile

console.log("Upgraded from "+prevVer.version+'/'+prevVer.platform_version+" to "+curVer.version+'/'+curVer.platform_version);

var startVersion, endVersion;

startVersion = parseInt(prevVer.version.replace(/\D/g,""));
endVersion = parseInt(curVer.version.replace(/\D/g,""));

console.log(' start version : '+startVersion + '   '+ 'end version : '+ endVersion );

fs.readdir('./misc/upgrade_scripts', function(err, files) {    
    var versions = files.map(function(file){
        return parseInt(file);
    })
    versions.sort(function(a,b){
        return a-b;
    })
    console.log(versions);
    async.eachSeries(versions,
        function(item, cb) {
            if(item > startVersion && item <= endVersion){
                var file = '/home/pi/piSignagePro/misc/upgrade_scripts/'+item+'.sh';
                console.log("executing shell script "+file);
                execFile(file,function(error,stdout,stderr){
                    console.log('stdout: ' + stdout);
                    console.log('stderr: ' + stderr);
                    if (error !== null) {
                        console.log('exec error: ' + error);
                    }
                    cb();
                })
            }else{
                cb()
            }
        }, function(err) {
            writePlatformVersion();
            console.log('***********update_scripts execution complete*******************');
        }
    )
});

function writePlatformVersion(){
    var prevVer, curVer;
    async.series([
        function(next) {
            fs.readFile('../piSignagePro.prev/package.json', function (err, data) {
                if (err) {
                    console.log(' Read error for ~/piSignagePro.prev/package.json: ' + err);
                    next(err);
                } else {
                    try {
                        prevVer = JSON.parse(data);
                        next();
                    } catch (e) {
                        console.log("error parsing package.json of previous version ")
                        next(e);
                    }
                }
            })
        }, function(next) {
            fs.readFile('./package.json',function(err,data) {
                if (err) {
                    console.log(' Read error for ~/piSignagePro/package.json: ' + err);
                    next(err);
                } else {
                    try {
                        curVer = JSON.parse(data);
                        next();
                    } catch (e) {
                        console.log("error parsing package.json of current version ")
                        next(e);
                    }
                }
            })
        }, function(next) {
            if (prevVer.platform_version)
                curVer.platform_version = prevVer.platform_version;
            curVer.config_server = prevVer.config_server || "pisignage.com";
            curVer.media_server = prevVer.media_server || "pisignage.com";
            fs.writeFile('./package.json', JSON.stringify(curVer,null,4) , 'utf8', function(err){
                if(err)
                    console.log('error writing platform version and config server in package.json');
                next(err);
            })
        }
    ], function(err) {
            if (!err)
                console.log('*********platform version and config server restored********');
    })
}
