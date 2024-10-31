

let studentDelete = document.getElementById('deleteAccount');

studentDelete.addEventListener('submit', (event) => {
    event.preventDefault();
    let randomId = document.getElementById('studentUserId').value;
    console.log(randomId);
    db.collection("students").doc(randomId).delete().then(() => {
        swal({
            title: 'Account Delete',
            text: 'Account deleted successfully',
            icon: 'success',
            button: 'Reload Page'
        }).then(function(){
            window.location.reload();
        })
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
})


