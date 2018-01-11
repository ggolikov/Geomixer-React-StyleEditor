import React, { Component } from 'react';
import { SuggestorListHeader } from './SuggestorListHeader';
import { SuggestorListValue } from './SuggestorListValue';
import $ from 'jquery';

class Suggestor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAttribute: '',
            hideSuggestions: true
        };

        this.hideSuggestions = this.hideSuggestions.bind(this);
        this.onAttributeClick = this.onAttributeClick.bind(this);
        this.generateList = this.generateList.bind(this);
        this.clearSelectedAttribute = this.clearSelectedAttribute.bind(this);
    }

    hideSuggestions() {
        this.setState({hideSuggestions: !this.state.hideSuggestions});
    }

    onAttributeClick(e) {
        let attrValue = e.target.innerText;

        this.setState({
            selectedAttribute: attrValue
        });
    }

    clearSelectedAttribute() {
        this.setState({
            selectedAttribute: ''
        });
    }

    generateList(array, type, text) {
        let selected =
        array = array.map((item) =>
            <SuggestorListValue className={(type !== 'attrs' || item !== this.state.selectedAttribute) ? "gmx-suggest-list-value" : "gmx-suggest-list-value gmx-suggest-list-value-selected"} key={item} value={item} onClick={type === 'attrs' ? this.onAttributeClick : null}/>
        );

        array.unshift(<SuggestorListHeader value={window._gtxt(text)} onClick={this.hideSuggestions}/>);

        return (
            <div className="gmx-suggest-list" >
                {array}
            </div>
        )
    }

    render() {
        let attrs = this.props.columns.includes('attrs'),
            attrsBlock = "",
            operators = this.props.columns.includes('operators'),
            operatorsBlock = "",
            values = this.props.columns.includes('values'),
            valuesBlock = "";

        if (attrs) {
            attrsBlock = this.props.attrs ? this.generateList(Object.keys(this.props.attrs), 'attrs') : <div></div>;
        }

        if (operators) {
            let sqlOperators = ['=', '>', '<', '>=', '<=', '<>', 'AND', 'OR', 'NOT', 'IN', 'CONTAINS', 'CONTAINSIGNORECASE', 'BETWEEN', 'STARTSWITH', 'ENDSWITH'];
            operatorsBlock = this.generateList(sqlOperators, 'operators');
        }

        if (values) {
            if (this.props.attrs && this.state.selectedAttribute in this.props.attrs) {
                let valuesArr = this.props.attrs[this.state.selectedAttribute];

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
                <textarea className={"gmx-suggest-textarea"} onClick={this.clearSelectedAttribute}></textarea>
                <div className={"gmx-suggest-list-header-container"} onClick={this.hideSuggestions} >
                    <SuggestorListHeader value={window._gtxt('Колонки')} />
                    <SuggestorListHeader value={window._gtxt('Операторы')} />
                    <SuggestorListHeader value={window._gtxt('Значения')} />
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

export { Suggestor };
