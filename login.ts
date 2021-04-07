class Login {
    
    constructor () {

    }

    login() {
        const usernameInput = document.getElementById('username');        
        const passwordInput = document.getElementById('password');
        let username = usernameInput.value;
        let password = passwordInput.value;
        if(username === 'napkar' && password === 'nizzlefish') {
            this.goToHome();
        } else {
            this.displayError();
        }
    }

    displayError() {
        const errorBox = document.getElementById('error-box');
        errorBox.innerHTML = 'User Not Found!';
            errorBox.innerHTML
        );
        errorBox.style = "display: block;";
        const interval = setInterval(() => {
            errorBox.style = "display: none;";
            clearInterval(interval);
        }, 5000);
    }

    goToHome () {
        window.location.href = 'index.html'
    }
}

const login = new Login();