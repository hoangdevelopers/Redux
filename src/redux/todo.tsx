interface initState {
    items: string[]
    todo: string
}
type Action = {
    type: string,
    payload?: number
}
const initState = {
    items: []
}
// REDUCER
const reducer = (state = initState, action: Action) => {
    switch ( action.type ) {
        default: 
            return state;
    }
}
export default reducer