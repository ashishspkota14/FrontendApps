function checkBrackets(str) {
  const stack = [];
  const mappedPair = {
    "(": ")",

    "{": "}",

    "[": "]",
  };

  for (let i = 0; i < str.length; i++) {
    const currentBracket = str[i];

    if (
      currentBracket === "(" ||
      currentBracket === "{" ||
      currentBracket === "["
    ) {
      stack.push(currentBracket);
    } else {
      const openingBracket = stack.pop();

      if (currentBracket !== mappedPair[openingBracket]) {
        return "invalid";
      }
    }
  }

  if (stack.length !== 0 || str.length === 0) {
    return "invalid";
  }

  return "valid";
}

export default checkBrackets;
