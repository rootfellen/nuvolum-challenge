const titleEditor = (arr) => {
  const output = arr.split(" ");
  output.shift();
  return output.join(" ");
};

export default titleEditor;
