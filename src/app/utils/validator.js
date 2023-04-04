function validate(validateMethod, data, config) {
    let isNotValid;
    switch (validateMethod) {
        case "isRequired":
            isNotValid = data.trim() === "";
            break;
        case "isEmail":
            isNotValid = !(/^\S+@\S+\.\S+$/g.test(data));
            break;
        case "hasCapital":
            isNotValid = !(/[A-Z]+/g.test(data));
            break;
        case "hasDigit":
            isNotValid = !(/\d+/g.test(data));
            break;
        case "hasMinLength":
            isNotValid = data.length < config.value;
            break;
        default:
            break;
    }

    if (isNotValid) {
        return config.message;
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

            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}
