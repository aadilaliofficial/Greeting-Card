var output = document.getElementsByClassName("output");
var card = document.getElementsByClassName("card");

function getValue(data, flag){
    if(flag==0){
        output[0].innerHTML = `From : ${data.value}`;
    }
    else if(flag==1){
        output[1].innerHTML = `Message : ${data.value}`;
    }
    else{
        output[2].innerHTML = `To : ${data.value}`;
    }
}

function bgimg(data){
    card[1].style.backgroundImage = `url(${data.value})`;
}

function tcolor(value){
    card[1].style.color = value;
}
