const INITIAL_STATE = {
    id: '',
    veiculo:'',
    marca: '',
    vendido: '',
    descricao: '',
    lista:[]
};

export function carrosReducer(state = INITIAL_STATE, action ){
    switch(action.type){
        case 'FETCH_CAR_DETAIL':
            return Object.assign({}, state, {
                id: action.payload.id,
                veiculo: action.payload.veiculo,
                marca: action.payload.marca,
                vendido: action.payload.vendido,
                descricao: action.payload.descricao
            });
        
        case 'LOAD_CARS':
            return Object.assign({}, state, {
                lista:state.lista.concat([action.payload])
            });
        default:
            return state;
    }
}