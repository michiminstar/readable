export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp)
  return date.toUTCString()
}

export function generateID() {
  function random() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return random()
}
