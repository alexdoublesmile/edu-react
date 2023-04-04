import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import api from "../../api";

const RegisterForm = () => {
    const [data, setData] = useState({ email: "", password: "", profession: "" });
    const [errors, setErrors] = useState({});
    const [professions, setProfessions] = useState();

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data);
        });
    }, []);

    const handleChange = ({ target }) => {
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
            <div className="mb-4">
                <label htmlFor="validationCustom04" className="form-label">
                    Profession
                </label>
                <select
                    id="validationCustom04"
                    name="profession"
                    value={data.profession}
                    onChange={handleChange}
                    className="form-select"
                    required
                >
                    <option disabled value="">
                        Choose...
                    </option>
                    {professions && Object.keys(professions).map((professionName) => (
                        <option
                            key={professions[professionName]._id}
                            value={professions[professionName]._id}
                        >
                            {professions[professionName].name}
                        </option>
                    ))}
                </select>
                <div className="invalid-feedback">
                    Please select a valid profession
                </div>
            </div>
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
