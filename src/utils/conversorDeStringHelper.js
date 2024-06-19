module.exports = (objetoParams) => {
  for (let proriedade in objetoParams) {
    if (/Id|id/.test(proriedade)) {
      objetoParams[proriedade] = Number(objetoParams[proriedade]);
    }
  }

  return objetoParams;
};
