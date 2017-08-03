const nsGmx = window.nsGmx || {};

const parseRawTree = function (node) {
    if (node.type === 'layer') {
        let props = node.content.properties,
            styles = props.styles;

        return {
            type: 'layer',
            key: props.name,
            title: props.title,
            source: props.dataSource,
            children: styles.map((st, i) => {
                return {
                    type: 'filter',
                    key: props.name + i,
                    title: st.Filter || 'Стиль ' + i,
                    source: props.dataSource
                }
            })
        }
    }

    if (node.type === 'group') {
        let props = node.content.properties,
            children = node.content.children;

        return {
            type: 'group',
            key: props.GroupID,
            title: props.title,
            source: props.dataSource,
            children: children
        }
    }
}

export { parseRawTree };
