import React, { Component } from 'react';
import { SuggestorListValue } from './SuggestorListValue';
import $ from 'jquery';
import { insertAtCursor } from '../../../utils';
import { SuggestorHOC } from './SuggestorHOC';
import sqlOperators from './sqlOperators';
import './index.css';

class Suggestor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listStyle: {
                width: 100 / this.props.columns.length + '%'
            },
            selectedAttribute: '',
            hideSuggestions: true
        };
    }

    hideSuggestions = () => {
        this.setState({hideSuggestions: !this.state.hideSuggestions});
    }

    insertValue = (e) => {
        let { attrsValueWrapper } = this.props;

        insertAtCursor(e, attrsValueWrapper, this.textArea);
    }

    onAttributeClick = (e) => {
        let attrValue = e.target.innerText;

        this.setState({
            selectedAttribute: attrValue
        });
    }

    clearSelectedAttribute = () => {
        this.setState({
            selectedAttribute: ''
        });
    }

    generateList = (array, type, text) => {
        array = array.map((item) =>
            <SuggestorListValue
                className={(type !== 'attrs' || item !== this.state.selectedAttribute) ? "gmx-suggest-list-value" : "gmx-suggest-list-value gmx-suggest-list-value-selected"}
                key={item}
                value={item}
                dataType={type}
                onClick={type === 'attrs' ? this.onAttributeClick : null}
                onDoubleClick={this.insertValue}/>
        );

        return (
            <div className="gmx-suggest-list" style={this.state.listStyle}>
                {array}
            </div>
        );
    }

    render() {
        let attrs = this.props.columns.includes('attrs'),
            attrsHeaderBlock,
            attrsBlock,
            operators = this.props.columns.includes('operators'),
            operatorsHeaderBlock,
            operatorsBlock,
            values = this.props.columns.includes('values'),
            valuesHeaderBlock,
            valuesBlock;

        if (attrs) {
            attrsHeaderBlock = <SuggestorListValue className={"gmx-suggest-list-header"} value={window._gtxt('Колонки')} style={this.state.listStyle} />,
            attrsBlock = this.props.attrs ? this.generateList(Object.keys(this.props.attrs), 'attrs') : <div></div>;
        }

        if (operators) {
            operators = ['=', '>', '<', '>=', '<=', '<>', 'AND', 'OR', 'NOT', 'IN', 'CONTAINS', 'CONTAINSIGNORECASE', 'BETWEEN', 'STARTSWITH', 'ENDSWITH'],
            operatorsHeaderBlock = <SuggestorListValue className={"gmx-suggest-list-header"}value={window._gtxt('Операторы')} style={this.state.listStyle} />,
            operatorsBlock = this.generateList(sqlOperators, 'operators');
        }

        if (values) {
            valuesHeaderBlock = <SuggestorListValue className={"gmx-suggest-list-header"} style={this.state.listStyle} value={window._gtxt('Значения')} />;
            if (this.props.attrs && this.state.selectedAttribute in this.props.attrs) {
                let valuesArr = this.props.attrs[this.state.selectedAttribute].slice();

                if (typeof valuesArr[0] === 'number') {
                    valuesArr = valuesArr.map(v => Number(v)).sort((a, b) => b - a);
                }

                valuesArr = this.props.valuesLimit ? valuesArr.splice(0, this.props.valuesLimit) : valuesArr;
                valuesBlock = this.generateList(valuesArr, 'values');
            } else {
                valuesBlock = <div></div>;
            }
        }

        return (
            <div>
                <textarea defaultValue={this.props.defaultValue} ref={(textarea) => { this.textArea = textarea; }} className={"gmx-suggest-textarea"} onChange={this.props.onChange}></textarea>
                <div className={"gmx-suggest-list-header-container"} onClick={this.hideSuggestions} >
                    {attrsHeaderBlock}
                    {operatorsHeaderBlock}
                    {valuesHeaderBlock}
                </div>
                <div className={this.state.hideSuggestions ? "gmx-suggest-list-container" : "gmx-suggest-list-container gmx-suggest-list-container-hidden"}>
                    {attrsBlock}
                    {operatorsBlock}
                    {valuesBlock}
                </div>
            </div>
        )
    }
}

export default SuggestorHOC(Suggestor);
