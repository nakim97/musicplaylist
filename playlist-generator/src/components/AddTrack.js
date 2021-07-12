export default function AddTrack(){
    return(
        <div className="add-track-form">
            <h2> Add New Track </h2>

            <div className="form-input">
                <label htmlFor="songName">Song Name </label>
                <input name="songName" type="text" placeholder="song name" />
            </div>

            <div className="form-input">
                <label htmlFor="movieTitle">Movie Title </label>
                <input name="movieTitle" type="text" placeholder="movie title" />
            </div>

            <div className="form-input">
                <label htmlFor="duration">Duration in Seconds </label>
                <input name="duration" type="number"/>
            </div>

            <button className="btn submit">Save</button>
        </div>
    )
}