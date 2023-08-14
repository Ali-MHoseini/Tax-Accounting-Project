import React, {ChangeEvent, useEffect, useState} from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,BarChart, Bar, Cell, Legend} from 'recharts';
import '../../assets/styles/styles.scss'
import {Header} from "../../layouts/Header/Header";
import {SideBar} from "../../layouts/SideBar/SideBar";
import PeopleIcon from "@mui/icons-material/People";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Pagination from "@mui/material/Pagination";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import {ColorBox} from "../../components/ColorBox/ColorBox";
import {DasboardInvoiceRow} from "../../components/DasboardInvoiceRow/DasboardInvoiceRow";
import {SearchBox} from "../../components/SearchBox/SearchBox";
import {invoceData} from "../../services/constants/StaticData";
import { ErrorSharp } from '@mui/icons-material';

export const Dashboard = () => {
    document.title = 'داشبورد مدیریت'
    const [tableTitle,setTitle] = useState<string>('صورتحساب های تایید شده')
    const invoiceData = invoceData
    const [filteredInvoiceData,setFilteredInvoiceData] = useState(invoiceData)
    const [pageinationNumber,setPageinationNumber] = useState<number>(10)
    const [dropBox,setDropBox] = useState<boolean>(false)
    //--------------------ClickChangeTitle---------------------
    const handleOnClick = (event:ChangeEvent):void => {
        const clickName:string = (event.target as HTMLDivElement).innerHTML
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

    //---------------------Chart------------------------------
    const data = [
        {
            name: '1',
            "جمع کل": 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '2',
            "جمع کل": 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '3',
            "جمع کل": 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: '4',
            "جمع کل": 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: '5',
            "جمع کل": 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: '6',
            "جمع کل": 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: '7',
            "جمع کل": 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '8',
            "جمع کل": 3250,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '9',
            "جمع کل": 1850,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '10',
            "جمع کل": 3150,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '11',
            "جمع کل": 2450,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '12',
            "جمع کل": 2490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '13',
            "جمع کل": 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '14',
            "جمع کل": 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '15',
            "جمع کل": 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: '16',
            "جمع کل": 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: '17',
            "جمع کل": 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: '18',
            "جمع کل": 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: '19',
            "جمع کل": 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '20',
            "جمع کل": 3250,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '21',
            "جمع کل": 1850,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '22',
            "جمع کل": 3150,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '23',
            "جمع کل": 2450,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '24',
            "جمع کل": 2490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '25',
            "جمع کل": 3250,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '26',
            "جمع کل": 1850,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '27',
            "جمع کل": 3150,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '28',
            "جمع کل": 2450,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '29',
            "جمع کل": 2490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '30',
            "جمع کل": 2450,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '31',
            "جمع کل": 2490,
            pv: 4300,
            amt: 2100,
        },
    ];
    const data2 = [
        {
            name: 'فروردین',
            "جمع کل": 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'اردیبهشت',
            "جمع کل": 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'خرداد',
            "جمع کل": 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'تیر',
            "جمع کل": 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'مرداد',
            "جمع کل": 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'شهریور',
            "جمع کل": 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'مهر',
            "جمع کل": 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'ابان',
            "جمع کل": 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'آذر',
            "جمع کل": 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'دی',
            "جمع کل": 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'بهمن',
            "جمع کل": 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'اسفند',
            "جمع کل": 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


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
        }
    },[tableTitle])


    return (

        <div style={{display:'flex'}}>
            <SideBar/>
            <div className='dashboard'>
                <Header Title={`داشبورد مدیریت`}/>
                <div className='dashboard__Box'>
                    <div className='chartBox'>
                        <div className='chart__rightBox'>
                            <div className='chart__rightBoxItem'>
                                <h4 style={{fontSize:'20px'}}>صورتحساب ماه اخیر</h4>
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart
                                        width={500}
                                        height={400}
                                        margin={{
                                            top: 10,
                                            right: 25,
                                            left: 25,
                                            bottom: 5,
                                        }}
                                        data={data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis
                                            className='chart__xAxis'
                                            dataKey="name"/>
                                        <Tooltip />
                                        <Area
                                            type="monotone"
                                            dataKey="جمع کل"
                                            fill="#016fff"
                                            style={{position:'relative',zIndex:'0'}}
                                            />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                            <div className='chart__rightBoxItem'>
                                <div style={{display:"flex",justifyContent:'space-between'}}>
                                    <h3>مشتری ها</h3>
                                    <div className='chart__ItemIcon'>
                                        <PeopleIcon/>
                                    </div>
                                </div>
                                <h2>25</h2>
                            </div>
                            <div className='chart__rightBoxItem'>
                                <div style={{display:"flex",justifyContent:'space-between'}}>
                                    <h3>کالاها</h3>
                                    <div className='chart__ItemIcon'>
                                        <LocalMallIcon style={{color: '#016fff'}}/>
                                    </div>
                                </div>
                                <h2>125</h2>
                            </div>
                        </div>
                        <div className='chart__leftBox'>
                            <h4 style={{fontSize:'20px'}}>صورتحساب ماه های اخیر</h4>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={150} height={40} data={data2} barSize={35}>
                                    <XAxis dataKey="name"/>
                                    <Tooltip />
                                    <Bar dataKey="جمع کل" fill="#2fd980" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className='billDetails__Box'>
                        <div
                             className='billDetails__RightBox'
                             onDrop={handleOnDrop}
                             onDragOver={(e)=>e.preventDefault()}
                            >
                            <h4>{tableTitle}</h4>
                            <SearchBox SetValue={handleOnChange} SearchPlaceholder={"جستجو براساس شماره صورتحساب"} />
                            <div className={`${dropBox?'billDetails__RightBox_Drop':'hidden'}`} />
                            <p className={`${dropBox?'billDetails__RightBox_massage':'hidden'}`}>
                                    در اینجا رها کنید
                                    <div></div>
                            </p>
                            <table>
                                <thead>
                                    <th colSpan={2}>شماره صورتحساب</th>
                                    <th>شماره مالیاتی صورتحساب</th>
                                    <th>تاریخ صورتحساب</th>
                                    {/*<th>مشاهده و چاپ صورتحساب</th>*/}
                                </thead>
                                <tbody>
                                {
                                    filteredInvoiceData && filteredInvoiceData.map((invoice)=>(
                                        <DasboardInvoiceRow
                                            key={crypto.randomUUID()}
                                            Status={tableTitle}
                                            Inno={invoice.header.inno} />
                                    ))
                                }
                                </tbody>
                            </table>
                            <Pagination count={pageinationNumber} color="primary" className='pagination'/>
                        </div>
                        <div className='billDetails__leftBox'>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Title={"صورتحساب های تایید شده"}
                                Length={invoiceData.map(invoice => invoice.response.status === 'success')
                                    .filter(status => status === true).length}
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
                                ClickFunc={handleOnClick}
                                DragBool={()=>setDropBox(true)} 
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
                                ClickFunc={handleOnClick}
                                DragBool={()=>setDropBox(true)} 
                                DragEnd={()=>setDropBox(false)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}