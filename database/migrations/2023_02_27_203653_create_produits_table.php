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
        Schema::create('produits', function (Blueprint $table) {
            $table->id();
            $table->string("libelle")->nullable();
            $table->longText("description")->nullable();
            $table->string("taille")->nullable();
            $table->string("genre")->nullable();
            $table->string("prix")->nullable();
            $table->string("prixReduction")->nullable();
            $table->string("etat")->nullable();
            $table->string("couleur")->nullable();

            $table->string("marque")->nullable();
            $table->string("transmission")->nullable();
            $table->string("anneeModele")->nullable();
            $table->string("kilometrage")->nullable();
            $table->string("essence")->nullable();
            $table->string("carrosserie")->nullable();
            $table->string("caracteristiques")->nullable();

            $table->string("processeur")->nullable();
            $table->string("ram")->nullable();
            $table->string("stockage")->nullable();
            $table->string("ecran")->nullable();

            $table->string("chambres")->nullable();
            $table->string("salleDeBain")->nullable();
            $table->string("surface")->nullable();



            $table->boolean('status')->default(true)->nullable();
            $table->foreignId('sous_categorie_id')->nullable()->constrained('sous_categories');
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
        Schema::dropIfExists('produits');
    }
};
