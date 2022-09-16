import classes from './Basis.module.css';
import React, {useState,useEffect,useHistory,useContext} from 'react';


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//images
import addImg from '../images/more.png'
import Addbutton from './Addbutton'
//ContextProvider
import {AllDataContext} from '../ContextProvider'
import {ChangeAllDataContext} from '../ContextProvider'


function Basis(props){

    //allData:{data,negative,positiv}
    const allData = useContext(AllDataContext)
    const changeAllData = useContext(ChangeAllDataContext)

    // data: {autor, oe, kunde, secKunde, projekt, sapNummer, geheim, projektstufe, projektphase, dauer, PEP, portfolio1, portfolioEle1 ,portfolio2, portfolioEle2}
    // when Component loads, set data state from allDataContext state
    const [data,setData] = useState(allData?.data) 
    const [portfolioAmount,setPortfolioAmount] = useState(1)

    // change All Data everytime when data state in this component changes
    useEffect(()=>{
        changeAllData(prev => ({...prev, data:data} ) )
    },[data])

    // When back and next click, textFieldAmount is 0. So even if there is a Kommentar, ist closed. 
    // useEffect(()=>{
    //     if(typeof(data)==="undefined") return
    //     setPortfolioAmount(Object.keys(data).length)
    // },[data])

    function addPortfolio(){
        setPortfolioAmount(portfolioAmount+1)
    }

    return (
        <div className={classes.container}>

            <div className={classes.boxHeader}>
                Basisinformationen
            </div>

            <div className={classes.box}>
                <TextField value={data?.autor} onChange={e=>{setData(prev=>({...prev, autor:e.target.value}))}} label="Autor" variant="standard" sx={{width:'100%'}}/>
                <TextField value={data?.kunde} onChange={e=>{setData(prev=>({...prev, kunde:e.target.value}))}} label="Kunde" variant="standard" sx={{width:'100%'}}/>
                <TextField value={data?.projekt} onChange={e=>{setData(prev=>({...prev, projekt:e.target.value}))}} label="Projekt" variant="standard" sx={{width:'100%'}}/>
            </div>

            <div className={classes.box}>
                <TextField value={data?.oe} onChange={e=>{setData(prev=>({...prev, oe:e.target.value}))}} label="OE" variant="standard" sx={{width:'100%'}}/>
                <TextField value={data?.secKunde} onChange={e=>{setData(prev=>({...prev, secKunde:e.target.value}))}} label="2. Kunde" variant="standard" sx={{width:'100%'}}/>
                <TextField value={data?.sapNummer} onChange={e=>{setData(prev=>({...prev, sapNummer:e.target.value}))}} label="SAP Nummer" variant="standard" sx={{width:'100%'}}/>
            </div>

            <div className={classes.boxHeader}>
                Projektinformationen
            </div>

            <div className={classes.box}>
                <TextField value={data?.geheim} onChange={e=>{setData(prev=>({...prev, geheim:e.target.value}))}} label="Geheimhaltungsstufe" variant="standard" sx={{width:'100%'}}/>
                <FormControl variant="standard" fullWidth> <InputLabel>Projektstufe</InputLabel>
                    <Select value={data?.projektstufe} label="Projektstufe" onChange={e=>{setData(prev=>({...prev, projektstufe:e.target.value}))}} >
                        <MenuItem value={"A00"}>A00</MenuItem>
                        <MenuItem value={"A0"}>A0</MenuItem>
                        <MenuItem value={"A"}>A</MenuItem>
                        <MenuItem value={"B"}>B</MenuItem>
                        <MenuItem value={"C"}>C</MenuItem>
                        <MenuItem value={"D"}>D</MenuItem>
                    </Select>
                </FormControl>
                <TextField value={data?.projektphase} onChange={e=>{setData(prev=>({...prev, projektphase:e.target.value}))}} label="Projektphase" variant="standard" sx={{width:'100%'}}/>
            </div>

            <div className={classes.box}>
                <TextField value={data?.dauer} onChange={e=>{setData(prev=>({...prev, dauer:e.target.value}))}} label="Projektdauer" variant="standard" sx={{width:'100%'}}/>
                <TextField value={data?.PEP} onChange={e=>{setData(prev=>({...prev, secKunde:e.target.value}))}} label="PEP Phasen" variant="standard" sx={{width:'100%'}}/>
                <TextField name="HIDDEN" variant="standard" sx={{width:'100%', visibility: 'hidden'}}/>

            </div>

            <div className={classes.boxHeader}>
                Protfolios
            </div>

            <div className={classes.portfolioBox}>

                <div className={classes.portfolio}>
                    <TextField value={ data?.portfolio1 } onChange={e=>{setData(prev=>({...prev, portfolio1: e.target.value   }))}} label={"Portfolio 1" } variant="standard" sx={{width:'100%'}}/>
                    <TextField value={data?.portfolioEle1 } onChange={e=>{setData(prev=>({...prev, portfolioEle1: e.target.value  }))}} label={"Portfolioelement 1" } variant="standard" sx={{width:'100%'}}/>
                </div>

                { portfolioAmount>=2 && <div className={classes.portfolio} >
                    <TextField value={ data?.portfolio2 } onChange={e=>{setData(prev=>({...prev, portfolio2: e.target.value   }))}} label={"Portfolio 2" } variant="standard" sx={{width:'100%'}}/>
                    <TextField value={data?.portfolioEle2 } onChange={e=>{setData(prev=>({...prev, portfolioEle2: e.target.value  }))}} label={"Portfolioelement 2" } variant="standard" sx={{width:'100%'}}/>
                </div>}

                { portfolioAmount>=3 && <div className={classes.portfolio}>
                    <TextField value={ data?.portfolio3 } onChange={e=>{setData(prev=>({...prev, portfolio3: e.target.value   }))}} label={"Portfolio 3" } variant="standard" sx={{width:'100%'}}/>
                    <TextField value={data?.portfolioEle3 } onChange={e=>{setData(prev=>({...prev, portfolioEle3: e.target.value  }))}} label={"Portfolioelement 3" } variant="standard" sx={{width:'100%'}}/>
                </div>}

                { portfolioAmount>=4 && <div className={classes.portfolio}>
                    <TextField value={ data?.portfolio4 } onChange={e=>{setData(prev=>({...prev, portfolio4: e.target.value   }))}} label={"Portfolio 4" } variant="standard" sx={{width:'100%'}}/>
                    <TextField value={data?.portfolioEle4 } onChange={e=>{setData(prev=>({...prev, portfolioEle4: e.target.value  }))}} label={"Portfolioelement 4" } variant="standard" sx={{width:'100%'}}/>
                </div>}

                { portfolioAmount>=5 && <div className={classes.portfolio}>
                    <TextField value={ data?.portfolio5 } onChange={e=>{setData(prev=>({...prev, portfolio5: e.target.value   }))}} label={"Portfolio 5" } variant="standard" sx={{width:'100%'}}/>
                    <TextField value={data?.portfolioEle5 } onChange={e=>{setData(prev=>({...prev, portfolioEle5: e.target.value  }))}} label={"Portfolioelement 5" } variant="standard" sx={{width:'100%'}}/>
                </div>}

                 { portfolioAmount<=4 && <Addbutton onClick={addPortfolio} text={"Portfolio hinzufügen"}/>  }
            
            </div>



        </div>
    );
}

export default Basis;