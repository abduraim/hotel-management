<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->comment('Название комнаты');
            $table->text('lead')->nullable()->comment('Краткое описание');
            $table->mediumText('description')->comment('Описание');
            $table->boolean('status')->default(false)->comment('Вкл./Выкл.');
            $table->unsignedSmallInteger('sort')->default(0)->comment('Сортировка');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rooms');
    }
}
