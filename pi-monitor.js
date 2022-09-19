// need to add in install.sh sudo npm install -g forever-monitor
//
var forever = require('forever-monitor'),
    exec = require('child_process').exec,
    spawn = require('child_process').spawn,
    fs= require('fs'),
    async= require('async');

//read forever file, write back only last limited lines if the file size exceeds those number of lines
var linesToKeep = 100000;
async.eachSeries([
        '/home/pi/forever.log',
        '/home/pi/forever_out.log',
        '/home/pi/forever_err.log'
    ],
    function(file,async_cb) {
        exec('wc -l '+file,
            function (err, lc) {
                if (!err && (parseInt(lc) > linesToKeep)) {
                    exec('sed -i "1,'+ (parseInt(lc) - linesToKeep) +'d" '+ file, async_cb)
                } else {
                    async_cb();
                }
            }
        )
    },
    function(err){
        if (err)
            console.log("Ignoring forever log trim error: "+err);

        startChild();
        pingServer();
    }
)

function startChild () {
    var child = new (forever.Monitor)('pi-server.js', {
        max: 10,
        silent: false,
        killTree: true,

        spinSleepTime: 2000,

        append: true,
        logFile: '/home/pi/forever.log',
        outFile: '/home/pi/forever_out.log',
        errFile: '/home/pi/forever_err.log'

    });


    var stable = false;
    child.on('exit', function () {
        console.log('pi-server.js has exited after 3 restarts');
        //Looks like we, need to downgrade the pi-server image
        if (!stable) {
            var out = fs.openSync('/home/pi/forever.log', 'a'),
                err = fs.openSync('/home/pi/forever.log', 'a');

            var downgrade = spawn('misc/downgrade.sh', [], {
                detached: true,
                stdio: [ 'ignore', out, err ]
            });

            downgrade.unref();
        }
    });

    child.start();

    setTimeout(function () {
        stable = true;
    }, 10 * 60 * 1000)
}

function pingServer () {
    var http = require('http');
    http.createServer(function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', "*");
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Authorization,Content-Type,Content-Length, X-Requested-With,origin,accept');

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('PiSignage Player\n');
    }).listen(8001,'0.0.0.0');
}

