import React from 'react';

export const ColorIcon = (props) => (
    <div className="colorIcon" title="Редактировать стили" style={props.style}>
        <div className="borderIcon" style={props.iconBorderStyle}></div>
        <div className="fillIcon" style={props.iconFillStyle}></div>
    </div>
);
