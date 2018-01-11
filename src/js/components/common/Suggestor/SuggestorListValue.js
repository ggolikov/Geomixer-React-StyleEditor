import React from 'react';

export const SuggestorListValue = (props) => (
    <div className={props.className} onClick={props.onClick}>
        {props.value}
    </div>
);
