const originalValues = [];

function wordToBinary(word) {
  const code = word.charCodeAt(0);
  return code;
}

const char = "A";
const code = wordToBinary(char);
console.log(code);

const obj = {
  value: 0,
  increment() {
    this.value++;
    return this;
  },
};

obj.increment();
obj.increment().increment();
console.log(obj.value);
