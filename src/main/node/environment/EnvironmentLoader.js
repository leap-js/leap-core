const CONFIG_FOLDER = "/src/main/resources/";
const CONFIG_FILE = "application-";

class EnvironmentLoader {

    constructor(root) {
        this.root = process.cwd();
        if (root) {
            this.root = root;
        }
        this.defaultConfiguration = loadDefaultConfiguration(this.root);
        this.environmentConfiguration = loadEnvironmentConfiguration(this.root);
    }

    load() {
        return Object.assign(this.defaultConfiguration, this.environmentConfiguration);
    }
}

module.exports = EnvironmentLoader;

function resolveEnvironment() {
    const project = process.env.GCLOUD_PROJECT;
    const environment = process.env.ENVIRONMENT;
    return project ? project : environment ? environment : "local";
}

function loadFile(path) {
    try {
        return require(path);
    } catch (e) {
        console.warn("Configuration file not found: " + path);
        return {};
    }
}

function loadDefaultConfiguration(root) {
    return loadFile(root + CONFIG_FOLDER + "application.json");
}

function loadEnvironmentConfiguration(root) {
    return loadFile(root + CONFIG_FOLDER + CONFIG_FILE + resolveEnvironment() + ".json");
}