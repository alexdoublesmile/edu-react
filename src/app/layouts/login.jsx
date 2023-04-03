import React, { useState } from "react";
import TextField from "../components/users/textField";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = ({ target }) => {
        setForm((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted: ", form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="email"
                name="email"
                value={form.email}
                onChange={handleChange}
            />
            <TextField
                label="password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Login;
