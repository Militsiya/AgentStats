<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title><?php echo $_GET["uid"] ?> | Nightbug Darkzone</title>
    <meta name="description" content="Character Page for Agent tiny_tinie">
    <link href="style.css" rel="stylesheet" type="text/css">
</head>

<body>

    <div id = "all-wrapper">
        <div id = "name-bar" class = "slide">
            <h1 id = "name">Agent <span id = "agent-name">?</span></h1>
            <div id = "ilvl"><span id ="agent-gs">GS 150</span></div>
        </div>
        <div id = "numbers-wrapper" class = "slide">
          <div id = "charts">
            <canvas id="stats-doughnut" width="180" height="160"></canvas>
            <div id = "agent-levels">

              <div id ="actual-level">
                <div class = "level-square">30</div>
                <progress max="27175" value="10851">
                </div>

                <div id = "darkzone-rank">
                  <div class = "level-square">99</div>
                  <progress max="275175" value="120851">
                  </div>
                </div>
          </div>
        </div>

        <div id = "equipment-wrapper" class = "slide">

          <div id = "weapons-row">
            <div class = "weapon-slot" id="primary-weapon">
              <div class = "weapon-icon"></div>
              <div class = "weapon-mods">
                <div class = "mod1"></div>
                <div class = "mod2"></div>
                <div class = "mod3"></div>
                <div class = "mod4"></div>
                <div class = "mod5"></div>
                <div class = "mod6"></div>
              </div>
              <div class = "weapon-stats">
                <p>
                  <span id = "primary-dmg">DMG 8,999</span>
                  <span id = "primary-rpm">RPM 900</span>
                  <span id = "primary-mag">MAG 40</span>
                </p>
              </div>
            </div>
            <div class = "weapon-slot" id="secondary-weapon">
              <div class = "weapon-icon"></div>
              <div class = "weapon-mods">
                <div class = "mod1"></div>
                <div class = "mod2"></div>
                <div class = "mod3"></div>
                <div class = "mod4"></div>
                <div class = "mod5"></div>
                <div class = "mod6"></div>
              </div>
              <div class = "weapon-stats">
                <p>
                  <span id = "secondary-dmg">DMG 29,192</span>
                  <span id = "secondary-rpm">RPM 120</span>
                  <span id = "secondary-mag">MAG 20</span>
                </p>
              </div>
            </div>
            <div class = "weapon-slot" id="sidearm">
              <div class = "weapon-icon"></div>
              <div class = "weapon-mods">
                <div class = "mod1"></div>
                <div class = "mod2"></div>
                <div class = "mod3"></div>
                <div class = "mod4"></div>
                <div class = "mod5"></div>
                <div class = "mod6"></div>
              </div>
              <div class = "weapon-stats">
                <p>
                  <span id = "sidearm-dmg">DMG 3,855</span>
                  <span id = "sidearm-rpm">RPM 190</span>
                  <span id = "sidearm-mag">MAG 15</span>
                </p>
              </div>
            </div>
          </div>

          <div id = "first-gear-row" class = "gear-row">
            <div class = "gear-slot" id = "chest-piece">
              <div class = "gear-icon"></div>
              <div class = "gear-highlights">
                <div class = "icon-firearms"></div>
                <div class = "icon-stamina" style="opacity:1" ></div>
                <div class = "icon-electro"></div>
              </div>
              <div class = "gear-stats">A: 310<br>S: 851</div>
            </div>
            <div class = "gear-slot" id = "mask-piece">
              <div class = "gear-icon"></div>
              <div class = "gear-highlights">
                <div class = "icon-firearms" style="opacity:1"></div>
                <div class = "icon-stamina"></div>
                <div class = "icon-electro"></div>
              </div>
              <div class = "gear-stats">A: 209<br>F: 201</div>
            </div>
            <div class = "gear-slot" id = "knee-piece">
              <div class = "gear-icon"></div>
              <div class = "gear-highlights">
                <div class = "icon-firearms" style="opacity:1"></div>
                <div class = "icon-stamina"></div>
                <div class = "icon-electro"></div>
              </div>
              <div class = "gear-stats">A: 209<br>F: 303</div>
            </div>
          </div>

          <div id = "second-gear-row" class = "gear-row">
            <div class = "gear-slot" id = "backpack-piece">
              <div class = "gear-icon"></div>
              <div class = "gear-highlights">
                <div class = "icon-firearms" style="opacity:1"></div>
                <div class = "icon-stamina" style="opacity:1"></div>
                <div class = "icon-electro"></div>
              </div>
              <div class = "gear-stats">A: 209<br>F: 200<br>S: 151</div>
            </div>
            <div class = "gear-slot" id = "gloves-piece">
              <div class = "gear-icon"></div>
              <div class = "gear-highlights">
                <div class = "icon-firearms"></div>
                <div class = "icon-stamina"></div>
                <div class = "icon-electro" style="opacity:1"></div>
              </div>
              <div class = "gear-stats">A: 209<br>E: 299<br></div>
            </div>
            <div class = "gear-slot" id = "holster-piece">
              <div class = "gear-icon"></div>
              <div class = "gear-highlights">
                <div class = "icon-firearms" style="opacity:1"></div>
                <div class = "icon-stamina" style="opacity:1"></div>
                <div class = "icon-electro" style="opacity:1"></div>
              </div>
              <div class = "gear-stats">A: 209<br>F: 303<br>S: 300<br>E: 404</div>
            </div>
          </div>

        </div>

        <div id = "share-wrapper" class = "slide">
          <span>Share this agent:</span>
          <input type = "text" id="sharelink" value="http://darkzone.nightbug.se/agent/?uid=X" readonly >
        </div>

        <div id = "todo-wrapper" class = "slide">
          <a href = "../todo.html">Click here for the todo list</a>
        </div>
      </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>

    <script src="js/Chart.js"></script>
    <script src="js/opentip-jquery-excanvas.min.js"></script>
    <link href="css/opentip.css" rel="stylesheet" type="text/css" />
    <script src="js/main.js"></script>
</body>

</html>
