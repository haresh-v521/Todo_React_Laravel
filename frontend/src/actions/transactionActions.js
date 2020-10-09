export const insert = data => {
    return {
        type: 'INSERT',
        payload: data
    }
}

export const login = data => {
    return {
        type: 'LOGIN',
        payload: data
    }
}

export const registration = data => {
    return {
        type: 'REGISTRATION',
        payload: data
    }
}

export const addtodo = data => {
    return {
        type: 'ADDTODO',
        payload: data
    }
}

export const deletetodo = data => {
    return {
        type: 'DELETETODO',
        payload: data
    }
}

export const updatetodoIndex = data => {
    return {
        type: 'UPDATETODO',
        payload: data
    }

}

export const update = data => {
    return {
        type: 'UPDATE',
        payload: data
    }

}

export const Delete = id => {
    return {
        type: 'DELETE',
        payload: id
    }

}

export const updateIndex = index => {
    return {
        type: 'UPDATE-INDEX',
        payload: index
    }

}