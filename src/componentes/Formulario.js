import React from 'react';
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

    const buscarNoticia = e => {
        e.preventDefault();
        console.log(categoria);
        guardarCategoria(categoria);
    }
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={buscarNoticia}> 
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                    <SelectNoticias />
                    <div className="input-field col-12">
                        <input type="submit" className={`${styles.btn_block} btn-large amber darken-2`}  value="Buscar" />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario