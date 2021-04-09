/* Hełmy */
var helmetBases = [
    /czapka/i,
    /kask/i,
    /hełm/i,
    /maska/i,
    /obręcz/i,
    /kominiarka/i,
    /kapelusz/i,
    /opaska/i,
    /bandana/i,
    /korona/i
  ];
  
  var helmetPrefixes = {                              
    1: /Utwardzan[ya]/i,
    2: /Wzmocnion[ya]/i,
    3: /Pomocn[ya]/i,
    4: /Ozdobn[ya]/i,
    5: /Eleganck[ia]/i,
    6: /Rogat[ya]/i,
    7: /Złośliw[ya]/i,
    8: /Leniw[ya]/i,
    9: /Śmiercionośn[ya]/i,
    10: /Bojow[ya]/i,
    11: /Magnetyczn[ya]/i,
    12: /Krwaw[ya]/i,
    13: /Kunsztown[ya]/i,
    14: /Kuloodporn[ya]/i,
    15: /Szamańsk[ia]/i,
    16: /Tygrysia?/i,
    17: /Szturmow[ya]/i,
    18: /Runiczn[ya]/i,
    19: /Rytualn[ya]/i,
  };
  
  var helmetSufixes = {                              
    1: /Podróżnika/i,
    2: /Przezorności/i,
    3: /Wytrzymałości/i,
    4: /Pasterza/i,
    5: /Narkomana/i,
    6: /Ochrony/i,
    7: /Zmysłów/i,
    8: /Wieszcza/i,
    9: /Kary/i,
    10: /Gladiatora/i,
    11: /Krwi/i,
    12: /Skorupy Żółwia/i,
    13: /Słońca/i,
    14: /Adrenaliny/i,
    15: /Prekognicji/i,
    16: /Smoczej Łuski/i,
    17: /Mocy/i,
    18: /Magii/i,
  };

/* Zbroje */

var armourBases = [
    /koszulka/i,
    /kurtka/i,
    /marynarka/i,
    /kamizelka/i,
    /gorset/i,
    /peleryna/i,
    /smoking/i,
    /kolczuga/i,
    /zbroja warstwowa/i,
    /pelna zbroja/i,
];

var armourPrefixes = {                              
    1: /wzmocnion[ya]/i,
    2: /ćwiekowan[ya]/i,
    3: /władcz[ya]/i,
    4: /lekki?[ia]/i,
    5: /łuskow[ya]/i,
    6: /bojow[ya]/i,
    7: /płytow[ya]/i,
    8: /giętki?[ia]/i,
    9: /krwaw[ya]/i,
    10: /łowieck[ia]/i,
    11: /szamańsk[ia]/i,
    12: /kuloodporn[ya]/i,
    13: /tygrysia?/i,
    14: /elfia?/i,
    15: /runiczn[ya]/i,
    16: /śmiercionośn[ya]/i,
  };


  var armourSufixes = {                              
    1: /Adepta/i,
    2: /Strażnika/i,
    3: /Złodzieja/i,
    4: /Siłacza/i,
    5: /Narkomana/i,
    6: /Szermierza/i,
    7: /Zabójcy/i,
    8: /Gwardzisty/i,
    9: /Kobry/i,
    10: /Skorupy żółwia/i,
    11: /Uników/i,
    12: /Grabieżcy/i,
    13: /Mistrza/i,
    14: /Adrenaliny/i,
    15: /Centuriona/i,
    16: /Odpornosci/i,
    17: /Kaliguli/i,
    18: /Siewcy śmierci/i,
    19: /Szybkości/i,
    20: /Orchidei/i,
  };

  /* Spodnie */
  
  var pantsBases = [
    /szorty/i,
    /spodnie/i,
    /spódnica/i,
    /kilt/i,
];
  
  
var pantsPrefixes = {                              
    1:  /Krótk[yaie]e?/i,
    2:  /Pikowan[yaie]e?/i,
    3:  /Lekki?[yaie]e?/i,
    4:  /Wzmocnion[yaie]e?/i,
    5:  /Aksamitn[yaie]e?/i,
    6:  /Ćwiekowan[yaie]e?/i,
    7:  /Kuloodporn[yaie]e?/i,
    8:  /Giętki?[yaie]e?/i,
    9:  /Kolcz[yaie]e?/i,
    10:  /Szamańsk[yaie]e?/i,
    11:  /Krwaw[yaie]e?/i,
    12:  /Elfi?[yaie]e?/i,
    13:  /Tygrys[yaie]e?/i,
    14:  /Pancern[yaie]e?/i,
    15:  /Runiczn[yaie]e?/i,
    16:  /Kompozytow[yaie]e?/i,
    17:  /Śmiercionośn[yaie]e?/i,
  }
  
  
  var pantsSufixes = {                              
    1: /Rzezimieszka/i,
    2: /Przemytnika/i,
    3: /Narkomana/i,
    4: /Siłacza/i,
    5: /Cichych ruchów/i,
    6: /Uników/i,
    7: /Skrytości/i,
    8: /Słońca/i,
    9: /Handlarza bronią/i,
    10: /Pasterza/i,
    11: /Łowcy cieni/i,
    12: /Węża/i,
    13: /Inków/i,
    14: /Tropiciela/i,
    15: /Nocy/i,
  };

/* Bronie 1h */

var oneHandWeaponBases = [
  /Nóż/i,
  /Sztylet/i,
  /Pałka/i,
  /Miecz(?! dwuręczny)/i,
  /Pięść Niebios/i,
  /Rapier/i,
  /Topór/i,
  /Kastet/i,
  /Kama/i,
  /Wakizashi/i,
];

var oneHandWeaponPrefixes = {
  1: /Ostr[yae]/i,
  2: /Zębat[yae]/i,
  3: /Kościan[yae]/i,
  4: /Wzmacniając[yae]/i,
  5: /Kryształow[yae]/i,
  6: /Mistyczn[yae]/i,
  7: /Lekki?[aei]/i,
  8: /Okrutn[yae]/i,
  9: /Przyjacielski?[ae]/i,
  10: /Kąsając[yae]/i,
  11: /Opiekuńcz[yae]/i,
  12: /Świecąc[yae]/i,
  13: /Jadowit[yae]/i,
  14: /Zabójcz[yae]/i,
  15: /Zatrut[yae]/i,
  16: /Przeklet[yae]/i,
  17: /Zwinn[yae]/i,
  18: /Antyczn[yae]/i,
  19: /Szybki?[aei]/i,
  20: /Demoniczn[yae]/i,
}

var oneHandWeaponSufixes = {
  1: /dowódcy/i,
  2: /sekty/i,
  3: /bólu/i,
  4: /władzy/i,
  5: /zwinności/i,
  6: /mocy/i,
  7: /zarazy/i,
  8: /odwagi/i,
  9: /trafienia/i,
  10: /przodków/i,
  11: /zdobywcy/i,
  12: /kontuzji/i,
  13: /męstwa/i,
  14: /precyzji/i,
  15: /krwi/i,
  16: /zemsty/i,
  17: /podkowy/i,
  18: /drakuli/i,
  19: /biegłości/i,
  20: /klanu/i,
  21: /imperatora/i,
  22: /samobójcy/i,
}

