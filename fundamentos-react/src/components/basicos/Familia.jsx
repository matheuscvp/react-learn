import React, { cloneElement } from 'react';

export default function Familia(params) {

    return (
        <div>
            {
                React.Children.map((child, i) => {
                    return cloneElement(child, { ...params, key: i });
                })
            }
        </div>
    );
}