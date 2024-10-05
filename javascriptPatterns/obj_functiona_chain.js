function updateObject(obj, updateFn) {
  updateFn(obj);
  return obj;
}

// Example usage with an object:
let person = {
  name: "Alice",
  age: 30,
  skills: ["JavaScript", "Python"],
};

// Define some update functions
function incrementAge(obj) {
  obj.age += 1;
}

function addSkill(obj, skill) {
  obj.skills.push(skill);
}

function changeNameCase(obj) {
  obj.name = obj.name.toUpperCase();
}

// Use the updateObject function
person = updateObject(person, incrementAge);
console.log(person); // { name: "Alice", age: 31, skills: ["JavaScript", "Python"] }

// Chain multiple updates
person = updateObject(
  updateObject(person, (obj) => addSkill(obj, "TypeScript")),
  changeNameCase
);
console.log(person); // { name: "ALICE", age: 31, skills: ["JavaScript", "Python", "TypeScript"] }


// originalObjRef -> copiedLocalObj -> inPlaceModifiedObj -> returnObj
function updateObjectImmutable(obj, updateFn) {
  const newObj = { ...obj };
  updateFn(newObj);
  return newObj;
}

// object -> functionalObject -> chainedCalling -> returnedObj
function createUpdatableObject(obj) {
  return {
    update(updateFn) {
      updateFn(obj);
      return this;
    },
    value() {
      return obj;
    },
  };
}

const updatablePerson = createUpdatableObject(person);
const updatedPerson = updatablePerson
  .update(incrementAge)
  .update((obj) => addSkill(obj, "TypeScript"))
  .update(changeNameCase)
  .value();
