// code for application
const Circle = require("./lib/Circle");
const Square = require("./lib/Square");
const Triangle = require("./lib/Triangle");
const inquirer = require("inquirer");
const fs = require("fs");
const { error } = require("console");

inquirer.prompt([{
    type: "input",
    message: "Enter up to 3 characters: ",
    name: "text"
},{
    type: "input",
    message: "Enter a color or color code for the text (eg. white OR #FFFFFF): ",
    name: "textColor"
},{
    type: "list",
    message:"Choose one of the following shapes:",
    choices: ["Circle", "Square", "Triangle"],
    name: "shape"
},{
    type: "input",
    message:"Enter a color or color code for the shape (eg. black OR #000000): ",
    name: "shapeColor"
}])
 .then(response=>{
    if (response.shape==="Circle") {
        const circle = new Circle();
        circle.setText(response.text);
        circle.setTextColor(response.textColor);
        circle.setShapeColor(response.shapeColor);
        fs.writeFile("./examples/logo.svg", circle.render(), (err)=>{
            console.log("Generated logo.svg");
        })
    }else if (response.shape===Triangle) {
        const triangle = new Triangle();
        triangle.setText(response.text);
        triangle.setTextColor(response.textColor);
        triangle.setShapeColor(response.shapeColor);
        fs.writeFile("./examples/logo.svg", triangle.render(), (err)=>{
            console.log("Generated logo.svg");
        })
    } else if (response.shape===Square) {
        const square = new Square();
        square.setText(response.text);
        square.setTextColor(response.textColor);
        square.setShapeColor(response.shapeColor);
        fs.writeFile("./examples/logo.svg", square.render(), (err)=>{
            console.log("Generated logo.svg");
        })
    }
});