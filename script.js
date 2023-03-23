let score = 0;
let addUps = 1;
let cost = 20;
let count = 0;
let advCount = 0;
let advCost = 500;


function addPoint(x, image) {
    score+=addUps;
    document.getElementById("score").innerHTML = score;
    var image = document.getElementById("myImage");

   if(image.src.match("cat.png")){
    image.src = "cat2.png";
    document.getElementById("addOn").style.display = "None";
   }
   else{
    image.src = "cat.png";
    document.getElementById("addOn").style.display = "Block";

   }

}

function addBasic(){
    if(score < cost){
        alert('You need more points')
    }
    else{
        count++;
        score -=cost;
        cost = cost + 20 * count;
        document.getElementById("score").innerHTML = score;
        document.getElementById("cost").innerHTML = cost;

        addUps+=5;
        document.getElementById("addOn").innerHTML = "+" + addUps;

    }
}

function addAdv(){
    if(score < advCost){
        alert('You need more points')
    }
    else{
        advCount++;
        score -=advCost;
        advCost = advCost + 500 * count;
        document.getElementById("score").innerHTML = score;
        document.getElementById("costAdv").innerHTML = advCost;

        addUps+=100;
        document.getElementById("addOn").innerHTML = "+" + addUps;


    }
}



