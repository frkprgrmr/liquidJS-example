import { faker } from "@faker-js/faker";

export type Person = {
  name: string;
  gender: string;
  age: number;
  address: string;
};

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Person => {
  return {
    name: faker.person.fullName(),
    age: faker.number.int(40),
    gender: faker.person.sex(),
    address: faker.location.city(),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
      };
    });
  };

  return makeDataLevel();
}
