import React from "react"; // Importamos `useState` usando destructuring luego de importar React
import SCGithub from "./github.styled";
function ContadorDeSustancias() {
  const [kilos, setKilos] = useState(0); // Usamos useState para definir un estado para nuestro componente, el primer valor dentro de los corchetes va a ser el `valor` de nuestro estado, el segundo valor va a ser una funcion `seter`, significa que va a actualizar el `valor` de nuestro estado con cualquier cosa que le pasemos, lo que pasemos entre los paréntesis de useState será el valor inicial

  return (
    <SCGithub>
      <div>
        <h1 className="h1-titulo">Kilos de sustancia: {kilos}</h1>{" "}
        {/* Usando llaves podemos meter código javascript dentro de nuestro JSX */}
        <button onClick={() => setKilos(kilos - 1)}> - </button>{" "}
        {/* Disminuimos nuestro estado al hacer click */}
        <button onClick={() => setKilos(kilos + 1)}> + </button>{" "}
        {/* Aumentamos nuestro estado al hacer click */}
      </div>
    </SCGithub>
  );
}

export default ContadorDeSustancias;
