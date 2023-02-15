function Model() {}

Model.prototype.setData = function (data) {
  this.data = data;
};

Model.prototype.getData = function () {
  return this.data;
};
