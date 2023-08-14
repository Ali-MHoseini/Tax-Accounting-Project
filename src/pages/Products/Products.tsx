import React from "react";
import Pagination from "@mui/material/Pagination";
import {Header} from "../../layouts/Header/Header";
import {SideBar} from "../../layouts/SideBar/SideBar";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import {ColorBox} from "../../components/ColorBox/ColorBox";
import {StuffRow} from "../../components/StuffsRow/StuffRow";
import {SearchBox} from "../../components/SearchBox/SearchBox";

export const Products = () => {
    document.title = 'خدمات و کالاها';
    return(
        <div style={{display:'flex'}}>
            <SideBar/>
        <div className='dashboard'>
            <Header Title={`کالاها و خدمات`}/>
            <div className='dashboard__Box'>
                <div className='header__box'>
                        <div className='header__customerItem '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                            <p>افزودن کالا/خدمات</p>
                        </div>
                </div>
                <div className="mainBox">
                    <div className='table__box'>
                        <SearchBox SearchPlaceholder='جستجو بر اساس نام کالا...'/>
                        <table>
                            <thead>
                            <th>شناسه کالا</th>
                            <th>نام کالا</th>
                            <th>واحد</th>
                            <th>قیمت(ریال)</th>
                            <th>نوع کالا</th>
                            <th>درصد مالیات</th>
                            <th>#</th>
                            </thead>
                            <tbody>
                            <StuffRow/>
                            <StuffRow/>
                            <StuffRow/>
                            <StuffRow/>
                            <StuffRow/>
                            <StuffRow/>
                            <StuffRow/>
                            </tbody>
                        </table>
                        <Pagination count={10} color="primary" className='pagination'/>
                    </div>
                    <div className='colBoxes'>
                        <ColorBox
                            key={crypto.randomUUID()}
                            Title={"تعداد کل کالا ها"}
                            IconColor={"blue"}
                            BackColor={"#6D66E1"}
                            BackColor2={"#afaddc"}
                            Icon={<LocalMallIcon/>}/>
                        <ColorBox
                            key={crypto.randomUUID()}
                            Title={"تعداد کالاهای استثنایی"}
                            IconColor={"yellow"}
                            BackColor={"#F5CD2D"}
                            BackColor2={"#e8e576"}
                            Icon={<LocalMallIcon/>}/>
                        <ColorBox
                            key={crypto.randomUUID()}
                            Title={"تعداد خریدار های عادی"}
                            IconColor={"red"}
                            BackColor={"#E85984"}
                            BackColor2={"#e1b0c0"}
                            Icon={<LocalMallIcon/>}/>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}