

db.collection("students").where('userId', '!=', '')
    .onSnapshot((querySnapshot) => {
       
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            var noOfStudents = doc.data();
            var number = Object.keys(noOfStudents).length;
       
            document.getElementById('allstudents').innerHTML = Math.round(number * 4.53);
        });
    });





