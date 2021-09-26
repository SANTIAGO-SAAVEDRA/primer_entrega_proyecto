import React from 'react';
import { useState, useParams, useEffect } from 'react';
import getFetch from '../../../util/Mock';
import ReactDOM from 'react-dom';
import { ItemList } from '../../ItemList/ItemList';

const ItemListContainer = (greeting) => 
{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory} = useParams();

    useEffect(() => {

        if(idCategory){
            getFetch
            .then(respuesta => 
                {
                    setProductos(respuesta.filter(prods => prods.category ===idCategory))
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        } else {
            getFetch
            .then(res => 
                {
                    setProductos(res)
                    setLoading(false)
                })
            }
            }, [idCategory])
    console.log(productos);

    console.log(idCategory);
    return (
        <div>
            {   loading ?
                <h2>Cargando, por favor espere...</h2>
                :
                    <ItemList productos={productos}/>
            }

        </div>
    )
}
            export default ItemListContainer 





            