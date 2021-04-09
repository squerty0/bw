'use strict';

function processAffix(item, affixes){
  for (const [weight, affix] of Object.entries(affixes)) {
    var matched = item.innerHTML.match(affix);
    if(matched){
      item.innerHTML = item.innerHTML.replace(affix, matched + "<span style='color: grey'> [" + weight + "]</span>");
      return Math.ceil((weight / Object.keys(affixes).length) * 5);
    }
  }

  return 0;
}

function processItem(item, bases, prefixes, sufixes){
    for(var j = 0; j < bases.length; j++){
      if(item.innerHTML.match(bases[j])){
        var weight = processAffix(item, prefixes);
        weight += processAffix(item, sufixes);
        item.parentNode.parentNode.classList.add("tier" + Math.ceil(weight / 2));
        return true;
      }
  }
  return false;
}



var moreButton = document.querySelector("#loadArmoryItemsButton");

if(moreButton) moreButton.click();


setTimeout( function() {
          var items = document.querySelectorAll(".item");

          for(var i = 0; i < items.length; i++){
            var item = items[i].querySelector(".item-link");

            if(processItem(item, helmetBases, helmetPrefixes, helmetSufixes)) continue;
            if(processItem(item, armourBases, armourPrefixes, armourSufixes)) continue;
            if(processItem(item, pantsBases, pantsPrefixes, pantsSufixes)) continue;
            if(processItem(item, oneHandWeaponBases, oneHandWeaponPrefixes, oneHandWeaponSufixes)) continue;


          }
}, 500);







