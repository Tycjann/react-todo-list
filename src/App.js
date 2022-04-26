import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";
import List from "./components/List/List";
import Container from "./components/Container/Container";

function App() {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
}

export default App;