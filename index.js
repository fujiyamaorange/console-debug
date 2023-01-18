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
const info = {
  'userAgent': navigator['userAgent'],
  'language': navigator['language'],
  'onLine': navigator['onLine'],
}
console.table(info);

// time
console.time('counter');
let count = 0;
for (i = 0; i < 10000; i++) {
  count += 1
}
console.log(count);
console.timeEnd('counter');

// trace
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();

console.log('=====End=====');