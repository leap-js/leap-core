const expect = require("chai").expect;

const EnvironmentLoader = require("../../../main/node/environment/EnvironmentLoader");

describe("ConfigurationLoader", () => {

    it("should load only default configuration", () => {

        const configurationLoader = new EnvironmentLoader();

        const configuration = configurationLoader.load();

        expect("test").to.be.equal(configuration.applicationName);
    });

    it("should load and merge default and environment configuration", () => {

        process.env.ENVIRONMENT = "environment";

        const configurationLoader = new EnvironmentLoader();

        const configuration = configurationLoader.load();

        expect("test-environment").to.be.equal(configuration.applicationName);
        expect("testhost").to.be.equal(configuration.database.host);
    })
});