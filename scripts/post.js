
var numLikes = 0;

function editMode(){
    document.getElementById("idPostTitle").setAttribute("contentEditable", "true")
    document.getElementById("idPostTitle").setAttribute("style", "border : 2px solid red;")
    document.getElementById("idPostText").setAttribute("contentEditable", "true")
    document.getElementById("idPostText").setAttribute("style", "border : 2px solid red;")
    document.getElementById("idEditButton").innerHTML= 'Save <i class="fa fa-save white-color " ></i>';
    document.getElementById("idEditButton").setAttribute("onclick","save()");
    

}

function save(){
    document.getElementById("idPostTitle").setAttribute("contentEditable", "false")
    document.getElementById("idPostTitle").removeAttribute("style")
    document.getElementById("idPostText").setAttribute("contentEditable", "false")
    document.getElementById("idPostText").removeAttribute("style");
    document.getElementById("idEditButton").innerHTML= 'Edit <i class="fa fa-edit white-color " ></i>';
    document.getElementById("idEditButton").setAttribute("onclick","editMode()");
}

function onLiked(){
    ++numLikes;
    document.getElementById("idLikeButton").innerHTML= '<i class="fa fa-thumbs-up white-color"></i> Liked'
    document.getElementById("idLikeButton").innerHTML= '<i class="fa fa-thumbs-up white-color"></i> Liked'
    
    if (numLikes == 1 ){
        document.getElementById("idLikeText").innerHTML= "1 person likes this!";
    } else {
        document.getElementById("idLikeText").innerHTML= numLikes + " people likes this!";
    }

}

function addComment(comment) {
    document.getElementById("idAllComments").removeAttribute("style");
    document.getElementById("idAllComments").innerHTML += '<p class="comment">'+comment.value+ '</p>';
    comment.value="";
}