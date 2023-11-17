<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class FacebookController extends Controller
{
    public function getAds()
    {
        $client= new Client;

        $response = $client->get('https://graph.facebook.com/v16.0/me/ads', [
            'query' => [
                'access_token' => 'votre_token_d_accès',
            ],
        ]);

        $ads = json_decode($response->getBody()->getContents());

        return $ads;
    }
}
