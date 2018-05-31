import React, { Component } from 'react';
import styleEditor from '../../StyleEditor';
import _ from 'underscore';

class ZoomSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minZoomError: false,
            maxZoomError: false
        }
    }

    handleChange = (e) => {
        let { layer, style, index } = this.props,
            isMinZoom = e.target.className.indexOf('minzoom') !== -1,
            extendingStyle = {},
            value = Number(e.target.value),
            error;

        if (isMinZoom) {
            let minZoomError = Number.isNaN(value) || value > style.MaxZoom;

            this.setState({
                minZoomError: minZoomError
            })

            if (!minZoomError) {
                extendingStyle.MinZoom = value;
            } else {
                return;
            }

        } else {
            let maxZoomError = Number.isNaN(value) || value < style.MinZoom;

            this.setState({
                maxZoomError: maxZoomError
            })

            if (!maxZoomError) {
                extendingStyle.MaxZoom = value;
            } else {
                return;
            }
        }

        console.log(extendingStyle);

        style = _.extend(style, extendingStyle);

        styleEditor.setStyle(layer, style, index);
    }

    render() {
        let { style } = this.props,
            { minZoomError, maxZoomError } = this.state,
            minZoomClassName = 'gmx-style-editor-input-small gmx-style-editor-minzoom' + (minZoomError ? ' gmx-style-editor-input-error' : ''),
            maxZoomClassName = 'gmx-style-editor-input-small gmx-style-editor-maxzoom' + (maxZoomError ? ' gmx-style-editor-input-error' : '');

        return (
            <div className='gmx-style-editor-zoom-settings'>
                <input type="number" className={minZoomClassName} defaultValue={style.MinZoom} onChange={this.handleChange}/>
                 -
                <input type="number" className={maxZoomClassName} defaultValue={style.MaxZoom} onChange={this.handleChange}/>
            </div>
        );
    }
}

export { ZoomSettings };
