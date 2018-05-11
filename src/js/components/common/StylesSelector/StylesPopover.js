import React, { Component } from 'react';
import StyleSelectorItem from './StyleSelectorItem';
import StyleSelectorHandlersPanel from './StyleSelectorHandlersPanel';

class StylesPopover extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStyleIndex: props.currentStyleIndex
        }
    }

    onStyleClick = (e, index) => {
        let data = {
            currentStyleIndex: index
        };
        this.setState({currentStyleIndex: index});
        // this.props.onChange(e, data);
    }

    handleChange = (e) => {
        let data = {
            currentStyleIndex: this.state.currentStyleIndex
        };
        this.setState({currentStyleIndex: null});
        this.props.onChange(e, data);
    }

    render() {
        let { layer, styles } = this.props,
            { currentStyleIndex } = this.state,
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
                <StyleSelectorHandlersPanel onClick={this.handleChange}/>
            </div>
        );
    }
}
export default StylesPopover;
