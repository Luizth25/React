interface Nome {
  titulo: string;
  lista: Array<string>;
  // lista: string[]
}
interface ILinhaProps {
  linha: string;
}
const ComponenteLinha = ({ linha }: ILinhaProps) => {
  return (
    <li>
      <p>{linha}</p>
    </li>
  );
};

const Nomes1 = ({ titulo, lista }: Nome) => {
  return (
    <>
      <h1>{titulo}</h1>
      <ul>
        {lista.map((item) => (
          <ComponenteLinha linha={item}></ComponenteLinha>
        ))}
      </ul>
    </>
  );
};
export default Nomes1;
