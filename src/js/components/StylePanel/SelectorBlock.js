import React, { Component } from 'react';
import { StyleHOC } from './StyleHOC';

class SelectorBlock extends Component {
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
            <div className="slider-block gmx-style-editor-block-small">
                <span className="gmx-style-editor-label-small gmx-style-editor-left">{this.props.txt}</span>
                <input className="gmx-style-editor-input-small gmx-style-editor-right" value={this.state.inputValue} onChange={this.setSliderValue}/>
            </div>
        );
    }
}

export default StyleHOC(SelectorBlock);
