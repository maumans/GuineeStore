<?php

use App\Http\Controllers\Api\FacebookController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/facebook/ads', [FacebookController::class, 'getAds']);

Route::get('/mau',function (){
    return [
        [
            "id"=>1,
            'nom'=>"PC-Gamer 1",
            "url"=>"https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        ],
        [
            "id"=>2,
            'nom'=>"PC-Gamer 2",
            "url"=>"https://images.unsplash.com/photo-1626218174358-7769486c4b79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        ],
        [
            "id"=>3,
            'nom'=>"PC-Gamer 3",
            "url"=>"https://images.unsplash.com/photo-1603481546238-487240415921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ]
    ];
})->name("api.mau");
