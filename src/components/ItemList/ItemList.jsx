import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({ productos }) => {
        return (

                <React.Fragment>
                        {productos.map(producto => <Item producto={producto} />
                        )}
                </React.Fragment>
        )
}
