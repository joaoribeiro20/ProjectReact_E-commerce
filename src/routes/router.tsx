import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/home/Home';
import StoreAreaMain from '../Pages/store/StoreAreaMain';
import PageMainLogin from '../Pages/login/PageMainLogin';
/* import ErrorPage from './componets/errorPage.js'; */



function router() {
  return  (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Login' element={<PageMainLogin />}/>
          <Route path='/Loja' element={<StoreAreaMain />}/>
          {/* <Route errorElement={<ErrorPage />}/> */}
        </Routes>
      </Router>
    </>
      
  );
}

export default router