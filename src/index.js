import bugAdded, { bugResolved } from "./actoions"
import store from './store'


store.dispatch(bugAdded('xD'));
store.dispatch(bugResolved(1));



console.log(store)