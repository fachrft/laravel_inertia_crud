<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Inertia\Inertia;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Book $book)
    {
        return Inertia::render('Home/Index', [
            'books' => $book::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Home/NewBook');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate([
            'title' => 'required|max:255',
            'author' => 'required|max:255',
            'year' => 'required|integer|min:1900|max:'. (date('Y') + 1),
        ]);

        Book::create($validate);
        return redirect()->route('show.books')->with('message', 'Book Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $book = Book::findOrFail($id);
        return Inertia::render('Home/EditBook', [
            'book' => $book,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $book = Book::findOrFail($id);
        $validate = $request->validate([
            'title' => 'required|max:255',
            'author' => 'required|max:255',
            'year' => 'required|integer|min:1900|max:'. (date('Y') + 1),
        ]);
        $book->update($validate);
        return redirect()->route('show.books')->with('message', 'Book updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $book = Book::findOrFail($id);
        $book->delete();
        return redirect()->route('show.books')->with('message', 'Book Deleted successfully');
    }
}
