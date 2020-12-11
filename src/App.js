import React, { Fragment, useState, useEffect } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import ListadoNoticias from './componentes/ListadoNoticias';

function App() {

  const [ categoria, guardarCategoria ] = useState('');
  const [ noticias, guardarNoticias ] = useState([]);

  useEffect(() =>{
    const consultarAPI = async () => {
      const URL = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=588731edf7b04824ac9df4e3016d0d76`
      const respuesta = await fetch(URL);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }

    consultarAPI();


  }, [categoria])

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>

    </Fragment>
  );
}

export default App;
