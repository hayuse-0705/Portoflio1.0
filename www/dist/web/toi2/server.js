var http = require('http');
var querystring = require('querystring');
var util = require('util');
var fs = require('fs');
var form = fs.readFileSync('./public/form.html');

var five = require('johnny-five');
var board = new five.Board();

cmd_ledon = 'echo "LED ON!!"';
cmd_ledoff = 'echo "LED OFF!!"';

var led;

board.on('ready', function() {
    led = new five.Led(6);
});

http.createServer(function (req, res){
    if(req.method === 'GET'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end(form);
    }
    if(req.method==='POST'){
        var postData = '';
        req.setEncoding('utf8');
        req.on('data',function (chunk){
            // per request
            postData += chunk;
        }).on('end',function(){
            // response data
            var respose_data = '';

            // end request
            if(!postData){
                res.end();
                return;
            } // if postData is empty.
            var postDataObject = querystring.parse(postData);
            console.log('user posted following data:' + postData);
            console.log(postDataObject.userinput1);
            respose_data += 'your poted data is:\n' + util.inspect(postDataObject)+'\n';

            if(postDataObject.userinput1 == '1'){
                led.on();
                respose_data += 'LED ON !!';
                respose_data += '<style type="text/css">.ledon{background-color: #34A7C1;}</style>';
            } // if userinput1で1がPOSTされたならledon
            if(postDataObject.userinput1 == '0'){
                led.off();
                respose_data += 'LED OFF !!';
                respose_data += '<style type="text/css">.ledoff{background-color: #34A7C1;}</style>';
            } // if userinput1で0がPOSTされたならledoff

            res.writeHead(200,{'Content-Type': 'text/html'});
            res.end(form + respose_data,"utf8");
        });
    }
}).listen(8000);