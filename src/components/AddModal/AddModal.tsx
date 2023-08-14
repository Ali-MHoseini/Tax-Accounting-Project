import React, {useState} from 'react';
import {Autocomplete, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import { Input } from '../Input/Input';
import {customerInput} from "../../services/constants/StaticData"

interface addModal {
    CloseModal:React.MouseEventHandler,
    ShowModal:boolean,
}
const AddModal = ({CloseModal,ShowModal}:addModal)=> {
    const customerModel = [{label:'مالیاتی',id:'1'},{label:'غیرمالیاتی',id:'2'}]
    return (
        <>
            <div className="BackDrop" style={{display:ShowModal?'block':'none'}}/>
            <div className='AddModalBox'
                 style={{transform:ShowModal === true?'translateX(0)':'translateX(-100vw)',
                     opacity:ShowModal === true?'1':'0'}} >
                <CloseIcon
                    onClick={CloseModal}
                    style={{color:'red',cursor:'pointer',position:'absolute',left:'10px',top:'10px'}}/>
                <h2>افزودن مشتری جدید</h2>

                <div className='AddModalBoxes'>
                    <div className='Cus__inps'>
                        {
                            customerInput && customerInput.map((inp,index) => (
                                <Input key={index} Title={inp} />
                            ))
                        }
                    </div>
                    <Button variant='contained' className='addButton'>ثبت مشتری</Button>

                </div>

            </div>

        </>
    )
}

export default React.memo(AddModal)