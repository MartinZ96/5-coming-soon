function socials(selector, data) {

    const DOM = document.querySelector(selector);
    let HTML = '';

    for (const social of data) {
        if (social.active) {
            HTML += `<a href="${social.href}" target="_blank" class="social fa fa-${social.icon}"></a>`;
        }
    }

    DOM.innerHTML += HTML;
}

export { socials }