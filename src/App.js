import "./App.css";
import ListWords from "./components/listWords/ListWords";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import FlippingCards from "./components/flippingCards/FlippingCards";

export default function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <main>
        <section>
          <ListWords></ListWords>
        </section>
        <section>
          <FlippingCards></FlippingCards>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}


