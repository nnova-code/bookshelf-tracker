import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/Header.jsx';
import BookList from './components/BookList.jsx';
import CreateBook from './components/CreateBook.jsx';
import CreateUser from './components/CreateUser.jsx';
import EditBook from './components/EditBook.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <Router>
    <Container>
    <Header />
    <br />
      <BookList />
      <EditBook />
      <CreateBook />
      <CreateUser />
      <Footer />
    </Container>
    </Router>
  );
}

export default App;
