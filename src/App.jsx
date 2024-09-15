import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { objetivos, dofa } from "./utils/data";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Curso React.js" />
      <Main objetivos={objetivos} dofa={dofa} />
      <Footer />
    </div>
  );
}

export default App
