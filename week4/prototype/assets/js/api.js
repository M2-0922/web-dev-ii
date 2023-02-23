function API(baseUrl) {
  this.baseUrl = baseUrl;
}

API.prototype.callAPI = function (endpoint) {
  return fetch(this.baseUrl + endpoint)
    .then((res) => res.json())
    .catch((err) => console.log("Error calling API: ", err));
};

