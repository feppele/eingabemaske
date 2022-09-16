import classes from './NegativeBox.module.css';
import React, {useState,useEffect,useHistory} from 'react';
//MUI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//comps
import Addbutton from './Addbutton'
//images
import arrowImg from '../images/arrow.png'


function NegativeBox(props){

    //punkte: {punkt1,punkt2,punkt3,punkt4,punkt5}
    //punkt1: {kommentar, maßnahme}
    const [punkte,setPunkte] = useState(props.punkte)
    const [textFieldAmount,setTextFieldAmount] = useState(0)

    useEffect(()=>{
        if(typeof(punkte)==="undefined") return
        props.onChange(punkte)
    },[punkte])

    // When back and next click, textFieldAmount is 0. So even if there is a Kommentar, ist closed. 
    useEffect(()=>{
        if(typeof(punkte)==="undefined") return
        setTextFieldAmount(Object.keys(punkte).length)
    },[punkte])

                

    return (
        <div className={classes.box}>
            <div className={classes.boxHeading}>
                {props.negativText}
            </div>

            { textFieldAmount>=1 && 
                <div className={classes.row}>
                    <TextField value={punkte?.punkt1?.kommentar} onChange={e=>{setPunkte(prev=>({...prev, punkt1: {...prev?.punkt1, kommentar: e.target.value }   }))}}  label="1. Kommentar" variant="standard" sx={{width:'100%'}}/>   
                    <img src={arrowImg} className={classes.arrow}></img>
                    <TextField value={punkte?.punkt1?.maßnahme} onChange={e=>{setPunkte(prev=>({...prev, punkt1: {...prev?.punkt1, maßnahme: e.target.value }   }))}}  label="1. Maßnahme" variant="standard" sx={{width:'100%'}}/>   
                </div>
            }
            { textFieldAmount>=2 && 
                <div className={classes.row}>
                    <TextField value={punkte?.punkt2?.kommentar} onChange={e=>{setPunkte(prev=>({...prev, punkt2: {...prev?.punkt2, kommentar: e.target.value }   }))}}  label="2. Kommentar" variant="standard" sx={{width:'100%'}}/>   
                    <img src={arrowImg} className={classes.arrow}></img>
                    <TextField value={punkte?.punkt2?.maßnahme} onChange={e=>{setPunkte(prev=>({...prev, punkt2: {...prev?.punkt2, maßnahme: e.target.value }   }))}}  label="2. Maßnahme" variant="standard" sx={{width:'100%'}}/>   
                </div>
            }
            { textFieldAmount>=3 && 
                <div className={classes.row}>
                    <TextField value={punkte?.punkt3?.kommentar} onChange={e=>{setPunkte(prev=>({...prev, punkt3: {...prev?.punkt3, kommentar: e.target.value }   }))}}  label="3. Kommentar" variant="standard" sx={{width:'100%'}}/>   
                    <img className={classes.arrow} src={arrowImg} ></img>
                    <TextField value={punkte?.punkt3?.maßnahme} onChange={e=>{setPunkte(prev=>({...prev, punkt3: {...prev?.punkt3, maßnahme: e.target.value }   }))}}  label="3. Maßnahme" variant="standard" sx={{width:'100%'}}/>   
                </div>
            }
            { textFieldAmount>=4 && 
                <div className={classes.row}>
                    <TextField value={punkte?.punkt4?.kommentar} onChange={e=>{setPunkte(prev=>({...prev, punkt4: {...prev?.punkt4, kommentar: e.target.value }   }))}}  label="4. Kommentar" variant="standard" sx={{width:'100%'}}/>   
                    <img src={arrowImg} className={classes.arrow}></img>
                    <TextField value={punkte?.punkt4?.maßnahme} onChange={e=>{setPunkte(prev=>({...prev, punkt4: {...prev?.punkt4, maßnahme: e.target.value }   }))}}  label="4. Maßnahme" variant="standard" sx={{width:'100%'}}/>   
                </div>
            }
            { textFieldAmount>=5 && 
                <div className={classes.row}>
                    <TextField value={punkte?.punkt5?.kommentar} onChange={e=>{setPunkte(prev=>({...prev, punkt5: {...prev?.punkt5, kommentar: e.target.value }   }))}}  label="5. Kommentar" variant="standard" sx={{width:'100%'}}/>   
                    <img src={arrowImg} className={classes.arrow}></img>
                    <TextField value={punkte?.punkt5?.maßnahme} onChange={e=>{setPunkte(prev=>({...prev, punkt5: {...prev?.punkt5, maßnahme: e.target.value }   }))}}  label="5. Maßnahme" variant="standard" sx={{width:'100%'}}/>   
                </div>
            }

          
            <div style={{marginTop:'25px'}}>
            { textFieldAmount<=4 && <Addbutton onClick={()=>{setTextFieldAmount(textFieldAmount+1)}} text={"Kommentar hinzufügen"}/>  }
            </div>
        </div>
    );
}

export default NegativeBox;