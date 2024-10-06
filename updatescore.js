const updateSc = document.getElementById("updateScore").onclick = ((e) => {
    e.preventDefault()

    const userId = document.getElementById("userId").value;
    const att = document.getElementById("att").value;
    const attNum = Number(att);
    const test = document.getElementById("test").value;
    const testNum = Number(test);
    const ssatt = document.getElementById("ssatt").value;
    const ssattNum = Number(ssatt);
    const ssproj = document.getElementById("ssproj").value;
    const ssprojNum = Number(ssproj);
    const finalproj = document.getElementById("finalproj").value;
    const finalprojNum = Number(finalproj);

    var docRef = db.collection('students').doc(userId);

    docRef.update({
        attendance: attNum,
        test: testNum,
        softSkillAtt: ssattNum,
        softSkillProject: ssprojNum,
        finalProject: finalprojNum
    })
    swal({
        title: 'Score Update',
        text: 'Score Updated Successfully',
        icon: 'success',
        button: 'Reload Page'
    }).then(function(){
        window.location.reload();
    })

});