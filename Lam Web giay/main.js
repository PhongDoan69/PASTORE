function init(){
    var images=document.querySelectorAll("div.color img")
    for(var i=0;i<images.length;i++)
    images[i].onclick=function(){
        var path= this.src
        var img=document.getElementById("mainImage")
        img.src=path
    }

    var selectsize=document.querySelectorAll("ul.selectSize li")
    for(var i=0;i<selectsize.length;i++)
    selectsize[i].onclick=function() {
    this.setAttribute("style","background-color: lightgray")
    }
}
