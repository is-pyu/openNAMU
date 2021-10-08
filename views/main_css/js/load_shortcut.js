let shortcut_key_list = [];
document.onkeyup = function(e) {
    delete shortcut_key_list[e.key];
}

document.onkeypress = function(e) {
    let doc_shortcut = /^\/(w|history)\//i;
    
    shortcut_key_list[e.key] = 1;
    if(
        window.location.pathname.match(doc_shortcut) ||
        window.location.pathname === '/recent_change' ||
        window.location.pathname === '/recent_changes' ||
        window.location.pathname === '/recent_discuss'
    ) {
        if(shortcut_key_list['f'] === 1) {
            window.location.href = '/';
        } else if(shortcut_key_list['c'] === 1) {
            window.location.href = '/recent_change';
        } else if(shortcut_key_list['d'] === 1) {
            window.location.href = '/recent_discuss';
        } else if(shortcut_key_list['a'] === 1) {
            window.location.href = '/random';
        }
    }
    
    if(window.location.pathname.match(doc_shortcut)) {
        if(shortcut_key_list['w'] === 1) {
            window.location.pathname = window.location.pathname.replace(doc_shortcut, '/w/');
        } else if(shortcut_key_list['e'] === 1) {
            window.location.pathname = window.location.pathname.replace(doc_shortcut, '/edit/');
        } else if(shortcut_key_list['h'] === 1) {
            window.location.pathname = window.location.pathname.replace(doc_shortcut, '/history/');
        }
    }
}