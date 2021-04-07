class Contact {
    
    constructor () {

    }

    goToHome() {
        console.log('from goToHome...');
        window.location.href = 'index.html';
    }
}

const contact = new Contact();