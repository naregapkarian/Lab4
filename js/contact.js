var Contact = /** @class */ (function () {
    function Contact() {
    }
    Contact.prototype.goToHome = function () {
        console.log('from goToHome...');
        window.location.href = 'index.html';
    };
    return Contact;
}());
var contact = new Contact();
