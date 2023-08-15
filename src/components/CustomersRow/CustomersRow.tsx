import React, {useEffect, useState} from 'react';

interface CustomersRow{
    Title: string;
    Tinb:string,
    Name: string,
    Bid:string,
    Bpc:string,
    Bbc:string
}
export const CustomersRow = ({Title,Tinb,Bid,Bbc,Bpc,Name}:CustomersRow)=> {

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
    },[])

    return (
        <>
            <tr>
                <td>
                    <span style={{padding:'0.25rem',backgroundColor:`${bcgColor}`,borderRadius:'0.5rem'}}>{Title ==="1"?"حقیقی":"حقوقی"}</span>
                </td>
                <td>{Tinb}</td>
                <td>{Name}</td>
                <td>{Bid}</td>
                <td>{Bbc}</td>
                <td>{Bpc}</td>
                <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </td>
            </tr>
        </>
    )
}