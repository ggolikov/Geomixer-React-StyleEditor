import React from 'react';

export const ColorIcon = (props) => (
    <div className="colorIcon" title="Редактировать стили" style={props.style}>
        <div className="gmx-border-icon" style={props.iconBorderStyle}></div>
        <div className="gmx-fill-icon" style={props.iconFillStyle}></div>
    </div>
);
