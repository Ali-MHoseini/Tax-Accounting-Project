import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {Autocomplete, TextField} from "@mui/material";
import {DatePicker} from "react-advance-jalaali-datepicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const BillForm = ()=> {
    const [extend, setExtend] = useState<boolean>(false)
    const pModel = [
        {label:'چک',id:'1'},
        {label:'تهاتر',id:'2'},
        {label:'وجه نقد',id:'3'},
        {label:'POS',id:'4'},
        {label:'درگاه اینترنتی',id:'5'},
        {label:'کارت به کارت',id:'6'},
        {label:'انتقال به حساب',id:'7'},
        {label:'سایر',id:'8'}]
    const DatePickerInput = (props:any) => {
        return <input className="DatePicker1" {...props} />;
    }
    const change = (unix:any, formatted:any) => {
        console.log(unix); // returns timestamp of the selected value, for example.
        console.log(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
    }

    const setmModel = [
        {label:'نقدی',id:'1'},
        {label:'نسیه',id:'2'},
        {label:'نقدی/نسیه',id:'3'}]
    return (<div>
        <div className='addNew__Product'>

            <div className='ModalBox__Items'>
                <label>سریال صورتحساب:</label>
                <TextField sx={{width: '20rem'}} />
            </div>
            <div className='ModalBox__Items'>
                <label >تاریخ صدور صورتحساب:</label>
                <div className='searchBox__items'>
                    <CalendarMonthIcon fontSize='medium'/>
                    <DatePicker
                        inputComponent={DatePickerInput}
                        placeholder="...انتخاب تاریخ"
                        format="jYYYY/jMM/jDD"
                        onChange={change}
                        id="datePicker"
                    />
                </div>
            </div>
            <div className='ModalBox__Items'>
                <label >تاریخ ایجاد صورتحساب:</label>
                <div className='searchBox__items'>
                    <CalendarMonthIcon fontSize='medium'/>
                    <DatePicker
                        inputComponent={DatePickerInput}
                        placeholder="...انتخاب تاریخ"
                        format="jYYYY/jMM/jDD"
                        onChange={change}
                        id="datePicker"
                    />
                </div>
            </div>
            <div className='ModalBox__Items'>
                <label >تاریخ پرداخت:</label>
                <div className='searchBox__items'>
                    <CalendarMonthIcon fontSize='medium'/>
                    <DatePicker
                        inputComponent={DatePickerInput}
                        placeholder="...انتخاب تاریخ"
                        format="jYYYY/jMM/jDD"
                        onChange={change}
                        id="datePicker"
                    />
                </div>
            </div>
            <div className='ModalBox__Items'>
                <label>شناسه حافظه مالیاتی صورتحساب مرجع:</label>
                <TextField sx={{width: '20rem'}} />
            </div>
            <div className='ModalBox__Items'>
                <label>روش تسویه:</label>
                <Autocomplete
                    disablePortal
                    options={setmModel}
                    sx={{ width: '20rem',justifySelf: 'start'}}
                    renderInput={(params) =>
                        <TextField {...params} placeholder=" نقدی..."/>}
                />
            </div>
            <div className='ModalBox__Items'>
                <label >مبلغ نسیه:</label>
                <TextField sx={{width: '20rem'}} />
            </div>
            <div className='ModalBox__Items'>
                <label >مبلغ نقدی:</label>
                <TextField sx={{width: '20rem'}} />
            </div>
            <div className='ModalBox__Items'>
                <label>روش پرداخت:</label>
                <Autocomplete
                    disablePortal
                    options={pModel}
                    sx={{ width: '20rem',justifySelf: 'start'}}
                    renderInput={(params) =>
                        <TextField {...params} placeholder="وجه نقد..."/>}
                />
            </div>
            <div className='ModalBox__Items'>
                <label>شماره پیگیری/شماره مرجع:</label>
                <TextField sx={{width: '20rem'}} />
            </div>

            <div className='ModalBox__Items'>
                <label htmlFor=''>مالیات موضوع 17:</label>
                <TextField sx={{width: '20rem'}} />
            </div>
        </div>
            <div style={{display:'flex',alignItems:'center',gap:"0.25rem",margin:'1rem',
                color:'blueviolet',cursor:'pointer'}} onClick={()=>setExtend(!extend)}>
                <AddCircleOutlineIcon fontSize='small'/>
                <p>افزودن گزینه های بیشتر</p>
            </div>
            <div className='extend_Box' style={{display:extend?"grid":'none',height:extend?'max-content':0,padding:extend?'1rem':'0'}}>
                <div className='ModalBox__Items'>
                    <label >شناسه ثبت قرارداد یکتای فروشنده:</label>
                    <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                    <label >کد شعبه فروشنده:</label>
                    <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                    <label >کد گمرک محل
                        اظهار فروشنده:</label>
                    <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                    <label >سوییچ پرداخت:</label>
                    <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                    <label >شماره پذیرنده فروشگاهی:</label>
                    <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                    <label >شماره پایانه:</label>
                    <TextField sx={{width: '20rem'}} />
                </div>

                <div className='ModalBox__Items'>
                    <label >شماره کارت پرداخت کننده صورتحساب:</label>
                    <TextField sx={{width: '20rem'}} />
                </div>

                <div className='ModalBox__Items'>
                    <label > شناسه ملی/کد فراگیر پرداخت کننده صورتحساب:</label>
                    <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                    <label >مبلغ پرداختی:</label>
                    <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                    <label >شماره پروانه گمرکی:</label>
                    <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                    <label >کد شعبه فروشنده:</label>
                    <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                    <label >کد گمرک محل اظهار:</label>
                    <TextField sx={{width: '20rem'}} />
                </div>
            </div>
    </div>

    )
}