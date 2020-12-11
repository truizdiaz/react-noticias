import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types'

const ListadoNocias = ({ noticias }) => {
    return (
        <div className="row">
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
    );
}

export default ListadoNocias;