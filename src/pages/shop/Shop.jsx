import React from 'react';
import { MERCH } from '../../merch';
import { Merch } from './Merch';

export const Shop = () => {
    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1> Missfit Shop </h1>
            </div>
            <div className='merch'>
                {" "}
                {MERCH.map((product) => (
                    <Merch data={product} />
                ))}
            </div>
        </div>
    )
}
