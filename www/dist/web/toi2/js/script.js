var kazu=60;
const himei = new Audio('himei.mp3');

var audioplay= document.getElementById('audio');
var bgmplay=document.getElementById('bgm');
var btnaudio=document.getElementById('btn_audio');
var clearaudio=document.getElementById('clear_audio');
var lastcount=document.getElementById('last_count');
var sucwarai=document.getElementById('warai_audio');
var failvideo=document.getElementById('fail_video');
var sucvideo=document.getElementById('suc_video');
document.getElementById('mainpage').style.display='none';
var start_btn = document.getElementById('startbtn');
var sucbgm=document.getElementById('suc_bgm');
var　timer;
var suc_check=0;
var count = function(){
    kazu--;
    if(kazu==0){
        kazu="";
    }
    document.getElementById('count').innerHTML=kazu ;
}
var change =function(){
    document.getElementById('change').style.backgroundColor= '#000';
}

var remove_c =function(){
}

var result_fail =function(){
    if(suc_check==0){
        document.getElementById("hint").style.display="none";
        document.getElementById("toi_img").style.display="none";
        sucwarai.play();
        bgmplay.volume=0;
        var count_char = document.getElementById('count');
        var keypad = document.getElementById('key_all');
        var answerzone = document.getElementById('answer_all');
        failvideo.style.display="block"
        failvideo.play();
        answerzone.remove();
        keypad.remove();
        count_char.remove();
        document.getElementById('main_question').innerHTML="";
    }
}
var result_suc =function(){
    suc_check=1;
    document.getElementById("hint").style.display="none";
    document.getElementById("toi_img").style.display="none";
    bgmplay.volume=0;
    var count_char = document.getElementById('count');
    var keypad = document.getElementById('key_all');
    var answerzone = document.getElementById('answer_all');
    answerzone.remove();
    sucvideo.style.display="block"
    sucvideo.play();
    keypad.remove();
    count_char.remove();
}

window.addEventListener('DOMContentLoaded', function(){

   
  });

function change_test(){
    document.getElementById("back_test").style.backgroundColor='#f00';
}
var i=0;
function input_key(inkey){
    btnaudio.play();
    btnaudio.volume=0.5;
    i++;
    if(inkey=="”"){
        i--;
    }
    if(i == 1){
        var idname= "answer_1";
    }else if(i == 2){
        var idname= "answer_2";
    }else if(i == 3){
        var idname="answer_3";
    }else if(i == 4){
        var idname="answer_4";
    }else{
        i==0;
    }
    if(inkey=='”'){
        switch(document.getElementById(idname).textContent){
            case'か':inkey='が';
                    break;
            case'き':inkey='ぎ';
                    break;
            case'く':inkey='ぐ';
                    break;
            case'け':inkey='げ';
                    break;
            case'こ':inkey='ご';
                    break;
            case'さ':inkey='ざ';
                    break;
            case'し':inkey='じ';
                    break;
            case'す':inkey='ず';
                    break;
            case'せ':inkey='ぜ';
                    break;
            case'そ':inkey='ぞ';
                    break;
            case'た':inkey='だ';
                    break;
            case'ち':inkey='ぢ';
                    break;
            case'つ':inkey='づ';
                    break;
            case'て':inkey='で';
                    break;
            case'と':inkey='ど';
                    break;
            case'は':inkey='ば';
                    break;
            case'ひ':inkey='び';
                    break;
            case'ふ':inkey='ぶ';
                    break;
            case'へ':inkey='べ';
                    break;
            case'ほ':inkey='ぼ';
                    break;
            default:inkey=document.getElementById(idname).textContent;
                    break;
            }
        

    }
    document.getElementById(idname).innerHTML=inkey;
}
function clear_text(){
    clearaudio.play();
    clearaudio.volume=0.5;
    document.getElementById("answer_1").innerHTML="";
    document.getElementById("answer_2").innerHTML="";
    document.getElementById("answer_3").innerHTML="";
    document.getElementById("answer_4").innerHTML="";
    i=0;
}

var failaudio=document.getElementById('fail_audio');

function window_clear(){
    var count_char = document.getElementById('count');
    var keypad = document.getElementById('key_all');
    var answerzone = document.getElementById('answer_all');
    answerzone.remove();
    keypad.remove();
    count_char.remove();
}
function enter(){
    var testtext=document.getElementById("answer_1");
    if(document.getElementById("answer_1").textContent=="め"){
        if(document.getElementById("answer_2").textContent=="あ"){
            if(document.getElementById("answer_3").textContent=="り"){
                if(document.getElementById("answer_4").textContent=="ー"){
                    result_suc();
                    return;
                }else{
                    failaudio.play();
                    document.getElementById("answer_1").innerHTML="";
                    document.getElementById("answer_2").innerHTML="";
                    document.getElementById("answer_3").innerHTML="";
                    document.getElementById("answer_4").innerHTML="";
                    i=0;
                }
            }else{
                failaudio.play();
                document.getElementById("answer_1").innerHTML="";
                document.getElementById("answer_2").innerHTML="";
                document.getElementById("answer_3").innerHTML="";
                document.getElementById("answer_4").innerHTML="";
                i=0;
            }
        }else{
            failaudio.play();
            document.getElementById("answer_1").innerHTML="";
            document.getElementById("answer_2").innerHTML="";
            document.getElementById("answer_3").innerHTML="";
            document.getElementById("answer_4").innerHTML="";
            i=0;
        }
    }else{
        failaudio.play();
        document.getElementById("answer_1").innerHTML="";
        document.getElementById("answer_2").innerHTML="";
        document.getElementById("answer_3").innerHTML="";
        document.getElementById("answer_4").innerHTML="";
        i=0;
    }
}

function lc(){
    if(suc_check==0){
        lastcount.play();
    }
}

function hint(){
    if(suc_check==0){
        document.getElementById("hint").style.display="block";
    }
}

start_btn.onclick =function start_answer(){
    bgmplay.play();
    bgmplay.volume = 0.3;
    var start_btn = document.getElementById('startbtn');
    start_btn.style.display='none';
    var main_page = document.getElementById('mainpage');
    main_page.style.display='block';
    document.getElementById("toi_img").style.display="block";
    setTimeout(count,1000);
    setTimeout(count,2000);
    setTimeout(count,3000);
    setTimeout(count,4000);
    setTimeout(count,5000);
    setTimeout(count,6000);
    setTimeout(count,7000);
    setTimeout(count,8000);
    setTimeout(count,9000);
    setTimeout(count,10000);
    setTimeout(count,11000);
    setTimeout(count,12000);
    setTimeout(count,13000);
    setTimeout(count,14000);
    setTimeout(count,15000);
    setTimeout(count,16000);
    setTimeout(count,17000);
    setTimeout(count,18000);
    setTimeout(count,19000);
    setTimeout(count,20000);
    setTimeout(hint,20000);
    setTimeout(count,21000);
    setTimeout(count,22000);
    setTimeout(count,23000);
    setTimeout(count,24000);
    setTimeout(count,25000);
    setTimeout(count,26000);
    setTimeout(count,27000);
    setTimeout(count,28000);
    setTimeout(count,29000);
    setTimeout(count,30000);
    setTimeout(count,31000);
    setTimeout(count,32000);
    setTimeout(count,33000);
    setTimeout(count,34000);
    setTimeout(count,35000);
    setTimeout(count,36000);
    setTimeout(count,37000);
    setTimeout(count,38000);
    setTimeout(count,39000);
    setTimeout(count,40000);
    setTimeout(count,41000);
    setTimeout(count,42000);
    setTimeout(count,43000);
    setTimeout(count,44000);
    setTimeout(count,45000);
    setTimeout(count,46000);
    setTimeout(count,47000);
    setTimeout(count,48000);
    setTimeout(count,49000);
    setTimeout(count,50000);
    setTimeout(lc,50000);
    setTimeout(count,51000);
    setTimeout(lc,51000);
    setTimeout(count,52000);
    setTimeout(lc,52000);
    setTimeout(count,53000);
    setTimeout(lc,53000);
    setTimeout(count,54000);
    setTimeout(lc,54000);
    setTimeout(count,55000);
    setTimeout(lc,55000);
    setTimeout(count,56000);
    setTimeout(lc,56000);
    setTimeout(count,57000);
    setTimeout(lc,57000);
    setTimeout(count,58000);
    setTimeout(lc,58000);
    setTimeout(count,59000);
    setTimeout(lc,59000);
    setTimeout(change,60000);
    setTimeout(lc,60000);
    setTimeout(result_fail,60000);
}