import React from 'react';
import './Main.css';
import BmiForm from '../BmiForm/BmiForm';
import DescBox from '../DescBox/DescBox';

function Main() {
    return (
        <main className="main">
            <BmiForm />
            <DescBox />
        </main>
    )
}

export default Main