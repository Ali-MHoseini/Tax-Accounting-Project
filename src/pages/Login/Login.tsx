import React, {useEffect, useState} from "react";
import '../../assets/styles/styles.scss'
import {useNavigate} from "react-router-dom";

interface login {
    [index:string]:string
}
export const Login = ()=> {
    document.title = 'ورود به پنل مدیریت';
    const navigate = useNavigate()
    const numberRegex = new RegExp(/^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/)
    const passwordRegex = new RegExp(/[0-9]/)
    const [hide,setHide] = useState<boolean>(false)
    const [remember,setRemember] = useState<boolean>(false)
    const [loginData,setLoginData] = useState<login>({
        number:'',
        password:''
    })
    const [loginErr,setLoginErr] = useState<login>({
        numberErr:'',
        passwordErr:''
    })

    //-----------------------check data and post to backEnd-----------------
    const checkData = async () => {
        if(loginData.number && loginData.password) {
            try {
              navigate('/dashboard')
            }catch (err){
                console.log(err)
            }
        }else if (!loginData.number && !loginData.password){
            setLoginErr({numberErr:'لطفا شماره خود را وارد کنید' ,passwordErr:'لطفا رمز خود را وارد کنید'})
        }else if(!loginData.number && loginData.password){
            setLoginErr({passwordErr:'' ,numberErr:'لطفا شماره خود را وارد کنید'})
        }else if(!loginData.password && loginData.number){
            setLoginErr({numberErr:'' ,passwordErr:'لطفا رمز خود را وارد کنید'})
        }
    }
    //---------------------------------------------


    //-------------------------check number with regexp--------------------
    useEffect(()=>{
        if(loginData.number){
            if(!numberRegex.test(loginData.number)){
             setLoginErr({...loginErr,numberErr:'لطفا شماره را با پسوند درست وارد کنید'})
            }else{
                setLoginErr({...loginErr,numberErr:''})
            }
        }else{
            setLoginErr({...loginErr,numberErr:''})
        }
    },[loginData.number])

    //---------------------------------------------------------------------

    //------------------------check password with Regex--------------------

    useEffect(()=>{
        if(loginData.password){
            if(!passwordRegex.test(loginData.password)){
             setLoginErr({...loginErr,passwordErr:'لطفا کلمه عبور خود ر با پسوند درست وارد کنید'})
            }else{
                setLoginErr({...loginErr,passwordErr:''})
            }
        }else{
            setLoginErr({...loginErr,passwordErr:''})
        }
    },[loginData.password])
    //------------------------------------------------
    return(
        <div className='login__page'>
            <h5>طراحی و پیاده سازی توسط سپنتا فینتک</h5>
            <img src='https://s2.uupload.ir/files/login_image_us4s.png' alt='loginImage' crossOrigin='anonymous' />
            <div className='login__form'>
                <h1>خوش آمدید!</h1>
                <div className='form'>
                    <div>
                        <div className='login__input'>
                            <input type='text'
                                   style={{width:'20rem'}}
                                   onChange={(e:React.ChangeEvent)=> {
                                       setLoginData({...loginData,number:(e.target as HTMLInputElement).value})
                                   }}
                                   placeholder='شماره تلفن همراه'/>
                        </div>
                        <p className='errText'>{loginErr.numberErr}</p>
                    </div>
                    <div>
                        <div className='login__input'>
                            <input type={hide?'text':'password'}
                                   onChange={(e:React.ChangeEvent)=> {
                                       setLoginData({...loginData,password:(e.target as HTMLInputElement).value})
                                   }}
                                   placeholder='رمز ورود'/>
                            <div className='passHideAndShow' onClick={()=>setHide(!hide)}>
                                {
                                    hide?<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                              className="bi bi-eye" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                        <path
                                            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                                    </svg>: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                                        <path
                                            d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                                        <path
                                            d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                                        <path
                                            d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                                    </svg>
                                }
                            </div>
                        </div>
                        <p className='errText'>{loginErr.passwordErr}</p>
                    </div>
                    <h4 onClick={()=>setRemember(true)}>رمز خود را فراموش کرده اید؟</h4>
                    <button onClick={checkData}>ورود</button>
                </div>
            </div>
        </div>
    )
}