const redux = require('redux')
const produce=require('immer').produce

const initialState = {
    name: 'sahil',
    address: {
        street: '1234 main street',
        city: 'London',
        country: 'England'
    },
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => {
    return{
        type:STREET_UPDATED,
        payload:street
    }
}

const reducer=(state=initialState,action) =>{

    switch (action.type) {
        case STREET_UPDATED:
            return produce(state,(draft)=>{
                draft.address.street=action.payload
            })
    
        default:
            return state
    }
}

const store= redux.createStore(reducer)
console.log('Initial Value',store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log('updated street',store.getState());
});
store.dispatch(updateStreet('4567 Main street'))

unsubscribe()