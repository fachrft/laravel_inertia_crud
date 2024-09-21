import React, {useState} from "react";
import { usePage, router } from "@inertiajs/react";

const EditBook = ({book}) => {
    const { errors } = usePage().props
    const [values, setValues] = useState({
        title: book.title,
        author: book.author,
        year: book.year
    })

    function handleChange(e) {
        const title = e.target.id
        const value = e.target.value
        setValues({...values, [title]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.put(`/books/${book.id}`, values)
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Edit Book</h1>
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
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    />
                    {errors.title && (
                        <div className="text-red-500 text-xs">
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
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    />
                    {errors.author && (
                        <div className="text-red-500 text-xs">
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
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    />
                    {errors.year && (
                        <div className="text-red-500 text-xs">
                            {errors.year}
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Update Book
                </button>
            </form>
        </div>
    );
};

export default EditBook;
