import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <header className="cabecalho__root">
      <img src="/logo.png" height="32" alt="Logo" />
      <div className="cabecalho__avatar">PH</div>
      <Avatar nome="Pedro Henrique Hauer" />
    </header>
  );
}

export default Cabecalho;