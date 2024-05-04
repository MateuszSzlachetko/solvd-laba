const code = multiline`
function add(a, b) {
return a + b;
}
`;

console.log(code);
// Expected:
// "1 function add(a, b) {
//  2 return a + b;
//  3 }"

function multiline(strings) {
  const lines = strings[0].split('\n');
  console.log(lines)
  let result = '';
  let lineNumber = 0;

  lines.forEach((line,index) => {
    // print all the lines excluding the first and last one, if they are empty
    if (line.length > 0 || (index > 0 && index < lines.length - 1)) {
      result += `${++lineNumber} ${line}\n`;
    }
  });
  return result.trim();
}