export function setMember(data) {
  return {
    type: "SET_MEMBER",
    data
  }
}

export function logout() {
  return {
    type: "LOGOUT"
  }
}