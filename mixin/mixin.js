import controller from "./controller.mjs";

class authenticate {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
}

class twoFA {
    constructor(name, password, phoneNumber) {
        this.name = name;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }
    sendMessage() {
        return 'message send';
    }

}

class myAuthenticate extends controller(authenticate) {}
class myTwoFA extends controller(twoFA) {}

const Authenticate = new myAuthenticate('Szymon', 'God');
const TwoFA = new myTwoFA();

console.log(Authenticate.authenticate());
console.log(TwoFA.sendMessage());