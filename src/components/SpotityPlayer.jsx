import { MyPlaylist } from "./components/MyPlaylist"
export const App = () => <MyPlaylist/>

export const SpotifyPlayer = (url, favorite) => {
    const urlSong =  "https://open.spotify.com/embed/album/" + url;
    const favoriteSong = favorite;

   if (favorite) {
       return (
    <div className="d-flex my-5" width="1000px">
        <iframe src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write; 
        encrypted-media; fullscreen; picture-in-picture"></iframe>
        <button className="btn">
        <i class="bi bi-star-fill"></i>
    </button>
    </div>
    )
}
   else {
       return (
       <div className="d-flex my-5" width="1000px">
        <iframe src={urlSong} width="100%" height="80" allow="autoplay; clipboard-write; 
        encrypted-media; fullscreen; picture-in-picture"></iframe>
        <button className="btn">
            <i className="bi bi-star"></i>
            </button>
    </div>
    
        )
    }
}