<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\UserDetailController;
use App\Http\Controllers\TodoController;

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

 Route::get('/todolist', [TodoController::class, 'todolist']);

Route::post('/postdata',[UserDetailController::class, 'checklogin']);

Route::post('/registration',[UserDetailController::class, 'register']);

Route::post('/addtodo',[TodoController::class, 'addtodo']);

Route::post('/deletetodo',[TodoController::class, 'deletetodo']);

Route::post('/updatetodo',[TodoController::class, 'updatetodo']);

Route::post('/updatetodoentry',[TodoController::class, 'updatetodoentry']);