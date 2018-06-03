import reactTriggerChange from 'react-trigger-change';

const insertAtCursor = (e, attrsValueWrapper, textArea, type) => {
    let value = e.target.innerText || e.target.value;

    type = type || e.target.getAttribute('data-type');

    if (type === 'attrs') {
        if (attrsValueWrapper === 'brackets') {
            value = `[${value}]`;
        } else if (attrsValueWrapper === 'quotes') {
            value = `"${value}"`;
        }
    }

    value = value + ' ';

    if (document.selection) {
        textArea.focus();
        let sel = document.selection.createRange();
        sel.text = value;
    } else if (textArea.selectionStart || textArea.selectionStart == '0') {
        let startPos = textArea.selectionStart,
            endPos = textArea.selectionEnd;

        textArea.value = textArea.value.substring(0, startPos) + value + textArea.value.substring(endPos, textArea.value.length);
    } else {
        textArea.value += myValue;
    }

    reactTriggerChange(textArea);
};

export default insertAtCursor;
