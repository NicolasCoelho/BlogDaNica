const months = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez'
]

export default function formatDate(value, format=1) {
    const date = new Date(value)
    let formated = ""
    switch(format) {
        case 1: 
        formated = date.toLocaleString()
            break;
        case 2:
            formated = `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`
    }
    return formated
}