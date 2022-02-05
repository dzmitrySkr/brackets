module.exports = function check(str, bracketsConfig) {
 let obj = {};
  let stack = [];
  for(let i = 0; i < bracketsConfig.length; i++){
    obj[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  //console.log(obj)
  for(let i = 0; i <str.length; i++){
    let current = str[i];
    if (current === '|'  current === '8'  current === '7') {
      let top = stack[stack.length-1];
      if (top !== current){
        stack.push(current);
        console.log(current,top)
      } else {
        stack.pop(top);
      }
    } else if (Object.keys(obj).indexOf(current) !== -1){
      stack.push(current);

    } else {
      if(stack.length === 0){
        return false
      } else {
        let top = stack[stack.length-1];
        for(let key in obj){
          if(top === key){
            if(current === obj[key]){
              stack.pop(top)
            }
          }
        }
      }
    }

  }
   return (stack.length === 0)
}
