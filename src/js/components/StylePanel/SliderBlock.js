import React, { Component } from 'react';
import { Slider } from "@blueprintjs/core";
import { StyleHOC } from './StyleHOC';

class SliderBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            value: 0
        };
    }

    componentDidMount() {
        this.setSliderValue();
    }

    setSliderValue = () => {
        let { param, style }= this.props,
            inputValue = 0;

        // handle array param
        if (param.match(/\//gi)) {
            let paramArray = param.split('/'),
                paramIndex = paramArray[1],
                currentLayerStyle = style.RenderStyle,
                currentLabelAnchorStyle, newlabelAnchorStyle;

            if ('labelAnchor' in currentLayerStyle && Array.isArray(currentLayerStyle.labelAnchor)) {
                currentLabelAnchorStyle = currentLayerStyle.labelAnchor;
            } else if ('marker' in currentLayerStyle && typeof currentLayerStyle.marker === "object") {
                currentLabelAnchorStyle = [currentLayerStyle.marker.dx, currentLayerStyle.marker.dy];
            } else {
                currentLabelAnchorStyle = [0, 0];
            }

            param = paramArray[0];
            inputValue = currentLabelAnchorStyle[paramIndex];
            if (!this.state.error) {
                this.setState({
                    value: inputValue,
                    sliderValue: inputValue
                });
            }
        }
    }

    handleSlideChange = (e) => {
        this.props.onChange(e);
        this.setSliderValue();
    }

    handleInputChange = (e) => {
        let num = Number(e.target.value);

        if (e.target.value === '' || Number.isNaN(num) || num < -50 || num > 50) {
            this.setState({
                value: e.target.value,
                error: true
            });
            return;
        } else {
            this.setState({
                value: num,
                error: false
            });
        }
        // this.props.onChange(num);

        this.handleSlideChange(num);
    }

    getInputClassName = () => {
        let num = Number(this.state.value),
            className = 'gmx-style-editor-input-small gmx-style-editor-right';

        if (this.state.error) {
            className += ' gmx-style-editor-input-error';
        }

        return className;
    }

    render() {
        return (
            <div className="slider-block gmx-style-editor-block-small">
                <span className="gmx-style-editor-label-small gmx-style-editor-left">{this.props.txt}</span>
                <Slider
                    className={'style-slider'}
                    min={-50}
                    max={50}
                    value={this.state.sliderValue}
                    labelRenderer={false}
                    onChange={this.handleSlideChange}
                / >
                <input
                    type="number"
                    min={-50}
                    max={50}
                    className={this.getInputClassName()} value={this.state.value} onChange={this.handleInputChange}/>
            </div>
        );
    }
}

export default StyleHOC(SliderBlock);
