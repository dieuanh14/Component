import logo from "./logo.svg";
import "./App.css";
import Header from "./demo/header";
import Nav from "./demo/nav";
import Item from "./demo/item";
import Footer from "./demo/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Item />
      <Footer/>
    </div>
  );
}

export default App;
