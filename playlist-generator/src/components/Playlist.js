import { useState } from "react"
import Track from "./Track"

export default function Playlist(props){
    const [status, setStatus ] = useState("Paused...")

    const handleOnPlayPauseClick = () => {
        if (status === "Paused..."){
            setStatus("Playing...")
        }else if (status === "Playing...") {
            setStatus("Paused...")
        }
    }
    return (
        <div className="playlist">
            <div className="info">
                <span className ="status">{status}</span>
                <p className="title">{props.playlist.name}</p>
            </div>

            <div className="controls">
                <div className="audio">
                    <audio preload="false" controls></audio>
                </div>

                <div className="buttons">
                    <button className="btn">&larr;</button>
                    <div className="button-play-pause">
                        <span className={status === "Paused..." ? "paused" : "playing"} onClick={handleOnPlayPauseClick}>CLICK</span>
                    </div>
                    <button className="btn">&rarr;</button>
                </div>
            </div>

            <ul className="tracks">
                {props.playlist.songs.map((song,idx) => (
                    <Track song={song} position ={idx + 1} />
                ))}
            </ul>
        </div>
    )
}
