<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
{
    DB::table('admins')->truncate(); 

    Admin::create([
        'username' => 'hari', 
        'password' => bcrypt('hari7025'),
    ]);
}
}
