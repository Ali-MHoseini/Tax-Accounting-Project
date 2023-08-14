import React, {useEffect,useState} from 'react';
interface CustomersRow{
    Title: string;
}
export const CustomersRowBill = ({Title}:CustomersRow)=> {

    const [bcgColor,setBcgColor] = useState<string>('')

    useEffect(()=>{
        switch (Title) {
            case 'حقیقی':
                setBcgColor('#DD0F10')
                
                break;
            case 'حقوقی':
                setBcgColor('#F5CD2D')
                break;
            default:
                console.log(null)
        }
    },[])
    return (
        <>
            <tr onClick={(e)=>console.log((e.target as HTMLTableRowElement).parentNode)}>
                <td>
                    <span style={{padding:'0.25rem',backgroundColor:bcgColor,borderRadius:'0.5rem'}}>{Title}</span>
                </td>
                <td>1245</td>
                <td>علی حسینی</td>
                <td>111111111111</td>
                <td>225566</td>
                <td>6581822369</td>
            </tr>
        </>
    )
}