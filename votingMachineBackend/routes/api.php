<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\VotingController;
use App\Http\Controllers\AdminController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/admin/login', [AdminController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
Route::middleware('auth:sanctum')->post('/admin/logout', [AdminController::class, 'logout']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/vote', [VotingController::class, 'vote']);
    Route::get('/results', [VotingController::class, 'results']);
});

