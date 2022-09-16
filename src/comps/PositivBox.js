import classes from './PositivBox.module.css';
import React, {useState,useEffect,useHistory,useContext} from 'react';
//MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//images
import deleteImg from '../images/x-mark.png'
//comps
import Addbutton from './Addbutton'
//ContextProvider
import {AllDataContext} from '../ContextProvider'
import {ChangeAllDataContext} from '../ContextProvider'

function PositivBox(props){


    // kommentare: {kommentar1,kommentar2,kommentar3,kommentar4,kommentar5}
    const [kommentare,setKommentare] = useState(props.kommentare)
    const [textFieldAmount,setTextFieldAmount] = useState(0)

    useEffect(()=>{
        if(typeof(kommentare)==="undefined") return
        props.onChange(kommentare)
    },[kommentare])

    // When back and next click, textFieldAmount is 0. So even if there is a Kommentar, ist closed. 
    useEffect(()=>{
        if(typeof(kommentare)==="undefined") return
        setTextFieldAmount(Object.keys(kommentare).length)
    },[kommentare])

    return (
        <div className={classes.box}>
            <div className={classes.boxHeading}>
                {props.positivText}
            </div>

            {/* <div style={{display: "flex", alignItems: "flex-end"}}>
                <TextField value={kommentare?.kommentar1} onChange={e=>{setKommentare(prev=>({...prev, kommentar1: e.target.value   }))}}  label="1. Kommentar" variant="standard" sx={{width:'100%'}}/>   
                <IconButton style={{height:'30px', width:'30px'}}> <img src={deleteImg} style={{height:'20px', width:'20px'}}></img></IconButton>
            </div> */}


            { textFieldAmount>=1 && <TextField value={kommentare?.kommentar1} onChange={e=>{setKommentare(prev=>({...prev, kommentar1: e.target.value   }))}}  label="1. Kommentar" variant="standard" sx={{width:'100%'}}/>   }
            { textFieldAmount>=2 && <TextField value={kommentare?.kommentar2} onChange={e=>{setKommentare(prev=>({...prev, kommentar2: e.target.value   }))}}  label="2. Kommentar" variant="standard" sx={{width:'100%'}}/>   }
            { textFieldAmount>=3 && <TextField value={kommentare?.kommentar3} onChange={e=>{setKommentare(prev=>({...prev, kommentar3: e.target.value   }))}}  label="3. Kommentar" variant="standard" sx={{width:'100%'}}/>   }
            { textFieldAmount>=4 && <TextField value={kommentare?.kommentar4} onChange={e=>{setKommentare(prev=>({...prev, kommentar4: e.target.value   }))}}  label="4. Kommentar" variant="standard" sx={{width:'100%'}}/>   }
            { textFieldAmount>=5 && <TextField value={kommentare?.kommentar5} onChange={e=>{setKommentare(prev=>({...prev, kommentar5: e.target.value   }))}}  label="5. Kommentar" variant="standard" sx={{width:'100%'}}/>   }

            <div style={{marginTop:'25px'}}>
            { textFieldAmount<=4 && <Addbutton onClick={()=>{setTextFieldAmount(textFieldAmount+1)}} text={"Kommentar hinzufügen"}/>  }
            </div>
        </div>
    );
}

export default PositivBox;