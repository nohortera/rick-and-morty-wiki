export const fetchAllCharacters = async (page, filters) => {
    let queryString = ''

    for (let key in filters) {
        if (!filters[key]) continue
        queryString += `&${key}=${filters[key]}`
    }

    return await fetch(`https://rickandmortyapi.com/api/character?page=${page}${queryString}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject()
            }
            return res;
        })
        .then(res => res.json())
        .catch(error => ({error: 'There is nothing here'}))
}
