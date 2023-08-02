export const reducer = (state, action) => {
    switch (action.type) {
    case "FETCH_DATA": 
        return{
            ...state,
            data: action.payload,
            filteredData: action.payload
        }
    case "UPDATE":
        return{
            ...state,
            
            filteredData: action.payload
        }
    

      default:
        return state;
    }
  };
  