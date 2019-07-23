class Component {
    
    constructor(className, fileName, fullPath, preInstance, params) {
        this.name = className;
        this.fileName = fileName;
        this.fullPath = fullPath;
        this.preInstance = preInstance;
        this.params = params;
        this.missingParams = [];
        this.instance = null;
        this.creationAttempts = 0;
    }

    getName() {
        return this.name;
    }

    getFileName() {
        return this.fileName;
    }

    getFullPath() {
        return this.fullPath;
    }

    getPreInstance() {
        return this.preInstance;
    }

    getParams() {
        return this.params;
    }

    getMissingParams() {
        return this.missingParams;
    }

    setMissingParams(missingParams) {
        this.missingParams = missingParams;
    }

    setInstance(instance) {
        this.instance = instance;
    }

    getInstance() {
        return this.instance;
    }
    
    incrementCreationAttempts() {
        this.creationAttempts++;
    }

    getCreationAttempts() {
        return this.creationAttempts;
    }
}

module.exports = Component;