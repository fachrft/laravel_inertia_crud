import React, { useState } from "react";
import Button from "../Components/Button";
import { router, usePage } from "@inertiajs/react";

const Index = ({ books }) => {
    function handleDelete(id) {
        router.delete(`/books/${id}`);
    }
    return (
        <div className="">
            <div className="text-center mt-10 text-3xl font-semibold mb-10">
                <h1>Crud Inertia</h1>
            </div>
            <div className="flex justify-center">
                <div className="max-w-screen-lg w-full">
                    <div className="flex justify-between">
                        <Button
                            text="Tambah"
                            bgColor="bg-blue-600"
                            to="/books/create"
                        />
                        <Button
                            text="Logout"
                            bgColor="bg-purple-600"
                            to="/books/create"
                        />
                    </div>
                    <table className="min-w-full table-auto mt-10 border-collapse border border-slate-500">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 border border-slate-300 text-left">
                                    Title
                                </th>
                                <th className="px-4 py-2 border border-slate-300 text-left">
                                    Author
                                </th>
                                <th className="px-4 py-2 border border-slate-300 text-left">
                                    Year
                                </th>
                                <th className="px-4 py-2 border border-slate-300 text-left">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, i) => (
                                <tr
                                    key={i}
                                    className={`${
                                        i % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } hover:bg-gray-100`}
                                >
                                    <td className="px-4 py-2 border border-slate-300">
                                        {book.title}
                                    </td>
                                    <td className="px-4 py-2 border border-slate-300">
                                        {book.author}
                                    </td>
                                    <td className="px-4 py-2 border border-slate-300">
                                        {book.year}
                                    </td>
                                    <td className="px-4 py-2 border border-slate-300">
                                        <div className="flex space-x-2">
                                            <Button
                                                text="Edit"
                                                bgColor="bg-green-500"
                                                to={`/books/edit/${book.id}`}
                                            />
                                            <button
                                                onClick={() =>
                                                    handleDelete(book.id)
                                                }
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Index;
