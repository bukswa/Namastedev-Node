console.log("hello world!");

setTimeout(() => {
  console.log("this is set time out");
}, 3000);

setTimeout(() => {
  console.log("this is set time outwithout ms");
});

console.log("i am syncronous");
