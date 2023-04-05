import React, { useEffect, useState } from "react";
import api from "../../api";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: [],
        license: false
    });
    const [qualities, setQualities] = useState({});
    const [professions, setProfessions] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.professions.fetchAll().then(data => setProfessions(data));
        api.qualities.fetchAll().then(data => setQualities(data));
    }, []);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: { message: "email is required" },
            isEmail: { message: "email is not correct" }
        },
        password: {
            isRequired: { message: "password is required" },
            hasCapital: { message: "password should contain capital symbol" },
            hasDigit: { message: "password should contain digit" },
            hasMinLength: {
                value: "8",
                message: "password should has 8 symbols min length"
            }
        },
        profession: {
            isRequired: { message: "profession is required" }
        },
        license: {
            isRequired: { message: "Confirmation is required for using service" }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        const isValid = validate();
        if (isValid) {
            e.preventDefault();
            console.log("submitted: ", data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <SelectField
                label="Choose your profession"
                onChange={handleChange}
                options={professions}
                defaultOption="Choose..."
                error={errors.profession}
                value={data.profession}
                name={professions}
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                value={data.sex}
                label="Choose your sex"
                name="sex"
                onChange={handleChange}
            />
            <MultiSelectField
                options={qualities}
                label="Choose your qualities"
                onChange={handleChange}
                name="qualities"
                defaultValue={data.qualities}
            />
            <CheckBoxField
                value={data.license}
                name="license"
                onChange={handleChange}
                error={errors.license}
            >
                Confirm <a>license agreement</a>
            </CheckBoxField>
            <button
                type="submit"
                disabled={Object.keys(errors).length !== 0}
                className="btn btn-primary w-100 mx-auto"
            >
                Submit
            </button>
        </form>
    );
};

export default RegisterForm;
