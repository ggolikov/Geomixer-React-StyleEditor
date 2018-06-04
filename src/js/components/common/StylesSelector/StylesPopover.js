import React, { Component } from 'react';
import StyleSelectorItem from './StyleSelectorItem';
import StyleSelectorHandlersPanel from './StyleSelectorHandlersPanel';
import styleEditor from '../../../StyleEditor';

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
            type: 'changeCurrent',
            index: this.state.currentStyleIndex
        };

        this.setState({currentStyleIndex: null});
        this.props.onChange(e, data);
    }

    addStyle = (e) => {
        let data = {
            type: 'addStyle'
        };
        this.props.onChange(e, data);
    }

    removeStyle = (index) => {
        if (!index && index !== 0) {return};
        let data = {
            type: 'removeStyle',
            index: index
        };
        this.props.onChange(null, data);

        this.setState({
            currentStyleIndex: null
        });
    }

    render() {
        let { layer, styles } = this.props,
            { currentStyleIndex } = this.state,
            currentStyle = styles[currentStyleIndex],
            itemCurrent = currentStyleIndex !== null && typeof currentStyleIndex !== 'undefined',
            onStyleClick = this.onStyleClick.bind(this);

        let stylesItems = styles.map((style, index) => {
                let isCurrent = style === currentStyle;

                return <StyleSelectorItem
                        key={style.Name || style.Filter}
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
                    styles={styles}
                    itemCurrent={itemCurrent}
                    onAdd={this.addStyle}
                    onRemove={() => {this.removeStyle(currentStyleIndex)}}
                    onClose={this.handleChange}
                />
            </div>
        );
    }
}
export default StylesPopover;
