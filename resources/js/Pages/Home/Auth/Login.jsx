import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/react";

const Login = () => {
    // State untuk menyimpan input user dan errors
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    // Fungsi untuk meng-handle perubahan pada input form
    const handleChange = (e) => {
        const { id, value } = e.target;
        setValues({ ...values, [id]: value });
    };

    // Fungsi untuk submit form login
    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post("/login", values, {
            onError: (error) => {
                setErrors(error);
            },
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 shadow-md rounded">
                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs italic">{errors.email}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs italic">{errors.password}</p>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button>
                    </div>
                    <div className="mt-4">
                        <Link className="text-purple-700 hover:underline">Dont have account</Link>
                    </div>

                    {errors.general && (
                        <p className="text-red-500 text-xs italic mt-4">{errors.general}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
