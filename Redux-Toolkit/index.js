const store=require('./app/store');
const { cakeActions } = require('./feature/cake/cakeSlice');
const {iceCreamActions}=require('./feature/icecream/iceCreamSlice')
const {fetchUsers}=require('./feature/user/userSlice')

console.log('initial state',store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('updated value',store.getState());
})

store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(2))


unsubscribe()