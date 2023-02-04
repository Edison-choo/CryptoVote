import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages
import PublicVote from './pages/Public/PublicVote';
import Home from './pages/Home';
import Success from './pages/Public/Success';
import Results from './pages/Public/Results';
import AllResults from './pages/Public/AllResults';
import Sessions from './pages/Private/Sessions';
import PrivateVote from './pages/Private/PrivateVote';



function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
