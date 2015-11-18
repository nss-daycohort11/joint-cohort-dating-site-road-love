define(function(require){
  var uid = null;
  var uKey = null;

  return {
    getUid: function() {
      console.log("returning", uid);
      return uid;
    },
    setUid: function(newId){
      console.log("setting user id to ", newId);
      uid = newId;
    },
    getKey: function() {
      console.log("returning", uKey);
      return uKey;
    },
    setKey: function(newKey){
      console.log("setting user key to ", newKey);
      uKey = newKey;
    }
  };
});