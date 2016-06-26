var sift = require('sift');

module.exports = function (Model) {
  Model.sift = function (filter, siftFilter, cb) {
    console.log('filter', filter);
    Model.find(filter || {})
    .then(function(results) {
      console.log('results', results);
      results = results.map(function (result) {
        return result.toJSON();
      });
      cb(null, sift(siftFilter || {}, results));
    })
    .catch(cb)
  };

  Model.remoteMethod(
    "sift",
    {
      http: {
        verb: "get",
        path: "/sift"
      },
      returns: [
        {
          type: '[Object]',
          root: true
        }
      ],
      accepts: [
        {
          arg: "filter",
          type: "object",
          required: false
        },
        {
          arg: "siftFilter",
          type: "object",
          required: false
        }
      ]
    }
  );
};
