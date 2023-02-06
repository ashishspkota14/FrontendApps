async function getCountry(name) {
  const jsonData = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const myCountry = await jsonData.json();
  return myCountry;
}

// const myCountry = fetch("https://restcountries.com/v3.1/name/usa")
//   .then((res) => res.json())
//   .then((data) => data);

export default getCountry;
// export default myCountry;


console.log(squareSort([-4, 1, -5, 6]));