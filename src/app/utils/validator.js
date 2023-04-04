function validate(validateMethod, data, config) {
    switch (validateMethod) {
        case "isRequired":
            if (data.trim() === "") {
                return config.message;
            }
            break;
        case "isEmail":
            if (!(/^\S+@\S+\.\S+$/g.test(data))) {
                return config.message;
            }
            break;
        default:
            break;
    }
}

export function validator(data, config) {
    const errors = {};

    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );

            if (error) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}
