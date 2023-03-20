import { Homepage, Seasonpage, EpisodesPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/seasons/:id' element={<Seasonpage />} />
        <Route path='/season/:id/episodes' element={<EpisodesPage />} />
      </Routes>
    </BrowserRouter>
  )
}