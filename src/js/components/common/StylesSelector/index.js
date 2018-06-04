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
        console.log('rendered in list');
        console.log(styles);
        let stylesPopover = (
            <StylesPopover
                layer={layer}
                styles={styles}
                currentStyleIndex={index}
                onChange={this.props.onChange}
            />
        );

        return (
                <Popover
                    onInteraction={this.onInteraction}
                    content={stylesPopover}
                    minimal={true}
                >
                <div className="gmx-style-editor-style-selector">
                    <CurrentStyle layer={layer} style={currentStyle} />
                    </div>
                </Popover>
        );
    }
}
export default StylesSelector;
