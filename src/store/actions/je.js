export function setJe(data) {
  return {
    type: "SET_JE",
    data,
  }
}

export function logout() {
  return {
    type: "LOGOUT"
  }
}