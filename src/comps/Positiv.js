import classes from './Positiv.module.css';
import React, {useState,useEffect,useHistory,useContext} from 'react';
//MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//comps
import PositivBox from './PositivBox'
//ContextProvider
import {AllDataContext} from '../ContextProvider'
import {ChangeAllDataContext} from '../ContextProvider'

function Positiv(props){

    //allData:{data,negative,positiv}
    const allData = useContext(AllDataContext)
    const changeAllData = useContext(ChangeAllDataContext)

    //positiv: {positiv1,positiv2 ...}
    const[positiv,setPositiv] = useState(allData.positiv)


    useEffect(()=>{
        changeAllData(prev=>({...prev,positiv:positiv}))
    },[positiv])

    return (
        <div className={classes.container}>
            
            <div className={classes.spalte}>
                <PositivBox onChange={(e)=>{setPositiv(prev=>({...prev,positiv1:e})) } } kommentare={positiv?.positiv1} positivText={"1.  Zusammenarbeit im Projekt/ Teamspirit und Konfliktkultur"}/>
                <PositivBox onChange={(e)=>{setPositiv(prev=>({...prev,positiv2:e})) } }kommentare={positiv?.positiv2} positivText={"2.  Zusammenarbeit mit dem Kunden/ Teamspirit und Konfliktkultur"}/>
                <PositivBox onChange={(e)=>{setPositiv(prev=>({...prev,positiv3:e})) } }kommentare={positiv?.positiv3} positivText={"3.  Projektorganisation und Projektmanagement genrell"}/>
                <PositivBox onChange={(e)=>{setPositiv(prev=>({...prev,positiv4:e})) } }kommentare={positiv?.positiv4} positivText={"4.  Projektkommunikation"}/>
                <PositivBox onChange={(e)=>{setPositiv(prev=>({...prev,positiv5:e})) } }kommentare={positiv?.positiv5} positivText={"5.  Ziele und Projektausrichtung"}/>
            </div>

            <div className={classes.spalte}>
                <PositivBox onChange={(e)=>{setPositiv(prev=>({...prev,positiv6:e})) } }kommentare={positiv?.positiv6} positivText={"6.  Abläufe, Prozesse und Qualitätssicherungs"}/>
                <PositivBox onChange={(e)=>{setPositiv(prev=>({...prev,positiv7:e})) } }kommentare={positiv?.positiv7} positivText={"7.  Rollen und Aufgabenverteilung"}/>
                <PositivBox onChange={(e)=>{setPositiv(prev=>({...prev,positiv8:e})) } }kommentare={positiv?.positiv8} positivText={"8.  Ressourcen"}/>
                <PositivBox onChange={(e)=>{setPositiv(prev=>({...prev,positiv9:e})) } }kommentare={positiv?.positiv9} positivText={"9.  Führung und Motivation"}/>
                <PositivBox onChange={(e)=>{setPositiv(prev=>({...prev,positiv10:e})) } }kommentare={positiv?.positiv10} positivText={"10.  Entwicklungsverständnis und Erstellung Liefergegenstände"}/>

            </div>
            

        </div>
    );
}

export default Positiv;