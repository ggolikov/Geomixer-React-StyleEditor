import React, { Component } from 'react';
import StyleSelectorItem from './StyleSelectorItem';
import StylesPopover from './StylesPopover';
import CurrentStyle from './CurrentStyle';
import { Popover, PopoverInteractionKind } from '@blueprintjs/core';
import './index.css';

class StylesSelector extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onChange(e);
    }

    toggleStylesList = () => {
        this.setState({
            stylesListShown: !this.state.stylesListShown
        })
    }

    onInteraction = (e) => {
        console.log('a');
    }

    render() {
        const { layer, styles, index } = this.props,
            currentStyle = styles[index];

        let stylesPopover = (
            <StylesPopover
                layer={layer}
                styles={styles}
                currentStyleIndex={index}
                onChange={this.props.onChange}
            />
        );

        return (
            <div className="gmx-style-editor-style-selector">
                <Popover
                    onClose={function () {debugger;}}
                    onInteraction={this.onInteraction}
                    content={stylesPopover}
                    minimal={true}
                >
                    <CurrentStyle style={currentStyle} />
                </Popover>
            </div>
        );
    }
}
export default StylesSelector;
