var adminLogin = document.getElementById('adminLogin').onclick = ((e) => {
    e.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(email == 'admin@gbodo.ng' && password == 'admin123'){
        window.location.href = 'dashboard.html';
    } else{
        alert('Invalid Login Details')
    }
})

