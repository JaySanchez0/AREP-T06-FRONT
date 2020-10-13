import React from 'react';

export default function CreditItem(props){
    return(
        <div style={{width:'99%',height:'100px',border:'1px solid black'}}>
            <b>Numero Factura:</b> {props.item.numeroFactura}
            <br></br>
            <b>Monto a pagar:</b> $ {props.item.montoPago}
            <br></br>
            <b>Fecha de pago: </b> {props.item.fechaPago.toString()}
        </div>
    )
}