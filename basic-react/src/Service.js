import checkBrackets from "./utils/isValid";

console.log(checkBrackets("())"));

// export function Service() {
//   return <div> I am from Service.js</div>;
// }

function FirstService() {
  return <div> I am from first Service</div>;
}

export function SecondService() {
  return <div> I am from Second Service</div>;
}

export default FirstService;
// export default SecondService; //invalid
