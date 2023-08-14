import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PrintIcon from '@mui/icons-material/Print';
import '../../assets/styles/styles.scss'

interface invoceRow {
    Status:string,
    Inno:string
}

export const DasboardInvoiceRow = ({Status,Inno}:invoceRow)=> {
    const handleColor = () =>{
        switch (Status) {
            case 'صورتحساب های تایید شده':
                return 'success'
            case 'صورتحساب های در انتظار پردازش':
                return 'pend'
            default:
                return 'failed'
        }
    }

    return(
        <>
            <tr className={`${handleColor()}`}>
                <td >{Inno}</td>
                <td colSpan={2}>A11W2T15000521000001</td>
                <td >1401/10/22</td>
            </tr>
        </>
    )
}