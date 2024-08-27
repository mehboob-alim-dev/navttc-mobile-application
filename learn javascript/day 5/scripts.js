// Primitive data type
// string methods
const text = "        Lorem ipsum dolor sit amet. Lorem ipsum            "
document.write(`<p>${text.toUpperCase()}</p>`)
console.log(text.length);
console.log(text[0].toLowerCase());
console.log(text.charAt(4));
console.log(text.charCodeAt(4));
console.log(text.concat("testing"));
console.log(text + "testing");
 
console.log(text.trim())
console.log(text.trimEnd())
console.log('slice',text.trim().slice(3,7))
console.log("repeat",text.repeat(3).trim().length)
console.log("replace",text.replace("Lorem","Testing"))
console.log("replace",text.replaceAll("Lorem","Testing"))
let stringName = "test user";
console.log("name",stringName.split(" ").reverse().join("-"))
let myNum = 123;
myNum = myNum.toString().padStart(4,"0")
document.write(myNum)
let string = "50";
string = string.padStart(4,"0");
console.log("pad start", string)
string = string.padEnd(4,"0");
console.log("pad end", string)

