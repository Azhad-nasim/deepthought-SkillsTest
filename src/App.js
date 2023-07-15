import "./App.css";
import Navbar1 from "./Components/Nav-bar";
import Sidebar from "./Components/Sidebar";
import Notice from "./Components/Notice";
import Content from "./Components/Content";
import Display from "./Components/Display";
import Display2 from "./Components/Display2";

function App() {
  return (
    <div>
      <Navbar1 />
      <Content />
      <Display />
      <Display2 />
      <Sidebar />
      <Notice />
    </div>
  );
}

export default App;
