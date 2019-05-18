import React from 'react';

export default function ALiveFoot(props) {
    return(
        <div className='item'>
            <img src={props.logo} alt={props.name + 'logo'} />
            <div> className=''>
                <h2>{props.name}</h2>
            </div>
        </div>
    );
}
