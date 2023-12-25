import React, { useState } from "react";

import { AddCategory, GifGrid } from "./components";

export function GifExpertApp() {
  const [categorias, setCategorias] = useState(["One piece"]);
  const onAddCategory = (newCategory) => {
    // agregar categoria
    if(categorias.includes(newCategory)) return;
    const nuevacat = [newCategory, ...categorias];
    setCategorias(nuevacat);
  };
  return (
    <>
      {/* Titulo */}
      <h1>GifExpert App</h1>
      {/* Input */}
      <AddCategory 
      // setCategories={setCategorias} 
      onNewCategory = {onAddCategory}
      />
      <ul>
        {categorias.map((categoria) => (
          <GifGrid key={categoria} nombre={categoria} />
        ))}
      </ul>
      {/* Listado de Gift */}

      {/* Gift Item */}
    </>
  );
}
