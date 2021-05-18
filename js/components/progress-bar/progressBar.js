function progressBar(selector, data){


    const DOM = document.querySelector(selector);
    let HTML = '';

    for (const progress of data){
        HTML += `<div class="progress-bar">
    <div class = "top"></div>
        <div class = "label">${progress.label}</div>
        <div class = "value">${progress.value}</div>
    </div>
    <div class = "bottom">
        <div class = "progress"></div>
        </div>
    </div>`;
    }


    DOM.innerHTML = HTML;
}

export { progressBar }
