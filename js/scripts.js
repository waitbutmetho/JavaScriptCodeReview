// My Functions start here //
function showMountainOnly() {
  $("#himalaya").show();
  $("#desert").hide();
  $("#amazon").hide();
  $("#maldives").hide();
  $("#lakes").hide();
}

function showDesertOnly() {
  $("#himalaya").hide();
  $("#desert").show();
  $("#amazon").hide();
  $("#maldives").hide();
  $("#lakes").hide();
}

function showForestOnly() {
  $("#himalaya").hide();
  $("#desert").hide();
  $("#amazon").show();
  $("#maldives").hide();
  $("#lakes").hide();
}

function showBeachesOnly() {
  $("#himalaya").hide();
  $("#desert").hide();
  $("#amazon").hide();
  $("#maldives").show();
  $("#lakes").hide();
}

function showLakesOnly() {
  $("#himalaya").hide();
  $("#desert").hide();
  $("#amazon").hide();
  $("#maldives").hide();
  $("#lakes").show();
}

function addMaleClassOnly() {
  $("body").addClass("maleStyle");
  $("body").removeClass("femaleStyle");
  $("body").removeClass("otherStyle");
}

function addFemaleClassOnly() {
  $("body").addClass("femaleStyle");
  $("body").removeClass("maleStyle");
  $("body").removeClass("otherStyle");
}

function addOtherClassOnly() {
  $("body").addClass("otherStyle");
  $("body").removeClass("maleStyle");
  $("body").removeClass("femaleStyle");
}
// My Functions end here //

$(function(){
  $("form#info").submit(function(event) {
    var theAge = parseInt($("input#age").val());
    var theGender = $("select#gender").val();
    var theLifestyle = $("select#lifestyle").val();
    var theScenery = $("select#scenery").val();
    var theFood = $("select#food").val();


    if(theAge > 89 && theGender && theLifestyle && theScenery && theFood) {
      alert("Wow you are old! Be careful traveling at your age! Press Okay to see your result.");
    };
    if(theAge >= 18 && theAge <= 89 && theGender && theLifestyle && theScenery && theFood) {
      alert("You are a adult, be responsible while traveling! Press Okay to see your result.");
    };
    if(theAge < 18 && theAge > 3 && theGender && theLifestyle && theScenery && theFood) {
      alert("You arent even an adult yet! Be careful traveling at your age! Press Okay to see your result.");
    };
    if(theAge <= 3 && theGender && theLifestyle && theScenery && theFood) {
      alert("You are a baby! Press Okay.");
      alert("Wow, you can read pretty well for a baby! Press Okay to see your result.")
    };

    if(theAge && theGender && theLifestyle && theScenery === "mountains"  && theFood) {
      showMountainOnly();
    };
    if(theAge && theGender && theLifestyle && theScenery === "desert"  && theFood) {
      showDesertOnly();
    };
    if(theAge && theGender && theLifestyle && theScenery === "forest" && theFood) {
      showForestOnly();
    };
    if(theAge && theGender && theLifestyle && theScenery === "beaches"  && theFood) {
      showBeachesOnly();
    };
    if(theAge && theGender && theLifestyle && theScenery === "lakes" && theFood) {
      showLakesOnly();
    };
    if(theAge && theGender === "male" && theLifestyle && theScenery && theFood) {
      addMaleClassOnly();
    };
    if(theAge && theGender === "female" && theLifestyle && theScenery && theFood) {
      addFemaleClassOnly();
    };
    if(theAge && theGender === "other" && theLifestyle && theScenery && theFood) {
      addOtherClassOnly();
    };

      event.preventDefault();
  });
});
