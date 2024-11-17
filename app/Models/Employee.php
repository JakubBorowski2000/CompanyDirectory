<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;


    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'personnel';
    public $timestamps = false; // Disables automatic timestamps

    protected $fillable = ['firstName', 'lastName', 'jobTitle', 'email', 'departmentID'];
}
