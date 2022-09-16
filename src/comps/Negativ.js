import classes from './Negativ.module.css';
import React, {useState,useEffect,useHistory,useContext} from 'react';
//comps
import NegativeBox from './NegativeBox'
//ContextProvider
import {AllDataContext} from '../ContextProvider'
import {ChangeAllDataContext} from '../ContextProvider'

function Negativ(props){

        //allData:{data,negative,positiv}
        const allData = useContext(AllDataContext)
        const changeAllData = useContext(ChangeAllDataContext)
    
        //positiv: {positiv1,positiv2 ...}
        const[negativ,setNegativ] = useState(allData.negative)
    
    
        useEffect(()=>{
            changeAllData(prev=>({...prev,negative:negativ}))
        },[negativ])

    return (
        <div className={classes.container}>
            
            <NegativeBox onChange={(e)=>{setNegativ(prev=>({...prev,negativ1:e})) } } punkte={negativ?.negativ1} negativText={"1.  Zusammenarbeit im Projekt/ Teamspirit und Konfliktkultur"} />
            <NegativeBox onChange={(e)=>{setNegativ(prev=>({...prev,negativ2:e})) } } punkte={negativ?.negativ2} negativText={"2.  Zusammenarbeit mit dem Kunden/ Teamspirit und Konfliktkultur"}/>
            <NegativeBox onChange={(e)=>{setNegativ(prev=>({...prev,negativ3:e})) } } punkte={negativ?.negativ3} negativText={"3.  Projektorganisation und Projektmanagement genrell"}/>
            <NegativeBox onChange={(e)=>{setNegativ(prev=>({...prev,negativ4:e})) } } punkte={negativ?.negativ4} negativText={"4.  Projektkommunikation"}/>
            <NegativeBox onChange={(e)=>{setNegativ(prev=>({...prev,negativ5:e})) } } punkte={negativ?.negativ5} negativText={"5.  Ziele und Projektausrichtung"}/>
            <NegativeBox onChange={(e)=>{setNegativ(prev=>({...prev,negativ6:e})) } } punkte={negativ?.negativ6} negativText={"6.  Abläufe, Prozesse und Qualitätssicherungs"}/>
            <NegativeBox onChange={(e)=>{setNegativ(prev=>({...prev,negativ7:e})) } } punkte={negativ?.negativ7} negativText={"7.  Rollen und Aufgabenverteilung"}/>
            <NegativeBox onChange={(e)=>{setNegativ(prev=>({...prev,negativ8:e})) } } punkte={negativ?.negativ8} negativText={"8.  Ressourcen"}/>
            <NegativeBox onChange={(e)=>{setNegativ(prev=>({...prev,negativ9:e})) } } punkte={negativ?.negativ9} negativText={"9.  Führung und Motivation"}/>
            <NegativeBox onChange={(e)=>{setNegativ(prev=>({...prev,negativ10:e})) } } punkte={negativ?.negativ10} negativText={"10. Entwicklungsverständnis und Erstellung Liefergegenstände"}/>

        </div>
    );
}

export default Negativ;