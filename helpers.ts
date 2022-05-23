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

export function clearStorage() {
    localStorage.clear()
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

export function clearCookies() {
    document.cookie = ''
}

export function clearStorageAndCookies() {
    clearStorage()
    clearCookies()
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export function generateUUID() {
    // Public Domain/MIT
    var d = new Date().getTime() //Timestamp
    var d2 =
        (typeof performance !== 'undefined' &&
            performance.now &&
            performance.now() * 1000) ||
        0 //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            var r = Math.random() * 16 //random number between 0 and 16
            if (d > 0) {
                //Use timestamp until depleted
                r = (d + r) % 16 | 0
                d = Math.floor(d / 16)
            } else {
                //Use microseconds since page-load if supported
                r = (d2 + r) % 16 | 0
                d2 = Math.floor(d2 / 16)
            }
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
        }
    )
}
