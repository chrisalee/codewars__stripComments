const solution = (input, markers) => {
  let results =  input.split('\n').map((line, index) => {
    markers.map(marker => {
      let position = line.indexOf(marker) !== -1 ? line.indexOf(marker) : null;
      line = position ? line.slice(0, position) : line;
    });
    return line.trim();
  }).join('\n'); 
  console.log(results);
  return results;
};
