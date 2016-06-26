module.exports = function (server, cb) {
  var Tournament = server.models.Tournament;
  var Judge = server.models.Judge;
  var Shop = server.models.Shop;

  Judge.create([
    {
      id: 1,
      firstname: 'Aurélie',
      lastname: 'Violette',
      nationality: 'Française'
    },
    {
      id: 2,
      firstname: 'Kevin',
      lastname: 'Desprez',
      nationality: 'Française'
    },
    {
      id: 3,
      firstname: 'Matteo',
      lastname: 'Callegari',
      nationality: 'Italien'
    }
  ])
  .then(function() {
    return Shop.create([
      {
        id: 1,
        name: 'Bazaar of Moxen'
      },
      {
        id: 2,
        name: 'Trollune'
      },
      {
        id: 3,
        name: 'CartaJeux'
      }
    ])
  })
  .then(function() {
    return Tournament.create([
      {
        id: 1,
        location: 'Paris',
        type: 'PPTQ',
        shopId: 1,
        judgeId: 1
      },
      {
        id: 2,
        location: 'Paris',
        type: 'RPTQ',
        shopId: 1,
        judgeId: 1
      },
      {
        id: 3,
        location: 'Lyon',
        type: 'PPTQ',
        shopId: 2,
        judgeId: 1
      },
      {
        id: 4,
        location: 'Lyon',
        type: 'PPTQ',
        shopId: 3,
        judgeId: 2
      },
      {
        id: 5,
        location: 'Lyon',
        type: 'RPTQ',
        shopId: 3,
        judgeId: 3
      },
      {
        id: 6,
        location: 'Toulouse',
        type: 'Grand Prix',
        shopId: 1,
        judgeId: 2
      },
      {
        id: 7,
        location: 'Grenoble',
        type: 'PPTQ',
        shopId: 3,
        judgeId: 3
      }
    ])
  })
  .then(function() {
    cb(null);
  })
  .catch(function(err) {
    console.log('Error:', err);
    cb(err);
  })
};
