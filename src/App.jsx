import { HomePage, SeasonPage, EpisodesPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/seasons/:id' element={<SeasonPage />} />
        <Route path='/season/:id/episodes' element={<EpisodesPage />} />
      </Routes>
    </BrowserRouter>
  )
}