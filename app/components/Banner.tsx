import jeep from "~/img/jeep.jpg";
import TypeIt from "typeit-react";
import { useState } from "react";

export default function Banner() {
  const [state, setState] = useState(true);

  const stopCursor = () => {
    setState(!state);
  };

  return (
    <section
      className={"Banner"}
      style={{
        backgroundImage: `url(${jeep}), linear-gradient(
                to right,
                var(--color-gray-800),
                var(--color-red-600)`,
      }}
    >
      {`${state}`}
      <div>
        <h2>How to get started with React Router ?</h2>
        <TypeIt
          as={"q"}
          options={{
            lifeLike: true,
            waitUntilVisible: true,
            speed: 2,
            cursor: state,
            afterComplete: stopCursor,
          }}
        >
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original.
        </TypeIt>

        <span className={"author"} onClick={stopCursor}>
          Brander
        </span>
      </div>
    </section>
  );
}
