<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', 'HomeController@index');
Route::post('/auth/login', 'UserController@login');
Route::get('/quotations/printQuotation/{id}', 'QuotationController@printQuotation');
Auth::routes();
?>