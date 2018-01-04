import React, { Component } from 'react';
import { Slider } from "@blueprintjs/core";

class SliderBlock extends Component {
    constructor(props) {
        super(props);
        this.state = props;
        this.handleSlideChange = this.handleSlideChange.bind(this);
        this.setSliderValue = this.setSliderValue.bind(this);
    }

    componentDidMount() {
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
            this.setState({inputValue: inputValue});
        }
    }

    handleSlideChange(e) {
        this.state.onChange(e);
        this.setSliderValue();
    }

    render() {
        return (
            <div className="slider-block">
                {this.props.txt}
                <Slider
                    className={'style-slider'}
                    min={-50}
                    max={50}
                    value={0}
                    renderLabel={false}
                    onChange={this.handleSlideChange}
                / >
                <input value={this.state.inputValue} onChange={this.handleSlideChange}/>
            </div>
        );
    }
}
export { SliderBlock };
