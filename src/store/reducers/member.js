const INITIAL_STATE = {
  id: null,
  name: null,
  image: null,
  email: null,
  board: null,
  position: null,
  dutyDate: null,
  dutyTime: null,
}

export default function member(state = INITIAL_STATE, action) {
  if(action.type === "SET_MEMBER") {
    const data = Object.assign(action.data.member, { token: action.data.token });
    return data;
  }

  if(action.type === "LOGOUT") return INITIAL_STATE;

  return state;
}