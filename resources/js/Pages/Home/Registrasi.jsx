import React from "react";
import Input from "../Components/Input";

const TambahData = () => {
    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Tambahkan data anda
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        action="/tambah-data"
                        method="POST"
                        className="space-y-6"
                    >
                        <Input label="Masukkan Nama" name="name" type="text" />
                        <Input
                            label="Masukkan Email"
                            name="email"
                            type="email"
                        />
                        <Input
                            label="Masukkan Nomor Hp"
                            name="nomor-hp"
                            type="number"
                        />
                        <Input
                            label="Masukkan Jurusan"
                            name="jurusan"
                            type="text"
                        />
                        <Input
                            label="Masukkan Alamat"
                            name="alamat"
                            type="text"
                        />
                        <Input
                            label="Masukkan Password"
                            name="password"
                            type="password"
                        />
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Tambah
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TambahData;
