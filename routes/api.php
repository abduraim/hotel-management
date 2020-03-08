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


    Route::get('/', 'RoomController@index');
    Route::get('/{id}', 'RoomController@show');
    Route::post('/', 'RoomController@store');
    Route::post('/update', 'RoomController@update');
    Route::delete('/{id}', 'RoomController@destroy');
    Route::post('/change-status', 'RoomController@changeStatus');


});

Route::middleware('auth:api')->prefix('reservations')->group(function () {


    Route::get('/', 'ReservationController@index');


});

Route::middleware('auth:api')->prefix('contacts')->group(function () {


    Route::get('/', 'ContactController@index');
    Route::get('/{id}', 'ContactController@show');
    Route::post('/', 'ContactController@store');
    Route::post('/get-paginated', 'ContactController@getPaginated');
    Route::post('/update', 'ContactController@update');
    Route::delete('/{id}', 'ContactController@destroy');


});
