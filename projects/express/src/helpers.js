var throwError = function (status, code, message) {
    const error = new Error(message);
    error.name = '';
    error.status = status;
    error.code = code;
    throw error;
}

module.exports = throwError;
