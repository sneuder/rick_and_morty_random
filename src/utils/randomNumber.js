const randomNumber = (max = 600) => {
  const number = Math.floor(Math.random() * max) + 1;
  return number;
}

export default randomNumber;