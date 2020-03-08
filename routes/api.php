<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->prefix('rooms')->group(function () {

    Route::post('/get-list', 'RoomController@getList');
    Route::post('/get-item', 'RoomController@getItem');
    Route::post('/save', 'RoomController@save');
    Route::post('/update', 'RoomController@update');
    Route::post('/delete', 'RoomController@delete');
    Route::post('/change-status', 'RoomController@changeStatus');

});

Route::middleware('auth:api')->prefix('reservations')->group(function () {


    Route::get('/', 'ReservationController@index');


});

Route::middleware('auth:api')->prefix('contacts')->group(function () {
    Route::post('/get-list', 'ContactController@getList');
    Route::post('/get-item', 'ContactController@getItem');
    Route::post('/save', 'ContactController@save');
    Route::post('/update', 'ContactController@update');
    Route::post('/delete', 'ContactController@delete');
});
