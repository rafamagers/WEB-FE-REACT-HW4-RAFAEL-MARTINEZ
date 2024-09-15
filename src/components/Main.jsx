import Diagnostico from "./Diagnostico";
import Identidad from "./Identidad";
import Objetivos from "./Objetivos";

function Main({ dofa, objetivos}) {
  return (
    <main className="flex-grow px-12 p-10 text-2xl">
      <section>
        <h1 className="text-3xl text-center">
          Introducción
        </h1>
        <br></br>
        <p>
          League of Cards es una tienda virtual inspirada en el videojuego League of Legends donde
          se busca captar la atención de los jugadores como potenciales clientes. El producto que 
          vendemos son cartas personalizadas de personajes presentes en el vieojuego, dando la opción
          al cliente de elegir sus personajes favoritos, marcos, iconos, etc. Incluso tenemos disponibles
          diferentes tamaños a escoger dependiendo de los gustos. Contamos tambien con diferentes relieves y además la opción
          de enviar la carta como regalo para una persona
        </p>
      </section>
      <br></br>
      <ol className="list-decimal list-inside ">

        <li className="my-4">Diagnóstico Actual
          <Diagnostico dofa={dofa}/>
        </li>
        <li className="my-4">Identidad Organizacional
          <Identidad/>
        </li>
        <li className="my-4">Objetivos Estratégicos
          <Objetivos objetivos={objetivos}/>
        </li>
      </ol>

    </main>
  );
}

export default Main;
