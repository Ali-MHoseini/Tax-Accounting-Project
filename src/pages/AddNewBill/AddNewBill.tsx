import React,{useState} from 'react';
import {Header} from "../../layouts/Header/Header";
import '../../assets/styles/styles.scss'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ShowCustomer} from "../../components/ShowCustomer/ShowCustomer";
import {ShowStuffs} from "../../components/ShowStuffs/ShowStuffs";
import {BillForm} from "../../components/BillForm/BillForm";



export const AddNewBill = () => {

    document.title = 'افزودن صورتحساب جدید';

    const steps = ['انتخاب مشتری', 'انتخاب کالا', 'ثبت صورتحساب'];

    //--------------------------------------------------
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };


    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };


    //--------------------------------------------------

    const [activeStep, setActiveStep] = useState(0);



    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const addCompo = ():any=> {
        switch (activeStep) {
            case 0:
                return <ShowCustomer/>
            case 1:
                return <ShowStuffs />
            case 2:
                return <BillForm/>
        }
    }

    return(
        <>
            <Header Title={'افزودن صورتحساب'}/>
            <div className='addBill__page'
                 style={{height:activeStep === 0 || activeStep === steps.length?'92vh':'100%'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <h1>افزودن صورتحساب جدید</h1>
                    <Button
                        onClick={()=>window.close()}
                        color='error'
                        variant='text'>بازگشت به صفحه اصلی</Button>
                </div>

                <Box sx={{ width: '100%',display:'flex',flexDirection:'column',alignItems:'center',gap:'2rem' }}>
                    <div style={{width:'50%'}}>
                        <Stepper activeStep={activeStep} sx={{backgroundColor:'#fff',borderRadius:'1rem',padding:'1rem'}}>
                            {steps.map((label, index) => {
                                const stepProps: { completed?: boolean } = {};
                                const labelProps: {
                                    optional?: React.ReactNode;
                                } = {};
                                if (isStepOptional(index)) {
                                }
                                if (isStepSkipped(index)) {
                                    stepProps.completed = false;
                                }
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </div>

                    {activeStep === steps.length ? (
                        <>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                صورتحساب با موفقیت ثبت شد
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>صورتحساب جدید</Button>
                                <Button onClick={()=>window.close()} color='error'>بازگشت به داشبورد مدیریت</Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Typography
                                sx={{
                                    mt: 2,
                                    mb: 1,
                                    width: '100%',
                                    backgroundColor:'#fff',
                                    borderRadius:'1rem',
                                    padding:'1rem'}}>
                                {addCompo()}
                            </Typography>
                            <Box sx={{display: 'flex',flexDirection: 'row',pb:5}}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    بازگشت
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                {isStepOptional(activeStep) && (
                                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                        رد شدن
                                    </Button>
                                )}
                                <Button onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'ثبت نهایی' : 'ثبت و ادامه'}
                                </Button>
                            </Box>
                        </>
                    )}
                </Box>
            </div>


        </>
    )
}