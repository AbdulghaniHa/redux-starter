import* as actions from './actoinTypes'

let lastId = 0;


export default function reducer(state = [], action){
    switch (action.type) {
        case action.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];            
         case action.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
         case action.BUG_RESOLVED:
            return state.map(bug => bug.id !== actions.payload.id ? bug : {...bug, resolve: true})
        default: 
        return state;
    }
}