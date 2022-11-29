import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Topics from "./components/Topics";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        <div className=" ">
          {/* Topics */}
          <Topics />
          {/* Content */}
          <Content />
        </div>
      </div>

      {/* Shorts */}
    </div>
  );
}

export default App;
