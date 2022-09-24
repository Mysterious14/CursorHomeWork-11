async function getRandomChinese(length) {
  let result = '';
  while (length) {
    let sign = new Promise((resolve) => {
      setTimeout(() => resolve(String.fromCharCode(Number(Date.now().toString().slice(-5)))), 50);
    });
    result += await sign;
    length--;
  }
  console.log(result);
}

getRandomChinese(4);
