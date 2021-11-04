let newForm = document.getElementById('new-user');

getUsers = () => {
    axios.get('http://localhost:4000')
    .then(res => res.data.forEach(user => {
        renderUser(user)
    }))
}

createUser = userdata => {
    axios.post('http://localhost:4000', {...userdata})
    .then(res => renderUser(res.data))
}

renderUser = user => {
    let html = 
    `
        <div class="user-card">
            <h4>Username: ${user.username} </h4>
        </div>
    `
    document.getElementById('user-cont').innerHTML += html
}


submitHandler = e => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    e.preventDefault();
    let userdata = {
        username: username,
        password: password
    }
    if (e.target.id === 'new-user') {
        createUser(userdata)
    }
    console.log(`Username: ${username} | Password: ${password}`);
    
    username.value = '';
    password.value = '';
}



document.addEventListener('DOMContentLoaded', getUsers)
newForm.addEventListener("submit", submitHandler)