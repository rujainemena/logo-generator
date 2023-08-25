const shapes = require("./shapes");

describe("shapes", () => {
    // testing the text input
    describe("setText", () => {
        it("text", () => {
            const shape = new shapes()
            shape.setText("RMB")
            expect(shape.text).toEqual("RMB")
        })
    })
    // testing the text color
    describe("setTextColor", () => {
        it("textColor", () => {
            const shape = new shapes()
            shape.setTextColor("white")
            expect(shape.textColor).toEqual("white")
        })
    })
    // testing the shape color
    describe("setShapeColor", () => {
        it("shapeColor", () => {
            const shape = new shapes()
            shape.setShapeColor("black")
            expect(shape.shapeColor).toEqual("black")
        })
    })
});