import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from '../Loader/Loader';



const HomePage = lazy(()=> import('../../pages/HomePage/HomePage'));
const Catalog = lazy(()=> import('../../pages/Catalog/Catalog')) ;
const Favorites = lazy(()=> import('../../pages/Favorites/Favorites'));
import CampelModal from '../CampelModal/CampelModal';
import CampelFeatures from '../CampelFeatures/CampelFeatures';
import CampelReviews from '../CampelReviews/CampelReviews';

const App = ()=> {

  return (
    <>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/catalog" element={<Catalog/>}/>
      <Route path="/catalog/:campelId" element={<CampelModal/>}>
        <Route path="features" element={<CampelFeatures/>}/>
        <Route path="reviews" element={<CampelReviews/>}/>
      </Route>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    </Suspense>
    </>
  )
}

export default App;
