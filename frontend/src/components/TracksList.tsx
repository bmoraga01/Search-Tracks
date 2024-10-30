import { formatCurrency, formatDate } from "../helpers"
import { useTracks } from "../hooks/useTracks"
import AudioPlayer from "./AudioPlayer"

export default function TracksList() {

    const { state } = useTracks()
    // const [playingSongId, setPlayingSongId] = useState<number | null>(null)

    // const handlePlay = (songId: number) => {
    //     if(playingSongId === songId) {
    //         setPlayingSongId(null)
    //     } else {
    //         setPlayingSongId(songId)
    //     }
    // }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-white uppercase bg-blue-600 font-bold">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Album
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cancion
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha Lanzamiento
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Precio
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Preview
                        </th>
                    </tr>
                </thead>
                <tbody>
                {/* "preview_url": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/40/64/66/40646668-82fe-e7f4-6e09-1194fb0ced89/mzaf_7480774833552227899.plus.aac.p.m4a" */}
                    { state.data.canciones.map( song => (
                        <tr
                            key={song.cancion_id}
                            className="bg-white border-b hover:bg-gray-50 text-black"
                        >
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                {song.cancion_id}
                            </th>
                            <td className="px-6 py-4">
                                {song.nombre_album}
                            </td>
                            <td className="px-6 py-4">
                                {song.nombre_tema}
                            </td>
                            <td className="px-6 py-4">
                                {formatDate(song.fecha_lanzamiento)}
                            </td>
                            <td className="px-6 py-4 font-bold">
                                {/* {song.precio.valor} {song.precio.moneda} */}
                                {formatCurrency(song.precio.valor)}
                            </td>
                            <td className="flex items-center px-6 py-4">
                                <AudioPlayer
                                    url={song.preview_url}
                                />
                            </td>
                        </tr>
                    ) ) }
                </tbody>
            </table>
        </div>
    )
}