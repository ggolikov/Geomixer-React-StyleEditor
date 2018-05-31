import React, { Component } from 'react';
import StyleSelectorItem from './StyleSelectorItem';
import StyleSelectorHandlersPanel from './StyleSelectorHandlersPanel';
import { createDefaultStyle } from '../../../utils';

class StylesPopover extends Component {
    constructor(props) {
        super(props);

        this.state = {
            styles: props.styles,
            currentStyleIndex: props.currentStyleIndex
        }
    }

    onStyleClick = (e, index) => {
        let data = {
            currentStyleIndex: index
        };
        this.setState({currentStyleIndex: index});
    }

    handleChange = (e) => {
        let data = {
            currentStyleIndex: this.state.currentStyleIndex
        };
        this.setState({currentStyleIndex: null});
        this.props.onChange(e, data);
    }

    addStyle = () => {
        this.props.styles.push(createDefaultStyle());
        this.setState({styles: this.props.styles});
    }

    render() {
        let { layer } = this.props,
            { styles, currentStyleIndex } = this.state,
            currentStyle = styles[currentStyleIndex],
            onStyleClick = this.onStyleClick.bind(this);

        let stylesItems = styles.map((style, index) => {
                let isCurrent = style === currentStyle;
                
                return <StyleSelectorItem
                        key={style.Filter}
                        layer={layer}
                        style={style}
                        index={index}
                        isCurrent={isCurrent}
                        onStyleClick={this.onStyleClick}
                    />;
        });

        return (
            <div>
                {stylesItems}
                <StyleSelectorHandlersPanel
                    onAdd={this.addStyle}
                    onClose={this.handleChange}
                />
            </div>
        );
    }
}
export default StylesPopover;
