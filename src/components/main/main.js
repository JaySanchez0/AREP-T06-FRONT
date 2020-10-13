import React from 'react';
import { Link } from 'react-router-dom';

export default function main(){
    document.title="Mi Banco";
    return(
        <div>
        <div style={{width:'100%',height:'50px',background:'orange',fontWeight:'bold',textAlign:'center',fontSize:'30px',color:'white'}}>
            Mi Banco
        </div>
        <div style={{width:'100%',height:'calc(100% - 50px )'}}>
            <center style={{width:'100%',height:'100%'}}>
                <div style={{width:'50%',height:'100%'}}>
                    <br></br><br></br>
                    <Link style={{color:'black',background:'orange',padding:'10px 50px'}} to="/register-pay"> Ver Registros de pagos</Link>
                    <br></br><br></br><br></br><br></br>
                    <Link style={{color:'black',background:'orange',padding:'10px 80px'}} to="/pay"> Pagar factura</Link>
                </div>
            </center>
        </div>
    </div>
    );
}