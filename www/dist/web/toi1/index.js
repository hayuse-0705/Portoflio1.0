const express = require("express");
const five = require("johnny-five");
const board = new five.Board({port:"/dev/tty.usbserial-140"});

const app = express();
app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

let led;

board.on('ready', function() {
    led = new five.Led(12);
});

const message = "現在の状態：";

app.get("/", (req, res)=>{
    res.render("index.ejs",{
        content: message + "off",
    });
});

app.post("/", (req, res)=>{
    if(req.body.operate == "on"){
        led.on();
    }
    if(req.body.operate == "off"){
        led.off();
    }
    res.render("index.ejs",{
        content: message + req.body.operate,
    });
});

const server = app.listen(3000, ()=>console.log("イエッタイガー！"));