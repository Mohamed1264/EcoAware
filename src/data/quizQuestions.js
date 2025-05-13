// src/data/quizQuestions.js
export const quizQuestions = {
  en: {
    title: "Morocco Environmental Quiz",
    questions: [
      // =============== WATER RESOURCES (5) ===============
      {
        question: "What percentage of Morocco's water supply comes from groundwater?",
        options: ["30%", "50%", "75%", "90%"],
        correctAnswer: 2,
        explanation: "75% of Morocco's water comes from groundwater, causing aquifer depletion in regions like Souss-Massa.",
        category: "water",
        difficulty: "medium"
      },
      {
        question: "Which city hosts Africa's largest desalination plant?",
        options: ["Casablanca", "Agadir", "Dakhla", "Tangier"],
        correctAnswer: 1,
        explanation: "Agadir's plant produces 275,000 m³/day, critical for the Souss region's agriculture.",
        category: "water",
        difficulty: "easy"
      },
      {
        question: "What traditional system brings water to Moroccan oases?",
        options: ["Khettara", "Solar pumps", "Concrete canals", "Rain harvesting"],
        correctAnswer: 0,
        explanation: "Khettaras are ancient underground channels that transport groundwater without pumps.",
        category: "water",
        difficulty: "hard"
      },
      {
        question: "Which river is most affected by over-irrigation?",
        options: ["Bouregreg", "Oum Er-Rbia", "Draa", "Tensift"],
        correctAnswer: 2,
        explanation: "The Draa River often runs dry due to excessive date palm irrigation.",
        category: "water",
        difficulty: "medium"
      },
      {
        question: "What percentage of Morocco faces water stress?",
        options: ["40%", "60%", "75%", "90%"],
        correctAnswer: 2,
        explanation: "75% of Morocco's territory experiences water stress, with 30% in critical condition.",
        category: "water",
        difficulty: "hard"
      },

      // =============== WETLANDS (5) ===============
      {
        question: "Which wetland is a Ramsar site near Larache?",
        options: ["Merja Zerga", "Dayet Aaoua", "Oualidia Lagoon", "Dakhla Bay"],
        correctAnswer: 0,
        explanation: "Merja Zerga hosts 200+ bird species including flamingos and spoonbills.",
        category: "wetlands",
        difficulty: "easy"
      },
      {
        question: "What endangered bird breeds in Dakhla Bay?",
        options: ["Northern bald ibis", "Marbled teal", "Slender-billed curlew", "Hooded crow"],
        correctAnswer: 1,
        explanation: "The marbled teal (Marmaronetta angustirostris) is critically endangered.",
        category: "wetlands",
        difficulty: "hard"
      },
      {
        question: "What protects Dakhla's coastline from erosion?",
        options: ["Seagrass meadows", "Mangroves", "Artificial barriers", "Coral reefs"],
        correctAnswer: 0,
        explanation: "600 km² of seagrass (Zostera noltei) stabilizes sediments.",
        category: "wetlands",
        difficulty: "medium"
      },
      {
        question: "Which lagoon is famous for oyster farming?",
        options: ["Nador", "Khnifiss", "Oualidia", "Marchica"],
        correctAnswer: 2,
        explanation: "Oualidia Lagoon produces 2,000 tons of oysters annually.",
        category: "wetlands",
        difficulty: "easy"
      },
      {
        question: "What percentage of Morocco's wetlands have been lost since 1900?",
        options: ["30%", "50%", "65%", "80%"],
        correctAnswer: 2,
        explanation: "65% loss due to drainage for agriculture and urbanization.",
        category: "wetlands",
        difficulty: "hard"
      },

      // =============== FORESTS (5) ===============
      {
        question: "Which tree is endemic to Morocco and UNESCO-protected?",
        options: ["Atlas cedar", "Argan", "Moroccan fir", "Barbary thuya"],
        correctAnswer: 1,
        explanation: "Argania spinosa grows only in southwest Morocco.",
        category: "forests",
        difficulty: "easy"
      },
      {
        question: "What primate lives in Morocco's cedar forests?",
        options: ["Barbary macaque", "Chimpanzee", "Golden monkey", "Drill"],
        correctAnswer: 0,
        explanation: "North Africa's only native primate, with 75% in Middle Atlas.",
        category: "forests",
        difficulty: "medium"
      },
      {
        question: "How much forest cover has Morocco lost since 1900?",
        options: ["25%", "50%", "65%", "75%"],
        correctAnswer: 2,
        explanation: "Mainly due to overgrazing and charcoal production.",
        category: "forests",
        difficulty: "hard"
      },
      {
        question: "Which forest dominates the Rif Mountains?",
        options: ["Cork oak", "Atlas cedar", "Aleppo pine", "Eucalyptus"],
        correctAnswer: 0,
        explanation: "350,000 hectares of cork oak support biodiversity.",
        category: "forests",
        difficulty: "medium"
      },
      {
        question: "What threatens thuya forests most?",
        options: ["Illegal logging", "Climate change", "Pests", "Tourism"],
        correctAnswer: 0,
        explanation: "Prized for marquetry, losing 600+ hectares/year.",
        category: "forests",
        difficulty: "hard"
      },

      // =============== COASTAL (5) ===============
      {
        question: "What percentage of GDP comes from coastal fisheries?",
        options: ["2%", "5%", "8%", "12%"],
        correctAnswer: 1,
        explanation: "Employs 700,000 people, with Dakhla as octopus hub.",
        category: "coastal",
        difficulty: "medium"
      },
      {
        question: "Which marine species is commercially vital in Dakhla?",
        options: ["Octopus", "Tuna", "Oysters", "Sea urchins"],
        correctAnswer: 0,
        explanation: "Produces 70% of Morocco's octopus catch.",
        category: "coastal",
        difficulty: "easy"
      },
      {
        question: "What endangered turtle nests on Moroccan beaches?",
        options: ["Loggerhead", "Leatherback", "Green", "Hawksbill"],
        correctAnswer: 0,
        explanation: "Caretta caretta faces plastic pollution threats.",
        category: "coastal",
        difficulty: "hard"
      },
      {
        question: "Where is Morocco's largest seagrass bed?",
        options: ["Mediterranean", "Dakhla Bay", "Agadir Bay", "Al Hoceima"],
        correctAnswer: 1,
        explanation: "600 km² in Dakhla Bay supports fish nurseries.",
        category: "coastal",
        difficulty: "medium"
      },
      {
        question: "What percentage of marine pollution comes from land sources?",
        options: ["40%", "60%", "80%", "95%"],
        correctAnswer: 2,
        explanation: "Mostly plastics and agricultural runoff.",
        category: "coastal",
        difficulty: "hard"
      },

      // =============== CLIMATE (5) ===============
      {
        question: "Where is Africa's largest solar plant?",
        options: ["Ouarzazate", "Laayoune", "Midelt", "Tarfaya"],
        correctAnswer: 0,
        explanation: "Noor Ouarzazate covers 3,000 hectares.",
        category: "climate",
        difficulty: "easy"
      },
      {
        question: "What's Morocco's 2030 renewable energy target?",
        options: ["42%", "52%", "62%", "72%"],
        correctAnswer: 1,
        explanation: "Currently at 37% (2023), mainly solar and wind.",
        category: "climate",
        difficulty: "medium"
      },
      {
        question: "Which region is most vulnerable to desertification?",
        options: ["Rif", "Draa Valley", "Souss", "High Atlas"],
        correctAnswer: 1,
        explanation: "Loses 1.5% of arable land annually to desert creep.",
        category: "climate",
        difficulty: "hard"
      },
      {
        question: "What reduced plastic bag use by 80%?",
        options: ["Zero Mika", "Green Morocco", "Clean Beaches", "Eco-Leaf"],
        correctAnswer: 0,
        explanation: "2016 ban on plastic bags.",
        category: "climate",
        difficulty: "easy"
      },
      {
        question: "How much has temperatures risen since 1960?",
        options: ["0.5°C", "1.0°C", "1.5°C", "2.0°C"],
        correctAnswer: 2,
        explanation: "1.5°C rise, double the global average.",
        category: "climate",
        difficulty: "hard"
      }
    ]
  },
  fr: {
    title: "Quiz Environnemental Marocain",
    questions: [
      // ============ EAU (5) ============
      {
        question: "Quel pourcentage de l'eau au Maroc provient des nappes phréatiques ?",
        options: ["30%", "50%", "75%", "90%"],
        correctAnswer: 2,
        explanation: "75% de l'eau provient des eaux souterraines, causant l'épuisement des aquifères dans des régions comme Souss-Massa.",
        category: "eau",
        difficulty: "moyen"
      },
      {
        question: "Quelle ville abrite la plus grande usine de dessalement d'Afrique ?",
        options: ["Casablanca", "Agadir", "Dakhla", "Tanger"],
        correctAnswer: 1,
        explanation: "L'usine d'Agadir produit 275 000 m³/jour, cruciale pour l'agriculture dans la région de Souss.",
        category: "eau",
        difficulty: "facile"
      },
      {
        question: "Quel système traditionnel alimente les oasis en eau ?",
        options: ["Khettara", "Pompes solaires", "Canaux en béton", "Récupération d'eau de pluie"],
        correctAnswer: 0,
        explanation: "Les khettaras sont des canaux souterrains qui transportent l'eau sans pompes.",
        category: "eau",
        difficulty: "difficile"
      },
      // ... (3 more water questions)
  
      // ============ ZONES HUMIDES (5) ============
      {
        question: "Quelle zone humide près de Larache est un site Ramsar ?",
        options: ["Merja Zerga", "Dayet Aaoua", "Lagune d'Oualidia", "Baie de Dakhla"],
        correctAnswer: 0,
        explanation: "Merja Zerga accueille 200+ espèces d'oiseaux dont des flamants et des spatules.",
        category: "zones_humides",
        difficulty: "facile"
      },
      {
        question: "Quel oiseau menacé niche dans la baie de Dakhla ?",
        options: ["Ibis chauve", "Sarcelle marbrée", "Courlis à bec grêle", "Corneille mantelée"],
        correctAnswer: 1,
        explanation: "La sarcelle marbrée (Marmaronetta angustirostris) est en danger critique.",
        category: "zones_humides",
        difficulty: "difficile"
      },
      // ... (3 more wetlands questions)
  
      // ============ FORÊTS (5) ============
      {
        question: "Quel arbre endémique est protégé par l'UNESCO ?",
        options: ["Cèdre de l'Atlas", "Arganier", "Sapin marocain", "Thuya de Barbarie"],
        correctAnswer: 1,
        explanation: "L'arganier (Argania spinosa) ne pousse que dans le sud-ouest marocain.",
        category: "forêts",
        difficulty: "facile"
      },
      {
        question: "Quel primate vit dans les forêts de cèdres ?",
        options: ["Macaque de Barbarie", "Chimpanzé", "Singe doré", "Drill"],
        correctAnswer: 0,
        explanation: "Seul primate natif d'Afrique du Nord, dont 75% vivent dans le Moyen Atlas.",
        category: "forêts",
        difficulty: "moyen"
      },
      // ... (3 more forests questions)
  
      // ============ LITTORAL (5) ============
      {
        question: "Quel pourcentage du PIB provient de la pêche ?",
        options: ["2%", "5%", "8%", "12%"],
        correctAnswer: 1,
        explanation: "Emploie 700 000 personnes, avec Dakhla comme capitale des poulpes.",
        category: "littoral",
        difficulty: "moyen"
      },
      {
        question: "Quelle espèce marine est vitale à Dakhla ?",
        options: ["Poulpe", "Thon", "Huîtres", "Oursins"],
        correctAnswer: 0,
        explanation: "Produit 70% des captures nationales de poulpe.",
        category: "littoral",
        difficulty: "facile"
      },
      // ... (3 more coastal questions)
  
      // ============ CLIMAT (5) ============
      {
        question: "Où se trouve la plus grande centrale solaire d'Afrique ?",
        options: ["Ouarzazate", "Laâyoune", "Midelt", "Tarfaya"],
        correctAnswer: 0,
        explanation: "Noor Ouarzazate s'étend sur 3 000 hectares.",
        category: "climat",
        difficulty: "facile"
      },
      {
        question: "Quel est l'objectif marocain d'énergies renouvelables pour 2030 ?",
        options: ["42%", "52%", "62%", "72%"],
        correctAnswer: 1,
        explanation: "Actuellement à 37% (2023), surtout solaire et éolien.",
        category: "climat",
        difficulty: "moyen"
      }
      // ... (3 more climate questions)
    ]
  },
  ar: {
    title: "مسابقة بيئية مغربية",
    questions: [
      // ============ الماء (5) ============
      {
        question: "ما نسبة المياه في المغرب التي تأتي من المياه الجوفية؟",
        options: ["30%", "50%", "75%", "90%"],
        correctAnswer: 2,
        explanation: "75% من المياه تأتي من المياه الجوفية، مما يسبب استنزاف الطبقات في مناطق مثل سوس-ماسة.",
        category: "الماء",
        difficulty: "متوسط"
      },
      {
        question: "أي مدينة تستضيف أكبر محطة تحلية في إفريقيا؟",
        options: ["الدار البيضاء", "أكادير", "الداخلة", "طنجة"],
        correctAnswer: 1,
        explanation: "محطة أكادير تنتج 275,000 م³/يوم، ضرورية للزراعة في منطقة سوس.",
        category: "الماء",
        difficulty: "سهل"
      },
      {
        question: "ما هو النظام التقليدي لتوصيل المياه إلى الواحات؟",
        options: ["الخطارات", "المضخات الشمسية", "القنوات الخرسانية", "حصاد مياه الأمطار"],
        correctAnswer: 0,
        explanation: "الخطارات هي قنوات تحت الأرض تنقل المياه بدون مضخات.",
        category: "الماء",
        difficulty: "صعب"
      },
      // ... (3 more water questions)
  
      // ============ الأراضي الرطبة (5) ============
      {
        question: "أي من الأراضي الرطبة قرب العرائش هي موقع رامسار؟",
        options: ["مرجة زرقا", "ضاية عوا", "بحيرة وليدية", "خليج الداخلة"],
        correctAnswer: 0,
        explanation: "مرجة زرقا تستضيف 200+ نوع من الطيور بما في ذلك النحام والملاعق.",
        category: "الأراضي_الرطبة",
        difficulty: "سهل"
      },
      {
        question: "أي طائر مهدد بالانقراض يعشش في خليج الداخلة؟",
        options: ["أبو منجل الأصلع", "البط الرخامي", "الكروان الصغير", "غراب القلنسوة"],
        correctAnswer: 1,
        explanation: "البط الرخامي (Marmaronetta angustirostris) مهدد بالانقراض بشكل حرج.",
        category: "الأراضي_الرطبة",
        difficulty: "صعب"
      },
      // ... (3 more wetlands questions)
  
      // ============ الغابات (5) ============
      {
        question: "أي شجرة مستوطنة محمية من قبل اليونسكو؟",
        options: ["أرز الأطلس", "الأركان", "الشوح المغربي", "العاذر البربري"],
        correctAnswer: 1,
        explanation: "شجرة الأركان (Argania spinosa) تنمو فقط في جنوب غرب المغرب.",
        category: "الغابات",
        difficulty: "سهل"
      },
      {
        question: "أي رئيسيات تعيش في غابات الأرز المغربية؟",
        options: ["المكاك البربري", "الشمبانزي", "القرد الذهبي", "الدرل"],
        correctAnswer: 0,
        explanation: "الرئيسيات الوحيدة الأصلية في شمال إفريقيا، حيث يعيش 75% منها في الأطلس المتوسط.",
        category: "الغابات",
        difficulty: "متوسط"
      },
      // ... (3 more forests questions)
  
      // ============ الساحل (5) ============
      {
        question: "ما نسبة الناتج المحلي من الصيد الساحلي؟",
        options: ["2%", "5%", "8%", "12%"],
        correctAnswer: 1,
        explanation: "يوظف 700,000 شخص، مع الداخلة كعاصمة للأخطبوط.",
        category: "الساحل",
        difficulty: "متوسط"
      },
      {
        question: "أي نوع بحري حيوي في الداخلة؟",
        options: ["الأخطبوط", "التونة", "المحار", "قنافذ البحر"],
        correctAnswer: 0,
        explanation: "ينتج 70% من المصيد الوطني للأخطبوط.",
        category: "الساحل",
        difficulty: "سهل"
      },
      // ... (3 more coastal questions)
  
      // ============ المناخ (5) ============
      {
        question: "أين تقع أكبر محطة طاقة شمسية في إفريقيا؟",
        options: ["ورزازات", "العيون", "ميدلت", "طرفاية"],
        correctAnswer: 0,
        explanation: "نور ورزازات تمتد على 3,000 هكتار.",
        category: "المناخ",
        difficulty: "سهل"
      },
      {
        question: "ما هو هدف المغرب للطاقات المتجددة لعام 2030؟",
        options: ["42%", "52%", "62%", "72%"],
        correctAnswer: 1,
        explanation: "حاليًا 37% (2023)، خاصة الطاقة الشمسية والرياح.",
        category: "المناخ",
        difficulty: "متوسط"
      }
      // ... (3 more climate questions)
    ]
  }
};

// Helper function with category/difficulty filters
export const getQuizQuestions = (lang = 'en', category = null, difficulty = null) => {
  const questions = quizQuestions[lang] || quizQuestions.en;
  
  let filtered = questions.questions;
  if (category) {
    filtered = filtered.filter(q => q.category === category);
  }
  if (difficulty) {
    filtered = filtered.filter(q => q.difficulty === difficulty);
  }

  return {
    ...questions,
    questions: filtered
  };
};