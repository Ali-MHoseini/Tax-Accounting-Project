import React, {useState} from 'react';
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import {CustomersRowBill} from "../CustomersRowBill/CustomersRowBill";
import AddModal from "../AddModal/AddModal";
import {Autocomplete, TextField} from "@mui/material";
import {SearchBox} from "../SearchBox/SearchBox";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const ShowCustomer = ()=> {
    const [showPrevCustomer, setPrevCustomer] = useState<boolean>(false)
    const customerModel = [{label:'حقیقی',id:'1'},
        {label:'حقوقی',id:'2'},
        {label:'مشارکت مدنی',id:'3'},
        {label:'اتباع غیر ایرانی',id:'4'},
        {label:'مصرف کننده نهایی',id:'5'}]
    return(
        <>
            {showPrevCustomer?<div className='table__boxCus'>

                <div style={{display:'flex',alignItems: 'center',justifyContent:'space-between',width:'100%'}}>
                    <SearchBox SearchPlaceholder='جستجو بر اساس نام مشتری...'/>

                    <Button
                        variant='outlined'
                        color='info'
                        onClick={()=>setPrevCustomer(false)}>
                        + افزودن مشتری جدید
                    </Button>
                </div>
                <table>
                    <thead>
                    <th>نوع خریدار</th>
                    <th>شناسه اقتصادی</th>
                    <th>توضیحات خریدار</th>
                    <th>شناسه ملی</th>
                    <th>کد شعبه</th>
                    <th>کد پستی</th>
                    </thead>
                    <tbody>
                    <CustomersRowBill Title='حقوقی'/>
                    <CustomersRowBill Title='حقوقی'/>
                    <CustomersRowBill Title='حقیقی'/>
                    <CustomersRowBill Title='حقوقی'/>
                    <CustomersRowBill Title='حقیقی'/>
                    <CustomersRowBill Title='حقیقی'/>
                    </tbody>
                </table>
                <Pagination count={10} color="primary" className='pagination'/>
            </div>:
                <div>
                    <div className='addNew__Customer'>
                        <Button
                            style={{position: 'absolute',top:'0',left: '0'}}
                            variant='outlined'
                            color='info'
                            onClick={()=>setPrevCustomer(true)}>+ افزودن از مشتری های سابق</Button>
                        <div className='ModalBox__Items'>
                            <label>نوع خریدار:</label>
                            <Autocomplete
                                disablePortal
                                options={customerModel}
                                sx={{ width: '20rem',justifySelf: 'start'}}
                                renderInput={(params) =>
                                    <TextField {...params} placeholder=" حقوقی..."/>}
                            />
                        </div>
                        <div className='ModalBox__Items'>
                            <label htmlFor=''>شناسه اقتصادی خریدار:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label >نام خریدار:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>

                        <div className='ModalBox__Items'>
                            <label htmlFor=''>شناسه ملی/کد ملی: </label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label htmlFor=''>کد پستی:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label >شماره گذرنامه خریدار:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label >کد شعبه خریدار:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                    </div>
                </div>
            }
        </>

    )
}