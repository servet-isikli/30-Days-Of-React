// import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Day04L21 from "./solutions/Day04L21";
import Day04L22 from "./solutions/Day04L22";



function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <h2>04-Day: Exercises: Components - Solutions</h2>
      <h3>04-Day:Level-2-1</h3>
      <Day04L21 />
      <h3>04-Day:Level-2-2</h3>
      <Day04L22 />
    </div>
  );
}

export default App;
