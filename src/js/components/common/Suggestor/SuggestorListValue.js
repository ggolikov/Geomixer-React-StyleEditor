import React from 'react';

export const SuggestorListValue = (props) => (
    <div style={props.style}
        className={props.className}
        title={props.value} 
        data-type={props.dataType}
        onClick={props.onClick}
        onDoubleClick={props.onDoubleClick}
    >
        {props.value}
    </div>
);
