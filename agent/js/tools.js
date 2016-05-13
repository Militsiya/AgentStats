var QueryString = function() {
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


//Tooltip generation

// Generate weapon tooltips
var generateWeaponTooltip = function(weapon) {
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

var generateGearTooltip = function(piece) {

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
