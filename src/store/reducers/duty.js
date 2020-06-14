const INITIAL_STATE = {
    id: null,
    memberId: null,
    status: null,
    elapsedTime: null,
  }
  
  export default function duty(state = INITIAL_STATE, action) {
    if(action.type === "SET_DUTY") {
      const data = Object.assign(action.data.duty);
      console.log(data);
      console.log(state);
      return data;
    }
  
    if(action.type === "FINISH") 
        return INITIAL_STATE;
  
    return state;
  }