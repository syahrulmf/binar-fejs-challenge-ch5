import FormSearch from './components/Form/FormSearch';
import Search from './pages/Search/Search';
import Detail from './pages/Detail/Detail';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<FormSearch />} />
        <Route path='search' element={<Search />} />
        <Route path='detail/:id' element={<Detail />} />
        <Route path='*' element={<div className="text-center"><h1>Error: Halaman tidak tersedia</h1></div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
