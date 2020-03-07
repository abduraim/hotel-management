<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;

class ContactController extends Controller
{

    // Получение всех контактов
    public function index(Request $request)
    {

        // Если запрос пришел с поисковой строкой
        if ($request->has('needleStr')) {

            $needleStr = $request->needleStr;

            $needleArr = explode(' ', $needleStr);

            $query = '';

            foreach ($needleArr as $index => $needleItemStr) {

                $appendix = '';
                if ($index > 0) {
                    $appendix = 'AND';
                }
                $query .= $appendix . " (name LIKE '%{$needleItemStr}%' OR surname LIKE '%{$needleItemStr}%') ";

            }

            $preResult = Contact::whereRaw($query);


        } else {

            $preResult = Contact::orderBy('created_at', 'desc');

        }

        // Получаем пагинированный результат
        $result = $preResult->paginate(10);

        // Проверяем, запрос на превышение текущей страницы из кол-ва возможных,
        // если она больше, то просто сбасываем ее на первую
        if ($result->lastPage() < $request->page) {
            Paginator::currentPageResolver(function () {
                return 1;
            });
            $result = $preResult->paginate(10);
        }

        // Возвращаем результат
        return $result;

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

}
