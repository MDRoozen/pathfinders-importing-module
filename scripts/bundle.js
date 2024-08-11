Hooks.on("ready", async function() {
    console.log("start building");

    let sprite;
    let actorData

    let number = Math.floor(Math.random() * 1000);
    fetch("https://pokeapi.co/api/v2/pokemon/"+number).then(
        function(response) {
            return response.json();
        }).then(
    async function(data) {
        console.log(data.sprites.front_default);
        sprite = data.sprites.front_default;
        let name = data.name;
        actorData = {
                           "prototypeToken": {
                              "displayName": 30,
                              "displayBars": 20,
                              "flags": {
                                "pf2e": {
                                  "linkToActorSize": true,
                                  "autoscale": true
                                },
                                "splatter": {
                                  "bloodColor": ""
                                },
                                "image-hover": {
                                  "hideArt": false,
                                  "specificArt": "path/image.png"
                                },
                                "healthEstimate": {
                                  "dontMarkDead": false,
                                  "hideHealthEstimate": false,
                                  "hideName": false
                                }
                              },
                              "height": 1,
                              "width": 1,
                              "actorLink": true,
                              "sight": {
                                "enabled": true,
                                "range": 0,
                                "angle": 360,
                                "visionMode": "basic",
                                "color": null,
                                "attenuation": 0.1,
                                "brightness": 0,
                                "saturation": 0,
                                "contrast": 0
                              },
                              "name": name,
                              "appendNumber": false,
                              "prependAdjective": false,
                              "texture": {
                                "src": sprite,
                                "anchorX": 0.5,
                                "anchorY": 0.5,
                                "offsetX": 0,
                                "offsetY": 0,
                                "fit": "contain",
                                "scaleX": 1,
                                "scaleY": 1,
                                "rotation": 0,
                                "tint": "#ffffff",
                                "alphaThreshold": 0.75
                              },
                              "hexagonalShape": 0,
                              "lockRotation": false,
                              "rotation": 0,
                              "alpha": 1,
                              "disposition": -1,
                              "bar1": {
                                "attribute": "attributes.hp"
                              },
                              "bar2": {
                                "attribute": null
                              },
                              "light": {
                                "negative": false,
                                "priority": 0,
                                "alpha": 0.5,
                                "angle": 360,
                                "bright": 0,
                                "color": null,
                                "coloration": 1,
                                "dim": 0,
                                "attenuation": 0.5,
                                "luminosity": 0.5,
                                "saturation": 0,
                                "contrast": 0,
                                "shadows": 0,
                                "animation": {
                                  "type": null,
                                  "speed": 5,
                                  "intensity": 5,
                                  "reverse": false
                                },
                                "darkness": {
                                  "min": 0,
                                  "max": 1
                                }
                              },
                              "detectionModes": [],
                              "occludable": {
                                "radius": 0
                              },
                              "ring": {
                                "enabled": false,
                                "colors": {
                                  "ring": null,
                                  "background": null
                                },
                                "effects": 0,
                                "subject": {
                                  "scale": 1,
                                  "texture": null
                                }
                              },
                              "randomImg": false
                            },
                            "name": name,
                            "type": "character",
                            "effects": [],
                            "system": {
                              "attributes": {
                                "hp": {
                                  "value": 9,
                                  "temp": 0
                                },
                                "speed": {
                                  "value": 25,
                                  "otherSpeeds": []
                                }
                              },
                              "initiative": {
                                "statistic": "perception"
                              },
                              "details": {
                                "languages": {
                                  "value": [
                                    "dwarven"
                                  ],
                                  "details": ""
                                },
                                "level": {
                                  "value": 1
                                },
                                "biography": {
                                  "appearance": "",
                                  "backstory": "",
                                  "birthPlace": "",
                                  "attitude": "",
                                  "beliefs": "",
                                  "anathema": [],
                                  "edicts": [],
                                  "likes": "",
                                  "dislikes": "",
                                  "catchphrases": "",
                                  "campaignNotes": "",
                                  "allies": "",
                                  "enemies": "",
                                  "organizations": "",
                                  "visibility": {
                                    "appearance": true,
                                    "backstory": false,
                                    "personality": false,
                                    "campaign": false
                                  }
                                },
                                "keyability": {
                                  "value": "str"
                                },
                                "xp": {
                                  "value": 0,
                                  "min": 0,
                                  "max": 1000,
                                  "pct": 0
                                },
                                "age": {
                                  "value": ""
                                },
                                "height": {
                                  "value": ""
                                },
                                "weight": {
                                  "value": ""
                                },
                                "gender": {
                                  "value": ""
                                },
                                "ethnicity": {
                                  "value": ""
                                },
                                "nationality": {
                                  "value": ""
                                },
                                "alliance": "party"
                              },
                              "resources": {
                                "heroPoints": {
                                  "value": 1,
                                  "max": 3
                                },
                                "focus": {
                                  "value": 0
                                }
                              },
                              "_migration": {
                                "version": 0.931,
                                "previous": null
                              },
                              "abilities": null,
                              "skills": {
                                "athletics": {
                                  "rank": 1
                                },
                                "medicine": {
                                  "rank": 1
                                },
                                "nature": {
                                  "rank": 1
                                },
                                "stealth": {
                                  "rank": 1
                                },
                                "society": {
                                  "rank": 1
                                }
                              },
                              "pfs": {
                                "playerNumber": null,
                                "characterNumber": null,
                                "levelBump": false,
                                "currentFaction": "EA",
                                "school": null,
                                "reputation": {
                                  "EA": null,
                                  "GA": null,
                                  "HH": null,
                                  "VS": null,
                                  "RO": null,
                                  "VW": null
                                }
                              },
                              "exploration": [],
                              "build": {
                                "attributes": {
                                  "boosts": {
                                    "1": [
                                      "wis",
                                      "con",
                                      "dex",
                                      "int"
                                    ]
                                  }
                                }
                              }
                            },
                            "img": sprite,
                            "items": [
                              {
                                "img": "systems/pf2e/icons/default-icons/alternatives/ancestries/minotaur.svg",
                                "name": "Minotaur",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>Minotaurs stalk complex passageways, whether natural or artificial, and are masters of stone architecture. Inquisitive and steadfast, these bovine humanoids spend their lives perfecting the pursuit that calls to them, which can sometimes lead them far from the enclaves where they were raised. Minotaurs are originally from the Iblydos archipelago but have spread far and wide across Golarion, forming close-knit communities often near mountains or beneath the surface of the earth. Though sometimes mistaken for simple brutes, minotaurs have scholars and warriors alike. Those who can look past their appearance will find an affinity for building and navigation, as well as creative problem-solving.</p>"
                                  },
                                  "rules": [],
                                  "slug": "minotaur",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "beast",
                                      "humanoid",
                                      "minotaur"
                                    ],
                                    "rarity": "uncommon"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Howl of the Wild",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "hp": 10,
                                  "size": "lg",
                                  "reach": 5,
                                  "speed": 25,
                                  "boosts": {
                                    "0": {
                                      "value": [
                                        "str"
                                      ]
                                    },
                                    "1": {
                                      "value": [
                                        "con"
                                      ]
                                    },
                                    "2": {
                                      "value": [
                                        "str",
                                        "dex",
                                        "con",
                                        "int",
                                        "wis",
                                        "cha"
                                      ],
                                      "selected": "wis"
                                    }
                                  },
                                  "flaws": {
                                    "0": {
                                      "value": [
                                        "cha"
                                      ]
                                    }
                                  },
                                  "languages": {
                                    "value": [
                                      "common",
                                      "jotun"
                                    ],
                                    "custom": ""
                                  },
                                  "additionalLanguages": {
                                    "count": 0,
                                    "value": [
                                      "cyclops",
                                      "dwarven",
                                      "fey",
                                      "petran",
                                      "sakvroth"
                                    ],
                                    "custom": ""
                                  },
                                  "items": {
                                    "MZeAa": {
                                      "img": "icons/creatures/abilities/bull-head-horns-glowing.webp",
                                      "level": 1,
                                      "name": "Horns",
                                      "uuid": "Compendium.pf2e.ancestryfeatures.Item.hUpYTsbLcBg4UcVp"
                                    }
                                  },
                                  "vision": "darkvision"
                                },
                                "type": "ancestry",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.ancestries.Item.3wQ49DoWFYQgVsq6",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158243972,
                                  "modifiedTime": 1719158379633,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.ancestries.Item.3wQ49DoWFYQgVsq6"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "arJGeLAjKVeisQrr"
                              },
                              {
                                "img": "icons/creatures/abilities/bull-head-horns-glowing.webp",
                                "name": "Horns",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>Your sharp horns are as deadly as spears. You have a horns unarmed attack that deals 1d8 piercing damage. Your horns are in the brawling group and have the unarmed trait.</p>"
                                  },
                                  "rules": [
                                    {
                                      "category": "unarmed",
                                      "damage": {
                                        "base": {
                                          "damageType": "piercing",
                                          "dice": 1,
                                          "die": "d8"
                                        }
                                      },
                                      "group": "brawling",
                                      "img": "systems/pf2e/icons/unarmed-attacks/horn.webp",
                                      "key": "Strike",
                                      "label": "PF2E.BattleForm.Attack.Horns",
                                      "slug": "horns",
                                      "traits": [
                                        "unarmed"
                                      ]
                                    }
                                  ],
                                  "slug": "horns",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Howl of the Wild",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "category": "ancestryfeature",
                                  "onlyLevel1": false,
                                  "maxTakable": 1,
                                  "actionType": {
                                    "value": "passive"
                                  },
                                  "actions": {
                                    "value": null
                                  },
                                  "prerequisites": {
                                    "value": []
                                  },
                                  "location": "arJGeLAjKVeisQrr"
                                },
                                "type": "feat",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.ancestryfeatures.Item.hUpYTsbLcBg4UcVp",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158243972,
                                  "modifiedTime": 1719158243972,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.ancestryfeatures.Item.hUpYTsbLcBg4UcVp"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "g7Ru8wGCYmcKPpwK"
                              },
                              {
                                "img": "systems/pf2e/icons/default-icons/background.svg",
                                "name": "Acolyte",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>You spent your early days in a religious monastery or cloister. You may have traveled out into the world to spread the message of your religion or because you cast away the teachings of your faith, but deep down, you'll always carry within you the lessons you learned.</p>\n<p>Choose two attribute boosts. One must be to <strong>Intelligence</strong> or <strong>Wisdom</strong>, and one is a free attribute boost.</p>\n<p>You're trained in the Religion skill and the Scribing Lore skill. You gain the @UUID[Compendium.pf2e.feats-srd.Item.x7EMZNMavris2aHY]{Student of the Canon} skill feat.</p>"
                                  },
                                  "rules": [],
                                  "slug": "acolyte",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "boosts": {
                                    "0": {
                                      "value": [
                                        "int",
                                        "wis"
                                      ],
                                      "selected": "wis"
                                    },
                                    "1": {
                                      "value": [
                                        "cha",
                                        "con",
                                        "dex",
                                        "int",
                                        "str",
                                        "wis"
                                      ],
                                      "selected": "dex"
                                    }
                                  },
                                  "items": {
                                    "1v9gz": {
                                      "img": "icons/sundries/books/book-red-exclamation.webp",
                                      "level": 1,
                                      "name": "Student of the Canon",
                                      "uuid": "Compendium.pf2e.feats-srd.Item.x7EMZNMavris2aHY"
                                    }
                                  },
                                  "trainedSkills": {
                                    "value": [
                                      "religion"
                                    ],
                                    "lore": [
                                      "Scribing"
                                    ]
                                  }
                                },
                                "type": "background",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.backgrounds.Item.CAjQrHZZbALE7Qjy",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158309666,
                                  "modifiedTime": 1719158394565,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.backgrounds.Item.CAjQrHZZbALE7Qjy"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "3UYyf2zlMRxG6Ypp"
                              },
                              {
                                "img": "icons/sundries/books/book-red-exclamation.webp",
                                "name": "Student of the Canon",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>You've researched many faiths enough to recognize notions about them that are unlikely to be true. If you roll a critical failure at a Religion check to Decipher Writing of a religious nature or to Recall Knowledge about the tenets of faiths, you get a failure instead. When attempting to Recall Knowledge about the tenets of your own faith, if you roll a failure, you get a success instead, and if you roll a success, you get a critical success instead.</p>"
                                  },
                                  "rules": [
                                    {
                                      "key": "Note",
                                      "predicate": [
                                        {
                                          "or": [
                                            "action:recall-knowledge",
                                            "action:decipher-writing"
                                          ]
                                        }
                                      ],
                                      "selector": "religion",
                                      "text": "When you roll a critical failure at a Religion check to Decipher Writing of a religious nature or to Recall Knowledge about the tenets of faiths, you get a failure instead.",
                                      "title": "{item|name}"
                                    },
                                    {
                                      "key": "Note",
                                      "predicate": [
                                        {
                                          "or": [
                                            "action:recall-knowledge",
                                            "your-faith"
                                          ]
                                        }
                                      ],
                                      "selector": "religion",
                                      "text": "When attempting to Recall Knowledge about the tenets of your own faith, if you roll a failure, you get a success instead, and if you roll a success, you get a critical success instead.",
                                      "title": "{item|name}"
                                    }
                                  ],
                                  "slug": "student-of-the-canon",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "general",
                                      "skill"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "category": "skill",
                                  "onlyLevel1": false,
                                  "maxTakable": 1,
                                  "actionType": {
                                    "value": "passive"
                                  },
                                  "actions": {
                                    "value": null
                                  },
                                  "prerequisites": {
                                    "value": [
                                      {
                                        "value": "trained in Religion"
                                      }
                                    ]
                                  },
                                  "location": "3UYyf2zlMRxG6Ypp"
                                },
                                "type": "feat",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.feats-srd.Item.x7EMZNMavris2aHY",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158309666,
                                  "modifiedTime": 1719158309666,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.feats-srd.Item.x7EMZNMavris2aHY"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "OaV4D5sqPQsAepm0"
                              },
                              {
                                "img": "systems/pf2e/icons/classes/cleric.webp",
                                "name": "Cleric",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p><em>Deities work their will upon the world in infinite ways, and you serve as one of their most stalwart mortal servants. Blessed with divine magic, you live the ideals of your faith, adorn yourself with the symbols of your church, and train diligently to wield your deity's favored weapon. Your spells might protect and heal your allies, or they might punish foes and enemies of your faith, as your deity wills. Yours is a life of devotion, spreading the teachings of your faith through both word and deed.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.N4ABcd6CcCbqmw3x]{Cleric}</em></p>"
                                  },
                                  "rules": [],
                                  "slug": "cleric",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "keyAbility": {
                                    "value": [
                                      "wis"
                                    ]
                                  },
                                  "items": {
                                    "365ut": {
                                      "img": "systems/pf2e/icons/features/classes/deity.webp",
                                      "level": 1,
                                      "name": "Deity",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.DutW12WMFPHBoLTH"
                                    },
                                    "4eQbl": {
                                      "img": "icons/weapons/axes/axe-double-gold.webp",
                                      "level": 1,
                                      "name": "Cleric Spellcasting",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.AvNbdGSOTWNRgcxs"
                                    },
                                    "5lsvf": {
                                      "img": "icons/magic/symbols/question-stone-yellow.webp",
                                      "level": 1,
                                      "name": "Doctrine",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.tyrBwBTzo5t9Zho7"
                                    },
                                    "6j8f7": {
                                      "img": "icons/magic/symbols/question-stone-yellow.webp",
                                      "level": 1,
                                      "name": "First Doctrine",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.Qejo7FUWQtPTpgWH"
                                    },
                                    "7gkd0": {
                                      "img": "icons/magic/fire/flame-burning-hand-white.webp",
                                      "level": 1,
                                      "name": "Divine Font",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.gblTFUOgolqFS9v4"
                                    },
                                    "Awo2e": {
                                      "img": "icons/magic/symbols/question-stone-yellow.webp",
                                      "level": 3,
                                      "name": "Second Doctrine",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.OnfrrwCfDFCFw0tc"
                                    },
                                    "BhM5T": {
                                      "img": "icons/creatures/eyes/human-single-blue.webp",
                                      "level": 5,
                                      "name": "Perception Expertise",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.JCqACxgrm5ixX0Jy"
                                    },
                                    "Czcka": {
                                      "img": "icons/magic/symbols/question-stone-yellow.webp",
                                      "level": 7,
                                      "name": "Third Doctrine",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.gxNxfN9OBlQ1icus"
                                    },
                                    "GUa4t": {
                                      "img": "icons/magic/holy/chalice-glowing-gold.webp",
                                      "level": 9,
                                      "name": "Resolute Faith",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.0TjNGzs0FuD7JBf4"
                                    },
                                    "abLjR": {
                                      "img": "icons/magic/symbols/symbol-lightning-bolt.webp",
                                      "level": 11,
                                      "name": "Reflex Expertise",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.TUOeATt52P43r5W0"
                                    },
                                    "ckmdj": {
                                      "img": "icons/magic/symbols/question-stone-yellow.webp",
                                      "level": 11,
                                      "name": "Fourth Doctrine",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.o8nHreMyiLi64rZz"
                                    },
                                    "de44z": {
                                      "img": "icons/creatures/abilities/wings-birdlike-blue.webp",
                                      "level": 13,
                                      "name": "Divine Defense",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.0mJTp4LdEHBLInoe"
                                    },
                                    "r47we": {
                                      "img": "icons/magic/symbols/question-stone-yellow.webp",
                                      "level": 15,
                                      "name": "Fifth Doctrine",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.Zb7DuGbFoLEp0H1K"
                                    },
                                    "vrd25": {
                                      "img": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
                                      "level": 13,
                                      "name": "Weapon Specialization",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.9EqIasqfI8YIM3Pt"
                                    },
                                    "x2puy": {
                                      "img": "icons/magic/symbols/question-stone-yellow.webp",
                                      "level": 19,
                                      "name": "Final Doctrine",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.urBGOPrUwBmkixAo"
                                    },
                                    "zmpzh": {
                                      "img": "icons/magic/symbols/star-rising-purple.webp",
                                      "level": 19,
                                      "name": "Miraculous Spell",
                                      "uuid": "Compendium.pf2e.classfeatures.Item.3uf31A91h3ywmlqm"
                                    }
                                  },
                                  "hp": 8,
                                  "trainedSkills": {
                                    "value": [
                                      "religion"
                                    ],
                                    "additional": 2
                                  },
                                  "perception": 1,
                                  "savingThrows": {
                                    "fortitude": 1,
                                    "reflex": 1,
                                    "will": 2
                                  },
                                  "attacks": {
                                    "simple": 1,
                                    "martial": 0,
                                    "advanced": 0,
                                    "unarmed": 1,
                                    "other": {
                                      "name": "Deity's favored weapon",
                                      "rank": 1
                                    }
                                  },
                                  "defenses": {
                                    "unarmored": 1,
                                    "light": 0,
                                    "medium": 0,
                                    "heavy": 0
                                  },
                                  "spellcasting": 1,
                                  "ancestryFeatLevels": {
                                    "value": [
                                      1,
                                      5,
                                      9,
                                      13,
                                      17
                                    ]
                                  },
                                  "classFeatLevels": {
                                    "value": [
                                      2,
                                      4,
                                      6,
                                      8,
                                      10,
                                      12,
                                      14,
                                      16,
                                      18,
                                      20
                                    ]
                                  },
                                  "generalFeatLevels": {
                                    "value": [
                                      3,
                                      7,
                                      11,
                                      15,
                                      19
                                    ]
                                  },
                                  "skillFeatLevels": {
                                    "value": [
                                      2,
                                      4,
                                      6,
                                      8,
                                      10,
                                      12,
                                      14,
                                      16,
                                      18,
                                      20
                                    ]
                                  },
                                  "skillIncreaseLevels": {
                                    "value": [
                                      3,
                                      5,
                                      7,
                                      9,
                                      11,
                                      13,
                                      15,
                                      17,
                                      19
                                    ]
                                  }
                                },
                                "type": "class",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.classes.Item.EizrWvUPMS67Pahd",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158348818,
                                  "modifiedTime": 1719158348818,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.classes.Item.EizrWvUPMS67Pahd"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "QWpbHGwcVE2RmgeV"
                              },
                              {
                                "img": "systems/pf2e/icons/features/classes/deity.webp",
                                "name": "Deity (Abadar)",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>As a cleric, you are a mortal servitor of a deity you revere above all others. Your deity grants you the trained proficiency rank in one skill and with the deity's favored weapon. If the favored weapon is uncommon, you also get access to that weapon.</p>\n<p>Your deity also adds spells to your spell list. You can prepare these just like you can any spell on the divine spell list once you can prepare spells of their rank as a cleric. Any of these spells that aren't normally on the divine list are still divine spells if you prepare them this way.</p>\n<h2>Sanctification</h2>\n<p>Depending on your deity, their sanctification can make you holy or unholy. This gives you the holy or unholy trait, which commits you to one side of a struggle over the souls of the planes and may be referenced in other abilities. If you \"can be\" holy or unholy according to your deity, you make that choice, and if you \"must be\" holy or unholy you gain the trait automatically. If you gain the opposing trait in some way, you lose the previous trait until you complete an atone ritual.</p>\n<h2>Anathema</h2>\n<p>Acts fundamentally opposed to your deity's ideals are anathema to your faith. Learning or casting spells, committing acts, and using items that are anathema to your deity remove you from your deity's good graces.</p>\n<p>Casting spells with the unholy trait is almost always anathema to deities who don't allow unholy sanctification, and casting holy spells is likewise anathema to those who don't allow holy sanctification. Similarly, casting spells that are anathema to the tenets or goals of your faith could interfere with your connection to your deity. For example, casting a spell to create undead would be anathema to Pharasma, the goddess of death. Many actions that are anathema don't appear in any deity's formal list. For borderline cases, you and your GM determine which acts are anathema.</p>\n<p>If you perform enough acts that are anathema to your deity, you lose the magical abilities that come from your connection to your deity. The class features that you lose are determined by the GM, but they likely include your divine font and all cleric spellcasting. These abilities can be regained only if you repent by conducting an atone ritual.</p>"
                                  },
                                  "rules": [
                                    {
                                      "choices": {
                                        "filter": [
                                          {
                                            "or": [
                                              "item:category:deity",
                                              "item:category:pantheon"
                                            ]
                                          }
                                        ],
                                        "itemType": "deity"
                                      },
                                      "flag": "deity",
                                      "key": "ChoiceSet",
                                      "predicate": [
                                        {
                                          "not": "deity"
                                        }
                                      ],
                                      "prompt": "PF2E.SpecificRule.Prompt.Deity",
                                      "selection": "Compendium.pf2e.deities.Item.d56paSkcwvll2OhR"
                                    },
                                    {
                                      "allowDuplicate": false,
                                      "key": "GrantItem",
                                      "predicate": [
                                        {
                                          "not": "deity"
                                        }
                                      ],
                                      "uuid": "{item|flags.pf2e.rulesSelections.deity}",
                                      "flag": "abadar"
                                    },
                                    {
                                      "adjustName": false,
                                      "choices": [
                                        {
                                          "label": "PF2E.TraitHoly",
                                          "predicate": [
                                            {
                                              "or": [
                                                "deity:primary:sanctification:can:holy",
                                                "deity:primary:sanctification:must:holy"
                                              ]
                                            }
                                          ],
                                          "value": "holy"
                                        },
                                        {
                                          "label": "PF2E.TraitUnholy",
                                          "predicate": [
                                            {
                                              "or": [
                                                "deity:primary:sanctification:can:unholy",
                                                "deity:primary:sanctification:must:unholy"
                                              ]
                                            }
                                          ],
                                          "value": "unholy"
                                        },
                                        {
                                          "label": "PF2E.NoneOption",
                                          "predicate": [
                                            {
                                              "nor": [
                                                "deity:primary:sanctification:must:holy",
                                                "deity:primary:sanctification:must:unholy"
                                              ]
                                            }
                                          ],
                                          "value": "none"
                                        }
                                      ],
                                      "key": "ChoiceSet",
                                      "predicate": [
                                        {
                                          "nor": [
                                            "deity:primary:sanctification:none",
                                            "sanctification:holy",
                                            "sanctification:unholy"
                                          ]
                                        }
                                      ],
                                      "prompt": "PF2E.SpecificRule.Prompt.Sanctification",
                                      "rollOption": "sanctification",
                                      "slug": "sanctification",
                                      "flag": "sanctification",
                                      "selection": "none"
                                    },
                                    {
                                      "add": [
                                        "holy"
                                      ],
                                      "key": "ActorTraits",
                                      "predicate": [
                                        "sanctification:holy"
                                      ]
                                    },
                                    {
                                      "add": [
                                        "unholy"
                                      ],
                                      "key": "ActorTraits",
                                      "predicate": [
                                        "sanctification:unholy"
                                      ]
                                    },
                                    {
                                      "fist": true,
                                      "key": "Strike",
                                      "predicate": [
                                        "deity:primary:favored-weapon:fist"
                                      ]
                                    },
                                    {
                                      "key": "ActiveEffectLike",
                                      "mode": "upgrade",
                                      "path": "flags.pf2e.favoredWeaponRank",
                                      "predicate": [
                                        "class:cleric"
                                      ],
                                      "value": 1
                                    }
                                  ],
                                  "slug": "deity",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "cleric"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "category": "classfeature",
                                  "onlyLevel1": false,
                                  "maxTakable": 1,
                                  "actionType": {
                                    "value": "passive"
                                  },
                                  "actions": {
                                    "value": null
                                  },
                                  "prerequisites": {
                                    "value": []
                                  },
                                  "location": "QWpbHGwcVE2RmgeV"
                                },
                                "type": "feat",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.classfeatures.Item.DutW12WMFPHBoLTH",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158348818,
                                  "modifiedTime": 1719158348818,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.classfeatures.Item.DutW12WMFPHBoLTH"
                                  },
                                  "pf2e": {
                                    "itemGrants": {
                                      "abadar": {
                                        "id": "QIf6m3DRk5VpAQf5",
                                        "onDelete": "detach"
                                      }
                                    }
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "ZoDeRv8qc0lXl9I9"
                              },
                              {
                                "img": "icons/magic/symbols/question-stone-yellow.webp",
                                "name": "Doctrine",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>Even among followers of the same deity, approaches vary. At 1st level, you select cloistered cleric or warpriest and gain the benefits of its first doctrine. At 3rd level and every four levels thereafter, you gain another benefit from your doctrine.</p>\n<ul>\n<li>@UUID[Compendium.pf2e.classfeatures.Item.ZZzLMOUAtBVgV1DF]{Cloistered Cleric}</li>\n<li>@UUID[Compendium.pf2e.classfeatures.Item.0Aocw3igLwna9cjp]{Warpriest}</li>\n</ul>"
                                  },
                                  "rules": [
                                    {
                                      "adjustName": false,
                                      "choices": {
                                        "filter": [
                                          "item:tag:cleric-doctrine"
                                        ]
                                      },
                                      "flag": "doctrine",
                                      "key": "ChoiceSet",
                                      "prompt": "PF2E.SpecificRule.Cleric.Doctrine.Prompt",
                                      "selection": "Compendium.pf2e.classfeatures.Item.ZZzLMOUAtBVgV1DF"
                                    },
                                    {
                                      "key": "GrantItem",
                                      "uuid": "{item|flags.pf2e.rulesSelections.doctrine}",
                                      "flag": "cloisteredCleric"
                                    }
                                  ],
                                  "slug": "doctrine",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "cleric"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "category": "classfeature",
                                  "onlyLevel1": false,
                                  "maxTakable": 1,
                                  "actionType": {
                                    "value": "passive"
                                  },
                                  "actions": {
                                    "value": null
                                  },
                                  "prerequisites": {
                                    "value": []
                                  },
                                  "location": "QWpbHGwcVE2RmgeV"
                                },
                                "type": "feat",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.classfeatures.Item.tyrBwBTzo5t9Zho7",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158348818,
                                  "modifiedTime": 1719158348818,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.classfeatures.Item.tyrBwBTzo5t9Zho7"
                                  },
                                  "pf2e": {
                                    "itemGrants": {
                                      "cloisteredCleric": {
                                        "id": "4axFYZOr8oGtxt5O",
                                        "onDelete": "detach"
                                      }
                                    }
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 200,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "snHXG5gfHN2iY4eS"
                              },
                              {
                                "img": "icons/magic/symbols/question-stone-yellow.webp",
                                "name": "First Doctrine",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>You gain the first benefit of your doctrine:</p>\n<ul>\n<li>@UUID[Compendium.pf2e.classfeatures.Item.aiwxBj5MjnafCMyn]{Cloistered Cleric}</li>\n<li>@UUID[Compendium.pf2e.classfeatures.Item.xxkszluN9icAiTO4]{Warpriest}</li>\n</ul>"
                                  },
                                  "rules": [
                                    {
                                      "key": "GrantItem",
                                      "uuid": "{actor|flags.pf2e.cleric.firstDoctrine}",
                                      "flag": "firstDoctrineCloisteredCleric"
                                    }
                                  ],
                                  "slug": "first-doctrine",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "cleric"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "category": "classfeature",
                                  "onlyLevel1": false,
                                  "maxTakable": 1,
                                  "actionType": {
                                    "value": "passive"
                                  },
                                  "actions": {
                                    "value": null
                                  },
                                  "prerequisites": {
                                    "value": []
                                  },
                                  "location": "QWpbHGwcVE2RmgeV"
                                },
                                "type": "feat",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.classfeatures.Item.Qejo7FUWQtPTpgWH",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158348818,
                                  "modifiedTime": 1719158348818,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.classfeatures.Item.Qejo7FUWQtPTpgWH"
                                  },
                                  "pf2e": {
                                    "itemGrants": {
                                      "firstDoctrineCloisteredCleric": {
                                        "id": "8YOfQa3bOLynq1ze",
                                        "onDelete": "detach"
                                      }
                                    }
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 300,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "i2mDTcWFsRn37ezX"
                              },
                              {
                                "img": "systems/pf2e/icons/deity/Abadar.webp",
                                "name": "Abadar",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>Abadar, Master of the First Vault, seeks to bring civilization to the wilds of the world, encourages adherence to the law, and promotes commerce and trade within civilization. He also encourages cooperation among ancestries.</p>\n<p><strong>Edicts</strong> bring civilization to the frontiers, earn wealth through hard work and trade, follow the rule of law</p>\n<p><strong>Anathema</strong> engage in banditry or piracy, steal, undermine a law-abiding court</p>\n<p><strong>Areas of Concern</strong> cities, law, merchants, and wealth</p>"
                                  },
                                  "rules": [],
                                  "slug": "abadar",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": []
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "category": "deity",
                                  "sanctification": {
                                    "modal": "can",
                                    "what": [
                                      "holy",
                                      "unholy"
                                    ]
                                  },
                                  "domains": {
                                    "primary": [
                                      "cities",
                                      "earth",
                                      "travel",
                                      "wealth"
                                    ],
                                    "alternate": [
                                      "duty"
                                    ]
                                  },
                                  "font": [
                                    "harm",
                                    "heal"
                                  ],
                                  "attribute": [
                                    "con",
                                    "int"
                                  ],
                                  "skill": [
                                    "society"
                                  ],
                                  "weapons": [
                                    "crossbow"
                                  ],
                                  "spells": {
                                    "1": "Compendium.pf2e.spells-srd.Item.2oH5IufzdESuYxat",
                                    "4": "Compendium.pf2e.spells-srd.Item.TUj8eugNqAvB1vVR",
                                    "7": "Compendium.pf2e.spells-srd.Item.vPWMEyVTreMOoFnm"
                                  }
                                },
                                "type": "deity",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.deities.Item.d56paSkcwvll2OhR",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158348818,
                                  "modifiedTime": 1719158348818,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.deities.Item.d56paSkcwvll2OhR"
                                  },
                                  "pf2e": {
                                    "grantedBy": {
                                      "id": "ZoDeRv8qc0lXl9I9",
                                      "onDelete": "cascade"
                                    }
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "QIf6m3DRk5VpAQf5"
                              },
                              {
                                "img": "icons/magic/light/orb-hands-humanoid-yellow.webp",
                                "name": "Cloistered Cleric",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>You are a cleric of the cloth, focusing on divine magic and your connection to your deity's domains.</p>\n<p><strong>First Doctrine (1st):</strong> You gain the @UUID[Compendium.pf2e.feats-srd.Item.hT4INKGtly4QY8KN]{Domain Initiate} cleric feat.</p>\n<p><strong>Second Doctrine (3rd):</strong> Your proficiency rank for Fortitude saves increases to expert.</p>\n<p><strong>Third Doctrine (7th):</strong> Your proficiency ranks for the spell attack modifier and spell DC statistics increase to expert.</p>\n<p><strong>Fourth Doctrine (11th):</strong> You gain expert proficiency with your deity's favored weapon, simple weapons, and unarmed attacks. When you critically succeed at an attack roll using your deity's favored weapon, you apply the weapon's critical specialization effect; you can use your spell DC in place of your class DC.</p>\n<p><strong>Fifth Doctrine (15th):</strong> Your proficiency ranks for the spell attack modifier and spell DC statistics increase to master.</p>\n<p><strong>Final Doctrine (19th):</strong> Your proficiency ranks for the spell attack modifier and spell DC statistics increase to legendary.</p>"
                                  },
                                  "rules": [
                                    {
                                      "key": "ActiveEffectLike",
                                      "mode": "override",
                                      "path": "flags.pf2e.cleric",
                                      "value": {
                                        "fifthDoctrine": "Compendium.pf2e.classfeatures.Item.n9W8MjjRgPpUTvWf",
                                        "finalDoctrine": "Compendium.pf2e.classfeatures.Item.DgGefatQ4v6xT6f9",
                                        "firstDoctrine": "Compendium.pf2e.classfeatures.Item.aiwxBj5MjnafCMyn",
                                        "fourthDoctrine": "Compendium.pf2e.classfeatures.Item.vxOf4LXZcqUG3P7a",
                                        "secondDoctrine": "Compendium.pf2e.classfeatures.Item.sa7BWfnyCswAvBVa",
                                        "thirdDoctrine": "Compendium.pf2e.classfeatures.Item.s8WEmc4GGZSHSC7q"
                                      }
                                    }
                                  ],
                                  "slug": "cloistered-cleric",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [
                                      "cleric-doctrine"
                                    ],
                                    "value": [
                                      "cleric"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "category": "classfeature",
                                  "onlyLevel1": false,
                                  "maxTakable": 1,
                                  "actionType": {
                                    "value": "passive"
                                  },
                                  "actions": {
                                    "value": null
                                  },
                                  "prerequisites": {
                                    "value": []
                                  },
                                  "location": null
                                },
                                "type": "feat",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.classfeatures.Item.ZZzLMOUAtBVgV1DF",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158348818,
                                  "modifiedTime": 1719158348818,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.classfeatures.Item.ZZzLMOUAtBVgV1DF"
                                  },
                                  "pf2e": {
                                    "grantedBy": {
                                      "id": "snHXG5gfHN2iY4eS",
                                      "onDelete": "cascade"
                                    }
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "4axFYZOr8oGtxt5O"
                              },
                              {
                                "img": "icons/magic/light/orb-hands-humanoid-yellow.webp",
                                "name": "First Doctrine (Cloistered Cleric)",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>You gain the @UUID[Compendium.pf2e.feats-srd.Item.hT4INKGtly4QY8KN]{Domain Initiate} cleric feat.</p>"
                                  },
                                  "rules": [
                                    {
                                      "key": "GrantItem",
                                      "uuid": "Compendium.pf2e.feats-srd.Item.hT4INKGtly4QY8KN",
                                      "flag": "domainInitiate"
                                    }
                                  ],
                                  "slug": "first-doctrine-cloistered-cleric",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "cleric"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "category": "classfeature",
                                  "onlyLevel1": false,
                                  "maxTakable": 1,
                                  "actionType": {
                                    "value": "passive"
                                  },
                                  "actions": {
                                    "value": null
                                  },
                                  "prerequisites": {
                                    "value": []
                                  },
                                  "location": null
                                },
                                "type": "feat",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.classfeatures.Item.aiwxBj5MjnafCMyn",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158348818,
                                  "modifiedTime": 1719158348818,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.classfeatures.Item.aiwxBj5MjnafCMyn"
                                  },
                                  "pf2e": {
                                    "grantedBy": {
                                      "id": "i2mDTcWFsRn37ezX",
                                      "onDelete": "cascade"
                                    },
                                    "itemGrants": {
                                      "domainInitiate": {
                                        "id": "MYPQqy2JZUXnTVLf",
                                        "onDelete": "detach"
                                      }
                                    }
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "8YOfQa3bOLynq1ze"
                              },
                              {
                                "img": "icons/sundries/books/book-red-exclamation.webp",
                                "name": "Domain Initiate (Earth)",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>Your deity bestows a special spell related to their powers. Select one domain—a subject of particular interest to you within your religion—from your deity's list. You gain an initial domain spell for that domain, a spell unique to the domain and not available to other clerics.</p>\n<p>Domain spells are a type of focus spell. It costs 1 Focus Point to cast a focus spell, and you start with a focus pool of 1 Focus Point. You refill your focus pool during your daily preparations, and you can regain 1 Focus Point by spending 10 minutes using the Refocus activity to pray to your deity or do service toward their causes.</p>\n<p>Focus spells are automatically heightened to half your level rounded up, much like cantrips. Focus spells don't require spell slots, and can't be cast using spell slots. Your focus pool can hold one Focus Point for each focus spell you have, up to 3 points.</p>\n<hr />\n<p><strong>Special</strong> You can select this feat multiple times, selecting a different domain each time and gaining its domain spell.</p>"
                                  },
                                  "rules": [
                                    {
                                      "choices": "system.details.deities.domains",
                                      "flag": "domainInitiate",
                                      "key": "ChoiceSet",
                                      "prompt": "PF2E.SpecificRule.Prompt.DeitysDomain",
                                      "selection": "earth"
                                    }
                                  ],
                                  "slug": "domain-initiate",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "cleric"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "category": "class",
                                  "onlyLevel1": false,
                                  "maxTakable": null,
                                  "actionType": {
                                    "value": "passive"
                                  },
                                  "actions": {
                                    "value": null
                                  },
                                  "prerequisites": {
                                    "value": []
                                  },
                                  "location": null
                                },
                                "type": "feat",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.feats-srd.Item.hT4INKGtly4QY8KN",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158348818,
                                  "modifiedTime": 1719158348818,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.feats-srd.Item.hT4INKGtly4QY8KN"
                                  },
                                  "pf2e": {
                                    "grantedBy": {
                                      "id": "8YOfQa3bOLynq1ze",
                                      "onDelete": "cascade"
                                    }
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "MYPQqy2JZUXnTVLf"
                              },
                              {
                                "img": "icons/weapons/axes/axe-double-gold.webp",
                                "name": "Cleric Spellcasting",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>Your deity bestows on you the power to cast divine spells. You are a spellcaster, and you can cast spells of the divine tradition using the Cast a Spell activity. As a cleric, your chants generally invoke your deity and their powerful servants by name or title, while your gestures are followed by sacred symbols or other representations of your deity.</p>\n<p>At 1st level, you can prepare two 1st-rank spells and five cantrips each morning from the common spells on the divine spell list or from other divine spells to which you gain access and learn via Learn a Spell. Prepared spells remain available to you until you cast them or until you prepare your spells again. The number of spells you can prepare each day is called your spell slots.</p>\n<p>As you increase in level as a cleric, the number of spells you can prepare each day increases, as does the highest rank of spell you can cast, as shown in Cleric Spells per Day table above.</p>\n<p>Some of your spells require you to attempt a spell attack to see how effective they are or for your enemies to roll against your spell DC (typically by attempting a saving throw). Since your key attribute is Wisdom, your spell attack modifier and spell DC use your Wisdom modifier.</p>\n<h2>Heightening Spells</h2>\n<p>When you get spell slots of 2nd rank and higher, you can fill those slots with stronger versions of lower-rank spells. This increases the spell's rank, heightening it to match the spell slot. Many spells have specific improvements when they are heightened to certain ranks.</p>\n<h2>Cantrips</h2>\n<p>Some of your spells are cantrips. A cantrip is a special type of spell that doesn't use spell slots. You can cast a cantrip at will, any number of times per day. A cantrip is always automatically heightened to half your level rounded up—this is usually equal to the highest rank of cleric spell slot you have. For example, as a 1st-level cleric, your cantrips are 1st-rank spells, and as a 5th-level cleric, your cantrips are 3rd-rank spells.</p>"
                                  },
                                  "rules": [],
                                  "slug": "cleric-spellcasting",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "cleric"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "category": "classfeature",
                                  "onlyLevel1": false,
                                  "maxTakable": 1,
                                  "actionType": {
                                    "value": "passive"
                                  },
                                  "actions": {
                                    "value": null
                                  },
                                  "prerequisites": {
                                    "value": []
                                  },
                                  "location": "QWpbHGwcVE2RmgeV"
                                },
                                "type": "feat",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.classfeatures.Item.AvNbdGSOTWNRgcxs",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158348818,
                                  "modifiedTime": 1719158348818,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.classfeatures.Item.AvNbdGSOTWNRgcxs"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 100,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "BjdSZKzJIh9fy1ht"
                              },
                              {
                                "img": "icons/magic/fire/flame-burning-hand-white.webp",
                                "name": "Divine Font (Harmful)",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>Through your deity's blessing, you gain additional spells that channel either the life force called vitality or its counterforce, the void. When you prepare your spells each day, you can prepare additional @UUID[Compendium.pf2e.spells-srd.Item.rfZpqmj0AIIdkVIs]{Heal} or @UUID[Compendium.pf2e.spells-srd.Item.wdA52JJnsuQWeyqz]{Harm} spells, depending on your deity. The divine font spell your deity provides is listed in the Divine Font entry for your deity; if both are listed, you can choose between heal or harm. Once you choose, you can't change your choice short of divine intervention.</p>\n<p><strong>Healing Font:</strong> You gain 4 additional spell slots each day at your highest rank of cleric spell slots. You can prepare only heal spells in these slots. At 5th level, the number of additional slots increases to 5, and at 15th level, the total number of additional slots increases to 6.</p>\n<p><strong>Harmful Font:</strong> You gain 4 additional spell slots each day at your highest rank of cleric spell slots. You can prepare only harm spells in these slots. At 5th level, the number of additional slots increases to 5, and at 15th level, the total number of additional slots increases to 6.</p>"
                                  },
                                  "rules": [
                                    {
                                      "choices": [
                                        {
                                          "img": "icons/magic/life/cross-worn-green.webp",
                                          "label": "PF2E.SpecificRule.Cleric.DivineFont.Healing",
                                          "predicate": [
                                            "deity:primary:font:heal"
                                          ],
                                          "value": "heal"
                                        },
                                        {
                                          "img": "systems/pf2e/icons/spells/harm.webp",
                                          "label": "PF2E.SpecificRule.Cleric.DivineFont.Harmful",
                                          "predicate": [
                                            "deity:primary:font:harm"
                                          ],
                                          "value": "harm"
                                        }
                                      ],
                                      "flag": "divineFont",
                                      "key": "ChoiceSet",
                                      "prompt": "PF2E.SpecificRule.Cleric.DivineFont.Prompt",
                                      "rollOption": "divine-font",
                                      "selection": "harm"
                                    }
                                  ],
                                  "slug": "divine-font",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "cleric"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "category": "classfeature",
                                  "onlyLevel1": false,
                                  "maxTakable": 1,
                                  "actionType": {
                                    "value": "passive"
                                  },
                                  "actions": {
                                    "value": null
                                  },
                                  "prerequisites": {
                                    "value": []
                                  },
                                  "location": "QWpbHGwcVE2RmgeV"
                                },
                                "type": "feat",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.classfeatures.Item.gblTFUOgolqFS9v4",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158348818,
                                  "modifiedTime": 1719158348818,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.classfeatures.Item.gblTFUOgolqFS9v4"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 400,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "6yHrUDU3s3lUHYrE"
                              },
                              {
                                "folder": "Ju1C4OBaEF5fhvGn",
                                "img": "icons/environment/wilderness/terrain-river-road-gray.webp",
                                "name": "Roaming Minotaur",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>Your hooves are broad and powerful, perfect for clearing away rubble as you step. You become trained in Survival (or another skill if you were already trained in Survival) and gain the @UUID[Compendium.pf2e.feats-srd.Item.4tTkRyOQ0VuRBac3]{Terrain Expertise} skill feat. You ignore difficult terrain caused by natural uneven ground while in the terrain chosen for your Terrain Expertise feat.</p>"
                                  },
                                  "rules": [
                                    {
                                      "key": "ActiveEffectLike",
                                      "mode": "upgrade",
                                      "path": "system.skills.survival.rank",
                                      "value": 1
                                    },
                                    {
                                      "key": "GrantItem",
                                      "uuid": "Compendium.pf2e.feats-srd.Item.4tTkRyOQ0VuRBac3",
                                      "flag": "terrainExpertise"
                                    }
                                  ],
                                  "slug": "roaming-minotaur",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Howl of the Wild",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "ancestry": {
                                    "name": "Minotaur",
                                    "slug": "minotaur",
                                    "uuid": "Compendium.pf2e.ancestries.Item.3wQ49DoWFYQgVsq6"
                                  }
                                },
                                "type": "heritage",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.heritages.Item.HAo0S8ysFipf6S2B",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158367011,
                                  "modifiedTime": 1719158367011,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.heritages.Item.HAo0S8ysFipf6S2B"
                                  },
                                  "pf2e": {
                                    "itemGrants": {
                                      "terrainExpertise": {
                                        "id": "PjKqCTVhBfI7PbBc",
                                        "onDelete": "detach"
                                      }
                                    }
                                  }
                                },
                                "effects": [],
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "gq5d1LQPu3no5obz"
                              },
                              {
                                "img": "icons/sundries/books/book-red-exclamation.webp",
                                "name": "Terrain Expertise (Mountain)",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>Your experience in navigating a certain type of terrain makes you supremely confident while doing so. You gain a +1 circumstance bonus to Survival checks in one of the following types of terrain, chosen when you select this feat: aquatic, arctic, desert, forest, mountain, plains, sky, swamp, or underground.</p>\n<hr />\n<p><strong>Special</strong> You can select this feat more than once, choosing a different type of terrain each time.</p>"
                                  },
                                  "rules": [
                                    {
                                      "choices": [
                                        {
                                          "label": "PF2E.Terrain.Aquatic",
                                          "value": "aquatic"
                                        },
                                        {
                                          "label": "PF2E.Terrain.Arctic",
                                          "value": "arctic"
                                        },
                                        {
                                          "label": "PF2E.Terrain.Desert",
                                          "value": "desert"
                                        },
                                        {
                                          "label": "PF2E.Terrain.Forest",
                                          "value": "forest"
                                        },
                                        {
                                          "label": "PF2E.Terrain.Mountain",
                                          "value": "mountain"
                                        },
                                        {
                                          "label": "PF2E.Terrain.Plains",
                                          "value": "plain"
                                        },
                                        {
                                          "label": "PF2E.Terrain.Sky",
                                          "value": "sky"
                                        },
                                        {
                                          "label": "PF2E.Terrain.Swamp",
                                          "value": "swamp"
                                        },
                                        {
                                          "label": "PF2E.Terrain.Underground",
                                          "value": "underground"
                                        }
                                      ],
                                      "flag": "terrain",
                                      "key": "ChoiceSet",
                                      "prompt": "PF2E.SpecificRule.TerrainExpertise.Prompt",
                                      "selection": "mountain"
                                    },
                                    {
                                      "key": "FlatModifier",
                                      "predicate": [
                                        "terrain:{item|flags.pf2e.rulesSelections.terrain}"
                                      ],
                                      "selector": "survival",
                                      "type": "circumstance",
                                      "value": 1
                                    }
                                  ],
                                  "slug": "terrain-expertise",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "general",
                                      "skill"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "category": "skill",
                                  "onlyLevel1": false,
                                  "maxTakable": null,
                                  "actionType": {
                                    "value": "passive"
                                  },
                                  "actions": {
                                    "value": null
                                  },
                                  "prerequisites": {
                                    "value": [
                                      {
                                        "value": "trained in Survival"
                                      }
                                    ]
                                  },
                                  "location": null
                                },
                                "type": "feat",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.feats-srd.Item.4tTkRyOQ0VuRBac3",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158367011,
                                  "modifiedTime": 1719158367011,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.feats-srd.Item.4tTkRyOQ0VuRBac3"
                                  },
                                  "pf2e": {
                                    "grantedBy": {
                                      "id": "gq5d1LQPu3no5obz",
                                      "onDelete": "cascade"
                                    }
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "PjKqCTVhBfI7PbBc"
                              },
                              {
                                "type": "lore",
                                "name": "Lore: Scribing",
                                "effects": [],
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": ""
                                  },
                                  "rules": [],
                                  "slug": null,
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null
                                  },
                                  "traits": {
                                    "otherTags": []
                                  },
                                  "publication": {
                                    "title": "",
                                    "authors": "",
                                    "license": "OGL",
                                    "remaster": false
                                  },
                                  "mod": {
                                    "value": 0
                                  },
                                  "proficient": {
                                    "value": 1
                                  }
                                },
                                "_id": "8AfmBTxrTauggMkT",
                                "img": "systems/pf2e/icons/default-icons/lore.svg",
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "flags": {},
                                "_stats": {
                                  "compendiumSource": null,
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158474095,
                                  "modifiedTime": 1719158483201,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                }
                              },
                              {
                                "_id": "Ql6oqyhdTrUBJJcZ",
                                "img": "icons/sundries/books/book-red-exclamation.webp",
                                "name": "Keen Nose",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>Accustomed to the foul air of underground tunnels, your sense of smell is sharpened, and noxious scents are less offensive. You gain scent as an imprecise sense with a range of 30 feet. You also gain a +1 circumstance bonus to Fortitude saves against olfactory effects that cause the sickened condition.</p>"
                                  },
                                  "rules": [
                                    {
                                      "acuity": "imprecise",
                                      "key": "Sense",
                                      "range": 30,
                                      "selector": "scent"
                                    },
                                    {
                                      "key": "FlatModifier",
                                      "predicate": [
                                        "item:trait:olfactory",
                                        "inflicts:sickened"
                                      ],
                                      "selector": "fortitude",
                                      "type": "circumstance",
                                      "value": 1
                                    }
                                  ],
                                  "slug": "keen-nose",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "minotaur"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Howl of the Wild",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1,
                                    "taken": 1
                                  },
                                  "category": "ancestry",
                                  "onlyLevel1": false,
                                  "maxTakable": 1,
                                  "actionType": {
                                    "value": "passive"
                                  },
                                  "actions": {
                                    "value": null
                                  },
                                  "prerequisites": {
                                    "value": []
                                  },
                                  "location": "ancestry-1"
                                },
                                "type": "feat",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.feats-srd.Item.nkU7tWNTNaQKK1iU",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158499168,
                                  "modifiedTime": 1719158499168,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.feats-srd.Item.nkU7tWNTNaQKK1iU"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "name": "Divine Focus Spells",
                                "type": "spellcastingEntry",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": ""
                                  },
                                  "rules": [],
                                  "slug": null,
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null
                                  },
                                  "traits": {
                                    "otherTags": []
                                  },
                                  "publication": {
                                    "title": "",
                                    "authors": "",
                                    "license": "OGL",
                                    "remaster": false
                                  },
                                  "ability": {
                                    "value": "wis"
                                  },
                                  "spelldc": {
                                    "value": 0,
                                    "dc": 0
                                  },
                                  "tradition": {
                                    "value": "divine"
                                  },
                                  "prepared": {
                                    "value": "focus"
                                  },
                                  "showSlotlessLevels": {
                                    "value": true
                                  },
                                  "proficiency": {
                                    "value": 1,
                                    "slug": ""
                                  },
                                  "slots": {
                                    "slot0": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot1": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot2": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot3": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot4": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot5": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot6": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot7": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot8": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot9": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot10": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot11": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    }
                                  },
                                  "autoHeightenLevel": {
                                    "value": null
                                  }
                                },
                                "_id": "GfmQJfmKbai3CW1R",
                                "img": "systems/pf2e/icons/default-icons/spellcastingEntry.svg",
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "flags": {},
                                "_stats": {
                                  "compendiumSource": null,
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158534771,
                                  "modifiedTime": 1719158534771,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                }
                              },
                              {
                                "name": "Divine Prepared Spells",
                                "type": "spellcastingEntry",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": ""
                                  },
                                  "rules": [],
                                  "slug": null,
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null
                                  },
                                  "traits": {
                                    "otherTags": []
                                  },
                                  "publication": {
                                    "title": "",
                                    "authors": "",
                                    "license": "OGL",
                                    "remaster": false
                                  },
                                  "ability": {
                                    "value": "wis"
                                  },
                                  "spelldc": {
                                    "value": 0,
                                    "dc": 0
                                  },
                                  "tradition": {
                                    "value": "divine"
                                  },
                                  "prepared": {
                                    "value": "prepared",
                                    "flexible": false
                                  },
                                  "showSlotlessLevels": {
                                    "value": true
                                  },
                                  "proficiency": {
                                    "value": 1,
                                    "slug": ""
                                  },
                                  "slots": {
                                    "slot0": {
                                      "prepared": [
                                        {
                                          "id": "udCkPvaiAilue7Ar",
                                          "expended": false
                                        },
                                        {
                                          "id": "zr3FTrhxhEsnpBG6",
                                          "expended": false
                                        },
                                        {
                                          "id": "F7cZvTTTvmkLzv8q",
                                          "expended": false
                                        },
                                        {
                                          "id": "rpaZHYRltSuw70S9",
                                          "expended": false
                                        },
                                        {
                                          "id": "lwFhlPbHaKHVyGVH",
                                          "expended": false
                                        }
                                      ],
                                      "value": 0,
                                      "max": 5
                                    },
                                    "slot1": {
                                      "prepared": [
                                        {
                                          "id": "WEUT8sxlUsEq4Fnq",
                                          "expended": true
                                        },
                                        {
                                          "id": "FmF81u9smteKrpPm",
                                          "expended": true
                                        }
                                      ],
                                      "value": 0,
                                      "max": 2
                                    },
                                    "slot2": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot3": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot4": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot5": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot6": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot7": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot8": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot9": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot10": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot11": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    }
                                  },
                                  "autoHeightenLevel": {
                                    "value": null
                                  }
                                },
                                "_id": "gf2Aa7XduhCzhkm4",
                                "img": "systems/pf2e/icons/default-icons/spellcastingEntry.svg",
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "flags": {},
                                "_stats": {
                                  "compendiumSource": null,
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158546628,
                                  "modifiedTime": 1719172557651,
                                  "lastModifiedBy": "9Rhur8fgbHfvQaUS"
                                }
                              },
                              {
                                "img": "systems/pf2e/icons/spells/hurtling-stone.webp",
                                "name": "Hurtling Stone",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>You evoke a magical stone and throw it, with divine guide to your aim. The stone deals 2d6 bludgeoning damage depending on your spell attack roll against the target's AC.</p>\n<hr />\n<p><strong>Critical Success</strong> The target takes double damage and you can push it up to 10 feet.</p>\n<p><strong>Success</strong> The target takes full damage and you can push it up to 5 feet.</p>\n<hr />\n<p><strong>Heightened (+1)</strong> The stone's damage increases by 1d6.</p>"
                                  },
                                  "rules": [],
                                  "slug": "hurtling-stone",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "attack",
                                      "cleric",
                                      "earth",
                                      "focus",
                                      "manipulate"
                                    ],
                                    "rarity": "uncommon",
                                    "traditions": []
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "requirements": "",
                                  "target": {
                                    "value": "1 creature"
                                  },
                                  "range": {
                                    "value": "60 feet"
                                  },
                                  "area": null,
                                  "time": {
                                    "value": "1"
                                  },
                                  "duration": {
                                    "value": "",
                                    "sustained": false
                                  },
                                  "damage": {
                                    "0": {
                                      "applyMod": false,
                                      "category": null,
                                      "formula": "2d6",
                                      "kinds": [
                                        "damage"
                                      ],
                                      "materials": [],
                                      "type": "bludgeoning"
                                    }
                                  },
                                  "defense": null,
                                  "cost": {
                                    "value": ""
                                  },
                                  "location": {
                                    "value": "GfmQJfmKbai3CW1R"
                                  },
                                  "counteraction": false,
                                  "heightening": {
                                    "damage": {
                                      "0": "1d6"
                                    },
                                    "interval": 1,
                                    "type": "interval"
                                  }
                                },
                                "type": "spell",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.spells-srd.Item.pRKaEXnjGJXbPHPC",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158581732,
                                  "modifiedTime": 1719158581732,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.spells-srd.Item.pRKaEXnjGJXbPHPC"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "Wm43OTjst7AGrL6X"
                              },
                              {
                                "name": "Divine Charges Spells",
                                "type": "spellcastingEntry",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": ""
                                  },
                                  "rules": [],
                                  "slug": null,
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null
                                  },
                                  "traits": {
                                    "otherTags": []
                                  },
                                  "publication": {
                                    "title": "",
                                    "authors": "",
                                    "license": "OGL",
                                    "remaster": false
                                  },
                                  "ability": {
                                    "value": "wis"
                                  },
                                  "spelldc": {
                                    "value": 0,
                                    "dc": 0
                                  },
                                  "tradition": {
                                    "value": "divine"
                                  },
                                  "prepared": {
                                    "value": "charges"
                                  },
                                  "showSlotlessLevels": {
                                    "value": true
                                  },
                                  "proficiency": {
                                    "value": 1,
                                    "slug": ""
                                  },
                                  "slots": {
                                    "slot0": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot1": {
                                      "prepared": [],
                                      "value": 3,
                                      "max": 4
                                    },
                                    "slot2": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot3": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot4": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot5": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot6": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot7": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot8": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot9": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot10": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    },
                                    "slot11": {
                                      "prepared": [],
                                      "value": 0,
                                      "max": 0
                                    }
                                  },
                                  "autoHeightenLevel": {
                                    "value": null
                                  }
                                },
                                "_id": "SYgWtX4Tb3dQGSDp",
                                "img": "systems/pf2e/icons/default-icons/spellcastingEntry.svg",
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "flags": {},
                                "_stats": {
                                  "compendiumSource": null,
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158602163,
                                  "modifiedTime": 1719167588241,
                                  "lastModifiedBy": "9Rhur8fgbHfvQaUS"
                                }
                              },
                              {
                                "img": "systems/pf2e/icons/spells/harm.webp",
                                "name": "Harm",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>You channel void energy to harm the living or heal the undead. If the target is a living creature, you deal 1d8 void damage to it, and it gets a basic Fortitude save. If the target is a willing undead creature, you restore that amount of Hit Points. The number of actions you spend when Casting this Spell determines its targets, range, area, and other parameters.</p>\n<p><span class=\"action-glyph\">1</span> The spell has a range of touch.</p>\n<p><span class=\"action-glyph\">2</span> <strong>(concentrate)</strong> The spell has a range of 30 feet. If you're healing an undead creature, increase the Hit Points restored by 8.</p>\n<p><span class=\"action-glyph\">3</span> <strong>(concentrate)</strong> You disperse void energy in a @Template[type:emanation|distance:30]. This targets all living and undead creatures in the area.</p>\n<hr />\n<p><strong>Heightened (+1)</strong> The amount of healing or damage increases by 1d8, and the extra healing for the 2-action version increases by 8.</p>"
                                  },
                                  "rules": [],
                                  "slug": "harm",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "manipulate",
                                      "void"
                                    ],
                                    "rarity": "common",
                                    "traditions": [
                                      "divine"
                                    ]
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "requirements": "",
                                  "target": {
                                    "value": "1 living creature or 1 willing undead creature"
                                  },
                                  "range": {
                                    "value": "varies"
                                  },
                                  "area": null,
                                  "time": {
                                    "value": "1 to 3"
                                  },
                                  "duration": {
                                    "value": "",
                                    "sustained": false
                                  },
                                  "damage": {
                                    "0": {
                                      "applyMod": false,
                                      "category": null,
                                      "formula": "1d8",
                                      "kinds": [
                                        "damage",
                                        "healing"
                                      ],
                                      "materials": [],
                                      "type": "void"
                                    }
                                  },
                                  "defense": {
                                    "save": {
                                      "basic": true,
                                      "statistic": "fortitude"
                                    }
                                  },
                                  "cost": {
                                    "value": ""
                                  },
                                  "location": {
                                    "value": "SYgWtX4Tb3dQGSDp",
                                    "heightenedLevel": 1
                                  },
                                  "counteraction": false,
                                  "heightening": {
                                    "damage": {
                                      "0": "1d8"
                                    },
                                    "interval": 1,
                                    "type": "interval"
                                  },
                                  "overlays": {
                                    "4gyp3qlsv5ywdyjq": {
                                      "_id": "4gyp3qlsv5ywdyjq",
                                      "name": "Harm (vs. Undead)",
                                      "overlayType": "override",
                                      "sort": 3,
                                      "system": {
                                        "damage": {
                                          "0": {
                                            "formula": "1d8+8",
                                            "kinds": [
                                              "healing"
                                            ]
                                          }
                                        },
                                        "defense": null,
                                        "heightening": {
                                          "damage": {
                                            "0": "1d8+8"
                                          }
                                        },
                                        "range": {
                                          "value": "30 feet"
                                        },
                                        "target": {
                                          "value": "1 willing undead creature"
                                        },
                                        "time": {
                                          "value": "2"
                                        },
                                        "traits": {
                                          "value": [
                                            "concentrate",
                                            "manipulate",
                                            "void"
                                          ]
                                        }
                                      }
                                    },
                                    "pq7cxntbz4s8g5ik": {
                                      "_id": "pq7cxntbz4s8g5ik",
                                      "overlayType": "override",
                                      "sort": 1,
                                      "system": {
                                        "range": {
                                          "value": "touch"
                                        },
                                        "time": {
                                          "value": "1"
                                        }
                                      }
                                    },
                                    "rvhoa43rqqqp8izn": {
                                      "_id": "rvhoa43rqqqp8izn",
                                      "overlayType": "override",
                                      "sort": 4,
                                      "system": {
                                        "area": {
                                          "type": "emanation",
                                          "value": 30
                                        },
                                        "range": {
                                          "value": ""
                                        },
                                        "target": {
                                          "value": "all living and undead creatures"
                                        },
                                        "time": {
                                          "value": "3"
                                        },
                                        "traits": {
                                          "value": [
                                            "concentrate",
                                            "manipulate",
                                            "void"
                                          ]
                                        }
                                      }
                                    },
                                    "z04svm1cvfcxtplb": {
                                      "_id": "z04svm1cvfcxtplb",
                                      "name": "Harm (vs. Living)",
                                      "overlayType": "override",
                                      "sort": 2,
                                      "system": {
                                        "damage": {
                                          "0": {
                                            "kinds": [
                                              "damage"
                                            ]
                                          }
                                        },
                                        "range": {
                                          "value": "30 feet"
                                        },
                                        "target": {
                                          "value": "1 living creature"
                                        },
                                        "time": {
                                          "value": "2"
                                        },
                                        "traits": {
                                          "value": [
                                            "concentrate",
                                            "manipulate",
                                            "void"
                                          ]
                                        }
                                      }
                                    }
                                  }
                                },
                                "type": "spell",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.spells-srd.Item.wdA52JJnsuQWeyqz",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158623485,
                                  "modifiedTime": 1719158623485,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.spells-srd.Item.wdA52JJnsuQWeyqz"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "HWCGqrVI2QS5Y25E"
                              },
                              {
                                "_id": "rpaZHYRltSuw70S9",
                                "img": "systems/pf2e/icons/spells/shield.webp",
                                "name": "Shield",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>You raise a magical shield of force. This counts as using the Raise a Shield action, giving you a +1 circumstance bonus to AC until the start of your next turn, but it doesn't require a hand to use.</p>\n<p>While the spell is in effect, you can use the @UUID[Compendium.pf2e.feats-srd.Item.jM72TjJ965jocBV8]{Shield Block} reaction with your magic shield. The shield has Hardness 5. You can use the spell's reaction to reduce damage from any spell or magical effect, even if it doesn't deal physical damage. After you use Shield Block, the spell ends and you can't cast it again for 10 minutes.</p>\n<p>@UUID[Compendium.pf2e.spell-effects.Item.Jemq5UknGdMO7b73]{Spell Effect: Shield}</p>\n<p>@UUID[Compendium.pf2e.spell-effects.Item.QF6RDlCoTvkVHRo4]{Effect: Shield Immunity}</p>\n<hr />\n<p><strong>Heightened (+2)</strong> The shield's Hardness increases by 5.</p>"
                                  },
                                  "rules": [],
                                  "slug": "shield",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "cantrip",
                                      "concentrate",
                                      "force"
                                    ],
                                    "rarity": "common",
                                    "traditions": [
                                      "arcane",
                                      "divine",
                                      "occult"
                                    ]
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "requirements": "",
                                  "target": {
                                    "value": ""
                                  },
                                  "range": {
                                    "value": ""
                                  },
                                  "area": null,
                                  "time": {
                                    "value": "1"
                                  },
                                  "duration": {
                                    "value": "until the start of your next turn",
                                    "sustained": false
                                  },
                                  "damage": {},
                                  "defense": null,
                                  "cost": {
                                    "value": ""
                                  },
                                  "location": {
                                    "value": "gf2Aa7XduhCzhkm4"
                                  },
                                  "counteraction": false
                                },
                                "type": "spell",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.spells-srd.Item.TVKNbcgTee19PXZR",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158642835,
                                  "modifiedTime": 1719158642835,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.spells-srd.Item.TVKNbcgTee19PXZR"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "F7cZvTTTvmkLzv8q",
                                "img": "systems/pf2e/icons/spells/guidance.webp",
                                "name": "Guidance",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>You ask for the guidance of supernatural entities, granting the target a +1 status bonus to one attack roll, Perception check, saving throw, or skill check the target attempts before the duration ends. The target chooses which roll to use the bonus on before rolling. If the target uses the bonus, the spell ends. Either way, the target is then temporarily immune for 1 hour.</p>\n<p>@UUID[Compendium.pf2e.spell-effects.Item.3qHKBDF7lrHw8jFK]{Spell Effect: Guidance}</p>\n<p>@UUID[Compendium.pf2e.spell-effects.Item.3LyOkV25p7wA181H]{Effect: Guidance Immunity}</p>"
                                  },
                                  "rules": [],
                                  "slug": "guidance",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "cantrip",
                                      "concentrate"
                                    ],
                                    "rarity": "common",
                                    "traditions": [
                                      "divine",
                                      "occult",
                                      "primal"
                                    ]
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "requirements": "",
                                  "target": {
                                    "value": "1 creature"
                                  },
                                  "range": {
                                    "value": "30 feet"
                                  },
                                  "area": null,
                                  "time": {
                                    "value": "1"
                                  },
                                  "duration": {
                                    "value": "until the start of your next turn",
                                    "sustained": false
                                  },
                                  "damage": {},
                                  "defense": null,
                                  "cost": {
                                    "value": ""
                                  },
                                  "location": {
                                    "value": "gf2Aa7XduhCzhkm4"
                                  },
                                  "counteraction": false
                                },
                                "type": "spell",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.spells-srd.Item.izcxFQFwf3woCnFs",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158650893,
                                  "modifiedTime": 1719158650893,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.spells-srd.Item.izcxFQFwf3woCnFs"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "lwFhlPbHaKHVyGVH",
                                "img": "icons/magic/control/debuff-energy-hold-yellow.webp",
                                "name": "Stabilize",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>Life energy shuts death's door. The target loses the @UUID[Compendium.pf2e.conditionitems.Item.yZRUzMqrMmfLu0V1]{Dying} condition, though it remains @UUID[Compendium.pf2e.conditionitems.Item.fBnFDH2MTzgFijKf]{Unconscious} at 0 Hit Points.</p>"
                                  },
                                  "rules": [],
                                  "slug": "stabilize",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "cantrip",
                                      "concentrate",
                                      "healing",
                                      "manipulate",
                                      "vitality"
                                    ],
                                    "rarity": "common",
                                    "traditions": [
                                      "divine",
                                      "primal"
                                    ]
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "requirements": "",
                                  "target": {
                                    "value": "1 dying creature"
                                  },
                                  "range": {
                                    "value": "30 feet"
                                  },
                                  "area": null,
                                  "time": {
                                    "value": "2"
                                  },
                                  "duration": {
                                    "value": "",
                                    "sustained": false
                                  },
                                  "damage": {},
                                  "defense": null,
                                  "cost": {
                                    "value": ""
                                  },
                                  "location": {
                                    "value": "gf2Aa7XduhCzhkm4"
                                  },
                                  "counteraction": false
                                },
                                "type": "spell",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.spells-srd.Item.SnjhtQYexDtNDdEg",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158655758,
                                  "modifiedTime": 1719158655758,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.spells-srd.Item.SnjhtQYexDtNDdEg"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "zr3FTrhxhEsnpBG6",
                                "img": "icons/commodities/metal/ingot-plain-steel.webp",
                                "name": "Detect Metal",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>You attune yourself to magnetic fields, becoming aware of the presence or absence of metallic objects, veins, and deposits within the area. You can choose to ignore metal you're fully aware of, such as the gear you and your allies wear and carry.</p>\n<p>You detect metal @UUID[Compendium.pf2e.conditionitems.Item.iU0fEDdBp3rXpTMC]{Hidden} by illusions (such as @UUID[Compendium.pf2e.spells-srd.Item.XXqE1eY3w3z6xJCB]{Invisibility}) only if the illusion has a lower rank than your detect metal spell. Against deceptive illusions, detect metal always notices an absence of metal when a non-metallic object is disguised as metallic. However, if the deception involves disguising one metallic object as another, such as pretending a copper coin is made of gold, detect metal registers only the presence of metal, not its type, even if the rank of your detect metal spell exceeds that of the illusion effect.</p>\n<hr />\n<p><strong>Heightened (3rd)</strong> You can discern all types of metal you detected. Your spell can overcome deceptive illusory spells hiding one metal as another if the magic effect's rank is lower than that of your detect metal spell.</p>"
                                  },
                                  "rules": [],
                                  "slug": "detect-metal",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "cantrip",
                                      "concentrate",
                                      "detection",
                                      "manipulate",
                                      "metal"
                                    ],
                                    "rarity": "common",
                                    "traditions": [
                                      "arcane",
                                      "divine",
                                      "occult",
                                      "primal"
                                    ]
                                  },
                                  "publication": {
                                    "title": "Pathfinder Rage of Elements",
                                    "authors": "",
                                    "license": "OGL",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "requirements": "",
                                  "target": {
                                    "value": ""
                                  },
                                  "range": {
                                    "value": ""
                                  },
                                  "area": {
                                    "type": "emanation",
                                    "value": 30
                                  },
                                  "time": {
                                    "value": "2"
                                  },
                                  "duration": {
                                    "value": "",
                                    "sustained": false
                                  },
                                  "damage": {},
                                  "defense": null,
                                  "cost": {
                                    "value": ""
                                  },
                                  "location": {
                                    "value": "gf2Aa7XduhCzhkm4"
                                  },
                                  "counteraction": false
                                },
                                "type": "spell",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.spells-srd.Item.vJZ83ehQiM906lea",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158661391,
                                  "modifiedTime": 1719158661391,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.spells-srd.Item.vJZ83ehQiM906lea"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "udCkPvaiAilue7Ar",
                                "img": "systems/pf2e/icons/spells/glitterdust.webp",
                                "name": "Ancient Dust",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>You cough up a cloud of gray soil, echoing the dust in the graves of Kemnebi's many victims. Each creature in the area takes void damage equal to your spellcasting modifier and 1 persistent void damage depending on its Fortitude save.</p>\n<hr />\n<p><strong>Critical Success</strong> The creature is unaffected.</p>\n<p><strong>Success</strong> The creature takes half damage and no persistent damage.</p>\n<p><strong>Failure</strong> The creature takes full damage and persistent damage.</p>\n<p><strong>Critical Failure</strong> The creature takes double damage and double the persistent damage.</p>\n<hr />\n<p><strong>Heightened (+2)</strong> The initial void damage increases by 1d6, and the persistent damage increases by 1.</p>"
                                  },
                                  "rules": [],
                                  "slug": "ancient-dust",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "cantrip",
                                      "concentrate",
                                      "manipulate",
                                      "void"
                                    ],
                                    "rarity": "uncommon",
                                    "traditions": [
                                      "arcane",
                                      "divine"
                                    ]
                                  },
                                  "publication": {
                                    "title": "Pathfinder #186: Ghost King's Rage",
                                    "authors": "",
                                    "license": "OGL",
                                    "remaster": false
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "requirements": "",
                                  "target": {
                                    "value": ""
                                  },
                                  "range": {
                                    "value": ""
                                  },
                                  "area": {
                                    "type": "cone",
                                    "value": 15
                                  },
                                  "time": {
                                    "value": "2"
                                  },
                                  "duration": {
                                    "value": "",
                                    "sustained": false
                                  },
                                  "damage": {
                                    "2voY0xl4sJrjuqKs": {
                                      "applyMod": false,
                                      "category": "persistent",
                                      "formula": "1",
                                      "kinds": [
                                        "damage"
                                      ],
                                      "materials": [],
                                      "type": "void"
                                    },
                                    "bmKxkM6C7wpQlsxf": {
                                      "applyMod": true,
                                      "category": null,
                                      "formula": "0",
                                      "kinds": [
                                        "damage"
                                      ],
                                      "materials": [],
                                      "type": "void"
                                    }
                                  },
                                  "defense": {
                                    "save": {
                                      "basic": false,
                                      "statistic": "fortitude"
                                    }
                                  },
                                  "cost": {
                                    "value": ""
                                  },
                                  "location": {
                                    "value": "gf2Aa7XduhCzhkm4"
                                  },
                                  "counteraction": false,
                                  "heightening": {
                                    "damage": {
                                      "2voY0xl4sJrjuqKs": "1",
                                      "bmKxkM6C7wpQlsxf": "1d6"
                                    },
                                    "interval": 2,
                                    "type": "interval"
                                  }
                                },
                                "type": "spell",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.spells-srd.Item.OJ91rm1FkJSlf3nk",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158666807,
                                  "modifiedTime": 1719158666807,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.spells-srd.Item.OJ91rm1FkJSlf3nk"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "WEUT8sxlUsEq4Fnq",
                                "img": "icons/magic/life/cross-worn-green.webp",
                                "name": "Heal",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>You channel vital energy to heal the living or damage the undead. If the target is a willing living creature, you restore 1d8 Hit Points. If the target is undead, you deal that amount of vitality damage to it, and it gets a basic Fortitude save. The number of actions you spend when Casting this Spell determines its targets, range, area, and other parameters.</p>\n<p><span class=\"action-glyph\">1</span> The spell has a range of touch.</p>\n<p><span class=\"action-glyph\">2</span> <strong>(concentrate)</strong> The spell has a range of 30 feet. If you're healing a living creature, increase the Hit Points restored by 8.</p>\n<p><span class=\"action-glyph\">3</span> <strong>(concentrate)</strong> You disperse vital energy in a @Template[type:emanation|distance:30]. This targets all living and undead creatures in the burst.</p>\n<hr />\n<p><strong>Heightened (+1)</strong> The amount of healing or damage increases by 1d8, and the extra healing for the 2-action version increases by 8.</p>"
                                  },
                                  "rules": [],
                                  "slug": "heal",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "healing",
                                      "manipulate",
                                      "vitality"
                                    ],
                                    "rarity": "common",
                                    "traditions": [
                                      "divine",
                                      "primal"
                                    ]
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "requirements": "",
                                  "target": {
                                    "value": "1 willing living creature or 1 undead"
                                  },
                                  "range": {
                                    "value": "varies"
                                  },
                                  "area": null,
                                  "time": {
                                    "value": "1 to 3"
                                  },
                                  "duration": {
                                    "value": "",
                                    "sustained": false
                                  },
                                  "damage": {
                                    "0": {
                                      "applyMod": false,
                                      "category": null,
                                      "formula": "1d8",
                                      "kinds": [
                                        "damage",
                                        "healing"
                                      ],
                                      "materials": [],
                                      "type": "vitality"
                                    }
                                  },
                                  "defense": {
                                    "save": {
                                      "basic": true,
                                      "statistic": "fortitude"
                                    }
                                  },
                                  "cost": {
                                    "value": ""
                                  },
                                  "location": {
                                    "value": "gf2Aa7XduhCzhkm4"
                                  },
                                  "counteraction": false,
                                  "heightening": {
                                    "damage": {
                                      "0": "1d8"
                                    },
                                    "interval": 1,
                                    "type": "interval"
                                  },
                                  "overlays": {
                                    "37gy7l19tik74o4s": {
                                      "_id": "37gy7l19tik74o4s",
                                      "name": "Heal (vs. Living)",
                                      "overlayType": "override",
                                      "sort": 2,
                                      "system": {
                                        "damage": {
                                          "0": {
                                            "formula": "1d8+8",
                                            "kinds": [
                                              "healing"
                                            ]
                                          }
                                        },
                                        "defense": null,
                                        "heightening": {
                                          "damage": {
                                            "0": "1d8+8"
                                          }
                                        },
                                        "range": {
                                          "value": "30 feet"
                                        },
                                        "time": {
                                          "value": "2"
                                        },
                                        "traits": {
                                          "value": [
                                            "concentrate",
                                            "healing",
                                            "manipulate",
                                            "vitality"
                                          ]
                                        }
                                      }
                                    },
                                    "7qdtetowq348s9oc": {
                                      "_id": "7qdtetowq348s9oc",
                                      "overlayType": "override",
                                      "sort": 1,
                                      "system": {
                                        "range": {
                                          "value": "touch"
                                        },
                                        "time": {
                                          "value": "1"
                                        }
                                      }
                                    },
                                    "7vbvdrv2cl87sqta": {
                                      "_id": "7vbvdrv2cl87sqta",
                                      "overlayType": "override",
                                      "sort": 4,
                                      "system": {
                                        "area": {
                                          "type": "emanation",
                                          "value": 30
                                        },
                                        "range": {
                                          "value": ""
                                        },
                                        "target": {
                                          "value": "all living and undead creatures"
                                        },
                                        "time": {
                                          "value": "3"
                                        },
                                        "traits": {
                                          "value": [
                                            "concentrate",
                                            "healing",
                                            "manipulate",
                                            "vitality"
                                          ]
                                        }
                                      }
                                    },
                                    "lfxcoz2d3f8j2zq1": {
                                      "_id": "lfxcoz2d3f8j2zq1",
                                      "name": "Heal (vs. Undead)",
                                      "overlayType": "override",
                                      "sort": 3,
                                      "system": {
                                        "damage": {
                                          "0": {
                                            "kinds": [
                                              "damage"
                                            ]
                                          }
                                        },
                                        "range": {
                                          "value": "30 feet"
                                        },
                                        "target": {
                                          "value": "1 undead"
                                        },
                                        "time": {
                                          "value": "2"
                                        },
                                        "traits": {
                                          "value": [
                                            "concentrate",
                                            "healing",
                                            "manipulate",
                                            "vitality"
                                          ]
                                        }
                                      }
                                    }
                                  }
                                },
                                "type": "spell",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.spells-srd.Item.rfZpqmj0AIIdkVIs",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158673493,
                                  "modifiedTime": 1719158673493,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.spells-srd.Item.rfZpqmj0AIIdkVIs"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "c9stfeD3cuTZnUCV",
                                "img": "icons/magic/death/projectile-skull-flaming-yellow.webp",
                                "name": "Schadenfreude",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p><strong>Trigger</strong> You critically fail a saving throw against a foe's effect.</p>\n<p>You distract your enemy with their feeling of smug pleasure when you fail catastrophically. They must attempt a Will save.</p>\n<hr />\n<p><strong>Critical Success</strong> The creature is unaffected.</p>\n<p><strong>Success</strong> The creature is distracted by its amusement and takes a -1 status penalty on Perception checks and Will saves for 1 round. @UUID[Compendium.pf2e.spell-effects.Item.TjGHxli0edXI6rAg]{Spell Effect: Schadenfreude (Success)}</p>\n<p><strong>Failure</strong> The creature is overcome by its amusement and is @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 1} for 1 round.</p>\n<p><strong>Critical Failure</strong> The creature is lost in its amusement and is @UUID[Compendium.pf2e.conditionitems.Item.e1XGnhKNSQIm5IXg]{Stupefied 2} for 1 round and @UUID[Compendium.pf2e.conditionitems.Item.dfCMdR4wnpbYNTix]{Stunned 1}.</p>"
                                  },
                                  "rules": [],
                                  "slug": "schadenfreude",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "concentrate",
                                      "emotion",
                                      "mental"
                                    ],
                                    "rarity": "common",
                                    "traditions": [
                                      "arcane",
                                      "divine",
                                      "occult"
                                    ]
                                  },
                                  "publication": {
                                    "title": "Pathfinder Secrets of Magic",
                                    "authors": "",
                                    "license": "OGL",
                                    "remaster": false
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "requirements": "",
                                  "target": {
                                    "value": "the triggering foe"
                                  },
                                  "range": {
                                    "value": "30 feet"
                                  },
                                  "area": null,
                                  "time": {
                                    "value": "reaction"
                                  },
                                  "duration": {
                                    "value": "",
                                    "sustained": false
                                  },
                                  "damage": {},
                                  "defense": {
                                    "save": {
                                      "basic": false,
                                      "statistic": "will"
                                    }
                                  },
                                  "cost": {
                                    "value": ""
                                  },
                                  "location": {
                                    "value": "gf2Aa7XduhCzhkm4"
                                  },
                                  "counteraction": false
                                },
                                "type": "spell",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.spells-srd.Item.8E97SA9KAWCNdXfO",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158679384,
                                  "modifiedTime": 1719158679384,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.spells-srd.Item.8E97SA9KAWCNdXfO"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "pvCyC4a09OT36pps",
                                "img": "icons/containers/bags/pack-leather-white-tan.webp",
                                "name": "Backpack",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>A backpack holds up to 4 Bulk of items and the first 2 Bulk of these items don't count against your Bulk limits. If you're carrying or stowing the pack rather than wearing it on your back, its Bulk is light instead of negligible</p>"
                                  },
                                  "rules": [],
                                  "slug": "backpack",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 0
                                  },
                                  "quantity": 1,
                                  "baseItem": null,
                                  "bulk": {
                                    "value": 0,
                                    "heldOrStowed": 0.1,
                                    "capacity": 4,
                                    "ignored": 2
                                  },
                                  "hp": {
                                    "value": 0,
                                    "max": 0
                                  },
                                  "hardness": 0,
                                  "price": {
                                    "value": {
                                      "sp": 1
                                    }
                                  },
                                  "equipped": {
                                    "carryType": "worn",
                                    "invested": null,
                                    "inSlot": false
                                  },
                                  "containerId": null,
                                  "size": "lg",
                                  "material": {
                                    "type": null,
                                    "grade": null
                                  },
                                  "identification": {
                                    "status": "identified",
                                    "unidentified": {
                                      "name": "",
                                      "img": "",
                                      "data": {
                                        "description": {
                                          "value": ""
                                        }
                                      }
                                    },
                                    "misidentified": {}
                                  },
                                  "collapsed": false,
                                  "stowing": true,
                                  "usage": {
                                    "value": "wornbackpack"
                                  }
                                },
                                "type": "backpack",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.equipment-srd.Item.3lgwjrFEsQVKzhh7",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158780905,
                                  "modifiedTime": 1719158780905,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.equipment-srd.Item.3lgwjrFEsQVKzhh7"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "4rnxxu5YOpcaQ4sk",
                                "img": "icons/sundries/survival/rope-wrapped-brown.webp",
                                "name": "Rope",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>50 feet of rope.</p>"
                                  },
                                  "rules": [],
                                  "slug": "rope",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 0
                                  },
                                  "quantity": 1,
                                  "baseItem": null,
                                  "bulk": {
                                    "value": 0.1
                                  },
                                  "hp": {
                                    "value": 0,
                                    "max": 0
                                  },
                                  "hardness": 0,
                                  "price": {
                                    "value": {
                                      "sp": 5
                                    }
                                  },
                                  "equipped": {
                                    "carryType": "worn",
                                    "invested": null
                                  },
                                  "containerId": "pvCyC4a09OT36pps",
                                  "size": "lg",
                                  "material": {
                                    "type": null,
                                    "grade": null
                                  },
                                  "identification": {
                                    "status": "identified",
                                    "unidentified": {
                                      "name": "",
                                      "img": "",
                                      "data": {
                                        "description": {
                                          "value": ""
                                        }
                                      }
                                    },
                                    "misidentified": {}
                                  },
                                  "usage": {
                                    "value": "held-in-two-hands"
                                  },
                                  "subitems": []
                                },
                                "type": "equipment",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.equipment-srd.Item.fyYnQf1NAx9fWFaS",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158780905,
                                  "modifiedTime": 1719158780905,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.equipment-srd.Item.fyYnQf1NAx9fWFaS"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "mzolt1yqAYT2R6PL",
                                "img": "systems/pf2e/icons/equipment/adventuring-gear/waterskin.webp",
                                "name": "Waterskin",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>When it's full, a waterskin contains roughly 1 day's worth of water for a Small or Medium creature.</p>"
                                  },
                                  "rules": [],
                                  "slug": "waterskin",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 0
                                  },
                                  "quantity": 1,
                                  "baseItem": null,
                                  "bulk": {
                                    "value": 0.1
                                  },
                                  "hp": {
                                    "value": 0,
                                    "max": 0
                                  },
                                  "hardness": 0,
                                  "price": {
                                    "value": {
                                      "cp": 5
                                    }
                                  },
                                  "equipped": {
                                    "carryType": "worn",
                                    "invested": null
                                  },
                                  "containerId": "pvCyC4a09OT36pps",
                                  "size": "lg",
                                  "material": {
                                    "type": null,
                                    "grade": null
                                  },
                                  "identification": {
                                    "status": "identified",
                                    "unidentified": {
                                      "name": "",
                                      "img": "",
                                      "data": {
                                        "description": {
                                          "value": ""
                                        }
                                      }
                                    },
                                    "misidentified": {}
                                  },
                                  "usage": {
                                    "value": "held-in-one-hand"
                                  },
                                  "subitems": []
                                },
                                "type": "equipment",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.equipment-srd.Item.VnPh324pKwd2ZB66",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158780905,
                                  "modifiedTime": 1719158780905,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.equipment-srd.Item.VnPh324pKwd2ZB66"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "UsBkT9t3Wpv6H3LH",
                                "img": "systems/pf2e/icons/equipment/adventuring-gear/chalk.webp",
                                "name": "Chalk",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": ""
                                  },
                                  "rules": [],
                                  "slug": "chalk",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 0
                                  },
                                  "quantity": 10,
                                  "baseItem": null,
                                  "bulk": {
                                    "value": 0
                                  },
                                  "hp": {
                                    "value": 0,
                                    "max": 0
                                  },
                                  "hardness": 0,
                                  "price": {
                                    "value": {
                                      "cp": 1
                                    },
                                    "per": 10
                                  },
                                  "equipped": {
                                    "carryType": "worn"
                                  },
                                  "containerId": "pvCyC4a09OT36pps",
                                  "size": "lg",
                                  "material": {
                                    "type": null,
                                    "grade": null
                                  },
                                  "identification": {
                                    "status": "identified",
                                    "unidentified": {
                                      "name": "",
                                      "img": "",
                                      "data": {
                                        "description": {
                                          "value": ""
                                        }
                                      }
                                    },
                                    "misidentified": {}
                                  },
                                  "category": "other",
                                  "uses": {
                                    "value": 1,
                                    "max": 1,
                                    "autoDestroy": true
                                  },
                                  "damage": null,
                                  "usage": {
                                    "value": "held-in-one-hand"
                                  },
                                  "stackGroup": null,
                                  "spell": null
                                },
                                "type": "consumable",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.equipment-srd.Item.xShIDyydOMkGvGNb",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158780905,
                                  "modifiedTime": 1719158780905,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.equipment-srd.Item.xShIDyydOMkGvGNb"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "MV3oFJdtN3GtNCZa",
                                "img": "icons/commodities/stone/geode-raw-tan.webp",
                                "name": "Flint and Steel",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>Flint and steel are useful in creating a fire if you have the time to catch a spark, though using them is typically too time-consuming to be practical during an encounter. Even in ideal conditions, using flint and steel to light a flame requires using at least 3 actions, and often significantly longer.</p>"
                                  },
                                  "rules": [],
                                  "slug": "flint-and-steel",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 0
                                  },
                                  "quantity": 1,
                                  "baseItem": null,
                                  "bulk": {
                                    "value": 0
                                  },
                                  "hp": {
                                    "value": 0,
                                    "max": 0
                                  },
                                  "hardness": 0,
                                  "price": {
                                    "value": {
                                      "cp": 5
                                    }
                                  },
                                  "equipped": {
                                    "carryType": "worn",
                                    "invested": null
                                  },
                                  "containerId": "pvCyC4a09OT36pps",
                                  "size": "lg",
                                  "material": {
                                    "type": null,
                                    "grade": null
                                  },
                                  "identification": {
                                    "status": "identified",
                                    "unidentified": {
                                      "name": "",
                                      "img": "",
                                      "data": {
                                        "description": {
                                          "value": ""
                                        }
                                      }
                                    },
                                    "misidentified": {}
                                  },
                                  "usage": {
                                    "value": "held-in-two-hands"
                                  },
                                  "subitems": []
                                },
                                "type": "equipment",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.equipment-srd.Item.UlIxxLm71UdRgCFE",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158780905,
                                  "modifiedTime": 1719158780905,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.equipment-srd.Item.UlIxxLm71UdRgCFE"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "C3wijyrhwmjh9lW5",
                                "img": "systems/pf2e/icons/equipment/adventuring-gear/rations.webp",
                                "name": "Rations",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": ""
                                  },
                                  "rules": [],
                                  "slug": "rations",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 0
                                  },
                                  "quantity": 2,
                                  "baseItem": null,
                                  "bulk": {
                                    "value": 0.1
                                  },
                                  "hp": {
                                    "value": 0,
                                    "max": 0
                                  },
                                  "hardness": 0,
                                  "price": {
                                    "value": {
                                      "sp": 4
                                    }
                                  },
                                  "equipped": {
                                    "carryType": "worn"
                                  },
                                  "containerId": "pvCyC4a09OT36pps",
                                  "size": "lg",
                                  "material": {
                                    "type": null,
                                    "grade": null
                                  },
                                  "identification": {
                                    "status": "identified",
                                    "unidentified": {
                                      "name": "",
                                      "img": "",
                                      "data": {
                                        "description": {
                                          "value": ""
                                        }
                                      }
                                    },
                                    "misidentified": {}
                                  },
                                  "category": "other",
                                  "uses": {
                                    "value": 7,
                                    "max": 7,
                                    "autoDestroy": true
                                  },
                                  "damage": null,
                                  "usage": {
                                    "value": "held-in-one-hand"
                                  },
                                  "stackGroup": null,
                                  "spell": null
                                },
                                "type": "consumable",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.equipment-srd.Item.L9ZV076913otGtiB",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158780905,
                                  "modifiedTime": 1719158780905,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.equipment-srd.Item.L9ZV076913otGtiB"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "dw2X3bNAbmpfOQj2",
                                "img": "icons/sundries/lights/torch-brown.webp",
                                "name": "Torch",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>A torch sheds bright light in a 20-foot radius (and dim light to the next 20 feet) for 1 hour. It can be used as an improvised weapon that deals 1d4 bludgeoning damage plus 1 fire damage.</p>"
                                  },
                                  "rules": [
                                    {
                                      "key": "TokenLight",
                                      "predicate": [
                                        "lit-torch"
                                      ],
                                      "value": {
                                        "alpha": 0.45,
                                        "animation": {
                                          "intensity": 1,
                                          "speed": 2,
                                          "type": "flame"
                                        },
                                        "attenuation": 0.4,
                                        "bright": 20,
                                        "color": "#ffae3d",
                                        "dim": 40,
                                        "shadows": 0.2
                                      }
                                    },
                                    {
                                      "category": "simple",
                                      "damage": {
                                        "base": {
                                          "damageType": "bludgeoning",
                                          "dice": 1,
                                          "die": "d4"
                                        }
                                      },
                                      "key": "Strike",
                                      "otherTags": [
                                        "improvised"
                                      ],
                                      "predicate": [
                                        {
                                          "not": "lit-torch"
                                        }
                                      ]
                                    },
                                    {
                                      "category": "simple",
                                      "damage": {
                                        "base": {
                                          "damageType": "bludgeoning",
                                          "dice": 1,
                                          "die": "d4"
                                        }
                                      },
                                      "img": "icons/sundries/lights/torch-brown-lit.webp",
                                      "key": "Strike",
                                      "otherTags": [
                                        "improvised"
                                      ],
                                      "predicate": [
                                        "lit-torch"
                                      ]
                                    },
                                    {
                                      "damageType": "fire",
                                      "key": "FlatModifier",
                                      "predicate": [
                                        "lit-torch"
                                      ],
                                      "selector": "{item|_id}-damage",
                                      "value": 1
                                    },
                                    {
                                      "domain": "all",
                                      "key": "RollOption",
                                      "label": "PF2E.SpecificRule.LitTorch",
                                      "option": "lit-torch",
                                      "toggleable": true
                                    },
                                    {
                                      "key": "TokenEffectIcon",
                                      "predicate": [
                                        "lit-torch"
                                      ],
                                      "value": "icons/sundries/lights/torch-brown-lit.webp"
                                    }
                                  ],
                                  "slug": "torch",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 0
                                  },
                                  "quantity": 5,
                                  "baseItem": null,
                                  "bulk": {
                                    "value": 0.1
                                  },
                                  "hp": {
                                    "value": 0,
                                    "max": 0
                                  },
                                  "hardness": 0,
                                  "price": {
                                    "value": {
                                      "cp": 1
                                    }
                                  },
                                  "equipped": {
                                    "carryType": "worn",
                                    "invested": null
                                  },
                                  "containerId": "pvCyC4a09OT36pps",
                                  "size": "lg",
                                  "material": {
                                    "type": null,
                                    "grade": null
                                  },
                                  "identification": {
                                    "status": "identified",
                                    "unidentified": {
                                      "name": "",
                                      "img": "",
                                      "data": {
                                        "description": {
                                          "value": ""
                                        }
                                      }
                                    },
                                    "misidentified": {}
                                  },
                                  "usage": {
                                    "value": "held-in-one-hand"
                                  },
                                  "subitems": []
                                },
                                "type": "equipment",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.equipment-srd.Item.8Jdw4yAzWYylGePS",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158780905,
                                  "modifiedTime": 1719158780905,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.equipment-srd.Item.8Jdw4yAzWYylGePS"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "R6ElFlRWofaVXYxo",
                                "img": "icons/containers/ammunition/quiver-simple-brown.webp",
                                "name": "Bedroll",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>A rolled up bed.</p>"
                                  },
                                  "rules": [],
                                  "slug": "bedroll",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 0
                                  },
                                  "quantity": 1,
                                  "baseItem": null,
                                  "bulk": {
                                    "value": 0.1
                                  },
                                  "hp": {
                                    "value": 0,
                                    "max": 0
                                  },
                                  "hardness": 0,
                                  "price": {
                                    "value": {
                                      "cp": 2
                                    }
                                  },
                                  "equipped": {
                                    "carryType": "worn",
                                    "invested": null
                                  },
                                  "containerId": "pvCyC4a09OT36pps",
                                  "size": "lg",
                                  "material": {
                                    "type": null,
                                    "grade": null
                                  },
                                  "identification": {
                                    "status": "identified",
                                    "unidentified": {
                                      "name": "",
                                      "img": "",
                                      "data": {
                                        "description": {
                                          "value": ""
                                        }
                                      }
                                    },
                                    "misidentified": {}
                                  },
                                  "usage": {
                                    "value": "other"
                                  },
                                  "subitems": []
                                },
                                "type": "equipment",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.equipment-srd.Item.fagzYdmfYyMQ6J77",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158780905,
                                  "modifiedTime": 1719158780905,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.equipment-srd.Item.fagzYdmfYyMQ6J77"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "_id": "1uBP6FG9qb2PwDBO",
                                "img": "icons/sundries/survival/soap.webp",
                                "name": "Soap",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>Bar of soap.</p>"
                                  },
                                  "rules": [],
                                  "slug": "soap",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 0
                                  },
                                  "quantity": 1,
                                  "baseItem": null,
                                  "bulk": {
                                    "value": 0
                                  },
                                  "hp": {
                                    "value": 0,
                                    "max": 0
                                  },
                                  "hardness": 0,
                                  "price": {
                                    "value": {
                                      "cp": 2
                                    }
                                  },
                                  "equipped": {
                                    "carryType": "worn",
                                    "invested": null
                                  },
                                  "containerId": "pvCyC4a09OT36pps",
                                  "size": "lg",
                                  "material": {
                                    "type": null,
                                    "grade": null
                                  },
                                  "identification": {
                                    "status": "identified",
                                    "unidentified": {
                                      "name": "",
                                      "img": "",
                                      "data": {
                                        "description": {
                                          "value": ""
                                        }
                                      }
                                    },
                                    "misidentified": {}
                                  },
                                  "usage": {
                                    "value": "held-in-one-hand"
                                  },
                                  "subitems": []
                                },
                                "type": "equipment",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.equipment-srd.Item.81aHsD27HFGnq1Nt",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158780905,
                                  "modifiedTime": 1719158780905,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.equipment-srd.Item.81aHsD27HFGnq1Nt"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                }
                              },
                              {
                                "img": "systems/pf2e/icons/equipment/treasure/currency/gold-pieces.webp",
                                "name": "Gold Pieces",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": ""
                                  },
                                  "rules": [],
                                  "slug": "gold-pieces",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Core Rulebook",
                                    "authors": "",
                                    "license": "OGL",
                                    "remaster": false
                                  },
                                  "level": {
                                    "value": 0
                                  },
                                  "quantity": 8,
                                  "baseItem": null,
                                  "bulk": {
                                    "value": 1
                                  },
                                  "hp": {
                                    "value": 0,
                                    "max": 0
                                  },
                                  "hardness": 0,
                                  "price": {
                                    "value": {
                                      "gp": 1
                                    }
                                  },
                                  "equipped": {
                                    "carryType": "worn"
                                  },
                                  "containerId": null,
                                  "size": "med",
                                  "material": {
                                    "type": null,
                                    "grade": null
                                  },
                                  "identification": {
                                    "status": "identified",
                                    "unidentified": {
                                      "name": "",
                                      "img": "",
                                      "data": {
                                        "description": {
                                          "value": ""
                                        }
                                      }
                                    },
                                    "misidentified": {}
                                  },
                                  "stackGroup": "coins"
                                },
                                "type": "treasure",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.equipment-srd.Item.B6B7tBWJSqOBz5zz",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158793188,
                                  "modifiedTime": 1719158793188,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.equipment-srd.Item.B6B7tBWJSqOBz5zz"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "LMBUfu1rh3SDB9Ef"
                              },
                              {
                                "img": "systems/pf2e/icons/equipment/treasure/currency/silver-pieces.webp",
                                "name": "Silver Pieces",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": ""
                                  },
                                  "rules": [],
                                  "slug": "silver-pieces",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Core Rulebook",
                                    "authors": "",
                                    "license": "OGL",
                                    "remaster": false
                                  },
                                  "level": {
                                    "value": 0
                                  },
                                  "quantity": 5,
                                  "baseItem": null,
                                  "bulk": {
                                    "value": 1
                                  },
                                  "hp": {
                                    "value": 0,
                                    "max": 0
                                  },
                                  "hardness": 0,
                                  "price": {
                                    "value": {
                                      "sp": 1
                                    }
                                  },
                                  "equipped": {
                                    "carryType": "worn"
                                  },
                                  "containerId": null,
                                  "size": "med",
                                  "material": {
                                    "type": null,
                                    "grade": null
                                  },
                                  "identification": {
                                    "status": "identified",
                                    "unidentified": {
                                      "name": "",
                                      "img": "",
                                      "data": {
                                        "description": {
                                          "value": ""
                                        }
                                      }
                                    },
                                    "misidentified": {}
                                  },
                                  "stackGroup": "coins"
                                },
                                "type": "treasure",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.equipment-srd.Item.5Ew82vBF9YfaiY9f",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158793390,
                                  "modifiedTime": 1719158793390,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.equipment-srd.Item.5Ew82vBF9YfaiY9f"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "BYsqjA36rWQTdUo9"
                              },
                              {
                                "img": "icons/weapons/staves/staff-simple.webp",
                                "name": "Staff",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>This long piece of wood can aid in walking and deliver a mighty blow.</p>"
                                  },
                                  "rules": [],
                                  "slug": "staff",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "monk",
                                      "two-hand-d8"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 0
                                  },
                                  "quantity": 1,
                                  "baseItem": "staff",
                                  "bulk": {
                                    "value": 1
                                  },
                                  "hp": {
                                    "value": 0,
                                    "max": 0
                                  },
                                  "hardness": 0,
                                  "price": {
                                    "value": {}
                                  },
                                  "equipped": {
                                    "carryType": "worn",
                                    "invested": null,
                                    "handsHeld": 0
                                  },
                                  "containerId": null,
                                  "size": "lg",
                                  "material": {
                                    "type": null,
                                    "grade": null
                                  },
                                  "identification": {
                                    "status": "identified",
                                    "unidentified": {
                                      "name": "",
                                      "img": "",
                                      "data": {
                                        "description": {
                                          "value": ""
                                        }
                                      }
                                    },
                                    "misidentified": {}
                                  },
                                  "usage": {
                                    "value": "held-in-one-hand"
                                  },
                                  "category": "simple",
                                  "group": "club",
                                  "bonus": {
                                    "value": 0
                                  },
                                  "damage": {
                                    "dice": 1,
                                    "die": "d4",
                                    "damageType": "bludgeoning",
                                    "persistent": null
                                  },
                                  "bonusDamage": {
                                    "value": 0
                                  },
                                  "splashDamage": {
                                    "value": 0
                                  },
                                  "range": null,
                                  "reload": {
                                    "value": ""
                                  },
                                  "runes": {
                                    "potency": 0,
                                    "striking": 0,
                                    "property": []
                                  },
                                  "specific": null,
                                  "subitems": [],
                                  "property1": {
                                    "value": "",
                                    "dice": 0,
                                    "die": "",
                                    "damageType": "",
                                    "critDice": 0,
                                    "critDie": "",
                                    "critDamage": "",
                                    "critDamageType": ""
                                  }
                                },
                                "type": "weapon",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719158805956,
                                  "modifiedTime": 1719158805956,
                                  "lastModifiedBy": "jzGYpesHUnNUarC7"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.equipment-srd.Item.FVjTuBCIefAgloUU"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "jzGYpesHUnNUarC7": 3
                                },
                                "_id": "oCR9EBYgPaHpGqJk"
                              },
                              {
                                "img": "systems/pf2e/icons/actions/Passive.webp",
                                "name": "Treat Wounds",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p><strong>Requirements</strong> You're wearing or holding a @UUID[Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY]{Healer's Toolkit}.</p>\n<hr />\n<p>You spend 10 minutes treating one injured living creature (targeting yourself, if you so choose). The target is then temporarily @UUID[Compendium.pf2e.feat-effects.Item.Lb4q2bBAgxamtix5]{immune} to Treat Wounds actions for 1 hour, but this interval overlaps with the time you spent treating (so a patient can be treated once per hour, not once per 70 minutes).</p>\n<p>The Medicine check DC is usually 15, though the GM might adjust it based on the circumstances, such as treating a patient outside in a storm, or treating magically cursed wounds. If you're an expert in Medicine, you can instead attempt a DC 20 check to increase the Hit Points regained by 10; if you're a master of Medicine, you can instead attempt a DC 30 check to increase the Hit Points regained by 30; and if you're legendary, you can instead attempt a DC 40 check to increase the Hit Points regained by 50. The damage dealt on a critical failure remains the same.</p>\n<p>If you succeed at your check, you can continue treating the target to grant additional healing. If you treat it for a total of 1 hour, double the Hit Points it regains from Treat Wounds.</p>\n<p>The result of your Medicine check determines how many Hit Points the target regains.</p>\n<p>@UUID[Compendium.pf2e.pf2e-macros.Macro.6duZj0Ygiqv712rq]{Treat Wounds}</p>\n<hr />\n<p><strong>Critical Success</strong> The target regains [[/r 4d8[healing] #Treat Wounds]] Hit Points and loses the @UUID[Compendium.pf2e.conditionitems.Item.Yl48xTdMh3aeQYL2]{Wounded} condition.</p>\n<p><strong>Success</strong> The target regains [[/r 2d8[healing] #Treat Wounds]] Hit Points, and loses the wounded condition.</p>\n<p><strong>Critical Failure</strong> The target takes [[/r 1d8[damage] #Treat Wounds (Critical Failure)]] damage.</p>"
                                  },
                                  "rules": [],
                                  "slug": "treat-wounds",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "exploration",
                                      "healing",
                                      "manipulate"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "actionType": {
                                    "value": "passive"
                                  },
                                  "category": "interaction",
                                  "actions": {
                                    "value": null
                                  },
                                  "deathNote": false
                                },
                                "type": "action",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.actionspf2e.Item.1kGNdIIhuglAjIp9",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719162168064,
                                  "modifiedTime": 1719162168064,
                                  "lastModifiedBy": "9Rhur8fgbHfvQaUS"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.actionspf2e.Item.1kGNdIIhuglAjIp9"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "9Rhur8fgbHfvQaUS": 3
                                },
                                "_id": "z9ZD4OTRJyofEIls"
                              },
                              {
                                "img": "systems/pf2e/icons/actions/Passive.webp",
                                "name": "Treat Disease",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p><strong>Requirements</strong> You're wearing or holding a @UUID[Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY]{Healer's Toolkit}.</p>\n<hr />\n<p>You spend at least 8 hours caring for a diseased creature. Attempt a <span data-pf2-action=\"treatDisease\">Medicine</span> check against the disease's DC. After you attempt to Treat a Disease for a creature, you can't try again until after that creature's next save against the disease.</p>\n<hr />\n<p><strong>Critical Success</strong> You grant the creature a +4 circumstance bonus to its next saving throw against the disease.</p>\n<p><strong>Success</strong> You grant the creature a +2 circumstance bonus to its next saving throw against the disease.</p>\n<p><strong>Critical Failure</strong> Your efforts cause the creature to take a -2 circumstance penalty to its next save against the disease.</p>"
                                  },
                                  "rules": [],
                                  "slug": "treat-disease",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "downtime",
                                      "manipulate",
                                      "skill"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "actionType": {
                                    "value": "passive"
                                  },
                                  "category": "interaction",
                                  "actions": {
                                    "value": null
                                  },
                                  "deathNote": false
                                },
                                "type": "action",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.actionspf2e.Item.TC7OcDa7JlWbqMaN",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719162177263,
                                  "modifiedTime": 1719162177263,
                                  "lastModifiedBy": "9Rhur8fgbHfvQaUS"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.actionspf2e.Item.TC7OcDa7JlWbqMaN"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "9Rhur8fgbHfvQaUS": 3
                                },
                                "_id": "BJXGSN1XqqYKdp0d"
                              },
                              {
                                "img": "systems/pf2e/icons/actions/OneAction.webp",
                                "name": "Treat Poison",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p><strong>Requirements</strong> You're wearing or holding a @UUID[Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY]{Healer's Toolkit}.</p>\n<hr />\n<p>You treat a patient to prevent the spread of poison. Attempt a <span data-pf2-action=\"treatPoison\" data-pf2-glyph=\"A\">Medicine</span> check against the poison's DC. After you attempt to Treat a Poison for a creature, you can't try again until after the next time that creature attempts a save against the poison.</p>\n<hr />\n<p><strong>Critical Success</strong> You grant the creature a +4 circumstance bonus to its next saving throw against the poison.</p>\n<p><strong>Success</strong> You grant the creature a +2 circumstance bonus to its next saving throw against the poison.</p>\n<p><strong>Critical Failure</strong> Your efforts cause the creature to take a -2 circumstance penalty to its next save against the poison.</p>"
                                  },
                                  "rules": [],
                                  "slug": "treat-poison",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "manipulate",
                                      "skill"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "actionType": {
                                    "value": "action"
                                  },
                                  "category": "interaction",
                                  "actions": {
                                    "value": 1
                                  },
                                  "deathNote": false
                                },
                                "type": "action",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.actionspf2e.Item.KjoCEEmPGTeFE4hh",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719162181798,
                                  "modifiedTime": 1719162181798,
                                  "lastModifiedBy": "9Rhur8fgbHfvQaUS"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.actionspf2e.Item.KjoCEEmPGTeFE4hh"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "9Rhur8fgbHfvQaUS": 3
                                },
                                "_id": "q9h4iJ1IvLXXOTt1"
                              },
                              {
                                "img": "systems/pf2e/icons/actions/TwoActions.webp",
                                "name": "Administer First Aid",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p><strong>Requirements</strong> You're wearing or holding a @UUID[Compendium.pf2e.equipment-srd.Item.s1vB3HdXjMigYAnY]{Healer's Toolkit}.</p>\n<hr />\n<p>You perform first aid on an adjacent creature that is @UUID[Compendium.pf2e.conditionitems.Item.yZRUzMqrMmfLu0V1]{Dying} or @UUID[Compendium.pf2e.conditionitems.Item.lDVqvLKA6eF3Df60]{Bleeding}. If a creature is both dying and bleeding, choose which ailment you're trying to treat before you roll. You can Administer First Aid again to attempt to remedy the other effect.</p>\n<ul>\n<li><strong>Stabilize</strong> Attempt a <span data-pf2-action=\"administerFirstAid\" data-pf2-variant=\"stabilize\" data-pf2-glyph=\"D\">Medicine</span> check on a creature that has 0 Hit Points and the dying condition. The DC is equal to 5 + that creature's recovery roll DC (typically 15 + its dying value).</li>\n<li><strong>Stop Bleeding</strong> Attempt a <span data-pf2-action=\"administerFirstAid\" data-pf2-variant=\"stop-bleeding\" data-pf2-glyph=\"D\">Medicine</span> check on a creature that is taking persistent bleed damage. The DC is usually the DC of the effect that caused the bleed.</li>\n</ul>\n<hr />\n<p><strong>Success</strong> If you're trying to stabilize, the target loses the dying condition (but remains @UUID[Compendium.pf2e.conditionitems.Item.fBnFDH2MTzgFijKf]{Unconscious}). If you're trying to stop bleeding, the target benefits from an assisted recovery with the lowered DC for particularly appropriate help.</p>\n<p><strong>Critical Failure</strong> If you were trying to stabilize, the target's dying value increases by 1. If you were trying to stop bleeding, the target immediately takes an amount of damage equal to its persistent bleed damage.</p>"
                                  },
                                  "rules": [],
                                  "slug": "administer-first-aid",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "manipulate",
                                      "skill"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "actionType": {
                                    "value": "action"
                                  },
                                  "category": null,
                                  "actions": {
                                    "value": 2
                                  },
                                  "deathNote": false
                                },
                                "type": "action",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.actionspf2e.Item.MHLuKy4nQO2Z4Am1",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719162311217,
                                  "modifiedTime": 1719162311217,
                                  "lastModifiedBy": "9Rhur8fgbHfvQaUS"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.actionspf2e.Item.MHLuKy4nQO2Z4Am1"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "9Rhur8fgbHfvQaUS": 3
                                },
                                "_id": "2231nK5vTIANemZK"
                              },
                              {
                                "img": "systems/pf2e/icons/actions/OneAction.webp",
                                "name": "Recall Knowledge",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>You attempt a skill check to try to remember a bit of knowledge regarding a topic related to that skill. Suggest which skill you'd like to use and ask the GM one question. The GM determines the DC. You might need to collaborate with the GM to narrow down the question or skills, and you can decide not to Recall Knowledge before committing to the action if you don't like your options.</p>\n<p><strong>Critical Success</strong> You recall the knowledge accurately. The GM answers your question truthfully and either tells you additional information or context, or answers one follow-up question.</p>\n<p><strong>Success</strong> You recall the knowledge accurately. The GM answers your question truthfully.</p>\n<p><strong>Critical Failure</strong> You recall incorrect information. The GM answers your question falsely (or decides to give you no information, as on a failure).</p>"
                                  },
                                  "rules": [],
                                  "slug": "recall-knowledge",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "concentrate",
                                      "secret",
                                      "skill"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "actionType": {
                                    "value": "action"
                                  },
                                  "category": "interaction",
                                  "actions": {
                                    "value": 1
                                  },
                                  "deathNote": false
                                },
                                "type": "action",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.actionspf2e.Item.1OagaWtBpVXExToo",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719162326702,
                                  "modifiedTime": 1719162326702,
                                  "lastModifiedBy": "9Rhur8fgbHfvQaUS"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.actionspf2e.Item.1OagaWtBpVXExToo"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "9Rhur8fgbHfvQaUS": 3
                                },
                                "_id": "axFEZg7TV4RCBwDl"
                              },
                              {
                                "_id": "FmF81u9smteKrpPm",
                                "img": "systems/pf2e/icons/spells/bless.webp",
                                "name": "Bless",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p>Blessings from beyond help your companions strike true. You and your allies gain a +1 status bonus to attack rolls while within the emanation. Once per round on subsequent turns, you can Sustain the spell to increase the emanation's radius by 10 feet.</p>\n<p>Bless can counteract @UUID[Compendium.pf2e.spells-srd.Item.7ZinJNzxq0XF0oMx]{Bane}.</p>\n<p>@UUID[Compendium.pf2e.spell-effects.Item.RfCEHpMoEAZvB9IZ]{Aura: Bless}</p>"
                                  },
                                  "rules": [],
                                  "slug": "bless",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "aura",
                                      "concentrate",
                                      "manipulate",
                                      "mental"
                                    ],
                                    "rarity": "common",
                                    "traditions": [
                                      "divine",
                                      "occult"
                                    ]
                                  },
                                  "publication": {
                                    "title": "Pathfinder Player Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "requirements": "",
                                  "target": {
                                    "value": "you and allies in the area"
                                  },
                                  "range": {
                                    "value": ""
                                  },
                                  "area": {
                                    "type": "emanation",
                                    "value": 15
                                  },
                                  "time": {
                                    "value": "2"
                                  },
                                  "duration": {
                                    "value": "1 minute",
                                    "sustained": false
                                  },
                                  "damage": {},
                                  "defense": null,
                                  "cost": {
                                    "value": ""
                                  },
                                  "location": {
                                    "value": "gf2Aa7XduhCzhkm4"
                                  },
                                  "counteraction": true
                                },
                                "type": "spell",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.spells-srd.Item.XSujb7EsSwKl19Uu",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719164166299,
                                  "modifiedTime": 1719164166299,
                                  "lastModifiedBy": "9Rhur8fgbHfvQaUS"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.spells-srd.Item.XSujb7EsSwKl19Uu"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "9Rhur8fgbHfvQaUS": 3
                                }
                              },
                              {
                                "img": "icons/consumables/potions/bottle-round-corked-orante-red.webp",
                                "name": "Healing Potion (Minor)",
                                "system": {
                                  "description": {
                                    "gm": "",
                                    "value": "<p><strong>Activate</strong> <span class=\"action-glyph\">A</span> (manipulate)</p>\n<hr />\n<p>A <em>healing potion</em> is a vial of a ruby-red liquid that imparts a tingling sensation as the drinker's wounds heal rapidly. When you drink a <em>healing potion</em>, you regain [[/r 1d8[healing]]]{1d8 Hit Points}.</p>"
                                  },
                                  "rules": [],
                                  "slug": "healing-potion-minor",
                                  "_migration": {
                                    "version": 0.931,
                                    "lastMigration": null,
                                    "previous": null
                                  },
                                  "traits": {
                                    "otherTags": [],
                                    "value": [
                                      "consumable",
                                      "healing",
                                      "magical",
                                      "potion",
                                      "vitality"
                                    ],
                                    "rarity": "common"
                                  },
                                  "publication": {
                                    "title": "Pathfinder GM Core",
                                    "authors": "",
                                    "license": "ORC",
                                    "remaster": true
                                  },
                                  "level": {
                                    "value": 1
                                  },
                                  "quantity": 1,
                                  "baseItem": null,
                                  "bulk": {
                                    "value": 0.1
                                  },
                                  "hp": {
                                    "value": 0,
                                    "max": 0
                                  },
                                  "hardness": 0,
                                  "price": {
                                    "value": {
                                      "gp": 4
                                    }
                                  },
                                  "equipped": {
                                    "carryType": "worn"
                                  },
                                  "containerId": null,
                                  "size": "lg",
                                  "material": {
                                    "type": null,
                                    "grade": null
                                  },
                                  "identification": {
                                    "status": "identified",
                                    "unidentified": {
                                      "name": "",
                                      "img": "",
                                      "data": {
                                        "description": {
                                          "value": ""
                                        }
                                      }
                                    },
                                    "misidentified": {}
                                  },
                                  "category": "potion",
                                  "uses": {
                                    "value": 1,
                                    "max": 1,
                                    "autoDestroy": true
                                  },
                                  "damage": {
                                    "formula": "1d8",
                                    "kind": "healing",
                                    "type": "vitality"
                                  },
                                  "usage": {
                                    "value": "held-in-one-hand"
                                  },
                                  "stackGroup": null,
                                  "spell": null
                                },
                                "type": "consumable",
                                "_stats": {
                                  "compendiumSource": "Compendium.pf2e.equipment-srd.Item.2RuepCemJhrpKKao",
                                  "duplicateSource": null,
                                  "coreVersion": "12.327",
                                  "systemId": "pf2e",
                                  "systemVersion": "6.0.3",
                                  "createdTime": 1719168776669,
                                  "modifiedTime": 1719168776669,
                                  "lastModifiedBy": "9Rhur8fgbHfvQaUS"
                                },
                                "flags": {
                                  "core": {
                                    "sourceId": "Compendium.pf2e.equipment-srd.Item.2RuepCemJhrpKKao"
                                  }
                                },
                                "effects": [],
                                "folder": null,
                                "sort": 0,
                                "ownership": {
                                  "default": 0,
                                  "9Rhur8fgbHfvQaUS": 3
                                },
                                "_id": "SSet0gzKRw2U2lM5"
                              }
                            ],
                            "folder": null,
                            "flags": {
                              "pf2e": {
                                "freeCrafting": false
                              },
                              "exportSource": {
                                "world": "padvinderij",
                                "system": "pf2e",
                                "coreVersion": "12.327",
                                "systemVersion": "6.0.3"
                              }
                            },
                            "_stats": {
                              "coreVersion": "12.327",
                              "systemId": "pf2e",
                              "systemVersion": "6.0.3",
                              "createdTime": 1719158232029,
                              "modifiedTime": 1719173706569,
                              "lastModifiedBy": "9Rhur8fgbHfvQaUS"
                            }
                          }
        console.log(actorData);
        let actor = new Actor(actorData, {});
        console.log(actor);
        await Actor.create(actorData);
    })
});