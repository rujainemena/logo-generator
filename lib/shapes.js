// ES6 constructor
class shape {
    // properties
    constructor() {
        this.text = "";
        this.textColor = "";
        this.shapeColor = "";
    }
    // methods
    setText(text) {
        this.text = text;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    render() {
        return Error("Child must create its own render function.")
    }
};

module.exports = shape 