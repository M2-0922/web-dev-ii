function Model() {}

Model.prototype.setData = function (data) {
  data.hits.forEach((item) => (item.isFavorite = false));
  this.data = data;
};

Model.prototype.getData = function () {
  return this.data;
};

Model.prototype.getSingleData = function (id) {
  return this.data.hits.find((item) => item.id == id);
};

Model.prototype.setSingleFavorite = function (id) {
  let item = this.data.hits.find((item) => item.id == id);
  if (!item) return;
  item.isFavorite = !item.isFavorite;
};
