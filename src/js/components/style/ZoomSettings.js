import React, { Component } from 'react';
import $ from 'jquery';

class ZoomSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minZoomError: false,
            maxZoomError: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let style = this.props.style,
            isMinZoom = e.target.className.indexOf('minzoom') !== -1,
            newSyle = {},
            value = Number(e.target.value),
            error;

        if (isMinZoom) {
            let minZoomError = Number.isNaN(value) || value > this.props.style.MaxZoom;

            this.setState({
                minZoomError: minZoomError
            })

            if (!minZoomError) {
                newSyle.MinZoom = value;
            } else {
                return;
            }

        } else {
            let maxZoomError = Number.isNaN(value) || value < this.props.style.MinZoom;

            this.setState({
                maxZoomError: maxZoomError
            })

            if (!maxZoomError) {
                newSyle.MaxZoom = value;
            } else {
                return;
            }
        }

        console.log(newSyle);

        const extendedStyle = $.extend(true, this.props.style, newSyle);

        this.props.layer.setStyle(extendedStyle, this.props.index);
    }

    render() {
        let style = this.props.style,
            minZoomClassName = 'gmx-style-editor-input-small gmx-style-editor-minzoom' + (this.state.minZoomError ? ' gmx-style-editor-input-error' : ''),
            maxZoomClassName = 'gmx-style-editor-input-small gmx-style-editor-maxzoom' + (this.state.maxZoomError ? ' gmx-style-editor-input-error' : '');

        return (
            <div className='gmx-style-editor-zoom-settings'>
                <input className={minZoomClassName} defaultValue={this.props.style.MinZoom} onChange={this.handleChange}/>
                 - 
                <input className={maxZoomClassName} defaultValue={this.props.style.MaxZoom} onChange={this.handleChange}/>
            </div>
        );
    }
}

export { ZoomSettings };
