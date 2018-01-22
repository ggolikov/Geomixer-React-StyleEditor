import React, { Component } from 'react';
import { Slider } from "@blueprintjs/core";
import { StyleHOC } from './StyleHOC';

class SliderBlock extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        this.handleSlideChange = this.handleSlideChange.bind(this);
        this.setSliderValue = this.setSliderValue.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            error: false
        });

        this.setSliderValue();
    }

    setSliderValue() {
        let param = this.state.param,
            inputValue = 0;

        // handle array param
        if (param.match(/\//gi)) {
            let paramArray = param.split('/'),
                paramIndex = paramArray[1],
                currentLayerStyle = this.state.style.RenderStyle,
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
            this.setState({
                sliderValue: inputValue,
                inputValue: inputValue
            });
        }
    }

    handleSlideChange(e) {
        this.setState({
            error: false
        });
        this.state.onChange(e);
        this.setSliderValue();
    }

    handleInputChange(e) {
        let num = Number(e.target.value);

        if (Number.isNaN(num) || num < -50 || num > 50) {
            this.setState({
                inputValue: e.target.value,
                error: true
            });
            return;
        }

        this.setState({
            error: false
        });

        this.handleSlideChange(num);
    }

    render() {
        let inputClassName = 'gmx-style-editor-input-small gmx-style-editor-minzoom' + (this.state.error ? ' gmx-style-editor-input-error' : '');

        return (
            <div className="slider-block gmx-style-editor-block-small">
                <span className="gmx-style-editor-label-small gmx-style-editor-left">{this.props.txt}</span>
                <Slider
                    className={'style-slider'}
                    min={-50}
                    max={50}
                    value={this.state.sliderValue}
                    renderLabel={false}
                    onChange={this.handleSlideChange}
                / >
                <input className={inputClassName} value={this.state.inputValue} onChange={this.handleInputChange}/>
            </div>
        );
    }
}

export default StyleHOC(SliderBlock);
