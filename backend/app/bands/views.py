from flask import request
from flask_restful import Resource
import requests as req
from ..ext import cache

from ..common.generate_response import generate_response
from ..common.http_code import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND, HTTP_500_INTERNAL_SERVER_ERROR
from ..common.functions import normalize_text
from .schemas import FavouriteSongSchema
from .models import FavouriteSong

class SearchTracksApiView(Resource):
    @cache.cached(timeout=3600, query_string=True)
    def get(self):
        name = request.args.get('name')
        
        if not name:
            return generate_response(message="El parametro 'name' es obligatorio", status=HTTP_400_BAD_REQUEST)
        
        try:
            response = req.get(f'https://itunes.apple.com/search?term={name}')
            response.raise_for_status()
            data = response.json()
            results = data['results'][:25]
            
            
            
            songs = [
                {
                    'cancion_id': x.get('trackId', 0),
                    'nombre_album': x.get('collectionName', 'No encontrado'),
                    'nombre_tema': x.get('trackName','No encontrado'),
                    'preview_url' : x.get('previewUrl', 'http://127.0.0.1'),
                    'fecha_lanzamiento': x.get('releaseDate', 'No encontrado'),
                    'precio' : {
                        'valor': x.get('trackPrice', 'No encontrado'),
                        'moneda': x.get('currency', 'No encontrado')
                    }
                }
                for x in results if normalize_text(x.get('artistName', '')) == normalize_text(name)
            ]
            
            albumes = []
            [ albumes.append(x['nombre_album']) for x in songs if not x['nombre_album'] in albumes ]
            
            
            formato = {
                'total_albumes': len(albumes),
                'total_canciones': len(songs),
                'albumes': albumes,
                'canciones': songs
            }
            
            return generate_response(data=formato, status=HTTP_200_OK)
        except req.exceptions.HTTPError as err:
            return generate_response(message="Error al consultar la API de iTunes", status=HTTP_500_INTERNAL_SERVER_ERROR)
        except req.exceptions.RequestException as e:
            return generate_response(message="Error en la solicitud externa", status=HTTP_500_INTERNAL_SERVER_ERROR)

class AddFavouriteSong(Resource):
    
    def post(self):
        
        data = request.get_json()
        validate = FavouriteSongSchema().validate(data)
        
        if validate:
            return generate_response(message=validate, status=HTTP_400_BAD_REQUEST)
        
        favourite = FavouriteSong(**data)
        favourite.save()
        
        response = FavouriteSongSchema().dump(favourite)
        
        return generate_response(message='Agregado a favoritos', data=response, status=HTTP_201_CREATED)