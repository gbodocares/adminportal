

var dataRef = firebase.database().ref('awardNominations/');
dataRef.on('value', (snapshot) => {
  var data = snapshot.val();
  var signData = Object.keys(data);
  console.log(signData);
  var counting = 1;
  for (let i = 0; i < signData.length; i++){
    let infoData = signData[i];
    let studentId = data[infoData].studentId;
    let fullName = data[infoData].fullName;
    let nomineeName = data[infoData].nomineeName;
    let nomineeDept = data[infoData].nomineeDept;
    let shortStatement = data[infoData].shortStatement;
    let awardCategory = data[infoData].awardCategory;

    let nomResults = document.getElementById('nominationData');

    nomResults.innerHTML += `<tr>
      <td>${counting++}</td>
      <td>${studentId}</td>
      <td>${fullName}</td>
      <td>${awardCategory}</td>
      <td>${nomineeName}</td>
      <td>${nomineeDept}</td>
      <td>${shortStatement}</td>
    </tr>`
  }
});

