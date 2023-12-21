const d = new Date();
const year = d.getFullYear();
const time = d.getHours();
console.log(time)

function tellTime(){
    if(time >= 0 && time < 12){
        return "Good morning.";
    }
    if(time >= 12 && time < 15){
        return "Good afternoon.";
    }
    if(time >= 15 && time < 20){
        return "Good evening."
    }
    if(time >= 20 && time < 24){
        return "Good night."
    }
};

document.getElementById("foot").innerHTML = "Copyright © " + year;

document.getElementById("greet").innerText = tellTime();
