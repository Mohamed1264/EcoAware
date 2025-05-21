import { title } from "framer-motion/client";

export const regionsData = {
    "Tanger-Tétouan-Al Hoceïma": {
      en: {
        title:"Tangier-Tetouan-Al Hoceima",
        description: "Northern coastal region with Mediterranean climate and Rif Mountains.",
        water: {
          title: "Water Resources",
          rivers: 12,
          majorRivers: ["Oued Martil", "Oued Laou", "Oued Mharhar"],
          dams: 3,
          damNames: ["Abdelkrim El Khattabi", "Smir", "9 Avril 1947"],
          wetlands: "450 km²",
          rainfall: "800-1000 mm",
          challenges: "Water pollution from agriculture and urban runoff",
          conservation: "Mediterranean Wetlands Initiative"
        },
        forests: {
          title: "Forest Coverage",
          area: "3200 km² (22% of region)",
          type: ["Cork oak", "Pine", "Cedar", "Thuya"],
          protectedAreas: 5,
          protectedAreaNames: ["Talassemtane National Park", "Al Hoceima National Park"],
          biodiversity: "Endemic Rif species",
          threats: "Deforestation for cannabis cultivation, overgrazing",
          projects: ["Rif Reforestation Program", "Cedar Conservation Initiative"]
        }
      },
      fr: {
        title:"Tanger-Tétouan-Al Hoceïma",
        description: "Région côtière nord avec climat méditerranéen et montagnes du Rif.",
        water: {
          title: "Ressources en eau",
          rivers: 12,
          majorRivers: ["Oued Martil", "Oued Laou", "Oued Mharhar"],
          dams: 3,
          damNames: ["Abdelkrim El Khattabi", "Smir", "9 Avril 1947"],
          wetlands: "450 km²",
          rainfall: "800-1000 mm",
          challenges: "Pollution de l'eau par l'agriculture et le ruissellement urbain",
          conservation: "Initiative des zones humides méditerranéennes"
        },
        forests: {
          title: "Couverture forestière",
          area: "3200 km² (22% de la région)",
          type: ["Chêne-liège", "Pin", "Cèdre", "Thuya"],
          protectedAreas: 5,
          protectedAreaNames: ["Parc National de Talassemtane", "Parc National d'Al Hoceima"],
          biodiversity: "Espèces endémiques du Rif",
          threats: "Déforestation pour la culture du cannabis, surpâturage",
          projects: ["Programme de Reboisement du Rif", "Initiative de Conservation du Cèdre"]
        }
      },
      ar: {
        title:"طنجة - تطوان - الحسيمة",
        description: "منطقة ساحلية شمالية بمناخ متوسطي وجبال الريف",
        water: {
          title: "الموارد المائية",
          rivers: 12,
          majorRivers: ["وادي مرتيل", "وادي لاو", "وادي مهرهر"],
          dams: 3,
          damNames: ["عبد الكريم الخطابي", "سمير", "9 أبريل 1947"],
          wetlands: "450 كم²",
          rainfall: "800-1000 ملم",
          challenges: "تلوث المياه من الزراعة ومياه الأمطار الحضرية",
          conservation: "مبادرة الأراضي الرطبة المتوسطية"
        },
        forests: {
          title: "الغطاء الغابوي",
          area: "3200 كم² (22% من المنطقة)",
          type: ["البلوط الفليني", "الصنوبر", "الأرز", "الطوية"],
          protectedAreas: 5,
          protectedAreaNames: ["المنتزه الوطني تلاسمطان", "المنتزه الوطني الحسيمة"],
          biodiversity: "أنواع ريفية متوطنة",
          threats: "إزالة الغابات لزراعة القنب، الرعي الجائر",
          projects: ["برنامج تشجير الريف", "مبادرة الحفاظ على الأرز"]
        }
      },
      imageUrl: "/images/regions/tanger-tetouan.jpg"
    },
  
    "Oriental": {
      en: {
        title:"The Oriental",
        description: "Eastern region bordering Algeria with semi-arid plains and mountains.",
        water: {
          title: "Water Resources",
          rivers: 8,
          majorRivers: ["Oued Moulouya", "Oued Za", "Oued Kiss"],
          dams: 4,
          damNames: ["Mohammed V", "Machraa Hammadi", "Hassan II"],
          wetlands: "320 km²",
          rainfall: "200-400 mm",
          challenges: "Water scarcity, desertification",
          conservation: "Moulouya River Basin Management"
        },
        forests: {
          title: "Forest Coverage",
          area: "1800 km² (12% of region)",
          type: ["Juniper", "Aleppo pine", "Acacia"],
          protectedAreas: 3,
          protectedAreaNames: ["Jbel Bouhachem", "Harcha-Hefiane"],
          biodiversity: "Steppe ecosystems",
          threats: "Overgrazing, firewood collection",
          projects: ["Oriental Green Belt", "Oasis Preservation Program"]
        }
      },
      fr: {
        title:"L'Oriental",
        description: "Région orientale frontalière avec l'Algérie, avec des plaines semi-arides et des montagnes.",
        water: {
          title: "Ressources en eau",
          rivers: 8,
          majorRivers: ["Oued Moulouya", "Oued Za", "Oued Kiss"],
          dams: 4,
          damNames: ["Mohammed V", "Machraa Hammadi", "Hassan II"],
          wetlands: "320 km²",
          rainfall: "200-400 mm",
          challenges: "Pénurie d'eau, désertification",
          conservation: "Gestion du bassin de la Moulouya"
        },
        forests: {
          title: "Couverture forestière",
          area: "1800 km² (12% de la région)",
          type: ["Genévrier", "Pin d'Alep", "Acacia"],
          protectedAreas: 3,
          protectedAreaNames: ["Jbel Bouhachem", "Harcha-Hefiane"],
          biodiversity: "Écosystèmes steppiques",
          threats: "Surpâturage, collecte de bois de chauffage",
          projects: ["Ceinture Verte de l'Oriental", "Programme de Préservation des Oasis"]
        }
      },
      ar: {
        title:"الشرق",
        description: "منطقة شرقية حدودية مع الجزائر بسهوب شبه جبلية وجبال",
        water: {
          title: "الموارد المائية",
          rivers: 8,
          majorRivers: ["وادي ملوية", "وادي زا", "وادي كيس"],
          dams: 4,
          damNames: ["محمد الخامس", "مشرع حمادي", "الحسن الثاني"],
          wetlands: "320 كم²",
          rainfall: "200-400 ملم",
          challenges: "ندرة المياه، التصحر",
          conservation: "إدارة حوض ملوية"
        },
        forests: {
          title: "الغطاء الغابوي",
          area: "1800 كم² (12% من المنطقة)",
          type: ["العرعر", "الصنوبر الحلبي", "الأكاسيا"],
          protectedAreas: 3,
          protectedAreaNames: ["جبل بوحشم", "حرشة-حفيان"],
          biodiversity: "أنظمة بيئية سهبية",
          threats: "الرعي الجائر، جمع الحطب",
          projects: ["الحزام الأخضر للشرق", "برنامج الحفاظ على الواحات"]
        }
      },
      imageUrl: "/images/regions/oriental.jpg"
    },
  
    // Continue with all other regions following the same comprehensive structure...
    "Fès-Meknès": {
      en: {
        title:"Fez-Meknes ",
        description: "Cultural heartland with imperial cities and Middle Atlas mountains.",
        water: {
          title: "Water Resources",
          rivers: 15,
          majorRivers: ["Oued Sebou", "Oued Inaouen", "Oued Beht"],
          dams: 6,
          damNames: ["Al Wahda", "Idriss I", "Moulay Youssef"],
          wetlands: "580 km²",
          rainfall: "500-800 mm",
          challenges: "Water pollution from tanneries",
          conservation: "Sebou River Rehabilitation Project"
        },
        forests: {
          title: "Forest Coverage",
          area: "4200 km² (28% of region)",
          type: ["Cedar", "Oak", "Juniper", "Wild olive"],
          protectedAreas: 7,
          protectedAreaNames: ["Ifrane National Park", "Tazzeka National Park"],
          biodiversity: "Barbary macaque habitat",
          threats: "Illegal logging, urban expansion",
          projects: ["Atlas Cedar Conservation", "Water Tower Protection"]
        }
      },
      fr: {
        title:"Fès-Meknès",
        description: "Cœur culturel avec villes impériales et montagnes du Moyen Atlas.",
        water: {
          title: "Ressources en eau",
          rivers: 15,
          majorRivers: ["Oued Sebou", "Oued Inaouen", "Oued Beht"],
          dams: 6,
          damNames: ["Al Wahda", "Idriss I", "Moulay Youssef"],
          wetlands: "580 km²",
          rainfall: "500-800 mm",
          challenges: "Pollution de l'eau par les tanneries",
          conservation: "Projet de réhabilitation du Sebou"
        },
        forests: {
          title: "Couverture forestière",
          area: "4200 km² (28% de la région)",
          type: ["Cèdre", "Chêne", "Genévrier", "Olivier sauvage"],
          protectedAreas: 7,
          protectedAreaNames: ["Parc National d'Ifrane", "Parc National de Tazzeka"],
          biodiversity: "Habitat du macaque de Barbarie",
          threats: "Exploitation forestière illégale, expansion urbaine",
          projects: ["Conservation du Cèdre de l'Atlas", "Protection des Châteaux d'Eau"]
        }
      },
      ar: {
        title:"فاس - مكناس",
        description: "القلب الثقافي بمدنه الإمبراطورية وجبال الأطلس المتوسط",
        water: {
          title: "الموارد المائية",
          rivers: 15,
          majorRivers: ["وادي سبو", "وادي اناون", "وادي بهت"],
          dams: 6,
          damNames: ["الوحدة", "إدريس الأول", "مولاي يوسف"],
          wetlands: "580 كم²",
          rainfall: "500-800 ملم",
          challenges: "تلوث المياه من المدابغ",
          conservation: "مشروع إعادة تأهيل نهر سبو"
        },
        forests: {
          title: "الغطاء الغابوي",
          area: "4200 كم² (28% من المنطقة)",
          type: ["الأرز", "البلوط", "العرف", "الزيتون البري"],
          protectedAreas: 7,
          protectedAreaNames: ["المنتزه الوطني إفران", "المنتزه الوطني تازكة"],
          biodiversity: "موطن المكاك البربري",
          threats: "قطع الأشجار غير القانوني، التوسع الحضري",
          projects: ["حماية أرز الأطلس", "حماية القلاع المائية"]
        }
      },
      imageUrl: "/images/regions/fes-meknes.jpg"
    },
  
    // Additional regions would follow the same pattern...
    "Rabat-Salé-Kénitra": {
  en: {
    title:"Rabat-Salé-Kénitra",
    description: "Capital region with Atlantic coastline and important agricultural plains.",
    water: {
      title: "Water Resources",
      rivers: 9,
      majorRivers: ["Oued Bouregreg", "Oued Sebou", "Oued Beht"],
      dams: 5,
      damNames: ["Sidi Mohammed Ben Abdellah", "Al Massira", "Sidi Said Maachou"],
      wetlands: "520 km²",
      rainfall: "450-600 mm",
      challenges: "Urban water demand, industrial pollution",
      conservation: "Bouregreg Basin Management Plan"
    },
    forests: {
      title: "Forest Coverage",
      area: "2100 km² (18% of region)",
      type: ["Eucalyptus", "Pine", "Oak", "Acacia"],
      protectedAreas: 4,
      protectedAreaNames: ["Maamora Forest", "Sidi Boughaba Lake"],
      biodiversity: "Migratory bird habitats",
      threats: "Urban expansion, overexploitation",
      projects: ["Maamora Reforestation", "Coastal Dune Stabilization"]
    }
  },
  fr: {
    title:"Rabat-Salé-Kénitra",
    description: "Région capitale avec littoral atlantique et plaines agricoles importantes.",
    water: {
      title: "Ressources en eau",
      rivers: 9,
      majorRivers: ["Oued Bouregreg", "Oued Sebou", "Oued Beht"],
      dams: 5,
      damNames: ["Sidi Mohammed Ben Abdellah", "Al Massira", "Sidi Said Maachou"],
      wetlands: "520 km²",
      rainfall: "450-600 mm",
      challenges: "Demande urbaine en eau, pollution industrielle",
      conservation: "Plan de gestion du bassin du Bouregreg"
    },
    forests: {
      title: "Couverture forestière",
      area: "2100 km² (18% de la région)",
      type: ["Eucalyptus", "Pin", "Chêne", "Acacia"],
      protectedAreas: 4,
      protectedAreaNames: ["Forêt de Maâmora", "Lac de Sidi Boughaba"],
      biodiversity: "Habitats d'oiseaux migrateurs",
      threats: "Expansion urbaine, surexploitation",
      projects: ["Reboisement de Maâmora", "Stabilisation des dunes côtières"]
    }
  },
  ar: {
    title:"الرباط - سلا - القنيطرة ",
    description: "منطقة العاصمة بساحل أطلسي وسهول زراعية مهمة",
    water: {
      title: "الموارد المائية",
      rivers: 9,
      majorRivers: ["وادي أبي رقراق", "وادي سبو", "وادي بهت"],
      dams: 5,
      damNames: ["سيدي محمد بن عبد الله", "المسيرة", "سيدي سعيد معشو"],
      wetlands: "520 كم²",
      rainfall: "450-600 ملم",
      challenges: "الطلب الحضري على المياه، التلوث الصناعي",
      conservation: "خطة إدارة حوض أبي رقراق"
    },
    forests: {
      title: "الغطاء الغابوي",
      area: "2100 كم² (18% من المنطقة)",
      type: ["الأوكالبتوس", "الصنوبر", "البلوط", "الأكاسيا"],
      protectedAreas: 4,
      protectedAreaNames: ["غابة المعمورة", "بحيرة سيدي بوغابة"],
      biodiversity: "موائل الطيور المهاجرة",
      threats: "التوسع الحضري، الاستغلال المفرط",
      projects: ["تشجير المعمورة", "تثبيت الكثبان الساحلية"]
    }
  },
  imageUrl: "/images/regions/rabat-sale.jpg"
},
    "Béni Mellal-Khénifra": {
  en: {
    title:"Beni Mellal-Khenifra",

    description: "Central region with Middle Atlas mountains and fertile plains.",
    water: {
      title: "Water Resources",
      rivers: 11,
      majorRivers: ["Oued Oum Er-Rbia", "Oued El Abid", "Oued Srou"],
      dams: 7,
      damNames: ["Bin El Ouidane", "Ahmed El Hansali", "Hassan Addakhil"],
      wetlands: "380 km²",
      rainfall: "400-800 mm",
      challenges: "Sedimentation in reservoirs",
      conservation: "Oum Er-Rbia Watershed Project"
    },
    forests: {
      title: "Forest Coverage",
      area: "3500 km² (25% of region)",
      type: ["Cedar", "Oak", "Juniper", "Wild pear"],
      protectedAreas: 6,
      protectedAreaNames: ["Aït Bouguemez Valley", "Jbel Moussa"],
      biodiversity: "Atlas cedar forests",
      threats: "Soil erosion, climate change",
      projects: ["Water Tower Protection", "Sustainable Grazing Management"]
    }
  },
  fr: {title:"Beni Mellal-Khenifra",


    description: "Région centrale avec montagnes du Moyen Atlas et plaines fertiles.",
    water: {
      title: "Ressources en eau",
      rivers: 11,
      majorRivers: ["Oued Oum Er-Rbia", "Oued El Abid", "Oued Srou"],
      dams: 7,
      damNames: ["Bin El Ouidane", "Ahmed El Hansali", "Hassan Addakhil"],
      wetlands: "380 km²",
      rainfall: "400-800 mm",
      challenges: "Envasement des réservoirs",
      conservation: "Projet du bassin versant d'Oum Er-Rbia"
    },
    forests: {
      title: "Couverture forestière",
      area: "3500 km² (25% de la région)",
      type: ["Cèdre", "Chêne", "Genévrier", "Poirier sauvage"],
      protectedAreas: 6,
      protectedAreaNames: ["Vallée d'Aït Bouguemez", "Jbel Moussa"],
      biodiversity: "Forêts de cèdres de l'Atlas",
      threats: "Érosion des sols, changement climatique",
      projects: ["Protection des châteaux d'eau", "Gestion durable du pâturage"]
    }
  },
  ar: {title:"بني ملال - الخنيفرة",


    description: "منطقة وسطى بجبال الأطلس المتوسط وسهول خصبة",
    water: {
      title: "الموارد المائية",
      rivers: 11,
      majorRivers: ["وادي أم الربيع", "وادي العبيد", "وادي صرو"],
      dams: 7,
      damNames: ["بين الوديان", "أحمد الحنصالي", "الحسن الداخل"],
      wetlands: "380 كم²",
      rainfall: "400-800 ملم",
      challenges: "ترسب الطمي في السدود",
      conservation: "مشروع حوض أم الربيع"
    },
    forests: {
      title: "الغطاء الغابوي",
      area: "3500 كم² (25% من المنطقة)",
      type: ["الأرز", "البلوط", "العرف", "الكمثرى البري"],
      protectedAreas: 6,
      protectedAreaNames: ["وادي آيت بوغمز", "جبل موسى"],
      biodiversity: "غابات أرز الأطلس",
      threats: "تآكل التربة، التغير المناخي",
      projects: ["حماية القلاع المائية", "الإدارة المستدامة للرعي"]
    }
  },
  imageUrl: "/images/regions/beni-mellal.jpg"
},
   "Casablanca-Settat": {
  en: {title:"Casablanca-Settat",


    description: "Economic hub with coastal areas and intensive agriculture.",
    water: {
      title: "Water Resources",
      rivers: 7,
      majorRivers: ["Oued Oum Er-Rbia", "Oued Nfifikh", "Oued Mellah"],
      dams: 4,
      damNames: ["Al Massira", "Sidi Saïd Maachou", "Lalla Takerkoust"],
      wetlands: "290 km²",
      rainfall: "300-500 mm",
      challenges: "Groundwater depletion",
      conservation: "Coastal Aquifer Management"
    },
    forests: {
      title: "Forest Coverage",
      area: "1200 km² (10% of region)",
      type: ["Eucalyptus", "Pine", "Acacia", "Tamarix"],
      protectedAreas: 3,
      protectedAreaNames: ["Merdja Zerga", "Jbilate Forest"],
      biodiversity: "Coastal ecosystems",
      threats: "Industrial pollution, urban sprawl",
      projects: ["Green Belt Initiative", "Wetland Restoration"]
    }
  },
  fr: {
    title:"Casablanca-Settat",
    description: "Pôle économique avec zones côtières et agriculture intensive.",
    water: {
      title: "Ressources en eau",
      rivers: 7,
      majorRivers: ["Oued Oum Er-Rbia", "Oued Nfifikh", "Oued Mellah"],
      dams: 4,
      damNames: ["Al Massira", "Sidi Saïd Maachou", "Lalla Takerkoust"],
      wetlands: "290 km²",
      rainfall: "300-500 mm",
      challenges: "Épuisement des eaux souterraines",
      conservation: "Gestion des aquifères côtiers"
    },
    forests: {
      title: "Couverture forestière",
      area: "1200 km² (10% de la région)",
      type: ["Eucalyptus", "Pin", "Acacia", "Tamarix"],
      protectedAreas: 3,
      protectedAreaNames: ["Merdja Zerga", "Forêt de Jbilate"],
      biodiversity: "Écosystèmes côtiers",
      threats: "Pollution industrielle, étalement urbain",
      projects: ["Initiative de ceinture verte", "Restauration des zones humides"]
    }
  },
  ar: {title:"الدار البيضاء - سطات",


    description: "مركز اقتصادي بمناطق ساحلية وزراعة مكثفة",
    water: {
      title: "الموارد المائية",
      rivers: 7,
      majorRivers: ["وادي أم الربيع", "وادي نفيفيخ", "وادي ملاح"],
      dams: 4,
      damNames: ["المسيرة", "سيدي سعيد معشو", "للا تاكركوست"],
      wetlands: "290 كم²",
      rainfall: "300-500 ملم",
      challenges: "استنزاف المياه الجوفية",
      conservation: "إدارة الخزانات الساحلية"
    },
    forests: {
      title: "الغطاء الغابوي",
      area: "1200 كم² (10% من المنطقة)",
      type: ["الأوكالبتوس", "الصنوبر", "الأكاسيا", "الطرفاء"],
      protectedAreas: 3,
      protectedAreaNames: ["مرجة زرقا", "غابة جبيلات"],
      biodiversity: "أنظمة بيئية ساحلية",
      threats: "التلوث الصناعي، التوسع العمراني",
      projects: ["مبادرة الحزام الأخضر", "ترميم الأراضي الرطبة"]
    }
  },
  imageUrl: "/images/regions/casablanca.webp"
},
   
  "Marrakech-Safi": {
    en: {title:"Marrakech-Safi",



      description: "Diverse region from High Atlas mountains to arid plains.",
      water: {
        title: "Water Resources",
        rivers: 13,
        majorRivers: ["Oued Tensift", "Oued Ourika", "Oued Zat"],
        dams: 6,
        damNames: ["Lalla Takerkoust", "Abou El Abass", "Yacoub El Mansour"],
        wetlands: "410 km²",
        rainfall: "200-600 mm",
        challenges: "Water stress, tourism pressure",
        conservation: "Tensift Water Charter"
      },
      forests: {
        title: "Forest Coverage",
        area: "3800 km² (18% of region)",
        type: ["Argan", "Thuya", "Juniper", "Olive"],
        protectedAreas: 5,
        protectedAreaNames: ["Toubkal National Park", "Arganeraie Biosphere Reserve"],
        biodiversity: "UNESCO Arganeraie Reserve",
        threats: "Desertification, overharvesting",
        projects: ["Argan Tree Conservation", "Atlas Water Towers"]
      }
    },title:"Marrakech-Safi",

    fr: {
      description: "Région diverse des montagnes du Haut Atlas aux plaines arides.",
      water: {
        title: "Ressources en eau",
        rivers: 13,
        majorRivers: ["Oued Tensift", "Oued Ourika", "Oued Zat"],
        dams: 6,
        damNames: ["Lalla Takerkoust", "Abou El Abass", "Yacoub El Mansour"],
        wetlands: "410 km²",
        rainfall: "200-600 mm",
        challenges: "Stress hydrique, pression touristique",
        conservation: "Charte de l'eau du Tensift"
      },
      forests: {
        title: "Couverture forestière",
        area: "3800 km² (18% de la région)",
        type: ["Arganier", "Thuya", "Genévrier", "Olivier"],
        protectedAreas: 5,
        protectedAreaNames: ["Parc National du Toubkal", "Réserve de Biosphère de l'Arganeraie"],
        biodiversity: "Réserve de Biosphère UNESCO Arganeraie",
        threats: "Désertification, surexploitation",
        projects: ["Conservation de l'Arganier", "Châteaux d'eau de l'Atlas"]
      }
    },
    

    ar: {
      title:"مراكش - آسفي",
      description: "منطقة متنوعة من جبال الأطلس الكبير إلى السهول الجافة",
      water: {
        title: "الموارد المائية",
        rivers: 13,
        majorRivers: ["وادي تانسيفت", "وادي أوريكا", "وادي زات"],
        dams: 6,
        damNames: ["للا تاكركوست", "أبو العباس", "يعقوب المنصور"],
        wetlands: "410 كم²",
        rainfall: "200-600 ملم",
        challenges: "الإجهاد المائي، ضغط السياحة",
        conservation: "ميثاق مياه تانسيفت"
      },
      forests: {
        title: "الغطاء الغابوي",
        area: "3800 كم² (18% من المنطقة)",
        type: ["الأركان", "الطوية", "العرف", "الزيتون"],
        protectedAreas: 5,
        protectedAreaNames: ["المنتزه الوطني توبقال", "محمية المحيط الحيوي لأركان"],
        biodiversity: "محمية المحيط الحيوي لليونسكو أركان",
        threats: "التصحر، الحصاد الجائر",
        projects: ["حماية شجرة الأركان", "أبراج المياه الأطلسية"]
      }
    },
    imageUrl: "/images/regions/marrakech-safi.jpg"
  },

  "Drâa-Tafilalet": {
    en: {
      title:"Draa-Tafilalet",
      description: "Saharan region with oases and desert ecosystems.",
      water: {
        title: "Water Resources",
        rivers: 5,
        majorRivers: ["Oued Drâa", "Oued Ziz", "Oued Ghris"],
        dams: 3,
        damNames: ["El Mansour Eddahbi", "Hassan Addakhil", "Imi El Kheng"],
        wetlands: "180 km²",
        rainfall: "50-150 mm",
        challenges: "Desertification, aquifer depletion",
        conservation: "Oasis Sustainability Initiative"
      },
      forests: {
        title: "Forest Coverage",
        area: "1200 km² (8% of region)",
        type: ["Palm groves", "Acacia", "Tamarix", "Jujube"],
        protectedAreas: 4,
        protectedAreaNames: ["Zagora Oasis", "Erg Chebbi Protected Area"],
        biodiversity: "Desert-adapted species",
        threats: "Sand encroachment, drought",
        projects: ["Oasis Preservation", "Fog Harvesting Program"]
      }
    },
  fr: {

      title:"Drâa-Tafilalet",

      description: "Région saharienne avec oasis et écosystèmes désertiques.",
      water: {
        title: "Ressources en eau",
        rivers: 5,
        majorRivers: ["Oued Drâa", "Oued Ziz", "Oued Ghris"],
        dams: 3,
        damNames: ["El Mansour Eddahbi", "Hassan Addakhil", "Imi El Kheng"],
        wetlands: "180 km²",
        rainfall: "50-150 mm",
        challenges: "Désertification, épuisement des aquifères",
        conservation: "Initiative pour la durabilité des oasis"
      },
      forests: {
        title: "Couverture forestière",
        area: "1200 km² (8% de la région)",
        type: ["Palmeraies", "Acacia", "Tamarix", "Jujubier"],
        protectedAreas: 4,
        protectedAreaNames: ["Oasis de Zagora", "Aire Protégée d'Erg Chebbi"],
        biodiversity: "Espèces adaptées au désert",
        threats: "Envasement, sécheresse",
        projects: ["Préservation des oasis", "Programme de récolte de brouillard"]
      }
    },
    ar: {
      title:"درعة - تافيلالت ",

      description: "منطقة صحراوية بواحات ونظم إيكولوجية صحراوية",
      water: {
        title: "الموارد المائية",
        rivers: 5,
        majorRivers: ["وادي درعة", "وادي زيز", "وادي غريس"],
        dams: 3,
        damNames: ["المنصور الذهبي", "الحسن الداخيل", "إيمي الخنق"],
        wetlands: "180 كم²",
        rainfall: "50-150 ملم",
        challenges: "التصحر، استنزاف المياه الجوفية",
        conservation: "مبادرة استدامة الواحات"
      },
      forests: {
        title: "الغطاء الغابوي",
        area: "1200 كم² (8% من المنطقة)",
        type: ["النخيل", "الأكاسيا", "الطرفاء", "السدر"],
        protectedAreas: 4,
        protectedAreaNames: ["واحة زاكورة", "منطقة إرگ شبي المحمية"],
        biodiversity: "أنواع متكيفة مع الصحراء",
        threats: "زحف الرمال، الجفاف",
        projects: ["الحفاظ على الواحات", "برنامج حصاد الضباب"]
      }
    },
    imageUrl: "/images/regions/ouarzazate.jpg"
  },

  "Souss-Massa": {
    en: {title:"Souss-Massa",


      description: "Coastal region with Argan forests and fertile valleys.",
      water: {
        title: "Water Resources",
        rivers: 8,
        majorRivers: ["Oued Souss", "Oued Massa", "Oued Tamri"],
        dams: 5,
        damNames: ["Youssef Ben Tachfine", "Abdelmoumen", "Mokhtar Soussi"],
        wetlands: "350 km²",
        rainfall: "200-400 mm",
        challenges: "Groundwater salinization, over-extraction",
        conservation: "Souss-Massa Water Basin Agency"
      },
      forests: {
        title: "Forest Coverage",
        area: "4200 km² (22% of region)",
        type: ["Argan", "Thuya", "Pine", "Olive"],
        protectedAreas: 6,
        protectedAreaNames: ["Souss-Massa National Park", "Arganeraie Biosphere Reserve"],
        biodiversity: "Endemic Argan ecosystem, migratory birds",
        threats: "Overgrazing, climate change, urban expansion",
        projects: ["Argan Oil Cooperatives", "Coastal Dune Restoration", "Anti-Desertification Program"]
      }
    },
    fr: {
      title:"Souss-Massa",

      description: "Région côtière avec forêts d'Argan et vallées fertiles.",
      water: {
        title: "Ressources en eau",
        rivers: 8,
        majorRivers: ["Oued Souss", "Oued Massa", "Oued Tamri"],
        dams: 5,
        damNames: ["Youssef Ben Tachfine", "Abdelmoumen", "Mokhtar Soussi"],
        wetlands: "350 km²",
        rainfall: "200-400 mm",
        challenges: "Salinisation des eaux souterraines, surexploitation",
        conservation: "Agence du Bassin Hydraulique Souss-Massa"
      },
      forests: {
        title: "Couverture forestière",
        area: "4200 km² (22% de la région)",
        type: ["Arganier", "Thuya", "Pin", "Olivier"],
        protectedAreas: 6,
        protectedAreaNames: ["Parc National de Souss-Massa", "Réserve de Biosphère de l'Arganeraie"],
        biodiversity: "Écosystème endémique d'Arganier, oiseaux migrateurs",
        threats: "Surpâturage, changement climatique, expansion urbaine",
        projects: ["Coopératives d'huile d'Argan", "Restauration des dunes côtières", "Programme anti-désertification"]
      }
    },
    ar: {title:"سوس - ماسة",


      description: "منطقة ساحلية بغابات الأركان ووديان خصبة",
      water: {
        title: "الموارد المائية",
        rivers: 8,
        majorRivers: ["وادي سوس", "وادي ماسة", "وادي تامري"],
        dams: 5,
        damNames: ["يوسف بن تاشفين", "عبد المعمون", "المختار السوسي"],
        wetlands: "350 كم²",
        rainfall: "200-400 ملم",
        challenges: "تملح المياه الجوفية، الاستخراج المفرط",
        conservation: "وكالة الحوض المائي سوس ماسة"
      },
      forests: {
        title: "الغطاء الغابوي",
        area: "4200 كم² (22% من المنطقة)",
        type: ["الأركان", "الطوية", "الصنوبر", "الزيتون"],
        protectedAreas: 6,
        protectedAreaNames: ["المنتزه الوطني سوس ماسة", "محمية المحيط الحيوي للأركان"],
        biodiversity: "نظام أركان البيئي المتوطن، الطيور المهاجرة",
        threats: "الرعي الجائر، التغير المناخي، التوسع الحضري",
        projects: ["تعاونيات زيت الأركان", "ترميم الكثبان الساحلية", "برنامج مكافحة التصحر"]
      }
    },
    imageUrl:"/images/regions/souss-massa.jpg"
  },

  "Guelmim-Oued Noun": {
    en: {title:"Guelmim-Oued Noun",

      
      description: "Transitional region between the Sahara and the north.",
      water: {
        title: "Water Resources",
        rivers: 4,
        majorRivers: ["Oued Noun", "Oued Assaka", "Oued Tighmert"],
        dams: 2,
        damNames: ["Youssef Ben Tachfine", "Abdelmoumen"],
        wetlands: "180 km²",
        rainfall: "100-200 mm",
        challenges: "Water scarcity, desertification",
        conservation: "Oued Noun Water Management Initiative"
      },
      forests: {
        title: "Forest Coverage",
        area: "1500 km² (12% of region)",
        type: ["Argan", "Acacia", "Tamarix", "Jujube"],
        protectedAreas: 3,
        protectedAreaNames: ["Aftas Massif", "Tiskmoudine Reserve"],
        biodiversity: "Saharan transitional species",
        threats: "Desert encroachment, drought",
        projects: ["Oasis Preservation", "Fog Harvesting", "Anti-Desertification Measures"]
      }
    },
    fr: {
      title:"Guelmim-Oued Noun",


      description: "Région transitionnelle entre le Sahara et le nord.",
      water: {
        title: "Ressources en eau",
        rivers: 4,
        majorRivers: ["Oued Noun", "Oued Assaka", "Oued Tighmert"],
        dams: 2,
        damNames: ["Youssef Ben Tachfine", "Abdelmoumen"],
        wetlands: "180 km²",
        rainfall: "100-200 mm",
        challenges: "Pénurie d'eau, désertification",
        conservation: "Initiative de gestion de l'eau d'Oued Noun"
      },
      forests: {
        title: "Couverture forestière",
        area: "1500 km² (12% de la région)",
        type: ["Arganier", "Acacia", "Tamarix", "Jujubier"],
        protectedAreas: 3,
        protectedAreaNames: ["Massif d'Aftas", "Réserve de Tiskmoudine"],
        biodiversity: "Espèces transitionnelles sahariennes",
        threats: "Avancée du désert, sécheresse",
        projects: ["Préservation des oasis", "Récolte de brouillard", "Mesures anti-désertification"]
      }
    },
    ar: {title:"كلميم - واد نون",


      description: "منطقة انتقالية بين الصحراء والشمال",
      water: {
        title: "الموارد المائية",
        rivers: 4,
        majorRivers: ["وادي نون", "وادي أساكا", "وادي تيغميرت"],
        dams: 2,
        damNames: ["يوسف بن تاشفين", "عبد المعمون"],
        wetlands: "180 كم²",
        rainfall: "100-200 ملم",
        challenges: "ندرة المياه، التصحر",
        conservation: "مبادرة إدارة مياه وادي نون"
      },
      forests: {
        title: "الغطاء الغابوي",
        area: "1500 كم² (12% من المنطقة)",
        type: ["الأركان", "الأكاسيا", "الطرفاء", "السدر"],
        protectedAreas: 3,
        protectedAreaNames: ["كتلة آفتاس", "محمية تيسكمودين"],
        biodiversity: "أنواع انتقالية صحراوية",
        threats: "زحف الصحراء، الجفاف",
        projects: ["الحفاظ على الواحات", "حصاد الضباب", "إجراءات مكافحة التصحر"]
      }
    },
    imageUrl: "/images/regions/guelmim-oued-noun.jpeg"
  },

  "Laâyoune-Sakia El Hamra": {
    en:

 {
      title:"Laâyoune-Sakia El Hamra",
      description: "Western Sahara region with coastal and desert ecosystems.",
      water: {
        title: "Water Resources",
        rivers: 2,
        majorRivers: ["Oued Sakia El Hamra", "Oued Laâyoune"],
        dams: 1,
        damNames: ["Foum El Oued"],
        wetlands: "120 km²",
        rainfall: "50-100 mm",
        challenges: "Extreme water scarcity, salinity",
        conservation: "Coastal Aquifer Management Program"
      },
      forests: {
        title: "Forest Coverage",
        area: "800 km² (6% of region)",
        type: ["Tamarix", "Acacia", "Palm groves"],
        protectedAreas: 2,
        protectedAreaNames: ["Khenifiss National Park", "Dakhla Bay Protected Area"],
        biodiversity: "Coastal and desert-adapted species",
        threats: "Desertification, overgrazing",
        projects: ["Oasis Rehabilitation", "Coastal Protection", "Desert Greening Initiatives"]
      }
    },
    fr: {
      title:"Laâyoune-Sakia El Hamra",


      description: "Région du Sahara occidental avec écosystèmes côtiers et désertiques.",
      water: {
        title: "Ressources en eau",
        rivers: 2,
        majorRivers: ["Oued Sakia El Hamra", "Oued Laâyoune"],
        dams: 1,
        damNames: ["Foum El Oued"],
        wetlands: "120 km²",
        rainfall: "50-100 mm",
        challenges: "Pénurie extrême d'eau, salinité",
        conservation: "Programme de gestion des aquifères côtiers"
      },
      forests: {
        title: "Couverture forestière",
        area: "800 km² (6% de la région)",
        type: ["Tamarix", "Acacia", "Palmeraies"],
        protectedAreas: 2,
        protectedAreaNames: ["Parc National de Khenifiss", "Aire Protégée de la Baie de Dakhla"],
        biodiversity: "Espèces adaptées aux milieux côtiers et désertiques",
        threats: "Désertification, surpâturage",
        projects: ["Réhabilitation des oasis", "Protection côtière", "Initiatives de verdissement du désert"]
      }
    },
    ar: {title:"العيون  - ساقية الحمراء",


      description: "منطقة الصحراء الغربية بنظم إيكولوجية ساحلية وصحراوية",
      water: {
        title: "الموارد المائية",
        rivers: 2,
        majorRivers: ["وادي الساقية الحمراء", "وادي العيون"],
        dams: 1,
        damNames: ["فم الواد"],
        wetlands: "120 كم²",
        rainfall: "50-100 ملم",
        challenges: "ندرة مياه شديدة، ملوحة",
        conservation: "برنامج إدارة الخزانات الساحلية"
      },
      forests: {
        title: "الغطاء الغابوي",
        area: "800 كم² (6% من المنطقة)",
        type: ["الطرفاء", "الأكاسيا", "واحات النخيل"],
        protectedAreas: 2,
        protectedAreaNames: ["المنتزه الوطني خنيفيس", "منطقة خليج الداخلة المحمية"],
        biodiversity: "أنواع متكيفة مع البيئات الساحلية والصحراوية",
        threats: "التصحر، الرعي الجائر",
        projects: ["إعادة تأهيل الواحات", "الحماية الساحلية", "مبادرات تخضير الصحراء"]
      }
    },
    imageUrl: "/images/regions/laayoune.webp"
  },

  "Dakhla-Oued Ed-Dahab": {
    en: {
      title:"Dakhla-Oued Ed-Dahab",
      description: "Southernmost region with Atlantic coastline and desert.",
      water: {
        title: "Water Resources",
        rivers: 1,
        majorRivers: ["Oued Ed-Dahab"],
        dams: 0,
        damNames: [],
        wetlands: "80 km²",
        rainfall: "20-50 mm",
        challenges: "Severe water stress, dependence on desalination",
        conservation: "Coastal Wetlands Protection Initiative"
      },
      forests: {
        title: "Forest Coverage",
        area: "500 km² (4% of region)",
        type: ["Tamarix", "Acacia", "Palm groves"],
        protectedAreas: 2,
        protectedAreaNames: ["Dakhla National Park", "Oued Ed-Dahab Reserve"],
        biodiversity: "Marine and desert species",
        threats: "Climate change, coastal erosion",
        projects: ["Mangrove Restoration", "Desert Agriculture Innovation", "Renewable Energy for Water"]
      }
    },
    fr: {

      title:"Dakhla-Oued Ed-Dahab",
      description: "Région la plus au sud avec littoral atlantique et désert.",
      water: {
        title: "Ressources en eau",
        rivers: 1,
        majorRivers: ["Oued Ed-Dahab"],
        dams: 0,
        damNames: [],
        wetlands: "80 km²",
        rainfall: "20-50 mm",
        challenges: "Stress hydrique sévère, dépendance au dessalement",
        conservation: "Initiative de protection des zones humides côtières"
      },
      forests: {
        title: "Couverture forestière",
        area: "500 km² (4% de la région)",
        type: ["Tamarix", "Acacia", "Palmeraies"],
        protectedAreas: 2,
        protectedAreaNames: ["Parc National de Dakhla", "Réserve d'Oued Ed-Dahab"],
        biodiversity: "Espèces marines et désertiques",
        threats: "Changement climatique, érosion côtière",
        projects: ["Restauration des mangroves", "Innovation en agriculture désertique", "Énergies renouvelables pour l'eau"]
      }
    },
    ar: {

      title:"الداخلة - وادي الذهب",
      description: "أقصى منطقة جنوبية بساحل أطلسي وصحراء",
      water: {
        title: "الموارد المائية",
        rivers: 1,
        majorRivers: ["وادي الذهب"],
        dams: 0,
        damNames: [],
        wetlands: "80 كم²",
        rainfall: "20-50 ملم",
        challenges: "إجهاد مائي شديد، الاعتماد على تحلية المياه",
        conservation: "مبادرة حماية الأراضي الرطبة الساحلية"
      },
      forests: {
        title: "الغطاء الغابوي",
        area: "500 كم² (4% من المنطقة)",
        type: ["الطرفاء", "الأكاسيا", "واحات النخيل"],
        protectedAreas: 2,
        protectedAreaNames: ["المنتزه الوطني الداخلة", "محمية وادي الذهب"],
        biodiversity: "أنواع بحرية وصحراوية",
        threats: "التغير المناخي، التآكل الساحلي",
        projects: ["ترميم أشجار القرم", "الابتكار في الزراعة الصحراوية", "الطاقة المتجددة للمياه"]
      }
    },
    imageUrl: "/images/regions/dakhla.avif"
  }
  };
  
  // Helper function for translation keys
  export const waterTerms = {
    en: {
      rivers: "Rivers",
      dams: "Dams",
      wetlands: "Wetlands",
      rainfall: "Rainfall",
      challenges: "Challenges",
      conservation: "Conservation"
    },
    fr: {
      rivers: "Rivières",
      dams: "Barrages",
      wetlands: "Zones humides",
      rainfall: "Précipitations",
      challenges: "Défis",
      conservation: "Conservation"
    },
    ar: {
      rivers: "الأنهار",
      dams: "السدود",
      wetlands: "الأراضي الرطبة",
      rainfall: "التساقطات",
      challenges: "التحديات",
      conservation: "المحافظة"
    }
  };
  
  export const forestTerms = {
    en: {
      area: "Area",
      type: "Forest Types",
      protected: "Protected Areas",
      biodiversity: "Biodiversity",
      threats: "Threats",
      projects: "Conservation Projects"
    },
    fr: {
      area: "Superficie",
      type: "Types de forêt",
      protected: "Zones protégées",
      biodiversity: "Biodiversité",
      threats: "Menaces",
      projects: "Projets de conservation"
    },
    ar: {
      area: "المساحة",
      type: "أنواع الغابات",
      protected: "المناطق المحمية",
      biodiversity: "التنوع البيولوجي",
      threats: "التهديدات",
      projects: "مشاريع الحفاظ"
    }
  };