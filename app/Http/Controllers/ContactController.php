<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{

    // Получение всех контактов
    public function index(Request $request)
    {
        $perPage = 2;
        if ($request->has('per_page')) {
            $perPage = (int) $request->per_page;
        }
        return Contact::orderBy('created_at', 'desc')->paginate($perPage);
    }

    // Получение информации об определенном контакте
    public function show(int $id)
    {
        return Contact::findOrFail($id);
    }

    // Сохранение нового контакта
    public function store(Request $request)
    {
        return Contact::create($request->all());
    }

    // Обновление информации об определенном контакте
    public function update(Request $request)
    {

        $contact = Contact::findOrFail($request->id);

        if ($contact->update($request->all())) {
            return ['result' => 'ok'];
        } else {
            return ['error' => 'Не удалось обновить информацию о контакте!'];
        }

    }

    // Удаление
    public function destroy(int $id)
    {
        return Contact::destroy($id);
    }

    // Поиск
    public function find(Request $request)
    {
        return Contact::where('name', 'like', "%{$request->findStr}%")->get();
    }

}
