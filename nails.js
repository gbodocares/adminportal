
// originalString.slice(0, 3)

// let cutWord = studentId.slice(0, 3);

const loginBtn = document.getElementById("toggleForm").onclick = ((e) => {
    var showForm = document.getElementById('update');
    showForm.style.display = 'block';
     
});

db.collection("students").where("dept", "==", "nails decoration")
    .get()
    .then((querySnapshot) => {
    var Users = [];
    
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        Users.push(doc.data());
        console.log(Users)
        var count = 1;
        var classData = Users.map((data) => {
        console.log(typeof(Users))
            return `<div>
            
            <tr>
                <td>${count++}</td>
                <td>${data.userId}</td>
                <td><img src="${data.imageUrl}" class="me-2" alt="image"> ${data.firstname} ${data.surname}</td>
                <td>${data.studentId}</td>
                <td>${data.attendance}</td>
                <td>${data.test}</td>
                <td>${data.softSkillAtt}</td>
                <td>${data.softSkillProject}</td>
                <td>${data.finalProject}</td>
                <td style="font-weight: bold; color: teal;">${data.attendance + data.test + data.softSkillAtt + data.softSkillProject + data.finalProject}</td>
            </tr>
            
            </div>
            `
        }).join(' ')
        
        //cities.push(doc.data().name);
        document.getElementById('classData').innerHTML = classData;
    });
});





