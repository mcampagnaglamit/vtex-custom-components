import React, { useMemo, useContext, Fragment } from 'react';
import {ProductContext} from 'vtex.product-context';
import styles from './styles.css';

interface propsI {
    isShow:     boolean,
    showName:   boolean,
    showDesc:   boolean,
    showPrice:  boolean,
    showLink:   boolean
}

const Attributes = (props:propsI)=> {
    const { product } = useContext(ProductContext)
    const isShow = props.isShow
    const {productName, description, link} = product;
    const price = product.priceRange.listPrice ? product.priceRange.listPrice.highPrice ? product.priceRange.listPrice.highPrice : 'Sin precio' : 'Sin precio';

    console.log(product)
    
    return useMemo(()=>{        
        return(
            <>
                {   
                    isShow ?
                        <ul className={styles.AttributesContainer}>
                            { props.showName? 
                                <li className={styles.AttributesItem}><b>Nombre:</b> {productName}</li> 
                              : <Fragment /> 
                            }
                            { props.showDesc? 
                                <li className={styles.AttributesItem}><b>Descripcion:</b> {description}</li> 
                              : <Fragment /> 
                            }
                            { props.showPrice? 
                                <li className={styles.AttributesItem}><b>Precio:</b> {price} </li> 
                              : <Fragment /> 
                            }
                            { props.showLink? 
                                <li className={styles.AttributesItem}>
                                    <a className={styles.AttributesButton} href={link}>Link a producto</a>
                                </li> 
                              : <Fragment /> 
                            }
                        </ul>
                    : 
                        <Fragment />
                }
            </>
        )
    }, [props])
}

// Schema
Attributes.schema = {
    title: "Atributos Render",
    type: "object",
    properties:{
        isShow:{
            title: "Mostrar componente?",
            type: "boolean",
            default: true
        },
        showName: {
            title: "Mostrar nombre?",
            type: "boolean",
            default: true
        },
        showDesc: {
            title: "Mostrar descripción?",
            type: "boolean",
            default: true
        },
        showPrice: {
            title: "Mostrar precio?",
            type: "boolean",
            default: true
        },
        showLink: {
            title: "Mostrar link?",
            type: "boolean",
            default: true
        }
    }
}

// Default props
Attributes.defaultProps = {
    isShow:     true,
    showName:   true,
    showDesc:   true,
    showPrice:  true,
    showLink:   true
}

export default Attributes;