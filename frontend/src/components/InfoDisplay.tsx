import { Albumes } from "../types"

type InfoDisplayProps = {
    label: string
    info: number | string | Albumes
}

export default function InfoDisplay({ label, info } : InfoDisplayProps) {

    const generate_text = () => {

        if( Array.isArray(info) ) {
            return info.join(', ')
        }
        return info
    }

    return (
        <p className="text-2lg text-blue-600 font-bold">
            { label }{': '}
            <span className="font-black text-black">{ generate_text() }</span>
        </p>
    )
}