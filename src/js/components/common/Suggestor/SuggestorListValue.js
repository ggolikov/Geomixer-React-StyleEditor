import React from 'react';

export const SuggestorListValue = (props) => (
    <div className="gmx-suggest-list-value" onClick={props.onClick}>
        {props.value}
    </div>
);
