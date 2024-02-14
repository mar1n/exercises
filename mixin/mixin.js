import authenticateMixin from "./controller.mjs";

class authenticateController extends authenticateMixin(Object) {
    constructor(name, password) {
        super()
        this.name = name;
        this.password = password;
    }
}

class twoFAController extends authenticateMixin(Object) {
    constructor(name, password, phoneNumber) {
        super()
        this.name = name;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
    sendMessage() {
        return 'message send';
    }

}


const Authenticate = new authenticateController('Szymon', 'God');
const TwoFA = new twoFAController();

console.log(Authenticate.authenticate());
console.log(TwoFA.sendMessage());