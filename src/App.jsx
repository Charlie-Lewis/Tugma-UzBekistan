import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import { useContext } from 'react';
import { Context } from './context/Context';

const App = () => {
  const { routePages, adminPage, isAdmin } = useContext(Context);

  return (
    <>
      <Nav />

      <main>
        <Routes>
          {!!routePages &&
            routePages.map((el) => (
              <Route key={el.id} path={el.path} element={el.element} />
            ))}

          {!!adminPage &&
            isAdmin &&
            adminPage.map((el) => (
              <Route key={el.id} path={el.path} element={el.element} />
            ))}
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
