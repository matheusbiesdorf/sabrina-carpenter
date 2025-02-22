const { useState, useEffect } = require("react");

export default function ListaPaises({ register }) {
   const [paises, setPaises] = useState([]);

   useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
         .then((res) => res.json())
         .then((data) => {
            const listaOrdenada = data.sort((a, b) =>
               a.name.common.localeCompare(b.name.common)
            );
            setPaises(listaOrdenada);
         })
         .catch((error) => console.error("Erro ao buscar países:", error));
   }, []);

   return (
      <select {...register("pais")}>
         <option value="">Select a country</option>
         {paises.map((pais) => (
            <option key={pais.cca2} value={pais.name.common}>
               {pais.name.common}
            </option>
         ))}
      </select>
   );
}
