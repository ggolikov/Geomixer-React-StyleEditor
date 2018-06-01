import React from 'react';

export const ColorIcon = (props) => {
    const { geometryType } = props,
        isLine = geometryType === 'linestring',
        icon = isLine ? (
            <div className="colorIcon" title="Редактировать стили" style={props.style}>
                <div className="gmx-line-icon" style={props.lineIconStyle}></div>
            </div>
        ) : (
            <div className="colorIcon" title="Редактировать стили" style={props.style}>
                <div className="gmx-border-icon" style={props.iconBorderStyle}></div>
                <div className="gmx-fill-icon" style={props.iconFillStyle}></div>
            </div>
        );

    return icon;
};
