import React, {useEffect, useState} from "react";

interface BillRow {
    Status: string;
    Inno:string,
    Tinb:string,
    TaxID:string
}

export const ManegeInvoiceRow = ({Status,Inno,Tinb,TaxID}:BillRow)=> {
    const [bcgColor,setBcgColor] = useState<string>('')
    const [showBox,setShowBox] = useState<boolean>(false)

    useEffect(()=>{
        switch (Status) {
            case 'تایید شده':
                setBcgColor('#269958')
                break;
            case 'ناموفق':
                setBcgColor('#DD0F10')
                break;
            case 'در انتظار پردازش':
                setBcgColor('#F19200')
                break;
        }
    },[Status])

    return(
        <tr>
            <td>{Inno}</td>
            <td>{Tinb}</td>
            <td>{TaxID}</td>
            <td>1401/12/25</td>
            <td style={{padding:'1rem'}}>
                <p
                    style={{backgroundColor:`${bcgColor}`,textAlign:"center",borderRadius:'0.5rem',padding:'0.25rem',color:'white'}}>
                    {Status}
                </p>
            </td>
            <td onClick={()=>setShowBox(!showBox)} style={{position:'relative',cursor:'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>

                   <div className='taskBox' style={{display:`${showBox?'flex':'none'}`}}>
                        <div className='task'>ابطال</div>
                        <div className='task'>اصلاح</div>
                        <div className='task'>برگشت از فروش</div>
                   </div>


            </td>
        </tr>
    )
}
