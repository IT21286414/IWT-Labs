  

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


