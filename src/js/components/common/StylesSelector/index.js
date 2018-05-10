import React, { Component } from 'react';
import StyleSelectorItem from './StyleSelectorItem';
import StylesPopover from './StylesPopover';
import CurrentStyle from './CurrentStyle';
import { Popover, PopoverInteractionKind } from '@blueprintjs/core';

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

    render() {
        const { layer, styles, index } = this.props,
            currentStyle = styles[index];

        let stylesPopover = (
            <StylesPopover
                styles={styles}
                currentStyleIndex={index}
                onChange={this.props.onChange}
            />
        );



        return (
            <div className="gmx-style-editor-style-selector">
                <Popover content={stylesPopover}>
                    <CurrentStyle style={currentStyle} />
                </Popover>
            </div>
        );
    }
}
export default StylesSelector;
