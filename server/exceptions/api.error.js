export class ApiError extends Error {
    status
    errors

    constructor(status, message, errors = []) {
        super(message)
        this.status = status
        this.errors = errors
    }

    static AccessDenied() {
        return new ApiError(402, 'User access denied');
    }

    static UnauthorizedError() {
        return new ApiError(401, 'User not authorized');
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors)
    }
}