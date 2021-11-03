import React, { useMemo, useContext, Fragment } from 'react';
import {ProductContext} from 'vtex.product-context';

interface propsI {
    isShow: boolean
}

const Attributes = (props:propsI)=> {
    const context = useContext(ProductContext)
    const isShow = props.isShow
    const {productName, description, link} = context.product;
    const price = context.product.priceRange.listPrice ? context.product.priceRange.listPrice.highPrice ? context.product.priceRange.listPrice.highPrice : 'Sin precio' : 'Sin precio';

    console.log(":::::::")
    console.log(props)
    return(
        <>
            {   
                isShow ?
                    <ul>
                        <li><b>Nombre:</b> {productName}</li>
                        <li><b>Descripcion:</b> {description}</li>
                        <li><b>Precio:</b> {price} </li>
                        <li><a href={link}>Link a producto</a></li>
                    </ul>
                : 
                    <Fragment />
            }
        </>
    )
}

// Schema
Attributes.schema = {
    title: "Atributos Render",
    type: "object",
    properties:{
        isShow:{
            "title": "Mostrar componente?",
            "type": "boolean",
            "default": true
        }
    }
}

// Default props
Attributes.defaultProps = {
    isShow: true
}

export default Attributes;