const mediator = {
    message: (actionName) => console.log(actionName),
    addName: function() {
        console.log(this);
        this.message("add Name")
    },
    deleteName: function() {
        this.message("delete Name")
    }
}

mediator.addName();
mediator.deleteName();
