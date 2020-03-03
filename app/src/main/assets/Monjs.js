var clock = document.getElementById('Clock');
var Hexcolor = document.getElementById('Hex');

function Hex_color(){
    var time = new Date();
    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds =time.getSeconds().toString();

    if (hours.length<2){
        hours= '0'+hours;
    }
    if (minutes.length<2){
        minutes= '0'+minutes;

    }if (seconds.length<2){
        seconds= '0'+seconds;
    }

    var clock_str = hours+'.'+minutes+'.'+seconds;
    var Hex_color_str= "#"+hours+minutes+seconds;

    clock.textContent = clock_str;
    Hexcolor.textContent = Hex_color_str;

    document.body.style.backgroundColor = Hex_color_str;
}

setInterval(Hex_color,1000);