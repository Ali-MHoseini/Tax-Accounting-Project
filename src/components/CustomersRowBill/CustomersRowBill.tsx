import React, {useEffect,useState} from 'react';
interface CustomersRow{
    Title: string,
    Tinb:string,
    Name: string,
    Bid:string,
    Bpc:string,
    Bbc:string,
    
}
export const CustomersRowBill = ({Title,Tinb,Bid,Bbc,Bpc,Name}:CustomersRow)=> {

    const [bcgColor,setBcgColor] = useState<string>('')

    useEffect(()=>{
        switch (Title) {
            case '1':
                setBcgColor('#DD0F10')
                
                break;
            case '2':
                setBcgColor('#F5CD2D')
                break;
            default:
                console.log(null)
        }
    },[Title])
    return (
        <>
            <tr onClick={(e)=>console.log((e.target as HTMLTableRowElement).parentNode)}>
                <td>
                    <span style={{padding:'0.25rem',backgroundColor:bcgColor,borderRadius:'0.5rem'}}>{Title ==="1"?"حقیقی":"حقوقی"}</span>
                </td>
                <td>{Tinb}</td>
                <td>{Name}</td>
                <td>{Bid}</td>
                <td>{Bbc}</td>
                <td>{Bpc}</td>
                <td></td>
            </tr>
        </>
    )
}