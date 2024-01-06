import * as actions from './actoinTypes'

export default function bugAdded(description) {
    console.log(description)
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: description
        }
    }
}
//allways curry < 3
// export const bugAdded = (description) => 
// ({
//     type: actions.BUG_ADDED,
//         payload: {
//            description: description
//         }
// })


export const bugResolved = id =>
({
    type: actions.BUG_RESOLVED,
        payload:{
            id
        }
})
