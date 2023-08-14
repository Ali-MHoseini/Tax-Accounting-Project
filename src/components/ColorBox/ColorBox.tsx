import React, {ReactNode, ReactPortal} from 'react';
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

interface DashBoardBox {
    Title:string,
    IconColor:string,
    BackColor:string,
    Icon:ReactNode,
    BackColor2:string
    DragFunc: Function
    ClickFunc: Function,
    Length:number,
    DragEnd:any,
    DragBool:any

}
export const ColorBox = ({Title,IconColor,BackColor,Icon,BackColor2,DragFunc,ClickFunc,DragEnd,DragBool,Length}:DashBoardBox)=> {
    
    return(
        <div draggable={true}
            onDrag={DragBool}
            onDragStartCapture={(e)=>DragFunc(e)}
            onDragEnd={DragEnd}
            className='DashBoardBox' style={{backgroundImage:`linear-gradient(to left,${BackColor},${BackColor2})`}}>
            <div style={{display:"flex",justifyContent:'space-between'}}>
                <h2 style={{cursor:'default'}}>{Length}</h2>
                <div className='chart__ItemIcon' style={{backgroundColor:`${IconColor}`,color:'white'}} >
                    {Icon}
                </div>
            </div>
            <p
                onClick={(e)=>ClickFunc(e)}
                style={{cursor:'pointer',fontSize:'1.1rem'}}>{Title}</p>
        </div>
    )
}