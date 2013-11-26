var withLatency = function(time, cb) {
  return Meteor.setTimeout(function() {
    return cb();
  }, time);
};

testAsyncMulti("testAsyncMulti - backward compatibility",[

  function(test){
    test.isTrue(true);
  },
  function(test){
    test.isFalse(false);
  }

]);

testAsyncMulti("testAsyncMulti - with timeout",300,[

  function(test,onComplete){
    withLatency(200,onComplete(function(){
      test.isTrue(true);
    }));
  },  function(test,onComplete){
    withLatency(200,onComplete(function(){
      test.isTrue(true);
    }));
  }

]);