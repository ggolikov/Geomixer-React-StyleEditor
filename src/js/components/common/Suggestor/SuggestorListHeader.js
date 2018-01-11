import React from 'react';

export const SuggestorListHeader = (props) => (
    <div className={"gmx-suggest-list-header"} onClick={props.onClick}>
        {props.value}
    </div>
);
