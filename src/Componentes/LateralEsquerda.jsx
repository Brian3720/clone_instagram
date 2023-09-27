import ItemMenuLateralEsquerda from "./LateralEsquerda/ItemMenuLateralEsquerda";
import { AiFillGithub } from "react-icons/ai";

export default function LateralEsquerda() {
  return (
    <div className="LateralEsquerda">
      <div className="LogoLateralEsquerda"></div>

      <div className="menu">
        <ul>
          <ItemMenuLateralEsquerda icone={<AiFillGithub />} texto="home" />
          <ItemMenuLateralEsquerda icone="lupa" texto="Buscar" />
          <ItemMenuLateralEsquerda icone="Caixa" texto="Explorar" />
          <ItemMenuLateralEsquerda icone="interlog" texto="Exemplo" />
          <li>Menu</li>
        </ul>
      </div>
    </div>
  );
}
/* brian matos de lima  */
