const INITIAL_STATE = {
  city: null,
  createdAt: null,
  creationYear: null,
  email: null,
  id: null,
  image: null,
  name: null,
  university: null,
  updatedAt: null,
};

export default function je(state = INITIAL_STATE, action) {
  if (action.type === "SET_JE") {
    const data = Object.assign(action.data.je, { token: action.data.token });
    return data;
  }

  if (action.type === "LOGOUT") return INITIAL_STATE;

  return state;
}
