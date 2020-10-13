import React from 'react';

export default function PayView(){

    const [monto,setMonto] = React.useState(0);
    const [cuenta,setCuenta] = React.useState("");
    const click = ()=>{
        var obj = {montoPago:monto,numeroFactura:cuenta};
        //fetch().then(res => res.text()).then()
        setMonto(0);
        setCuenta("");
    }
    return (
        <div>
        <div style={{width:'100%',height:'50px',background:'orange',fontWeight:'bold',textAlign:'center',fontSize:'30px',color:'white'}}>
            Mi Banco | Pago de factura
        </div>
        <div style={{width:'100%',height:'calc(100% - 50px )'}}>
                <center style={{width:'100%'}}>
                    <div style={{width:'50%'}}>
                            <div style={{width:'100%',height:'10px'}}></div>
                            <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
                                <div style={{width:'50%'}}>
                                    Monto a pagar:
                                </div>
                                <div style={{width:'50%'}}>
                                    <input type="number" value={monto} onChange={(e)=>setMonto(e.target.value)}></input>
                                </div>
                            </div>
                            <div style={{width:'100%',height:'10px'}}></div>
                            <div style={{display:'flex',flexDirection:'row'}}>
                                <div style={{width:'50%'}}>Numero de factura:</div>
                                <div style={{width:'50%'}}><input value={cuenta} onChange={e=> setCuenta(e.target.value)}></input></div>
                            </div>
                            <div style={{width:'100%',height:'10px'}}></div>
                            <div style={{width:'100%'}}>
                                <center><button onClick={click}>Pagar</button></center>
                            </div>
                    </div>
                </center>
        </div>
    </div>
    );
}