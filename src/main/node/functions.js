"use strict";

const EnvironmentLoader = require("./environment/EnvironmentLoader");
const ErrorBuilder = require("./error/ErrorBuilder");
const Component = require("./domain/Component");

exports = module.exports;

exports.ErrorBuilder = ErrorBuilder;
exports.EnvironmentLoader = EnvironmentLoader;
exports.Component = Component;