const controller = superclass => 
    class extends superclass {
        signup() {}
        signin() {}
        authenticate() {
            if(this.name === 'Szymon' && this.password === 'God') {
                return 'crdetial are valid.';
            } else {
                return 'crdential are not valid.';
            }
        }
}


export default controller;