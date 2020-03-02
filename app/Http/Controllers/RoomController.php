<?php

namespace App\Http\Controllers;

use App\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * Получение массива всех Номеров
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Room::orderBy('created_at', 'desc')->get();
    }

    /**
     * Создание нового Номера
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newRoom = Room::create($request->all());
        return $newRoom;
    }

    /**
     * Получение определенного Номера
     *
     * @param  integer $id
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        return Room::findOrFail($id);
    }

    /**
     * Обновление информации об определенно номере
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        $room = Room::findOrFail($request->id);

        if ($room->update($request->all())) {
            return ['result' => 'ok'];
        } else {
            return ['error' => 'Не удалось обновить информацию о номере!'];
        }

    }

    /**
     * Удаление Номера
     *
     * @param  integer $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        return Room::destroy($id);
    }

    // Изменение статуса номера
    public function changeStatus(Request $request)
    {

        $room = Room::findOrFail($request->id);

        $room->status = $request->status;

        if ($room->save()) {
            return ['result' => 'ok'];
        } else {
            return ['error' => 'Не удалось обновить статус номера!'];
        }

    }
}
