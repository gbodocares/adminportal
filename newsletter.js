

var dataRef = firebase.database().ref('newsletter/');
dataRef.on('value', (snapshot) => {
  var data = snapshot.val();
  var signData = Object.keys(data);
  console.log(signData);
  var count = 1;
  for (let i = 0; i < signData.length; i++){
    let infoData = signData[i];
    let email = data[infoData].email;

    let results = document.getElementById('eventData');

    results.innerHTML += `<tr>
      <td>${count++}</td>
      <td>${email}</td>
    </tr>`
  }
});



 


