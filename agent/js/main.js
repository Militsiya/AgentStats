var app = angular.module("agentApp", []);

app.controller("playerCtrl", function($scope) {
  $scope.raw = ex_user;
  $scope.shareLink = "https://nightbug.se/darkzone/agent/?uid="+ex_user.name;
  $scope.name = ex_user.name;
  $scope.weapons = ex_user.loadout;
});

var test_gear = new GearPiece("Tactical Holster", 3, 209, 303, 300, 404, ["TalentName"], [{
  "name": "Prototype Stamina Mod",
  "type": "stamina",
  "val": 100
}]);
var test_gear_2 = new GearPiece("Chest Plate", 4, 409, 0, 300, 0, ["TalentName_1"], [{
  "name": "Prototype Stamina Mod",
  "type": "stamina",
  "val": 100
}]);

console.log(test_gear);

var pieData = [{
  value: 1000,
  color: "orange",
  "label": "Firearms",
  highlight: "dodgerblue"
}, {
  value: 700,
  color: "orange",
  "label": "Stamina",
  highlight: "dodgerblue"
}, {
  value: 400,
  color: "orange",
  "label": "Electronics",
  highlight: "dodgerblue"
}];

var pieOptions = {
  percentageInnerCutout: 50,
  segmentShowStroke: true,
  animationSteps: 50,
  segmentStrokeColor: "white",
  segmentStrokeWidth: 2
}

if (QueryString.uid) {
  var agent_un = QueryString.uid.split("+").join(" ");
  ex_user.name = agent_un;
}

if (typeof QueryString.uid == "undefined") {
  document.write("Invalid Ubisoft ID")
}

if (QueryString.uid.length <= 0 || QueryString.uid == "undefined") {
  document.write("Invalid Ubisoft ID")
}

var init_stat_chart = function() {
  var ctx = $("#stats-doughnut").get(0).getContext("2d");
  var myDoughnutChart = new Chart(ctx).Pie(pieData, pieOptions);
}

init_stat_chart();

var set_weapon_display = function(dom, weapon) {
  c = hexToRgb(rarity_colors[weapon.rarity]);
  $(dom).css("background", "rgba(" + c.r + ", " + c.g + ", " + c.b + ", 0.7)");
  $(dom + " .weapon-stats p").text()
}

var set_weapon_displays = function() {
  set_weapon_display("#primary-weapon", ex_user.loadout[0])
  set_weapon_display("#secondary-weapon", ex_user.loadout[1])
  set_weapon_display("#sidearm", ex_user.loadout[2])
}

var setToolTips = function() {
  $("#primary-weapon").opentip(generateWeaponTooltip(ex_user.loadout[0]), tooltip_opts);
  $("#secondary-weapon").opentip(generateWeaponTooltip(ex_user.loadout[1]), tooltip_opts);
  $("#sidearm").opentip(generateWeaponTooltip(ex_user.loadout[2]), tooltip_opts);
  $("#holster-piece").opentip(generateGearTooltip(test_gear), tooltip_opts);
  $("#chest-piece").opentip(generateGearTooltip(test_gear_2), tooltip_opts);
  $("#ilvl").opentip("GS (or gearscore), is a number that depicts the average power level of your gear. It is represented under the name of each weapon and gear piece in the tooltip. (eg '100 &#9889;')", tooltip_opts)
}

setToolTips();

set_weapon_displays();
