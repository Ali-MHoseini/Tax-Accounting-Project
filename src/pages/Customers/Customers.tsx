import React, {useState} from "react";
import Pagination from '@mui/material/Pagination';
import {Header} from "../../layouts/Header/Header";
import {SideBar} from "../../layouts/SideBar/SideBar";
import PeopleIcon from "@mui/icons-material/People";
import {ColorBox} from "../../components/ColorBox/ColorBox";
import {CustomersRow} from "../../components/CustomersRow/CustomersRow";
import AddModal from "../../components/AddModal/AddModal";
import {CustomersRowBill} from "../../components/CustomersRowBill/CustomersRowBill";
import {NoiseAwareTwoTone} from "@mui/icons-material";
import {SearchBox} from "../../components/SearchBox/SearchBox";
export const Customers = () => {
    document.title = 'مشتریان'
    const [showModal,setShowModal] = useState<boolean>(false)
    const closingModal = ()=> {
        setShowModal(false)
    }
    return(
        <div style={{display:'flex'}}>
            <SideBar/>
            <AddModal CloseModal={closingModal} ShowModal={showModal} />
            <div className='dashboard'>
                <Header Title={`مشتری ها`}/>
                <div className='dashboard__Box'>
                    <div className='header__box'>
                        <div onClick={()=>setShowModal(true)} className='header__customerItem '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                </svg>
                                <p>افزودن خریدار</p>
                        </div>
                    </div>
                    <div className="mainBox">
                        <div className='table__box'>
                            <SearchBox SearchPlaceholder='جستجو بر اساس نام مشتری...'/>
                            <table>
                                <thead>
                                <th>نوع خریدار</th>
                                <th>شناسه اقتصادی</th>
                                <th>توضیحات خریدار</th>
                                <th>شناسه ملی</th>
                                <th>کد شعبه</th>
                                <th>کد پستی</th>
                                <th>#</th>
                                </thead>
                                <tbody>
                                <CustomersRowBill Title='حقیقی'/>
                                <CustomersRowBill Title='حقیقی'/>
                                <CustomersRowBill Title='حقوقی'/>
                                <CustomersRowBill Title='حقیقی'/>
                                <CustomersRowBill Title="حقوقی"/>
                                <CustomersRowBill Title="حقوقی"/>
                                <CustomersRowBill Title='حقیقی'/>
                                </tbody>
                            </table>
                            <Pagination count={10} color="primary" className='pagination'/>
                        </div>
                        <div className='colBoxes'>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Title={"تعداد کل خریدار ها"}
                                Length={22}
                                IconColor={"blue"}
                                BackColor={"#6D66E1"}
                                BackColor2={"#afaddc"}
                                Icon={<PeopleIcon/>}/>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Title={"خریدار های حقوقی"}
                                Length={12}
                                IconColor={"yellow"}
                                BackColor={"#F5CD2D"}
                                BackColor2={"#e8e576"}
                                Icon={<PeopleIcon/>}/>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Title={"خریدار های حقیقی"}
                                Length={10}
                                IconColor={"red"}
                                BackColor={"#E85984"}
                                BackColor2={"#e1b0c0"}
                                Icon={<PeopleIcon/>}/>
                        </div>
                        </div>
                    </div>

                </div>
            </div>

    )
}