import { Routes, Route } from 'react-router-dom';
import Discover from './pages/Discover';
import TopArtists from './pages/TopArtists';
import TopCharts from './pages/TopCharts';
import AroundYou from './pages/AroundYou';
import ArtistDetails from './pages/ArtistDetails';
import SongDetails from './pages/SongDetails';
import Search from './pages/Search';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/top-artists" element={<TopArtists />} />
        <Route path="/top-charts" element={<TopCharts />} />
        <Route path="/around-you" element={<AroundYou />} />
        <Route path="/artists/:id" element={<ArtistDetails />} />
        <Route path="/songs/:songid" element={<SongDetails />} />
        <Route path="/search/:searchTerm" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
