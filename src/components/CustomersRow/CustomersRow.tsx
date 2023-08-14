import React, {useEffect, useState} from 'react';

interface CustomersRow{
    Title: string;
}
export const CustomersRow = ({Title}:CustomersRow)=> {

    const [bcgColor,setBcgColor] = useState<string>('')

    useEffect(()=>{
        switch (Title) {
            case 'حقیقی':
                setBcgColor('#DD0F10')
                
                break;
            case 'حقوقی':
                setBcgColor('#269958')
                break;
            default:
                console.log(null)
        }
    },[])

    return (
        <>
            <tr>
                <td>
                    <span style={{padding:'0.25rem',backgroundColor:'red',borderRadius:'0.5rem'}}>{Title}</span>
                </td>
                <td>1245</td>
                <td>علی حسینی</td>
                <td>111111111111</td>
                <td>225566</td>
                <td>6581822369</td>
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