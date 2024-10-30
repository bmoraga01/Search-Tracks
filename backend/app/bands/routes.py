from flask import Blueprint
from flask_restful import Api
from .views import *

bands_bp = Blueprint('bands', __name__)
api = Api(bands_bp)

api.add_resource(SearchTracksApiView, '/search_tracks')
api.add_resource(AddFavouriteSong, '/favoritos')