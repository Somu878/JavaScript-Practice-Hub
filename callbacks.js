//callback functions initialization
step1(10, function (result1, err) {
  if (!err) {
    step2(result1, function (result2, err) {
      if (!err) {
        step3(result2, function (result3, err) {
          if (!err) {
            console.log(result3);
          }
        });
      }
    });
  }
});

//callback Functions
function step1(value, callback) {
  callback(value + 10, false);
}
function step2(value, callback) {
  callback(value + 10, false);
}
function step3(value, callback) {
  callback(value + 10, false);
}
