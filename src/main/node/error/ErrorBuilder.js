class ErrorBuilder {

    static build(source, message, details) {
        let leapError = {
            source: source,
            message: message
        };

        if (details !== undefined) {
            leapError.details = details;
        }
        return leapError;
    }

}

module.exports = ErrorBuilder;