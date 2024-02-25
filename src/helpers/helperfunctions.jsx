import path from "path-browserify";

const joinFilePath = (...args) => path.join(...args);

const getRandomNumber = (max = 3) => Math.floor(Math.random() * max);

export { getRandomNumber };
