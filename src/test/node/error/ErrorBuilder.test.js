const expect = require("chai").expect;
const ErrorBuilder = require("../../../main/node/error/ErrorBuilder");

describe("ExceptionBuilder", () => {

    it("should return Error without details", () => {

        let error = ErrorBuilder.build("SOURCE", "Message");

        expect(error).to.not.be.null;
        expect(error.source).to.be.equals("SOURCE");
        expect(error.message).to.be.equals("Message");
        expect(error.details).to.be.undefined;
    });

    it("should return Error with details", () => {

        let error = ErrorBuilder.build("SOURCE", "Message", {field: "some field"});

        expect(error).to.not.be.null;
        expect(error.source).to.be.equals("SOURCE");
        expect(error.message).to.be.equals("Message");
        expect(error.details).to.not.be.undefined;
        expect(error.details.field).to.be.equals("some field");
    });
});