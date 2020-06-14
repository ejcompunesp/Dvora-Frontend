export function setDuty(data) {
    return {
      type: "SET_DUTY",
      data
    }
  }

  export function finishDuty() {
    return {
      type: "FINISH"
    }
  }