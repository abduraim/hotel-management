<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $fillable = [
        'name', 'lead', 'description', 'status', 'sort'
    ];

    protected $casts = [
        'status' => 'boolean',
    ];
}
