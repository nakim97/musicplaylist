import './App.css';
import Playlist from './components/Playlist';
const data = {
  name: "Classic Disney Movie Songs - Top 10",
  songs:[
    {
      songName: "A Whole New World",
      movieTitle:"Aladdin",
      duration: "2:40"
    },
    {
      songName: "Let It Go",
      movieTitle:"Frozen",
      duration: "3:45"
    },
    {
      songName: "Circle of Life",
      movieTitle:"Lion King",
      duration: "4:51"
    },
    {
      songName: "How Far I'll Go",
      movieTitle:"Moana",
      duration: "2:44"
    },
    {
      songName: "I'll Make a Man Out of You",
      movieTitle:"Mulan",
      duration: "3:41"
    },
    {
      songName: "Bare Necessities",
      movieTitle:"The Jungle Book",
      duration: "4:15"
    },
    
  ]
}

function App() {
  return (
    <div className="App">
      <Playlist playlist={data}/>
    </div>
  );
}

export default App;
