import { Footer } from "./components/UI/footer/Footer";
import { Header } from "./components/UI/header/Header";
import { Main } from "./components/UI/main/Main";

function App() {
  return (
    <div className="font-vietnam h-dvh overflow-x-hidden scroll-smooth scrollbar-thumb-forest-green scrollbar-thin">
      <div id="inicio" />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
