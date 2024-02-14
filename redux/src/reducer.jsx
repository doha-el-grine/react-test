const dbinit = {tcar: [{id: '1',
                        model: 'dacia',
                        marque: 'duster'},{id: '2',
                        model: 'dacia',
                        marque: 'duster'},{id: '3',
                        model: 'dacia',
                        marque: 'duster'}]};

const Reducer = (state = dbinit, action) => {
         switch (action.type) {
            case    "add":return {tcar: [...state.tcar, action.payload] };
            case "remove":return {tcar: [...state.tcar.filter(a => a.id !== action.payload)]};
            case "update":return {tcar: [...state.tcar.map(a => a.id === action.payload.id ? action.payload : a)]};
            case "search":return {tcar: [...state.tcar.filter((a)=>a.id===action.payload.id)]};
           
         default:
         return state; }
};
export default Reducer;


