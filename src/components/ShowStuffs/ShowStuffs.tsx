import React, {useReducer, useState} from 'react';
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import {StuffRowBill} from "../StuffRowBill/StuffRowBill";
import {TextField} from "@mui/material";
import {SearchBox} from "../SearchBox/SearchBox";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {DatePicker} from "react-advance-jalaali-datepicker";

// interface Data {
//     am: number,
//     mu:number,
//     sstt:string,
//     sstid:number,
//     nw:number,
//     fee:number,
// }

export const ShowStuffs = ()=> {

    const [showPrevProducts, setPrevProducts] = useState<boolean>(false)
    const DatePickerInput = (props:any) => {
        return <input className="DatePicker1" {...props} />;
    }
    const change = (unix:any, formatted:any) => {
        console.log(unix); // returns timestamp of the selected value, for example.
        console.log(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
    }

    return(
        <>
            {
                showPrevProducts?<div className='table__boxStuff'>
                    <div style={{display:'flex',alignItems: 'center',justifyContent:'space-between',width:'100%'}}>
                        <SearchBox SearchPlaceholder='جستجو بر اساس نام کالا...'/>
                        <Button variant='outlined' color='info' onClick={()=>setPrevProducts(false)}>+ افزودن کالا</Button>
                    </div>
                    <table>
                        <thead>
                        <th>انتخاب</th>
                        <th>شناسه کالا</th>
                        <th>نام کالا</th>
                        <th>تعداد</th>
                        <th>واحد اندازه گیری</th>
                        <th>قیمت</th>
                        </thead>
                        <tbody>
                        <StuffRowBill />
                        <StuffRowBill />
                        <StuffRowBill />
                        <StuffRowBill />
                        <StuffRowBill />
                        <StuffRowBill />
                        </tbody>
                    </table>
                    <Pagination count={10} color="primary" className='pagination'/>
                </div>:<div>
                    <div className='addNew__Product'>
                        <Button
                            style={{position: 'absolute',top:'0',left: '0'}}
                            variant='outlined'
                            color='info'
                            onClick={()=>setPrevProducts(true)}>+ افزودن از کالا های سابق</Button>

                        <div className='ModalBox__Items'>
                            <label>شناسه کالا:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label htmlFor=''>نام کالا:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>

                        <div className='ModalBox__Items'>
                            <label htmlFor=''>واحد اندازه گیری:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label htmlFor=''>تعداد/مقدار:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label>مبلغ واحد:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label>مبلغ تخفیف:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label>نرخ مالیات بر ارزش افزوده:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label >مبلغ مالیات برا ارزش افزوده:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label >موضوع سایر مالیات و عوارض:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label >نرخ سایر مالیات و عوارض:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label >مبلغ سایر مالیات و عوارض:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label >موضوع سایر وجوه قانونی:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label >نرخ سایر وجوه قانونی:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                        <div className='ModalBox__Items'>
                            <label >مبلغ سایر وجوه قانونی:</label>
                            <TextField sx={{width: '20rem'}} />
                        </div>
                    </div>
                    {/*<div style={{display:'flex',alignItems:'center',gap:"0.25rem",margin:'1rem',*/}
                    {/*    color:'blueviolet',cursor:'pointer'}} onClick={()=>setExtend(!extend)}>*/}
                    {/*    <AddCircleOutlineIcon fontSize='small'/>*/}
                    {/*    <p>افزودن گزینه های بیشتر</p>*/}
                    {/*</div>*/}

                    {/*<div className='extend_Box' style={{display:extend?"grid":'none',height:extend?'max-content':0,padding:extend?'1rem':'0'}}>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label >موضوع سایر وجوه قانونی:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label >نرخ سایر وجوه قانونی:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label >مبلغ سایر وجوه قانونی:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label >سهم نقدی از پرداخت:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label >سهم مالیات بر ارزش افزوده از پرداخت:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label htmlFor=''>ارزش ارزی کالا:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label >شماره کوتاژ اظهارنامه گمرکی:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label >مجموع وزن خالص:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label >تاریخ کوتاژ اظهارنامه گمرکی:</label>*/}
                    {/*        <div className='searchBox__items'>*/}
                    {/*            <CalendarMonthIcon fontSize='medium'/>*/}
                    {/*            <DatePicker*/}
                    {/*                inputComponent={DatePickerInput}*/}
                    {/*                placeholder="...انتخاب تاریخ"*/}
                    {/*                format="jYYYY/jMM/jDD"*/}
                    {/*                onChange={change}*/}
                    {/*                id="datePicker"*/}
                    {/*            />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label htmlFor=''>اجرت ساخت:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label >سود فروشنده:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label >شناسه یکتای ثبت قرارداد حق العمل کاری:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label htmlFor=''>حق العمل:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label >مجموع اجرت سود و حق العمل:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}

                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label >مبلغ کل کالا:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}
                    {/*    <div className='ModalBox__Items'>*/}
                    {/*        <label >مبلغ کل کالا:</label>*/}
                    {/*        <TextField sx={{width: '20rem'}} />*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            }
        </>
    )

}