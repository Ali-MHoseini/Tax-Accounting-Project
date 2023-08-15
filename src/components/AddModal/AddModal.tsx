import React, {ChangeEvent, useState} from 'react';
import {Autocomplete, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import { Input } from '../Input/Input';
import {customerInput} from "../../services/constants/StaticData"

interface addModal {
    CloseModal:React.MouseEventHandler,
    ShowModal:boolean,
    Func:Function
}
interface newCustomer {
    tob:string,
    tinb:string,
    name: string,
    bid:string,
    bpc:string,
    bbc:string
}
const AddModal = ({CloseModal,ShowModal}:addModal)=> {
    const [newCustomer,setnewCustomer] = useState<newCustomer>({
        tob:'',
        tinb:'',
        name: '',
        bid:'',
        bpc:'',
        bbc:''
        })

    const setCustomerInfo = (event:ChangeEvent,Title:string):void=> {
        switch(Title){
            case 'tob':
                setnewCustomer({...newCustomer,tob:(event.target as HTMLSelectElement).innerText})
                break
            case 'tinb':
                setnewCustomer({...newCustomer,tinb:(event.target as HTMLInputElement).value})
                break
            case 'bid':
                setnewCustomer({...newCustomer,bid:(event.target as HTMLInputElement).value})
                break
            case 'bpc':
                setnewCustomer({...newCustomer,bpc:(event.target as HTMLInputElement).value})
                break 
            case 'bbc':
                setnewCustomer({...newCustomer,bbc:(event.target as HTMLInputElement).value})
                break 
            case 'name':
                setnewCustomer({...newCustomer,name:(event.target as HTMLInputElement).value,})
                break 
            default:
                console.log('This is error')
        }
    }
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
                                <Input key={index} Title={inp.name} Type={inp.actName} Func={setCustomerInfo}/>
                            ))
                        }
                    </div>
                    <Button 
                    variant='contained' 
                    className='addButton'
                    onClick={()=>console.log(newCustomer)}>ثبت مشتری</Button>

                </div>

            </div>

        </>
    )
}

export default React.memo(AddModal)