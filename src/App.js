import style from "./app.module.css";
import { Header } from "./components/header/Header";
import { Display } from "./components/display/Display";
import { Calculator } from "./components/calculator/Calculator";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Display />
      <Calculator />
    </div>
  );
}

export default App;
