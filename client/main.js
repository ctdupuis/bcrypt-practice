let newForm = document.getElementById('new-user');
let clear = document.getElementById('clear');
const baseUrl = `http://localhost:4000`;

getUsers = () => {
    axios.get(baseUrl)
    .then(res => res.data.forEach(user => {
        renderUser(user);
    }))
}

createUser = userdata => {
    axios.post(baseUrl, {...userdata})
    .then(res => renderUser(res.data));
}

loginUser = userdata => {
    axios.post(`${baseUrl}/login`, {...userdata})
    .then(res => console.log(res.data));
}

clearDB = () => {
    axios.get(`${baseUrl}/clear`)
    .then(res => console.log(res.data));
}

renderUser = user => {
    let html = 
    `
        <div class="user-card">
            <h4 id=${user.username}>Username: ${user.username} </h4>
        </div>
    `
    document.getElementById('user-cont').innerHTML += html;
}

removeUser = id => {
    document.getElementById(id).remove();
}


submitHandler = e => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    e.preventDefault();
    let userdata = {
        username: username,
        password: password
    }

    if (e.submitter.id === 'create') {
        createUser(userdata)
    }

    if (e.submitter.id === 'login') {
        loginUser(userdata)
    }
    
    console.log(`Username: ${username} | Password: ${password}`);
    
    username.value = '';
    password.value = '';
}



document.addEventListener('DOMContentLoaded', getUsers);
newForm.addEventListener("submit", submitHandler);
clear.addEventListener("click", clearDB);