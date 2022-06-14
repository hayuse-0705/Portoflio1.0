
var five = require('johnny-five');
var board = new five.Board({port:"/dev/tty.usbserial-140"});
 
board.on('ready', function() {
  var led = new five.Led(13);
  led.blink(500);
});