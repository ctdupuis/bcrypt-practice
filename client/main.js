getUsers = () => {
    axios.get('http://localhost:4000')
    .then(res => renderUsers(res.data))
}

renderUsers = users => {
    return users.map(user => {
        let html = 
        `
            <div class="user-card">
                <h4>Username: ${user.username} </h4>
            </div>
        `
        document.getElementById('user-cont').innerHTML += html
    })
}

document.addEventListener('DOMContentLoaded', getUsers)

let form = document.querySelector('form');

submitHandler = e => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    e.preventDefault();
    let userdata = {
        username: username,
        password: password
    }
    console.log(`Username: ${username} | Password: ${password}`);
    
    username.value = '';
    password.value = '';
}

form.addEventListener("submit", submitHandler)