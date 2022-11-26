export const getFromStorage = () => {
    const data = JSON.parse(localStorage.getItem('watchList'))
    if (!data) return []
    return data
}

export const updateStorage = (watchList) => {
    localStorage.setItem('watchList', JSON.stringify(watchList))
}
