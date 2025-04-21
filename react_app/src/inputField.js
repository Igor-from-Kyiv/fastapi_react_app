import React, { useState } from 'react';

function InputField(props) {

    return (

        <div>
            <input 
                type='text'
                id='itemId'
                value={props.value}
                onChange={props.onChange} >
            </input>
        </div>
    );
};

export default InputField