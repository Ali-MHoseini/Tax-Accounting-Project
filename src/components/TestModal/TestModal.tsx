import React, {ChangeEvent, useState} from 'react';
import Tooltip from "@mui/material/Tooltip";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CloseIcon from "@mui/icons-material/Close";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import ListSubheader from '@mui/material/ListSubheader';

interface Test {
    CloseModal:React.MouseEventHandler,
    ShowModal:boolean,
    ShowExcel:boolean,
    SetForm:React.MouseEventHandler,
    SetExcel:React.MouseEventHandler,
    SetNotExcel:React.MouseEventHandler
}
const TestModal = ({CloseModal,ShowModal,ShowExcel,SetForm,SetExcel,SetNotExcel}:Test)=> {

    const [showFileName,setFileName] = useState('')
    const [billKind,setBillKind] = useState(0)
    const [billModel,setBillModel] = useState(0)
    const setFile = (e:ChangeEvent):void => {
        const files = (e.target as HTMLInputElement).files;
        if (files && files[0]) {
            const file = files[0];
            setFileName(file.name)
        }
    }
    const handleModel = (e:any):void => setBillModel(e.target.value)
    const handleKind = (e:any):void => setBillKind(e.target.value)

    return (
        <>
                <div className='BackDrop' style={{display:ShowModal?'block':'none'}}/>
                <div className='ModalBox' style={{transform:ShowModal === true?'translateX(0)':'translateX(-100vw)',
                    opacity:ShowModal === true?'1':'0'}} >
                    <Tooltip title='بازگشت به صفخه قبل '>
                        <KeyboardBackspaceIcon
                            style={{color:'blue',cursor:'pointer',position:'absolute',left:'10px',top:'10px'}}
                            onClick={SetNotExcel}/>
                    </Tooltip>
                    <CloseIcon
                        onClick={CloseModal}
                        style={{color:'red',cursor:'pointer',position:'absolute',right:'10px',top:'10px'}}/>
                    <h2>افزودن صورتحساب جدید</h2>
                    <div className='ModalBoxes'>
                        {
                            ShowExcel?<div className='ModalBox__Child dragModal' style={{width:'100%'}}>
                                <input type="file" multiple draggable
                                       onChange={(e)=>setFile(e)} />
                                <p style={{textAlign:'center'}}>فایل اکسل مورد نظر را به روی این بخش بکشید یا بر روی اینجا کلیک کنید</p>
                                <p>{showFileName}</p>
                            </div>:
                                <div style={{display:'flex',flexDirection:'column',gap:'3rem',width:'100%'}}>
                                <div style={{display:'flex',gap:'3rem',width:'100%'}}>
                                    <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
                                        <InputLabel id="demo1">نوع صورتحساب</InputLabel>
                                        <Select
                                            id="demo1"
                                            value={billKind}
                                            style={{width:'9rem',color:'black'}}
                                            onChange={(e)=>handleKind(e)}
                                        >
                                            <MenuItem value={1}>فروش</MenuItem>
                                            <MenuItem value={2}>اصلاحی</MenuItem>
                                            <MenuItem value={3}>ابطالی</MenuItem>
                                            <MenuItem value={4}>برگشت از فروش</MenuItem>
                                        </Select>
                                    </div>
                                    <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
                                        <InputLabel id="demo-simple-select-label">الگوی صورتحساب</InputLabel>
                                        <Select
                                            id="demo1"
                                            value={billModel}
                                            style={{width:'9rem',color:'black'}}
                                            onChange={(e)=>handleModel(e)}
                                        >
                                            <ListSubheader>نوع اول</ListSubheader>
                                                <MenuItem className='selOpt' value={11}>فروش</MenuItem>
                                                <MenuItem className='selOpt' value={12}>ارزی</MenuItem>
                                                <MenuItem className='selOpt' value={13}>طلا</MenuItem>
                                                <MenuItem className='selOpt' value={14}>پیمانکاری</MenuItem>
                                                <MenuItem className='selOpt' value={15}>قبوض</MenuItem>
                                                <MenuItem className='selOpt' value={16}>بلیط</MenuItem>
                                                <MenuItem className='selOpt' value={17}>پیمانکاری</MenuItem>
                                            <ListSubheader>نوع دوم</ListSubheader>
                                                <MenuItem value={21}>فروش</MenuItem>
                                                <MenuItem value={22}>طلا</MenuItem>

                                        </Select>
                                    </div>
                                </div>
                                <div className='ModalBoxes'>
                                    <div className='ModalBox__Child' onClick={SetExcel}>افزودن فایل Excel</div>
                                    <div className='ModalBox__Child' onClick={SetForm}>افزودن از طریق فرم</div>
                                </div>
                            </div>
                        }
                    </div>
                </div>

        </>
    )
}

export default React.memo(TestModal)