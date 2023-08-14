 import React,{useState} from 'react';
 import DashboardIcon from "@mui/icons-material/Dashboard";
 import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
 import PeopleIcon from "@mui/icons-material/People";
 import LocalMallIcon from "@mui/icons-material/LocalMall";
 import {NavLink, useNavigate} from "react-router-dom";
 import TestModal from '../../components/TestModal/TestModal'
 import Button from "@mui/material/Button";


export const SideBar = ()=> {
    const [showModal,setShowModal] = useState<boolean>(false)
    const [showExcel,setShowExcel] = useState<boolean>(false)

    const navigate = useNavigate()

    const handleOpen = () => setShowModal(true);
    const handleClose = () => {
        setShowModal(false);
        setShowExcel(false)
    }
    return(
        <div className='dashboard__menu'>
            <TestModal
                CloseModal={handleClose}
                ShowModal={showModal}
                SetExcel={()=>setShowExcel(true)}
                ShowExcel={showExcel}
                SetNotExcel={()=>setShowExcel(false)}
                SetForm={()=> {window.open("/add-new-bill", "_blank"); setShowModal(false)}}
            />
            <div className='userName'>
                <div style={{width:'60px',height:'60px',borderRadius:'50%'}}>
                    <img src='https://s8.uupload.ir/files/starbucks-logo_6p3p.png'
                         alt='User'
                         width='60px'
                         height='60px'
                         crossOrigin='anonymous'/>
                </div>

                <div style={{padding:'0.5rem',display:'flex',flexDirection:'column',gap:'0.5rem'}}>
                    <h3>علی حسینی</h3>
                    <h3>09915342658</h3>
                </div>

            </div>
            <button onClick={handleOpen} className='compose__billButton'>+ ایجاد صورت حساب جدید</button>
            <div className='menu__Box'>
                <NavLink
                    to='/dashboard'
                    className={({ isActive }) => (isActive ? 'active' : 'dashboard__menuItem')}
                >
                    <DashboardIcon/>
                    <p>داشبورد مدیریت</p>
                </NavLink>
                <NavLink
                    to='/manageinvoices'
                    className={({ isActive }) => (isActive ? 'active' : 'dashboard__menuItem')}
                >
                    <ReceiptLongIcon/>
                    <p>مدیریت صورتحساب ها</p>
                </NavLink>
                <NavLink
                    to='/customers'
                    className={({ isActive }) => (isActive ? 'active' : 'dashboard__menuItem')}
                >
                    <PeopleIcon/>
                    <p>مشتری ها</p>
                </NavLink>
                <NavLink
                    to='/products'
                    // className='dashboard__menuItem'
                    className={({ isActive }) => (isActive ? 'active' : 'dashboard__menuItem')}
                >
                    <LocalMallIcon/>
                    <p>کالاها و خدمات</p>
                </NavLink>
            </div>
            <div className='dashboard__bottomDescription'>
                <div className='expireDate'>
                    <p>مهلت سرویس:</p>
                    <h5>154 روز</h5>
                </div>
                <div className='description'>
                    <h6>
                        طراحی و پیاده سازی توسط سپنتا فینتک
                    </h6>
                </div>

            </div>

        </div>
    )
}