let text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit Consectetur. Lorem ipsum consectetur. lorem iptur";
// slice start and position before slice end
console.log(text.slice(28,39))
console.log(text.indexOf("consectetur"));
console.log(text.indexOf("consectetur",30));
console.log(text[70]);
console.log(text.lastIndexOf("consectetur"))
console.log(text.lastIndexOf("consectetur",30))

console.log(text.search(/Consectetur/gi))

console.log("match",text.match("tur")[0])
console.log("match",text.match(/Con/g))
console.log("match",text.match(/tur/gi))
// console.log("match all",Array.from(text.matchAll("con")))

console.log(text.includes("lorem"))
console.log(text.includes("fhhfkjgjg"))

console.log(text.startsWith("Lorem"))
console.log(text.endsWith("iptur"))

// string literal

const productA = 250;
const productB = 500;
console.log(`total price ${productA + productB}`)

let myNum = 12.65646
const typeConversion = myNum.toString();
console.log(typeof myNum.toString());
console.log(typeof typeConversion);
console.log(myNum.toFixed(2));
console.log(myNum.toFixed(4));
console.log(myNum.toExponential(2));