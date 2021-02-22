(() => {
  // src/Numbers/generateRandomInt.ts
  var generateRandomInteger = (min = 0, max = Number.MAX_SAFE_INTEGER) => {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      throw new TypeError(`Detected non Integer Input `);
    }
    if (min > max) {
      throw new RangeError(`Minimum ${min}, is greater than Maximum ${max}`);
    }
    const randomFactor = (max + 1 - min) * Math.random();
    return min + Math.floor(randomFactor);
  };

  // src/Numbers/Numbers.ts
  var Numbers = class {
  };
  Numbers.generateRandomInteger = generateRandomInteger;
})();
