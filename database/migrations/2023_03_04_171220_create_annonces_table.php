<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('annonces', function (Blueprint $table) {
            $table->id();
            $table->dateTimeTz("date")->nullable();
            $table->string("reference")->nullable();
            $table->string("adresse")->nullable();
            $table->longText("description")->nullable();
            $table->integer("nombreVues")->nullable();
            $table->integer("vueLaDerniereFois")->nullable();
            $table->foreignId('annonciateur_id')->nullable()->constrained('users');
            $table->foreignId('produit_id')->nullable()->constrained('produits');
            $table->foreignId('type_annonce_id')->nullable()->constrained('type_annonces');
            $table->boolean('status')->default(true)->nullable();
            $table->integer('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('annonces');
    }
};
