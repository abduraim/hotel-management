<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Http\Resources\ReservationResource;
use App\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function index()
    {
        return Reservation::orderBy('created_at', 'desc')->get();
    }

    // Возвращает список бронирований по определенным параметрам
    public function get(Request $request)
    {

        $reservations = Reservation::query();

        if ($request->filled('room_id')) {
            $reservations = $reservations->where('room_id', $request->room_id);
        }

        if ($request->filled('month')) {
            $reservations
                ->whereMonth('starts_at', '<=', $request->month)
                ->whereMonth('ends_at', '>=', $request->month);
        }

        return $reservations->get();

    }

    // Сохранение бронирования
    public function save(Request $request) {

        // Проверяем на ошибки нужные данные для бронирования
//        if (!$request->filled('room_id')) {
//            abort(400, 'Выберите номер для бронирования!');
//        }
//
//        if (!$request->filled('name') && !$request->filled('surname')) {
//            abort(400, 'Укажите хотя бы Имя, либо Фамилию');
//        }
//
//        if (!$request->filled('period.dateRange.start.date') && !$request->filled('period.dateRange.end.date')) {
//            abort(400, 'Укажите даты бронирования!');
//        }
//
//        if ($request['period']['dateRange']['start']['date'] ==  $request['period']['dateRange']['end']['date']) {
//            abort(400, 'Дата начала и окончания не должны быть одинаковыми!');
//        }


        // Приводим даты начала и окончания к нужному виду
        $startsAt = $request['period']['dateRange']['start']['date'] . ' 12:00';
        $endsAt = $request['period']['dateRange']['end']['date'] . ' 12:00';

        // Проверяем не забронирован ли номер на эти даты
        $existedReservations = Reservation::where([
            ['room_id', '=', $request->room_id],
            ['ends_at', '>', $startsAt],
            ['starts_at', '<', $endsAt],
            ])->get();

        // Если бронирование уже существует, то возвращаем ошибку
        if (count($existedReservations)) {
            abort(400, 'В данном номере, в указанный период уже существует бронирование!');
        }

        // Создаем Контакт
        $contact = Contact::create($request->all());

        // Создаем бронирование
        $newReservation = new Reservation();
        $newReservation->room_id = $request->room_id;
        $newReservation->contact_id = $contact->id;
        $newReservation->starts_at = $startsAt;
        $newReservation->ends_at = $endsAt;
        $newReservation->save();

        return $newReservation;

    }
}
