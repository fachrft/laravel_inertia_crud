<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\UserController;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [BookController::class, 'index'])->name('show.books');
Route::get('/books/create', [BookController::class, 'create'])->name('books.create');
Route::post('/books', [BookController::class, 'store'])->name('books.store');

Route::get('/books/edit/{id}', [BookController::class, 'edit'])->name('books.edit');
Route::put('/books/{id}', [BookController::class, 'update'])->name('books.update');

Route::delete('/books/{id}', [BookController::class, 'destroy'])->name('books.delete');


Route::get('/login', function () {
    return Inertia::render('Home/Auth/Login');
});


