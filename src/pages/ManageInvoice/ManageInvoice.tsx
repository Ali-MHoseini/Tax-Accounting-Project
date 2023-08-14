import React, {ChangeEvent, useEffect, useState} from 'react';
import {Header} from "../../layouts/Header/Header";
import {SideBar} from "../../layouts/SideBar/SideBar";
import {ColorBox} from "../../components/ColorBox/ColorBox";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Tooltip } from 'recharts';
import Pagination from "@mui/material/Pagination";
import {ManegeInvoiceRow} from "../../components/ManegeInvoiceRow/ManegeInvoiceRow";
import {SearchBox} from "../../components/SearchBox/SearchBox";
import {invoceData} from "../../services/constants/StaticData";

export const ManageInvoice = () => {
    document.title = 'گزارش صورتحساب ها';
    const invoiceData = invoceData
    const [filteredInvoiceData,setFilteredInvoiceData] = useState(invoiceData)
    const [pageinationNumber,setPageinationNumber] = useState<number>(10)
    const [tableTitle,setTitle] = useState<string>('کل صورتحساب ها')
    const [dropBox,setDropBox] = useState<boolean>(false)

    //--------------------ClickChangeTitle---------------------
    const handleOnClick = (event:ChangeEvent):void => {
        const clickName = (event.target as HTMLDivElement).innerHTML
        setTitle(clickName)
        setDropBox(false)
    }

    const handleOnChange = (event:ChangeEvent):void => {
        const clickName:string = (event.target as HTMLSelectElement).value
        setTitle(clickName)
        setDropBox(false)
    }

    //--------------------Drag/Drop----------------------------
    const handleOnDrag = (event:React.DragEvent) => {
        const dragName = (event.target as HTMLDivElement).children[1].innerHTML
        event.dataTransfer.setData('sortName',dragName)
    }
    const handleOnDrop = (event:React.DragEvent):void=>{
        const dataTitle = event.dataTransfer.getData("sortName") as string
        setTitle(dataTitle)
        setDropBox(false)
    }

    //---------------PieChart-----------------------
    console.log(invoiceData.map(invoice => invoice.response.status === 'pending').filter(status => status === true).length)
    const data = [
        {
            name: 'تایید شده',
            value: invoiceData.map(invoice => invoice.response.status === 'success').filter(status => status === true).length },
        {
            name: 'رد شده',
            value: invoiceData.map(invoice => invoice.response.status === 'pending').filter(status => status === true).length },
        {
            name: 'در انتظار پردازش',
            value: invoiceData.map(invoice => invoice.response.status === 'failed').filter(status => status === true).length},
    ];
    const COLORS = ['#269958', '#DD0F10', '#F19200',];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }:any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

   //--------------------setStatus----------------------
    const setStatus = (status:string)=> {
        switch (status) {
            case 'success':
                return 'تایید شده'
            case 'failed':
                return 'ناموفق'
            case 'pending':
                return 'در انتظار پردازش'
            default:
                console.log(null)
        }
    }
    //-----------------setPaginationNumber----------------

    const setPaginationNumber = ():void =>{
        if (filteredInvoiceData.length < 6) setPageinationNumber(1)
        else {
            setPageinationNumber(Math.ceil(filteredInvoiceData.length / 6 ))
        }
    }

    //--------------FilterDataByStatus--------------------
    useEffect(() => {
        switch (tableTitle) {
            case 'صورتحساب های تایید شده':
                const successData = invoiceData.filter(invoice => invoice.response.status === 'success')
                setFilteredInvoiceData(successData)
                setPaginationNumber()
                break
            case 'صورتحساب های ناموفق':
                const failedData = invoiceData.filter(invoice => invoice.response.status === 'failed')
                setFilteredInvoiceData(failedData)
                setPaginationNumber()
                break
            case 'صورتحساب های در انتظار پردازش':
                const pendingData = invoiceData.filter(invoice => invoice.response.status === 'pending')
                setFilteredInvoiceData(pendingData)

                break
            case 'کل صورتحساب ها':
                setFilteredInvoiceData(invoiceData)
                setPaginationNumber()

                break
        }
    },[tableTitle])



    return(
        <div style={{display:'flex'}}>
            <SideBar/>
            <div className='dashboard'>
                <Header Title={`مدیریت صورتحساب ها`}/>
                <div className='dashboard__Box'>
                    <div className='bill__chartBox'>
                        <div className='bill__chartBoxRight'>
                            <p>نمودار وضعیت صورتحساب ها</p>
                            <div>
                                <ResponsiveContainer width={400} height={400}>
                                    <PieChart>
                                        <Pie dataKey="value"
                                             data={data}
                                             fill="#8884d8"
                                             label={renderCustomizedLabel}>
                                            {data.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={COLORS[index % COLORS.length]}
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className='bill__chartBoxLeft'>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Length={invoiceData.length}
                                Title={"کل صورتحساب ها"}
                                IconColor={"blue"}
                                BackColor={"#6689e1"}
                                BackColor2={"#adb1dc"}
                                Icon={<ReceiptLongIcon/>}
                                DragFunc={handleOnDrag}
                                DragBool={()=>setDropBox(true)}
                                ClickFunc={handleOnClick} 
                                DragEnd={()=>setDropBox(false)}/>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Length={invoiceData.map(invoice => invoice.response.status === 'success')
                                    .filter(status => status === true).length}
                                Title={"صورتحساب های تایید شده"}
                                IconColor={"green"}
                                BackColor={"#76e166"}
                                BackColor2={"#addcb1"}
                                Icon={<ReceiptLongIcon/>}
                                DragFunc={handleOnDrag}
                                DragBool={()=>setDropBox(true)}
                                ClickFunc={handleOnClick} 
                                DragEnd={()=>setDropBox(false)}/>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Title={"صورتحساب های در انتظار پردازش"}
                                Length={invoiceData.map(invoice => invoice.response.status === 'pending')
                                    .filter(status => status === true).length}
                                IconColor={"yellow"}
                                BackColor={"#F5CD2D"}
                                BackColor2={"#e8e576"}
                                Icon={<ReceiptLongIcon/>}
                                DragFunc={handleOnDrag}
                                DragBool={()=>setDropBox(true)}
                                ClickFunc={handleOnClick} 
                                DragEnd={()=>setDropBox(false)}/>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Title={"صورتحساب های ناموفق"}
                                Length={invoiceData.map(invoice => invoice.response.status === 'failed')
                                    .filter(status => status === true).length}
                                IconColor={"red"}
                                BackColor={"#E85984"}
                                BackColor2={"#e1b0c0"}
                                Icon={<ReceiptLongIcon/>}
                                DragFunc={handleOnDrag}
                                DragBool={()=>setDropBox(true)}
                                ClickFunc={handleOnClick} 
                                DragEnd={()=>setDropBox(false)}/>
                        </div>
                    </div>
                    <div className='bill__tableBox'
                         onDrop={handleOnDrop}
                         onDragOver={(e)=>e.preventDefault()}>
                        <SearchBox SetValue={handleOnChange} SearchPlaceholder='جستجو بر اساس شماره صورتحساب...'/>
                        <div className={`${dropBox?'billDetails__tablebox_Drop':'hidden'}`} />
                            <p className={`${dropBox?'billDetails__tablebox_massage':'hidden'}`}>
                                    در اینجا رها کنید
                                    <div></div>
                            </p>
                        <table>
                            <thead>
                            <th>شماره صورتحساب</th>
                            <th>شناسه اقتصادی</th>
                            <th>شماره مالیاتی</th>
                            <th>تاریخ صورتحساب</th>
                            <th>وضعیت</th>
                            <th>#</th>
                            </thead>
                            <tbody>
                            {
                                filteredInvoiceData && filteredInvoiceData.map((invoice:any,index)=>(
                                    <ManegeInvoiceRow
                                        key={crypto.randomUUID()}
                                        Status={`${setStatus(invoice.response.status)}`}
                                        Inno={invoice.header.inno}
                                        Tinb={invoice.header.tinb}
                                        TaxID={invoice.response.taxId}/>
                                ))
                            }
                            </tbody>
                        </table>
                        <Pagination count={pageinationNumber} color="primary" className='pagination'/>
                    </div>
                </div>
            </div>
        </div>
    )
}