import React from 'react'
// import './css/bootstrap.min.css'
import { Maths } from '@tangisha/simple-calculator'
import Backbtn from '../../components/Backbtn';

export const SimpleCalculatorApp = () => {
    return (
        <>
            <Backbtn />
            <div className='p-5'>
                <Maths table />
            </div>
        </>
    );
}
