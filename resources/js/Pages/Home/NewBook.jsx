import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";

const NewBook = () => {
    const flash  = usePage().props;
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        title: "",
        author: "",
        year: "",
    });

    function handleChange(e) {
        const title = e.target.id;
        const value = e.target.value;
        setValues({ ...values, [title]: value });
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post("/books", values, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                setValues({ title: "", author: "", year: "" });
            },
            onError: (errors) => {
                setErrors(errors)
            }
        });
    }

    console.log(values);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Add New Book</h1>
            {flash.message && (
                <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
                    role="alert"
                >
                    <span className="block sm:inline">{flash.message}</span>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Title
                    </label>
                    <input
                        id="title"
                        value={values.title}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.title && (
                        <div className="text-red-500 text-xs italic">
                            {errors.title}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="author"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Author
                    </label>
                    <input
                        id="author"
                        value={values.author}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.author && (
                        <div className="text-red-500 text-xs italic">
                            {errors.author}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="year"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Year
                    </label>
                    <input
                        id="year"
                        type="number"
                        value={values.year}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.year && (
                        <div className="text-red-500 text-xs italic">
                            {errors.year}
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add Book
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewBook;
