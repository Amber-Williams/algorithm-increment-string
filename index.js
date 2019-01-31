function incrementString (str) {
  let num = Number(str.match(/\d+$/gi));
  if(!num) {
    num = 1;
  } else {
    num++;
  }
 let restStr = str.replace(/\d+$/gi, '')
 return restStr + num.toString();
}

module.exports = incrementString;