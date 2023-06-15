import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, searchFeed, Navbar, Feed, Searchfeed } from './components';
import Videodetail from './components/Videodetail';
import Channeldetail from './components/Channeldetail';


const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/Video/:id" element={<Videodetail />} />
        <Route path="/channel/:id" element={<Channeldetail />} />
        <Route path="/search/:searchTerm" element={<Searchfeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);
export default App;