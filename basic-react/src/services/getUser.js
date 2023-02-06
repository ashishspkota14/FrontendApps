async function getUser() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
//   const finalData = await data;
  return data;
}

export default getUser;
