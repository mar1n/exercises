const implementsInterface = (obj, iface) => {
  for (let method of iface) {
    if (typeof obj[method] !== "function") {
      return false;
    }
  }
  return true;
};


const setFont = ["font", "size", "display"];

class CharacterStyle {
    constrcutor(font, size) {
        this.font = font;
        this.size = size;
    }
    font() {
        return this.font;
    }
    size() {
        return this.size;
    }
    display(self, character) {
        console.log(`${character} character has Font ${this.font} and size ${this.size}`);
    }
}