const CONFIG_FOLDER = "/src/main/resources/";
const CONFIG_FILE = "application-";

class ConfigurationLoader {

    constructor() {
        this.defaultConfiguration = loadDefaultConfiguration();
        this.environmentConfiguration = loadEnvironmentConfiguration();
    }

    load() {
        return Object.assign(this.defaultConfiguration, this.environmentConfiguration);
    }
}

module.exports = ConfigurationLoader;

function resolveEnvironment() {
    const project = process.env.GCLOUD_PROJECT;
    const environment = process.env.ENVIRONMENT;
    return project ? project : environment ? environment : "local";
}

function loadFile(path) {
    try {
        return require(path);
    } catch (e) {
        console.warn("File not loaded: " + path, e);
        return {};
    }
}

function loadDefaultConfiguration() {
    return loadFile(process.cwd() + CONFIG_FOLDER + "application.json");
}

function loadEnvironmentConfiguration() {
    return loadFile(process.cwd() + CONFIG_FOLDER + CONFIG_FILE + resolveEnvironment() + ".json");
}