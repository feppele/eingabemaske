import classes from './Addbutton.module.css';
import React, {useState,useEffect,useHistory} from 'react';


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import addImg from '../images/more.png'

//props.text
function Addbutton(props){

    return(
         <div onClick={props.onClick} className={classes.button} style={{display: 'flex', gap:'10px',cursor:'pointer'}}> <IconButton style={{height:'20px', width:'20px'}}> <img src={addImg} style={{height:'20px', width:'20px'}}></img></IconButton> <div> {props.text}</div> </div> 

    );
}

export default Addbutton;