import Home from "./components/Home/Home";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Favorite from "./components/Favorite/Favorite";
import Error404 from "./components/Error404/Error404";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/> 
          <Route path="/favorite" element={<Favorite/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </Container>
    </main>
  );
}

export default App;