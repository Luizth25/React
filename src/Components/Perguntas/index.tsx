import * as b from "../../Style/botao";
import { Link } from "react-router-dom";
interface TPerguntaProps {
  name: string;
}

export const Pergunta = ({ name }: TPerguntaProps) => {
  return (
    <>
      <h1>Lista de nomes mais estranhos do Brasil</h1>
      <b.Container>
        <p>{name}</p>
      </b.Container>
      <b.Container>
        <Link to="/nomes1">
          <b.Button>Nomes1</b.Button>
        </Link>
        <Link to="/nomes2">
          <b.Button>Nomes2</b.Button>
        </Link>
      </b.Container>
    </>
  );
};
