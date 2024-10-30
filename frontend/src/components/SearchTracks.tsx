import { ChangeEvent, FormEvent, useMemo, useState } from "react"
import { useTracks } from "../hooks/useTracks"
import Spinner from "./Spinner"
import axios from "axios"

export default function SearchTracks() {
    const [track, setTrack] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useTracks()

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setTrack(e.target.value)
    }

    const isValid = useMemo( () => track.length === 0, [track] )

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsLoading(true)

        axios.get(`http://localhost:5000/search_tracks?name=${track}`)
        .then( res => {

            const data = res.data.data
            dispatch({ type: 'search-track', payload: { track, data } })
        } )
        .catch( err => console.log(err) )
        .finally( () => setIsLoading(false) )
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-5">
                <label htmlFor="tracks" className="text-4xl text-blue-600 text-bold text-center">
                    Buscar Banda
                </label>

                <input 
                    id="tracks"
                    name="tracks"
                    type="text"
                    className="w-full bg-white border border-gray-200 p-2"
                    placeholder="Nombre de Banda o Artista"
                    value={track}
                    onChange={handleChange}
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40"
                disabled={isValid}
            >
                { isLoading ? <Spinner /> : 'Buscar Banda' }
            </button>
        </form>
    )
}