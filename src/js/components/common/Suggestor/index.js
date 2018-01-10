import React, { Component } from 'react';
import { loadAttributes } from '../../../utils/attrsLoader';
import { SuggestorListValue } from './SuggestorListValue';

class Suggestor extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    getInitialState() {
        return {
            attrs: {
                'Улица': []
            }
        };
    }

    componentWillMount() {
        let gmxProps = this.props.layer.getGmxProperties && this.props.layer.getGmxProperties(),
            layerID = gmxProps.LayerID;

        loadAttributes(layerID)
            .then(data => this.setState({attrs: data.Result}));
    }

    render() {
        let attrs = this.props.columns.includes('attrs'),
            attrsBlock = "",
            operators = this.props.columns.includes('operators'),
            operatorsBlock = "",
            values = this.props.columns.includes('values'),
            valuesBlock = "";

        if (attrs) {
            attrs = this.state.attrs ? Object.keys(this.state.attrs).map((attr) =>
                <SuggestorListValue value={attr}/>
            ) : <li></li>;
            
            attrsBlock = <div className="gmx-suggest-list">
                            {attrs}
                        </div>;
        }

        if (operators) {
            let sqlOperators = ['=', '>', '<', '>=', '<=', '<>', 'AND', 'OR', 'NOT', 'IN', 'CONTAINS', 'CONTAINSIGNORECASE', 'BETWEEN', 'STARTSWITH', 'ENDSWITH'];
            operators = sqlOperators.map((operator) =>
                <SuggestorListValue key={operator} value={operator}/>
            );

            operatorsBlock = <div className="gmx-suggest-list">
                                {operators}
                            </div>;
        }


        return (
            <div>
                <textarea className="gmx-suggest-textarea"></textarea>
                {attrsBlock}
                {operatorsBlock}
            </div>
        )
    }
}

export { Suggestor };
