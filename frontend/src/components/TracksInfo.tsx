import { useTracks } from "../hooks/useTracks";
import InfoDisplay from "./InfoDisplay";

export default function TracksInfo() {

    const { dispatch, state } = useTracks()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col justify-center items-start gap-8">
                <InfoDisplay
                    label="Total Albumes"
                    info={state.data.total_albumes}
                />
                <InfoDisplay
                    label="Total Canciones"
                    info={state.data.total_canciones}
                />
                <InfoDisplay
                    label="Total Canciones"
                    info={state.data.albumes}
                />
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
                <button
                    type="button"
                    className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
                    onClick={() => dispatch({ type: 'reset-app' })}
                >
                    Nueva Busqueda
                </button>
            </div>
        </div>
    )
}