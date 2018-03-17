let i;
var HtmlElement = document.getElementById("root");
for (i = 1; i <= 100; i++){
    if (i % 3 ==0 && i % 5 == 0){
        HtmlElement.innerHTML+= '<div>Bing Bong<div>';
    }
    else if (i % 3 ==0){
        HtmlElement.innerHTML+= '<div>Bing<div>';
    }
    else if (i % 5 == 0){
        HtmlElement.innerHTML+= '<div>Bong<div>';
    }
    else {
        HtmlElement.innerHTML+= '<div>' + i + '<div>';
    }

}