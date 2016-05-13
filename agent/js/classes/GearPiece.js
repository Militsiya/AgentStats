var GearPiece = function(name, rarity, armor, firearms, stamina, electro, talents, mods) {
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
