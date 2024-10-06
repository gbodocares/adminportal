

db.collection("students").get().then((querySnapshot) => {
    var Users = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        Users.push(doc.data());
        var docLen = Users.push(doc.data());
        document.getElementById('allstudents').innerHTML = docLen / 2;
    });
});





