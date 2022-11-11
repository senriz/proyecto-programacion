const register = document.getElementById("register");
const login = document.getElementById("login");

// register
const addUser = (e) => {
    e.preventDefault();

    const username = e.target[0].value;
    const password = e.target[1].value;
    e.target[0].value = "";
    e.target[1].value = "";

    if (username === "" || password === "") {
        alert("You must add a username and a password");
        return;
    }

    if (localStorage.getItem(username) != null) {
        alert("User already exists");
        return;
    }

    localStorage.setItem(username, password);
        alert("User added succesfully");

};

// login
const setUser = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    e.target[0].value = "";
    e.target[1].value = "";

    if (username === "" || password === "") {
        alert("You must add a username and a password");
        return;
    }

    if (localStorage.getItem(username) === password) {
        alert("Logged in succesfully");
    } else {
        alert ('Username or password incorrect')
    }
};

register.addEventListener("submit", addUser);
login.addEventListener("submit", setUser);