// import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Day04L21 from "./solutions/Day04L21";
import Day04L22 from "./solutions/Day04L22";
import Day04L31 from "./solutions/Day04L31";
import Day04L32 from "./solutions/Day04L32";
import Day05L21 from "./solutions/Day05L21";
import Day06 from "./solutions/Day06";

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
      <h3>04-Day:Level-3-1</h3>
      <Day04L31 />
      <h3>04-Day:Level-3-2</h3>
      <Day04L32 />
      <h3>05-Day:Level-2-1</h3>
      <Day05L21 />
      <h3>06-Day</h3>
      <Day06 />
    </div>
  );
}

export default App;
