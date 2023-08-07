import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './style/common';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Todo from './pages/Todo';
import { useState } from 'react';
import PrivateRoute from './api/PrivateRoute';

function App() {
  const [ isAuth, setIsAuth ] = useState(localStorage.getItem("loginToken") ? true : false);

  return (
    <ThemeProvider theme={theme}>
      <Nav/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/signup" element={<PrivateRoute authenticated={isAuth} path="signup" component={<SignUp/>} />} />
          <Route path="/signin" element={<PrivateRoute authenticated={isAuth} path="signin" component={<SignIn/>} />} />
          <Route path='/todo' element={<PrivateRoute authenticated={isAuth} path="todo" component={<Todo/>} />} />
        </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
