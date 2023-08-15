import React from 'react'
import {Autocomplete, TextField} from "@mui/material";

interface Input{
    Title:string,
    Func:Function,
    Type:string
}


export function Input({Title,Func,Type}:Input) {

    const tob =[
        {
            label:'حقیقی',
            id:1,
        },
        {
            label:'حقوقی',
            id:2,
        },
        ]

    if (Title === "نوع خریدار") {
        return ( 
            <div className='ModalBox__Items'>
            <label htmlFor=''>{Title}:</label>
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={tob}
            sx={{ width: '20rem' }}
            onChange={(e)=>Func(e,Type)}
            renderInput={(params) => <TextField {...params} label="" />}
            />
        </div>
        )
    }
    

  return (
            <div className='ModalBox__Items'>
                <label htmlFor=''>{Title}:</label>
                <TextField sx={{width: '20rem'}} onChange={(e)=>Func(e,Type)}/>
            </div>

  )
}
