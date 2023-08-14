import React, {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import {useDispatch} from "react-redux";
import {setProdCart} from "../../middleware/redux/slice/CartSlice/CartSlice";

interface stuffData {
    sstid:string,
    sstt:string,
    am:number,
    mu:string,
    nw:number,
    fee:number,
    cfee:number,
    cut:string,
    exr:number,
    ssrv:number,
    sscv:number,
    prdis:number,
    dis:number,
    adis:number,
    vra:number,
    vam:number,
    odt:string,
    odr:number,
    odam:number,
    olt:string,
    olr:number,
    olam:number,
    consfee:number,
    spro:number,
    bros:number,
    tcpbs:number,
    cop:number,
    vop:number,
    bsrn:number,
    tsstam:number
}
export const StuffRowBill = ()=> {
    const dispatch = useDispatch()
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [data,setData] = useState<stuffData>({
        sstid:'',
        sstt:'',
        am:0,
        mu:'',
        nw:0,
        fee:0,
        cfee:0,
        cut:'',
        exr:0,
        ssrv:0,
        sscv:0,
        prdis:0,
        dis:0,
        adis:0,
        vra:0,
        vam:0,
        odt:'',
        odr:0,
        odam:0,
        olt:'',
        olr:0,
        olam:0,
        consfee:0,
        spro:0,
        bros:0,
        tcpbs:0,
        cop:0,
        vop:0,
        bsrn:0,
        tsstam:0
    })
    const addData = (checkValue:boolean):void => {
        if(checkValue) {
            dispatch(setProdCart(data))
        }else{

        }
    }
    return (
        <>
            <tr style={{cursor:'default'}}>
                <td>
                    <Checkbox {...label}
                              color='success'
                              onClick={(e)=>addData((e.target as HTMLInputElement).checked)}/>
                </td>
                <td>1122334455</td>
                <td>تلویزیون 65 اینچی LG</td>
                <td>200</td>
                <td>عدد</td>
                <td>2500000</td>
            </tr>
        </>
    )
}