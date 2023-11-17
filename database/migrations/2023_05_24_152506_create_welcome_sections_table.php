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
        Schema::create('welcome_sections', function (Blueprint $table) {
            $table->id();
            $table->integer('position')->nullable();
            $table->string('type')->nullable();
            $table->string('titre')->nullable();
            $table->string('voirTout')->nullable();
            $table->string('voirPlus')->nullable();
            $table->string('classe')->nullable();
            $table->integer('limit')->nullable();
            $table->string('divClasse')->nullable();

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
        Schema::dropIfExists('welcome_sections');
    }
};
