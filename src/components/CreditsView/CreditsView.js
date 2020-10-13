import React from 'react';
import CreditItem from './CreditItem';

export default function CreditView(){
    const [list,setList] = React.useState([]);

    React.useEffect(()=>{
        console.log("Entra efecto");
        setList([{numeroFactura:'AX4560100B211',montoPago:'900000',fechaPago:new Date()},
        {numeroFactura:'AX4560100B211',montoPago:'900000',fechaPago:new Date()},
        {numeroFactura:'AX4560100B211',montoPago:'900000',fechaPago:new Date()},
        {numeroFactura:'AX4560100B211',montoPago:'900000',fechaPago:new Date()},
        {numeroFactura:'AX4560100B211',montoPago:'900000',fechaPago:new Date()},
        {numeroFactura:'AX4560100B211',montoPago:'900000',fechaPago:new Date()},
        {numeroFactura:'AX4560100B211',montoPago:'900000',fechaPago:new Date()}
        ]);
    },[]);

    return (<div>
        <div style={{width:'100%',height:'50px',background:'orange',fontWeight:'bold',textAlign:'center',fontSize:'30px',color:'white'}}>
            My Bank
        </div>
        <div style={{width:'100%',height:'calc(100% - 50px )'}}>
            <center style={{height:'100%'}}>
                <div style={{width:'50%',height:'100%',background:'#c5c5c5',overflowY:'auto'}}>
                    {
                        list.map((item,i)=>{
                            return <CreditItem key={"item-"+i} item={item}></CreditItem>;
                        })
                    }
                </div>
            </center>
        </div>
    </div>);
}