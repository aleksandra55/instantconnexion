app.service("beerService", function($http){

var beerService = new Object();

beerService.allBeers = [];

var addBeer = function(beer){
  beerService.allBeers.push(beer);

 return $http.post('/beers', beer)
    .then(function(response) {
      beerService.allBeers.push(response);
    }, function(err) {
      console.error(err)
    });


  };

  var getBeers = function(beer) {
  return $http.get('/beers')
    .then(function(response) {
      angular.copy(response.data, beerService.allBeers);
    }, function(err) {
      console.error(err)
    });
  };

  var removeBeer = function(beer) {
    console.log(beer);
    beerService.allBeers.splice(beer, 1);
    return $http.delete('/beers/'+(beer._id))
    .then(function(response) {
    });
  };


var addRatingToBeer = function (beer, rating) {
  beer.rating.push(rating);
  var total = 0;
  for (var i = 0; i < beer.rating.length ; i++) {
    total += beer.rating[i];
  }
  beer.averageRating = total/beer.rating.length ;
  console.log(allBeers);
};

return {
  addBeer : addBeer,
  getBeers : getBeers,
  removeBeer : removeBeer,
  addRatingToBeer, addRatingToBeer,
  beerService : beerService
};
