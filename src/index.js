module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  else return matrix.reduce( (acc, curr, i) => {
    return acc.concat( (!(i % 2) ? curr : curr.reverse()) );
  }, []);
};

