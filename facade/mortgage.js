var Mortgage = function(name) {
    this.name = name;
}

Mortgage.prototype = {
    applyFor: function(amount) {
        console.log("name", this.name);
        console.log("amount", amount);
        var result = "approved";
        if(new Bank().verify(this.name, amount)) {
            result = "denied by Bank";
        } else if(new Credit().get(this.name)) {
            result = "denied by Credit Check"
        } else if(new Background().check(this.name)) {
            result = "denied by Background Check";
        }

        return this.name + " has been " + result + " for a " + amount + " mortgage";
    }
}

var Bank = function() {
    this.verify = function(name, amount) {
        if(name === "Joan Templeton" && amount ==="$100,000") {
            return true;
        }
    }
}

var Credit = function() {
    this.get = function(name) {
        return true;
    }
}

var Background = function() {
    this.check = function(name) {
        return true;
    }
}

function run() {
    var mortgage = new Mortgage("Joan Templeton");
    var result = mortgage.applyFor("$100,000");

    console.log(result);
}

run();