import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Navbar from './components/navbar/Navbar';
import Todos from './components/todos/Todos';
import CreateProduct from './components/products/CreateProduct';
import GetProduct from './components/products/GetProduct';
import { loadUser } from './store/actions/authActions';

import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyle = makeStyles({
  contentStyle: {
    margin: "30px auto"
  }
})

function App() {
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
            <Routes>
              <Route exact path="/" element={<Todos />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/create" element={<CreateProduct />} />
              <Route path="/products" element={<GetProduct />} />
              
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
