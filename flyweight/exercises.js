const implementsInterface = (obj, iface) => {
  for (let method of iface) {
    if (typeof obj[method] !== "function") {
      return false;
    }
  }
  return true;
};


const setFont = ["getFont", "getSize", "display"];

class CharacterStyle {
    constructor(fontName, size) {
        this.fontName = fontName;
        this.size = size;
    }
    getFont() {
        return this.fontName;
    }
    getSize() {
        return this.size;
    }
    display(character) {
        console.log(`${character.getCharacter()} character has Font ${this.fontName} and size ${this.size}`);
    }
}

const characterContext = (character) => ({
    getCharacter() {
        return character;
    }
})

class StyleFactory {
    constructor() {
        this.fontStyles = {};
        this.length = 0;
    }

    getFontStyle(fontName, size) {
        let font = this.fontStyles[fontName];
        if(!font) {
            console.log("fontName", fontName, "size", size);
            font = new CharacterStyle(fontName, size);
            console.log("font", font);
            if(implementsInterface(font, setFont)) {
                this.fontStyles[fontName] = font;
                this.length++;
            } else {
                console.log(
                    `Error: ${fontName} does not implement the CharacterStyle interface.`
                );
                return null;
            }
        }
        return this.fontStyles[fontName] = new CharacterStyle(fontName, size);
    }

    getTotalFontsCount() {
        return this.length;
    }
}

function txtEditor() {
    const fonts = [];
    const characters = [];
    let fontSizes = 0;
    const fontFactory = new StyleFactory();

    function addCharacter(char, fontName, size) {
        const font = fontFactory.getFontStyle(fontName, size);
        if(font) {
            fonts.push(font);
            characters.push(characterContext(char));
            fontSizes++
        }
    }

    addCharacter("r", "Times New Roman", 10);
    addCharacter("b", "News Gothic", 7);
    addCharacter("a", "Courier", 12);
    addCharacter("f", "Lucida", 5);
    addCharacter("g", "Lucida", 6);
    addCharacter("g", "Lucida", 6);
    addCharacter("g", "Lucida", 6);
    addCharacter("g", "Lucida", 6);
    addCharacter("g", "Lucida", 6);


    for(let i =0; i< fontSizes; ++i) {
        fonts[i].display(characters[i]);
    }
    console.log(`Total fonts: ${fontFactory.getTotalFontsCount()}`);
}

txtEditor();