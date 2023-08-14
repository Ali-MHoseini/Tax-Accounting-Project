import React, {useState,useEffect} from "react";
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
import {customerData} from "../../services/constants/StaticData"
import {customerTypeData} from "../../services/constants/StaticData"


export const Customers = () => {
    document.title = 'مشتریان'
    const customers:customerTypeData[] = customerData,
        [showModal,setShowModal] = useState<boolean>(false),
        [tableTitle,setTitle] = useState<string>('همه خریداران'),
        [filteredCustomerData,setFilteredCustomerData] = useState(customers),
        [pageinationNumber,setPageinationNumber] = useState<number>(10),
        [dropBox,setDropBox] = useState<boolean>(false)


    const closingModal = ()=> {
        setShowModal(false)
    }

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

    //-----------------setPaginationNumber----------------

    const setPaginationNumber = ():void =>{
        if (filteredCustomerData.length < 6) setPageinationNumber(1)
        else {
            setPageinationNumber(Math.ceil(filteredCustomerData.length / 6 ))
        }
    }

    //--------------FilterCustomer--------------------
    useEffect(() => {
        switch (tableTitle) {
            case 'حقیقی':
            case 'خریدار های حقیقی':
                const HaqCustomer = customers.filter(customer => customer.tob === '1')
                setFilteredCustomerData(HaqCustomer)
                setPaginationNumber()
                break
            case 'حقوقی':
            case 'خریدار های حقوقی':
                const HoqCustomer = customers.filter(customer => customer.tob === '2')
                setFilteredCustomerData(HoqCustomer)
                setPaginationNumber()
                break
            case 'همه خریداران':
                setFilteredCustomerData(customers)
                break
        }
    },[tableTitle])

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
                        <div className='table__box'
                            onDrop={handleOnDrop}
                            onDragOver={(e)=>e.preventDefault()}>
                        <div className={`${dropBox?'billDetails__RightBox_Drop':'hidden'}`} />
                            <p className={`${dropBox?'billDetails__RightBox_massage':'hidden'}`}>
                                    در اینجا رها کنید
                                    <div></div>
                            </p>
                            <SearchBox SetValue={handleOnChange} SearchPlaceholder='جستجو بر اساس نام مشتری...'/>
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
                                    {
                                        filteredCustomerData && filteredCustomerData.map((customer)=>(
                                        <CustomersRowBill
                                         key={crypto.randomUUID}
                                         Name={customer.name}
                                         Title={customer.tob} 
                                         Bid={customer.bid} 
                                         Tinb={customer.tinb} 
                                         Bpc={customer.bpc} 
                                         Bbc={customer.bbc}/>
                                        ))
                                        
                                    }
                                </tbody>
                            </table>
                            <Pagination count={pageinationNumber} color="primary" className='pagination'/>
                        </div>
                        <div className='colBoxes'>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Title={"همه خریداران"}
                                Length={customers.length}
                                IconColor={"blue"}
                                BackColor={"#6D66E1"}
                                BackColor2={"#afaddc"}
                                Icon={<PeopleIcon/>}
                                DragFunc={handleOnDrag}
                                ClickFunc={handleOnClick}
                                DragBool={()=>setDropBox(true)} 
                                DragEnd={()=>setDropBox(false)}/>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Title={"خریدار های حقوقی"}
                                Length={customers.map(customer => customer.tob === '2').filter(status => status === true).length}
                                IconColor={"yellow"}
                                BackColor={"#F5CD2D"}
                                BackColor2={"#e8e576"}
                                Icon={<PeopleIcon/>}
                                DragFunc={handleOnDrag}
                                ClickFunc={handleOnClick}
                                DragBool={()=>setDropBox(true)} 
                                DragEnd={()=>setDropBox(false)}/>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Title={"خریدار های حقیقی"}
                                Length={customers.map(customer => customer.tob === '1').filter(status => status === true).length}
                                IconColor={"red"}
                                BackColor={"#E85984"}
                                BackColor2={"#e1b0c0"}
                                Icon={<PeopleIcon/>}
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