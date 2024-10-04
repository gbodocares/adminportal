

var dataRef = firebase.database().ref('cleanUp/');
dataRef.on('value', (snapshot) => {
  var data = snapshot.val();
  var signData = Object.keys(data);
  console.log(signData);
  var count = 1;
  for (let i = 0; i < signData.length; i++){
    let infoData = signData[i];
    let studentId = data[infoData].studentId;
    let fullname = data[infoData].fullname;

    let results = document.getElementById('eventData');

    results.innerHTML += `<tr>
      <td>${count++}</td>
      <td>${studentId}</td>
      <td>${fullname}</td>
    </tr>`
  }
});



 


