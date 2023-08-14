import React,{useState} from 'react';
import '../../assets/styles/styles.scss';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import {useNavigate} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import {ExitToApp} from "@mui/icons-material";

interface  header {
    Title: string;
}

export const Header = ({Title}:header)=> {
    const [exitLogo,setExitLogo] = useState(false)
    const navigate = useNavigate()

    return (
        <>
            <header className='header'>
                <h2>{Title}</h2>
                <div className='header__leftBox'>
                    <Tooltip title="خروج">
                        <div style={{fontSize:'16px',cursor: 'pointer',color:exitLogo?'#6b7c93':'black',width:"2.5rem",height:'max-content'}}
                             onMouseOver={()=>setExitLogo(true)}
                             onMouseOut={()=>setExitLogo(false)}
                             onClick={()=>navigate('/')}>
                            <ExitToApp fontSize='medium'/>
                        </div>
                    </Tooltip >


                </div>
            </header>

        </>

    )
}