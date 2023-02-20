const regex = /\b(Apple)+\b/g;

const fruits = 'Apple, Banana Kiwi, Apple, Orange, etc., etc., etc.';

for (const match of fruits.matchAll(regex)) {
  console.log(match);
}