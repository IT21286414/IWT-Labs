  

/********Button click - news **********/
var data;
function loadData(data) {
    if (data == 'first')
    {
        document.getElementById("hidden-image").src = "../images/iphone-xs.png";
        
        document.getElementById("hidden-text").innerHTML = 
        "<style> .h-text-container {display:block;} </style>" + 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ; 
    }
    else if (data == 'second')
    {
        document.getElementById("hidden-image").src = "../images/iphone-xs-max.png";
        
        document.getElementById("hidden-text").innerHTML = 
        "<style> .h-text-container {display:block;} </style>" + 
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ; 
    }
    else if (data = 'third')
    {
        document.getElementById("hidden-image").src = "../images/iphone-8-plus.png";
        
        document.getElementById("hidden-text").innerHTML = 
        "<style> .h-text-container {display:block;} </style>" +
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ; 
    }
}


/******For Loop *******/
function priceForLoop(){
    var array = ["Iphone XS - $1349" , "Iphone XS Plus- $1349", 
    "Iphone XS - $999" , "Iphone 8 Plus - $599" , "Iphone SE - $399"];
    let text = "";

    for (var x = 0; x < 5; x++) {
        text = text + array[x] + "<br>"
    }

    document.getElementById("price").innerHTML = text;
}

function productForInLoop(){
    var array = ["Iphone XS - $1349" , "Iphone XS Plus- $1999", 
    "Iphone XS - $999" , "Iphone 8 Plus - $599" , "Iphone SE - $399"];
    let text = "";

    for (var x in array) {
        text = text + array[x] + "<br>";
    }

    document.getElementById("price").innerHTML = text;
}

//priceHigher//
function priceHigher(){
    var array = ["1349" , "1999", "999" , "599" , "399"];
    let text = "";

    for (var x in array){
        if (array[x] > 1000)
        {
            text = text + "$" +  array[x] + "<br>" ;
        }
    }

    document.getElementById("price").innerHTML = text;
}

//priceLower//
function priceLower(){
    var array = ["1349" , "1999", "999" , "599" , "999"];
    let text = "";

    for (var x in array){
        if (array[x] < 1000)
        {
            text = text + "$" +  array[x] + "<br>" ;
        }
    }

    document.getElementById("price").innerHTML = text;
}


//sum of first 10 natural numbers
function natural(){
    let x = 0;

    for(var i = 1; i <= 10; i++)
    {
        x = x + i;
    }

    document.getElementById("price").innerHTML = x;
}

//pattern
function pattern(){

    var p = "";
    var x = 1;

    for (var row = 1; row <= 4; row++ )
    {
        for(var col = 1; col <= row; col++, x++ )
        {
            p = p + x + "       ";
        }
        p = p + "<br>";
    }

    document.getElementById("price").innerHTML = p;
}