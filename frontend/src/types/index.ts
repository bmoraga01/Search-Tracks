
export type Song = {
    cancion_id: number
    nombre_album: string
    nombre_tema: string
    preview_url: string
    fecha_lanzamiento: string
    precio: {
        valor: number,
        moneda: string
    }

}

export type Albumes = string[]

export type TrackData = {
    total_albumes: number
    total_canciones: number
    albumes: Albumes
    canciones: Song[]
}
