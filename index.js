console.log('=====Start=====');

// assert
const wishToSuccess = () => {
  return Math.random() < 0.5
}
console.assert(wishToSuccess(), "失敗しました");

// log
console.info('info');
console.warn('warn');
console.error('error');

// dir
console.dir(document.location);

// table
const friends = [["John", "Smith"], ["Tom", "Brown"], ["Emily", "Watson"]]
console.table(friends);

console.log('=====End=====');