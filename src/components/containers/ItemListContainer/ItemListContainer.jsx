import React from 'react';
import { useState, useParams, useEffect } from 'react';
import { getFireStore } from '../../../services/getFirebase/getFirebase';

import { ItemList } from '../../ItemList/ItemList';

const ItemListContainer = (greeting) => 
{
    const [productos, setProductos] = useState([])
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { idCategory} = useParams();

    const onAdd = (cant) => {
        console.log(cant);
    }
    useEffect(() => {

        const dbQuery = getFireStore()

        dbQuery.collection('items').doc('').get()
        .then(resp => {
            setProductos( resp.docs.maps(item => ({id: item.id, ...item.data()}))
                setItem({id: resp.id, ...resp.data()})
            )})
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
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
            .then(respuesta => 
                {
                    setProductos(respuesta)
                })
                .catch(error => console.log(error))
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





            