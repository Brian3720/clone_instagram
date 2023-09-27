import reactLogo from "./assets/react.svg";
import "./App.css";
import LateralEsquerda from "./Componentes/LateralEsquerda";
import LateralDireita from "./Componentes/LateralDireita";
import ConteudoCentral from "./Componentes/ConteudoCentral";


/* export default App */
export default function App() {
  return (
    <main>

      <LateralEsquerda />
      <LateralDireita />
      <ConteudoCentral />

      <div className="LateralEsquerda"></div>
      <div className="ConteudoCentral">
        <div className="Stories"></div>
      </div>
      <div className="LateralDireita"></div>
    </main>
  );
}
