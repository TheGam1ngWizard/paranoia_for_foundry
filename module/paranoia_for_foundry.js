// Import Modules
import { Troubleshooter } from "./actor/actor.js";
import { TroubleshooterSheet } from "./actor/actor-sheet.js";
import { MySystemItem } from "./item/item.js";
import { MySystemItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.paranoia_for_foundry = {
    Troubleshooter,
    MySystemItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = Troubleshooter;
  CONFIG.Item.entityClass = MySystemItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("paranoia_for_foundry", TroubleshooterSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("paranoia_for_foundry", MySystemItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });

  Handlebars.registerHelper('toUpperCase', function(str) {
  return str.toUpperCase()
  });

  Handlebars.registerHelper('toNameSyntax', function(str) {
  return str.toUpperCase(0)
  });
});