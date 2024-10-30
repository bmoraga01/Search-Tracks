import { FC, useRef, useState } from "react"
import { PlayIcon, PauseIcon } from "@heroicons/react/20/solid"

type AudioPlayerProps = {
    url: string
}

const AudioPlayer : FC<AudioPlayerProps> = ({ url }) => {

    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlayPause = () => {
        const audio = audioRef.current

        if( audio ) {
            if( isPlaying ) {
                audio.pause()
            } else {
                audio.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div>
            <audio ref={audioRef} src={url} />
            <button onClick={handlePlayPause}>
                { isPlaying ?
                    <PauseIcon className="h-8 w-8 text-red-600" />
                :
                    <PlayIcon className="h-8 w-8 text-green-500" />
                }
            </button>
        </div>
    )
}

export default AudioPlayer