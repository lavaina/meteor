var withLatency = function(time, cb) {
  Meteor.setTimeout(function() {
    cb();
  }, time);
};

testAsyncMulti("test-helpers - timeout backward compatibility",[

  function(test){
    test.isTrue(true);
  },
  function(test){
    test.isFalse(false);
  }

]);

testAsyncMulti("test-helpers - timeout",300,[

  function(test,onComplete){
    withLatency(200,onComplete(function(){
      test.isTrue(true);
    }));
  },

  function(test,onComplete){
    withLatency(200,onComplete(function(){
      test.isTrue(true);
    }));
  }

]);