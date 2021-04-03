function deletePost(postId) {
    //alert('called delete on ' + postId.value);
    document.getElementById(postId.value).remove()
}

function confirmPostDelete(postId) {
    document.getElementById('postIdForDelete').value = postId;
    var confirmModal = new bootstrap.Modal(document.getElementById('modalConfirmYesNo'), {
        keyboard: false
      })
    confirmModal.show();
    //alert('called confirm on ' +  document.getElementById('postIdForDelete').value);
}

function loadPost(postId) {
    //alert('called load post');
    window.location.href ="post.html";
}