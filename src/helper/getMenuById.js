function getTumpengById(id, data) {
  const menu = data.filter((el) => {
    return el.tumpeng_id === parseInt(id);
  });
  return menu[0];
}
function getNasiBoxById(id, data) {
  const menu = data.filter((el) => {
    return el.nasi_box_id === parseInt(id);
  });
  return menu[0];
}
export { getTumpengById, getNasiBoxById };
