import React from 'react';
import { MERCH } from '../../merch';
import { Merch } from './Merch';
import './shop.css';

export const Shop = () => {
    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1> Missfit Shop </h1>
            </div>
            <div className='merch' key={Merch.id}>
                {MERCH.map((product) => (
                    <Merch data={product} />
                ))}
            </div>
        </div>
    )
}
