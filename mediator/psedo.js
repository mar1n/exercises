const txtInputForEnteringName = function(name) {
    list = [];
    list.push(name);
    return list;
}

const addButton = () => {};

const nameList = function displayNames() {
    const showNames = list.show();
    return showNames;
}

const deleteNameButton = function(pname) {
    list.filter((name) => {
        if(name === pname) {
            return true;
        } else {
            return false;
        }
    })
};

const statusMessage = function(action) {
    if(action === "added") {
        return "Name Added"
    } else if(action === "deleted") {
        return "Name Deleted"
    } else {
        return "Input is empty"
    }
}

console.log("script")
const inputName = document.getElementById("name");
console.log("inputName", inputName)