import React, { useState } from "react";

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
            <div>
                <label htmlFor="email">E-mail</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
            </div>
        </form>
    );
};

export default Login;
