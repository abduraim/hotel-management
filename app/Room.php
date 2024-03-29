<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Room extends Model
{

    use SoftDeletes;

    protected $fillable = [
        'name', 'lead', 'description', 'status', 'sort'
    ];

    protected $casts = [
        'status' => 'boolean',
    ];
}
