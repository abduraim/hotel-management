<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoomResource;
use App\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * Получение массива всех Номеров
     *
     * @return \Illuminate\Http\Response
     */
    public function getList(Request $request)
    {
        return RoomResource::collection(Room::orderBy('created_at', 'desc')->paginate(10));
    }

    /**
     * Получение определенного Номера
     *
     * @param  integer $id
     * @return \Illuminate\Http\Response
     */
    public function getItem(Request $request)
    {
        return new RoomResource(Room::findOrFail($request->id));
    }

    /**
     * Создание нового Номера
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function save(Request $request)
    {
        $newRoom = Room::create($request->all());
        return new RoomResource($newRoom);
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
    public function delete(Request $request)
    {
        return Room::destroy($request->id);
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
