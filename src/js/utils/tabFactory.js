function createTab ({ icon, active, inactive, hint }) {
    return (state) => {
        const el = document.createElement('div');
        el.classList.add('tab-icon');
        const tabEl = document.createElement('div');
        el.appendChild(tabEl);

        hint && el.setAttribute('title', hint);
        tabEl.classList.add(icon);
        if (state === 'active') {
            tabEl.classList.add(active);
            el.classList.add('tab-icon-active');
        }
        else {
            tabEl.classList.add(inactive);
        }
        return el;
    }
}

export { createTab };
