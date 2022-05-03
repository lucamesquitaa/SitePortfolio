import './App.css';
import {Header} from './Components/Header';
import {Home} from './Components/Home';
import {Profile} from './Components/Profile';
import {BackgroundImage} from './Components/BackgroundImage';
import {Projetos} from './Components/Projetos';

export function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Profile/>
    <BackgroundImage/>
    <Projetos/>
    </>
  );
}

