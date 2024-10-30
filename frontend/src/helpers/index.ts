export function formatDate(dateStr: string) {
    const dateObj = new Date(dateStr)
    const options : Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return new Intl.DateTimeFormat('es-ES', options).format(dateObj)
}

export function formatCurrency( amount: number ) {
    return new Intl.NumberFormat('en-US', { style: "currency", currency: "USD" }).format(amount)
}