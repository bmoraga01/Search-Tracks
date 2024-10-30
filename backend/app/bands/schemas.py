from marshmallow import fields, validates, ValidationError
from ..ext import marshmallow
from .models import FavouriteSong

class FavouriteSongSchema(marshmallow.SQLAlchemySchema):
    class Meta:
        model = FavouriteSong
    
    id              = marshmallow.auto_field()
    # nombre_banda    = marshmallow.auto_field()
    # cancion_id      = marshmallow.auto_field()
    # usuario         = marshmallow.auto_field()
    # ranking         = marshmallow.auto_field()
    nombre_banda    = fields.Str(required=True)
    cancion_id      = fields.Int(required=True)
    usuario         = fields.Str(required=True)
    ranking         = fields.Decimal(required=True, as_string=True)
    
    @validates('ranking')
    def validate_ranking(self, value):
        if value < 1.0 or value > 5.0 or round(value, 1) != value:
            raise ValidationError("El ranking debe estar entre 1.0 y 5.0 y tener un decimal.")
