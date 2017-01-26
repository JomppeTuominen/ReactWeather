// function getTempCallback(location, callback) {
//   callback(undefined, 8);
//   callback('City not found');
// }
//
//
// getTempCallback('Porvoo', function(err, temp){
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
//
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(7);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Porvoo').then(function(temp){
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });

// Challenge Area

function addPromise (a, b) {
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('not numbers');
    }
  });
}
addPromise(3,576).then(function(sum){
  console.log('promise success', sum);
}, function(err){
  console.log('promise error', err);
});
addPromise('k', 4).then(function(sum){
  console.log('promise success', sum);
}, function(err){
  console.log('promise error', err);
});
addPromise('a','b').then(function(sum){
  console.log('promise success', sum);
}, function(err){
  console.log('promise error', err);
});
addPromise('4', '78').then(function(sum){
  console.log('promise success', sum);
}, function(err){
  console.log('promise error', err);
});
addPromise(8, 'g').then(function(sum){
  console.log('promise success', sum);
}, function(err){
  console.log('promise error', err);
});
