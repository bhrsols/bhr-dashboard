export function saveLocalStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data))
}

export function getLocalStorageByKey(key: string) {
    return JSON.parse(localStorage.getItem(key)!)
}

export function getAllStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length

    while (i--) {
        values.push(localStorage.getItem(keys[i]))
    }

    return values
}

export function setCookie(key: string, value: string, days: number) {
    var expires = ''
    if (days) {
        var date = new Date()
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
        expires = '; expires=' + date.toUTCString()
    }
    document.cookie = key + '=' + (value || '') + expires + '; path=/'
}

export function getCookie(key: string) {
    var keyEQ = key + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') c = c.substring(1, c.length)
        if (c.indexOf(keyEQ) == 0) return c.substring(keyEQ.length, c.length)
    }
    return ''
}

export function delCookie(key: string) {
    document.cookie = key + '=; Max-Age=0'
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
