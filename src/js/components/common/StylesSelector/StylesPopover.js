import React, { Component } from 'react';
import StyleSelectorItem from './StyleSelectorItem';
import StyleSelectorHandlersPanel from './StyleSelectorHandlersPanel';

class StylesPopover extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStyleIndex: props.currentStyleIndex
            // currentStyle: null
        }
    }

    handleMouseMove = (e) => {
        this.setState({
            currentStyle: null
        })
    }

    onStyleClick = (e) => {
        console.log(e.target);
    }

    handleChange = (e) => {
        let data = {
            currentStyleIndex: this.state.currentStyleIndex
        };
        this.props.onChange(e, data);
    }

    render() {
        const { styles } = this.props,
            { currentStyleIndex } = this.state,
            currentStyle = styles[currentStyleIndex];

        const stylesItems = styles.map(function (style, index) {
            console.log(this);
            var isCurrent = style === currentStyle;
            return <StyleSelectorItem key={style.Filter} layer={layer} style={style} index={index} isCurrent={isCurrent}/* onClick={this.onStyleClick}*//>;
        });

        return (
            <div>
                {stylesItems}
                <StyleSelectorHandlersPanel onClick={this.handleChange}/>
            </div>
        );
    }
}
export default StylesPopover;
