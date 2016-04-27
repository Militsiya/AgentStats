var app = angular.module("agentApp", []);

app.controller("playerCtrl", function($scope) {
  $scope.raw = ex_user;
  $scope.name = ex_user.name;
  $scope.weapons = ex_user.loadout;
});

var ex_user = {
  "name": "",
  "gs": 400,
  "loadout": [{
    "name": "Tactical Police M4",
    "type": "primary-weapon",
    "rarity": 4,
    "score": 132,
    "stat": {
      "damage": 8999,
      "rpm": 700,
      "mag": 50,
      "type": "smg",
      "talents": [
        "Destructive",
        "Brutal",
        "Self-Preserved"
      ],
      "mods": [{
        "name": "ACOG Scope (4x)",
        "rarity": 4,
        "stats": [
          "+20% Headshot Damage",
          "+18% Accuracy"
        ]
      }]
    }
  }, {
    "name": "SOCOM M1A",
    "type": "secondary-weapon",
    "score": 166,
    "rarity": 4,
    "stat": {
      "damage": 23791,
      "rpm": 180,
      "mag": 20,
      "type": "dmr",
      "talents": [
        "Balanced",
        "Stable",
        "Destructive"
      ],
      "mods": [{
        "name": "MK5 Scope (15x)",
        "rarity": 4,
        "stats": [
          "+2000% Headshot Damage",
          "+1420% Accuracy"
        ]
      }, {
        "name": "Steel Grip",
        "rarity": 3,
        "stats": [
          "+50% Stability",
          "+50% Horizontal Stability"
        ]
      }]
    }
  }, {
    "name": "Colt M9",
    "type": "sidearm",
    "score": 102,
    "rarity": 3,
    "stat": {
      "damage": 4757,
      "rpm": 230,
      "mag": 15,
      "type": "pistol",
      "talents": [
        "Restored",
        "Expert"
      ],
      "mods": []
    }
  }],
  "level": [
    30,
    25000,
    50000
  ],
  "dzrank": [
    52,
    81235,
    99912
  ]
}


var QueryString = function() {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}();

//Convert Hex colours to RGB.
var hexToRgb = function(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

var tooltip_opts = {
  shadow: true,
  delay: 0.3,
  color: "red",
  background: "white",
  borderWidth: 0,
  borderRadius: 0
}

//Just temporary Dummy object for gear pieces
var Gear_piece = function(name, rarity, armor, firearms, stamina, electro, talents, mods) {
  /*
  @param string name - Name of gear piece
  @param int rarity - Rarity of gear piece
  @param int armor - armor rating
  @param int firearms - firearms rating
  @param int stamina - stamina rating
  @param int electro - electronics rating
  @param array talents - array of talents
  @param array mods - array of mods
  */

  this.name = name;
  this.rarity = rarity;

  this.armor = armor;

  this.firearms = firearms;
  this.stamina = stamina;
  this.electro = electro;

  this.talents = talents;
  this.mods = mods;

}

var test_gear = new Gear_piece("Tactical Holster", 3, 209, 303, 300, 404, ["TalentName"], [{
  "name": "Prototype Stamina Mod",
  "type": "stamina",
  "val": 100
}]);
var test_gear_2 = new Gear_piece("Chest Plate", 4, 409, 0, 300, 0, ["TalentName_1"], [{
  "name": "Prototype Stamina Mod",
  "type": "stamina",
  "val": 100
}]);

console.log(test_gear);

var rarity_colors = {
  0: "#d2d2d2",
  1: "#58df53",
  2: "#1e90ff",
  3: "#d426d4",
  4: "#ffa500"
}

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

var generate_weapon_tooltip = function(weapon) {
  var html_obj = "";
  html_obj += "<h2 style = 'margin:0 0 5px 0;color:" + rarity_colors[weapon.rarity] + "'>" + weapon.name + "</h2>";
  html_obj += "<i>" + weapon.score + " &#9889;</i><br>"
  html_obj += "<b>DMG: </b>" + weapon.stat.damage + " | ";
  html_obj += "<b>RPM: </b>" + weapon.stat.rpm + " | ";
  html_obj += "<b>MAG: </b>" + weapon.stat.mag + "<hr/>";

  for (var i = 0; i < weapon.stat.talents.length; i++) {
    html_obj += "<b>" + weapon.stat.talents[i] + "</b><br><i>x% of placeholder is y% for +Z</i><br>"
  }

  html_obj += "<hr/>";

  for (var i = 0; i < weapon.stat.mods.length; i++) {
    var mod = weapon.stat.mods[i];
    html_obj += "<b style = 'color:" + rarity_colors[mod.rarity] + "'>" + mod.name + "</b>";
    for (var n = 0; n < mod.stats.length; n++) {
      html_obj += "<br><i>" + mod.stats[n] + "</i>";
    }
    html_obj += "<br>";
  }



  return html_obj;
}

var generate_gear_tooltip = function(piece) {

  var t_f = piece.firearms;
  var t_s = piece.stamina;
  var t_e = piece.electro;

  for (var i = 0; i < piece.mods.length; i++) {
    var modtype = piece.mods[i].type;
    var modval = piece.mods[i].val;
    switch (modtype) {
      case "firearms":
        t_f += modval;
        break;
      case "stamina":
        t_s += modval;
        break;
      case "electro":
        t_e += modval;
        break;
      default:
        break;
    }
  }


  var html_obj = "";
  html_obj += "<h2 style='margin:0;color:" + rarity_colors[piece.rarity] + "'>" + piece.name + "</h2>";
  html_obj += "<i>123 &#9889;</i><br>";
  html_obj += "<b>ARMOR:</b> " + piece.armor + " | ";

  a = [];

  if (piece.firearms > 0) {
    a.push("<b>FIREARMS:</b> " + t_f);
  }
  if (piece.firearms > 0) {
    a.push("<b>STAMINA:</b> " + t_s);
  }
  if (piece.firearms > 0) {
    a.push("<b>ELECTRONICS:</b> " + t_e);
  }

  html_obj += a.join(" | ") + "<hr/>"


  for (var i = 0; i < piece.talents.length; i++) {
    html_obj += "<b>" + piece.talents[i] + "</b><br><i>Talent Description _</i>";
  }
  html_obj += "<hr>";


  html_obj += "<b style = 'color:" + rarity_colors[piece.mods.rarity] + "'>" + piece.mods[0].name + "</b>";
  html_obj += "<br><i>+" + piece.mods[0].val + " " + piece.mods[0].type + "</i>"



  return html_obj;
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
  $("#primary-weapon").opentip(generate_weapon_tooltip(ex_user.loadout[0]), tooltip_opts);
  $("#secondary-weapon").opentip(generate_weapon_tooltip(ex_user.loadout[1]), tooltip_opts);
  $("#sidearm").opentip(generate_weapon_tooltip(ex_user.loadout[2]), tooltip_opts);
  $("#holster-piece").opentip(generate_gear_tooltip(test_gear), tooltip_opts);
  $("#chest-piece").opentip(generate_gear_tooltip(test_gear_2), tooltip_opts);
  $("#ilvl").opentip("GS (or gearscore), is a number that depicts the average power level of your gear. It is represented under the name of each weapon and gear piece in the tooltip. (eg '100 &#9889;')", tooltip_opts)
}

setToolTips();

set_weapon_displays();
