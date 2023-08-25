const shapes = require("./shapes");

describe("shapes", () => {
    describe("setTextColor", () => {
        it("textColor", () => {
            const shape = new shapes()
            shape.setTextColor("black")
            expect(shape.textColor).toEqual("black")
        })
    })
    
});