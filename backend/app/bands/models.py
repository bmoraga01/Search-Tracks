from ..db import db, BaseModelMixin
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Integer, DECIMAL

class FavouriteSong(db.Model, BaseModelMixin):
    __tablename__ = 'favourite_song'
    
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True, unique=True)
    nombre_banda: Mapped[str] = mapped_column(String(length=150), nullable=False)
    cancion_id: Mapped[int] = mapped_column(Integer, nullable=False)
    usuario: Mapped[str] = mapped_column(String(length=20), nullable=False)
    ranking: Mapped[float] = mapped_column(DECIMAL(3, 1), nullable=False)
    
    def __init__(self, nombre_banda: str, cancion_id: int, usuario: str, ranking: float):
        self.nombre_banda = nombre_banda
        self.cancion_id = cancion_id
        self.usuario = usuario
        self.ranking = ranking