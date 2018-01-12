import React from 'react';

export const SuggestorListValue = (props) => (
    <div style={props.style} data-type={props.dataType} className={props.className} onClick={props.onClick} onDoubleClick={props.onDoubleClick}>
        {props.value}
    </div>
);
