//javascript Document

function $(v) {
    if (typeof v === 'function') {
        window.onload = v;
    } else if (typeof v === 'string') {
        return document.getElementById(v);
    } else if (typeof v === 'object') {
        return v;
    };
};