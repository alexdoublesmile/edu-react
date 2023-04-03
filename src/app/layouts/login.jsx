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

    return (
        <form action="">
            <TextField
                label="email"
                type="text"
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
        </form>
    );
};

export default Login;
