import Track from "./Track"

export default function Playlist(props){
    return (
        <div className="playlist">
            <div className="info">
                <span className ="status">Paused...</span>
                <p className="title">{props.playlist.name}</p>
            </div>

            <div className="controls">
                <div className="audio">
                    <audio preload="false" controls></audio>
                </div>

                <div className="buttons">
                    <button className="btn">&larr;</button>
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
