document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const navigator = document.getElementById("navigator");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const scoreBtn = document.getElementById("score-btn");
  const resultContainer = document.getElementById("result-container");
  const userScore = document.getElementById("score");
  const quizStatus = document.getElementById("quiz-status");
  const reviewBtn = document.getElementById("review");
  const reviewContainer = document.getElementById("review-container");
  // const restartContainer = document.getElementById("restart-container");
  const reviewPrevBtn = document.getElementById("review-prev-btn");
  const restartBtn1 = document.getElementById("restart-btn1");
  const restartBtn2 = document.getElementById("restart-btn2");
  const reviewNextBtn = document.getElementById("review-next-btn");
  const reviewNavigator = document.getElementById("review-navigator");
  const menuContainer = document.getElementById("menu-container");
  const menuBtn = document.getElementById("menu-btn");
  const menuBtn2 = document.getElementById("menu-btn2");
  const menuBtn3 = document.getElementById("menu-btn3");
  const biologyBtn = document.getElementById("biology-btn");
  const chemistryBtn = document.getElementById("chemistry-btn");
  const physicsBtn = document.getElementById("physics-btn");
  const subjectBtn = document.getElementById("subject-buttons");
  const dropdownList = document.getElementById("dropdown-list");
  const biologyIcon = document.getElementById("biology-icon");
  const chemistryIcon = document.getElementById("chemistry-icon");
  const physicsIcon = document.getElementById("physics-icon");
  const questionNo = document.getElementById("question-no");
  const timerDisplay = document.getElementById("timer-display");

  //   Array of objects that holds the question, choices and answers

  // const quizQuestions = [
  //   {
  //     question:
  //       "Which organelle is responsible for producing energy in a cell?",
  //     choices: [
  //       "Nucleus",
  //       "Ribosome",
  //       "Mitochondria",
  //       "Golgi apparatus",
  //       "Lysosome",
  //     ],
  //     answer: "Mitochondria",
  //   },
  //   {
  //     question: "What is the basic unit of heredity?",
  //     choices: ["Chromosome", "Gene", "Allele", "DNA", "Nucleus"],
  //     answer: "Gene",
  //   },
  //   {
  //     question: "Which blood group is known as the universal donor?",
  //     choices: ["AB", "A", "B", "O", "AB+"],
  //     answer: "O",
  //   },
  //   {
  //     question: "What process do plants use to make their own food?",
  //     choices: [
  //       "Respiration",
  //       "Transpiration",
  //       "Photosynthesis",
  //       "Osmosis",
  //       "Digestion",
  //     ],
  //     answer: "Photosynthesis",
  //   },
  //   {
  //     question: "Which part of the brain controls balance and coordination?",
  //     choices: [
  //       "Cerebrum",
  //       "Medulla oblongata",
  //       "Hypothalamus",
  //       "Cerebellum",
  //       "Thalamus",
  //     ],
  //     answer: "Cerebellum",
  //   },

  //   // Chemistry
  //   {
  //     question: "What is the chemical formula of water?",
  //     choices: ["HO", "H2O2", "H2O", "OH", "HO2"],
  //     answer: "H2O",
  //   },
  //   {
  //     question: "What is the atomic number of Carbon?",
  //     choices: ["8", "12", "14", "6", "4"],
  //     answer: "6",
  //   },
  //   {
  //     question:
  //       "Which gas is produced when an acid reacts with a metal carbonate?",
  //     choices: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide", "Chlorine"],
  //     answer: "Carbon dioxide",
  //   },
  //   {
  //     question:
  //       "What type of bond is formed when electrons are shared between atoms?",
  //     choices: [
  //       "Ionic bond",
  //       "Metallic bond",
  //       "Covalent bond",
  //       "Hydrogen bond",
  //       "Van der Waals bond",
  //     ],
  //     answer: "Covalent bond",
  //   },
  //   {
  //     question: "Which element has the symbol Na?",
  //     choices: ["Nitrogen", "Nickel", "Sodium", "Neon", "Neptunium"],
  //     answer: "Sodium",
  //   },

  //   // Physics
  //   {
  //     question: "What is the SI unit of electric current?",
  //     choices: ["Volt", "Watt", "Ohm", "Ampere", "Joule"],
  //     answer: "Ampere",
  //   },
  //   {
  //     question: "What is the speed of light in a vacuum?",
  //     choices: [
  //       "3 × 10^6 m/s",
  //       "3 × 10^8 m/s",
  //       "3 × 10^10 m/s",
  //       "3 × 10^4 m/s",
  //       "3 × 10^12 m/s",
  //     ],
  //     answer: "3 × 10^8 m/s",
  //   },
  //   {
  //     question:
  //       "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
  //     choices: [
  //       "Charles's law",
  //       "Newton's law",
  //       "Boyle's law",
  //       "Ohm's law",
  //       "Hooke's law",
  //     ],
  //     answer: "Boyle's law",
  //   },
  //   {
  //     question:
  //       "What type of mirror is used as a rear-view mirror in vehicles?",
  //     choices: [
  //       "Concave mirror",
  //       "Plane mirror",
  //       "Parabolic mirror",
  //       "Convex mirror",
  //       "Spherical mirror",
  //     ],
  //     answer: "Convex mirror",
  //   },
  //   {
  //     question: "What is the unit of measurement for frequency?",
  //     choices: ["Watt", "Newton", "Hertz", "Pascal", "Joule"],
  //     answer: "Hertz",
  //   },
  // ];

  // Setting the index of my object to be equal to 0 at first so it can start the quiz at the first question

  const quizSubjects = {
    biology: [
      {
        question:
          "Which organelle is responsible for producing energy in a cell?",
        choices: [
          "Nucleus",
          "Ribosome",
          "Mitochondria",
          "Golgi apparatus",
          "Lysosome",
        ],
        answer: "Mitochondria",
      },
      {
        question: "What is the basic unit of heredity?",
        choices: ["Chromosome", "Gene", "Allele", "DNA", "Nucleus"],
        answer: "Gene",
      },
      {
        question: "Which blood group is known as the universal donor?",
        choices: ["AB", "A", "B", "O", "AB+"],
        answer: "O",
      },
      {
        question: "What process do plants use to make their own food?",
        choices: [
          "Respiration",
          "Transpiration",
          "Photosynthesis",
          "Osmosis",
          "Digestion",
        ],
        answer: "Photosynthesis",
      },
      {
        question: "Which part of the brain controls balance and coordination?",
        choices: [
          "Cerebrum",
          "Medulla oblongata",
          "Hypothalamus",
          "Cerebellum",
          "Thalamus",
        ],
        answer: "Cerebellum",
      },
      {
        question: "What is the powerhouse of the cell?",
        choices: [
          "Nucleus",
          "Ribosome",
          "Mitochondria",
          "Chloroplast",
          "Vacuole",
        ],
        answer: "Mitochondria",
      },
      {
        question: "Which vitamin is produced when skin is exposed to sunlight?",
        choices: [
          "Vitamin A",
          "Vitamin B",
          "Vitamin C",
          "Vitamin D",
          "Vitamin E",
        ],
        answer: "Vitamin D",
      },
      {
        question: "What is the longest bone in the human body?",
        choices: ["Humerus", "Tibia", "Femur", "Fibula", "Radius"],
        answer: "Femur",
      },
      {
        question:
          "Which organ is responsible for filtering blood in the human body?",
        choices: ["Liver", "Heart", "Lungs", "Kidney", "Spleen"],
        answer: "Kidney",
      },
      {
        question: "What type of cell division produces gametes?",
        choices: [
          "Mitosis",
          "Meiosis",
          "Binary fission",
          "Budding",
          "Fragmentation",
        ],
        answer: "Meiosis",
      },
      {
        question: "Which part of the plant conducts photosynthesis?",
        choices: ["Root", "Stem", "Leaf", "Flower", "Seed"],
        answer: "Leaf",
      },
      {
        question:
          "What is the genetic material found in most living organisms?",
        choices: ["RNA", "DNA", "ATP", "ADP", "mRNA"],
        answer: "DNA",
      },
      {
        question: "Which hormone regulates blood sugar levels?",
        choices: ["Adrenaline", "Thyroxine", "Insulin", "Estrogen", "Cortisol"],
        answer: "Insulin",
      },
      {
        question: "How many chambers does the human heart have?",
        choices: ["2", "3", "4", "5", "6"],
        answer: "4",
      },
      {
        question: "Which gas do plants absorb during photosynthesis?",
        choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen", "Helium"],
        answer: "Carbon dioxide",
      },
      {
        question: "What is the study of heredity and genetic variation called?",
        choices: ["Ecology", "Genetics", "Anatomy", "Physiology", "Taxonomy"],
        answer: "Genetics",
      },
      {
        question: "Which organelle is responsible for protein synthesis?",
        choices: [
          "Nucleus",
          "Mitochondria",
          "Ribosome",
          "Golgi body",
          "Lysosome",
        ],
        answer: "Ribosome",
      },
      {
        question:
          "What is the process by which plants lose water through their leaves?",
        choices: [
          "Osmosis",
          "Diffusion",
          "Transpiration",
          "Respiration",
          "Absorption",
        ],
        answer: "Transpiration",
      },
      {
        question: "Which blood cells are responsible for fighting infection?",
        choices: [
          "Red blood cells",
          "Platelets",
          "White blood cells",
          "Plasma",
          "Hemoglobin",
        ],
        answer: "White blood cells",
      },
      {
        question: "What is the outermost layer of the skin called?",
        choices: [
          "Dermis",
          "Hypodermis",
          "Epidermis",
          "Subcutaneous",
          "Keratin",
        ],
        answer: "Epidermis",
      },
      {
        question: "Which organ produces bile in the human body?",
        choices: ["Pancreas", "Kidney", "Stomach", "Liver", "Gallbladder"],
        answer: "Liver",
      },
      {
        question: "What is the basic structural and functional unit of life?",
        choices: ["Tissue", "Organ", "Cell", "Molecule", "Atom"],
        answer: "Cell",
      },
      {
        question:
          "Which part of the brain is responsible for thinking and decision making?",
        choices: [
          "Cerebellum",
          "Medulla",
          "Cerebrum",
          "Hypothalamus",
          "Thalamus",
        ],
        answer: "Cerebrum",
      },
      {
        question:
          "What is the process of breaking down glucose to release energy called?",
        choices: [
          "Photosynthesis",
          "Transpiration",
          "Respiration",
          "Digestion",
          "Absorption",
        ],
        answer: "Respiration",
      },
      {
        question: "Which pigment gives plants their green color?",
        choices: [
          "Melanin",
          "Carotene",
          "Chlorophyll",
          "Hemoglobin",
          "Xanthophyll",
        ],
        answer: "Chlorophyll",
      },
      {
        question: "What is the male reproductive cell called?",
        choices: ["Ovum", "Zygote", "Embryo", "Sperm", "Gamete"],
        answer: "Sperm",
      },
      {
        question:
          "Which organ system is responsible for transporting nutrients and oxygen?",
        choices: [
          "Digestive system",
          "Nervous system",
          "Circulatory system",
          "Respiratory system",
          "Excretory system",
        ],
        answer: "Circulatory system",
      },
      {
        question:
          "What is the process by which organisms maintain a stable internal environment?",
        choices: [
          "Adaptation",
          "Evolution",
          "Homeostasis",
          "Metabolism",
          "Regulation",
        ],
        answer: "Homeostasis",
      },
      {
        question: "Which type of reproduction involves only one parent?",
        choices: [
          "Sexual reproduction",
          "Fertilization",
          "Asexual reproduction",
          "Pollination",
          "Budding",
        ],
        answer: "Asexual reproduction",
      },
      {
        question:
          "What is the name of the protein that carries oxygen in red blood cells?",
        choices: ["Insulin", "Hemoglobin", "Keratin", "Collagen", "Albumin"],
        answer: "Hemoglobin",
      },
      {
        question: "Which part of the cell controls its activities?",
        choices: [
          "Cell membrane",
          "Cytoplasm",
          "Nucleus",
          "Mitochondria",
          "Vacuole",
        ],
        answer: "Nucleus",
      },
      {
        question: "What is the term for organisms that make their own food?",
        choices: [
          "Heterotrophs",
          "Decomposers",
          "Autotrophs",
          "Consumers",
          "Parasites",
        ],
        answer: "Autotrophs",
      },
      {
        question: "Which vitamin is essential for blood clotting?",
        choices: [
          "Vitamin A",
          "Vitamin C",
          "Vitamin D",
          "Vitamin K",
          "Vitamin B12",
        ],
        answer: "Vitamin K",
      },
      {
        question: "What is the smallest unit of an element?",
        choices: ["Molecule", "Cell", "Atom", "Ion", "Electron"],
        answer: "Atom",
      },
      {
        question: "Which enzyme breaks down starch in the mouth?",
        choices: ["Pepsin", "Lipase", "Amylase", "Trypsin", "Lactase"],
        answer: "Amylase",
      },
      {
        question:
          "What is the name of the process where a caterpillar becomes a butterfly?",
        choices: [
          "Adaptation",
          "Metamorphosis",
          "Evolution",
          "Regeneration",
          "Mutation",
        ],
        answer: "Metamorphosis",
      },
      {
        question: "Which part of the eye is responsible for detecting light?",
        choices: ["Cornea", "Iris", "Lens", "Retina", "Pupil"],
        answer: "Retina",
      },
      {
        question: "What is the term for the variety of life on Earth?",
        choices: [
          "Ecology",
          "Evolution",
          "Biodiversity",
          "Taxonomy",
          "Genetics",
        ],
        answer: "Biodiversity",
      },
      {
        question:
          "Which system in the body is responsible for hormone production?",
        choices: [
          "Nervous system",
          "Endocrine system",
          "Immune system",
          "Digestive system",
          "Skeletal system",
        ],
        answer: "Endocrine system",
      },
      {
        question: "What connects muscles to bones?",
        choices: ["Ligaments", "Cartilage", "Tendons", "Nerves", "Joints"],
        answer: "Tendons",
      },
      {
        question: "Which gas is released by plants during photosynthesis?",
        choices: ["Carbon dioxide", "Nitrogen", "Hydrogen", "Oxygen", "Helium"],
        answer: "Oxygen",
      },
      {
        question: "What is the scientific name for the study of plants?",
        choices: ["Zoology", "Microbiology", "Botany", "Ecology", "Genetics"],
        answer: "Botany",
      },
      {
        question: "Which organ stores bile produced by the liver?",
        choices: ["Pancreas", "Spleen", "Gallbladder", "Kidney", "Stomach"],
        answer: "Gallbladder",
      },
      {
        question: "What type of joint is found in the shoulder?",
        choices: [
          "Hinge joint",
          "Fixed joint",
          "Ball and socket joint",
          "Pivot joint",
          "Gliding joint",
        ],
        answer: "Ball and socket joint",
      },
      {
        question: "Which part of the neuron receives signals?",
        choices: ["Axon", "Myelin sheath", "Dendrite", "Synapse", "Nucleus"],
        answer: "Dendrite",
      },
      {
        question:
          "What is the term for animals that eat both plants and animals?",
        choices: [
          "Herbivores",
          "Carnivores",
          "Decomposers",
          "Omnivores",
          "Parasites",
        ],
        answer: "Omnivores",
      },
      {
        question: "Which mineral is essential for strong bones and teeth?",
        choices: ["Iron", "Potassium", "Sodium", "Calcium", "Magnesium"],
        answer: "Calcium",
      },
      {
        question:
          "What is the protective outer covering of a plant cell called?",
        choices: [
          "Cell membrane",
          "Cell wall",
          "Cytoplasm",
          "Vacuole",
          "Chloroplast",
        ],
        answer: "Cell wall",
      },
      {
        question:
          "Which type of blood vessel carries blood away from the heart?",
        choices: ["Veins", "Capillaries", "Arteries", "Venules", "Sinuses"],
        answer: "Arteries",
      },
      {
        question:
          "What is the name of the process where plants bend towards light?",
        choices: [
          "Geotropism",
          "Hydrotropism",
          "Phototropism",
          "Thigmotropism",
          "Chemotropism",
        ],
        answer: "Phototropism",
      },
    ],

    chemistry: [
      {
        question: "What is the chemical formula of water?",
        choices: ["HO", "H2O2", "H2O", "OH", "HO2"],
        answer: "H2O",
      },
      {
        question: "What is the atomic number of Carbon?",
        choices: ["8", "12", "14", "6", "4"],
        answer: "6",
      },
      {
        question:
          "Which gas is produced when an acid reacts with a metal carbonate?",
        choices: [
          "Oxygen",
          "Hydrogen",
          "Nitrogen",
          "Carbon dioxide",
          "Chlorine",
        ],
        answer: "Carbon dioxide",
      },
      {
        question:
          "What type of bond is formed when electrons are shared between atoms?",
        choices: [
          "Ionic bond",
          "Metallic bond",
          "Covalent bond",
          "Hydrogen bond",
          "Van der Waals bond",
        ],
        answer: "Covalent bond",
      },
      {
        question: "Which element has the symbol Na?",
        choices: ["Nitrogen", "Nickel", "Sodium", "Neon", "Neptunium"],
        answer: "Sodium",
      },
      {
        question: "What is the chemical symbol for Gold?",
        choices: ["Go", "Gd", "Au", "Ag", "Gl"],
        answer: "Au",
      },
      {
        question:
          "Which state of matter has a definite volume but no definite shape?",
        choices: ["Solid", "Gas", "Plasma", "Liquid", "Vapour"],
        answer: "Liquid",
      },
      {
        question: "What is the pH of a neutral solution?",
        choices: ["0", "5", "7", "10", "14"],
        answer: "7",
      },
      {
        question: "Which gas is responsible for the greenhouse effect?",
        choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen", "Argon"],
        answer: "Carbon dioxide",
      },
      {
        question: "What is the chemical formula of common salt?",
        choices: ["KCl", "NaOH", "NaCl", "CaCl2", "MgCl2"],
        answer: "NaCl",
      },
      {
        question: "Which particle in an atom has a positive charge?",
        choices: ["Electron", "Neutron", "Proton", "Ion", "Photon"],
        answer: "Proton",
      },
      {
        question: "What is the chemical symbol for Iron?",
        choices: ["Ir", "In", "Fe", "Fr", "Io"],
        answer: "Fe",
      },
      {
        question: "Which type of reaction releases heat to the surroundings?",
        choices: [
          "Endothermic",
          "Photochemical",
          "Reversible",
          "Exothermic",
          "Decomposition",
        ],
        answer: "Exothermic",
      },
      {
        question: "What is the most abundant gas in the atmosphere?",
        choices: ["Oxygen", "Carbon dioxide", "Argon", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen",
      },
      {
        question: "Which acid is found in the stomach?",
        choices: [
          "Sulfuric acid",
          "Nitric acid",
          "Hydrochloric acid",
          "Acetic acid",
          "Citric acid",
        ],
        answer: "Hydrochloric acid",
      },
      {
        question: "What is the chemical formula of carbon dioxide?",
        choices: ["CO", "C2O", "CO2", "C2O2", "CO3"],
        answer: "CO2",
      },
      {
        question: "Which metal is liquid at room temperature?",
        choices: ["Lead", "Tin", "Mercury", "Zinc", "Copper"],
        answer: "Mercury",
      },
      {
        question:
          "What is the process of a solid turning directly into gas called?",
        choices: [
          "Evaporation",
          "Condensation",
          "Sublimation",
          "Melting",
          "Freezing",
        ],
        answer: "Sublimation",
      },
      {
        question: "Which element is the most abundant in the Earth's crust?",
        choices: ["Silicon", "Iron", "Aluminum", "Oxygen", "Carbon"],
        answer: "Oxygen",
      },
      {
        question: "What is the chemical symbol for Silver?",
        choices: ["Si", "Sv", "Sl", "Ag", "Sr"],
        answer: "Ag",
      },
      {
        question: "Which type of acid is found in vinegar?",
        choices: [
          "Citric acid",
          "Lactic acid",
          "Acetic acid",
          "Sulfuric acid",
          "Tartaric acid",
        ],
        answer: "Acetic acid",
      },
      {
        question: "What is the number of protons in an atom called?",
        choices: [
          "Mass number",
          "Atomic mass",
          "Atomic number",
          "Electron number",
          "Neutron number",
        ],
        answer: "Atomic number",
      },
      {
        question:
          "Which gas is produced during electrolysis of water at the cathode?",
        choices: [
          "Oxygen",
          "Chlorine",
          "Nitrogen",
          "Hydrogen",
          "Carbon dioxide",
        ],
        answer: "Hydrogen",
      },
      {
        question: "What is the chemical formula of ammonia?",
        choices: ["NO3", "N2O", "NH4", "NH3", "N2H4"],
        answer: "NH3",
      },
      {
        question: "Which element has the highest electronegativity?",
        choices: ["Oxygen", "Chlorine", "Nitrogen", "Fluorine", "Bromine"],
        answer: "Fluorine",
      },
      {
        question:
          "What is the term for atoms of the same element with different numbers of neutrons?",
        choices: ["Ions", "Isotopes", "Isomers", "Allotropes", "Isobars"],
        answer: "Isotopes",
      },
      {
        question:
          "Which law states that matter cannot be created or destroyed?",
        choices: [
          "Law of definite proportions",
          "Law of conservation of energy",
          "Law of conservation of mass",
          "Dalton's law",
          "Avogadro's law",
        ],
        answer: "Law of conservation of mass",
      },
      {
        question: "What is the chemical symbol for Potassium?",
        choices: ["Po", "Pt", "K", "Pm", "Ps"],
        answer: "K",
      },
      {
        question: "Which type of bond involves the transfer of electrons?",
        choices: [
          "Covalent bond",
          "Metallic bond",
          "Hydrogen bond",
          "Ionic bond",
          "Van der Waals bond",
        ],
        answer: "Ionic bond",
      },
      {
        question: "What is the formula of sulfuric acid?",
        choices: ["HCl", "HNO3", "H2SO3", "H2SO4", "H3PO4"],
        answer: "H2SO4",
      },
      {
        question: "Which gas turns limewater milky?",
        choices: [
          "Oxygen",
          "Hydrogen",
          "Nitrogen",
          "Carbon dioxide",
          "Chlorine",
        ],
        answer: "Carbon dioxide",
      },
      {
        question: "What is the charge of an electron?",
        choices: ["Positive", "Neutral", "Negative", "Variable", "Zero"],
        answer: "Negative",
      },
      {
        question: "Which metal is the best conductor of electricity?",
        choices: ["Gold", "Copper", "Silver", "Aluminum", "Iron"],
        answer: "Silver",
      },
      {
        question:
          "What is the process of separating mixtures using different boiling points called?",
        choices: [
          "Filtration",
          "Crystallization",
          "Distillation",
          "Chromatography",
          "Evaporation",
        ],
        answer: "Distillation",
      },
      {
        question: "Which allotrope of carbon is the hardest natural substance?",
        choices: ["Graphite", "Fullerene", "Coal", "Diamond", "Charcoal"],
        answer: "Diamond",
      },
      {
        question: "What is the chemical formula of glucose?",
        choices: ["C6H12O6", "C12H22O11", "C6H6O6", "CH2O", "C2H5OH"],
        answer: "C6H12O6",
      },
      {
        question: "Which noble gas is used in balloons?",
        choices: ["Neon", "Argon", "Krypton", "Helium", "Xenon"],
        answer: "Helium",
      },
      {
        question: "What is the chemical symbol for Lead?",
        choices: ["Le", "Ld", "Pb", "Pl", "Pd"],
        answer: "Pb",
      },
      {
        question: "Which acid is used in car batteries?",
        choices: [
          "Hydrochloric acid",
          "Nitric acid",
          "Acetic acid",
          "Sulfuric acid",
          "Phosphoric acid",
        ],
        answer: "Sulfuric acid",
      },
      {
        question: "What type of reaction occurs when iron rusts?",
        choices: [
          "Decomposition",
          "Neutralization",
          "Oxidation",
          "Reduction",
          "Substitution",
        ],
        answer: "Oxidation",
      },
      {
        question: "Which element makes up most of the sun?",
        choices: ["Helium", "Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
        answer: "Hydrogen",
      },
      {
        question: "What is the molar mass of water (H2O)?",
        choices: ["16 g/mol", "14 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"],
        answer: "18 g/mol",
      },
      {
        question: "Which gas is produced when sodium reacts with water?",
        choices: [
          "Oxygen",
          "Nitrogen",
          "Carbon dioxide",
          "Hydrogen",
          "Chlorine",
        ],
        answer: "Hydrogen",
      },
      {
        question: "What is the chemical name of baking soda?",
        choices: [
          "Sodium chloride",
          "Sodium hydroxide",
          "Sodium carbonate",
          "Sodium bicarbonate",
          "Sodium sulfate",
        ],
        answer: "Sodium bicarbonate",
      },
      {
        question: "Which element is used in making pencils?",
        choices: ["Carbon graphite", "Lead", "Silicon", "Boron", "Sulfur"],
        answer: "Carbon graphite",
      },
      {
        question: "What is Avogadro's number?",
        choices: [
          "6.02 × 10^21",
          "6.02 × 10^23",
          "6.02 × 10^25",
          "6.02 × 10^20",
          "6.02 × 10^18",
        ],
        answer: "6.02 × 10^23",
      },
      {
        question: "Which gas has the smell of rotten eggs?",
        choices: [
          "Sulfur dioxide",
          "Nitrogen dioxide",
          "Hydrogen sulfide",
          "Carbon monoxide",
          "Ammonia",
        ],
        answer: "Hydrogen sulfide",
      },
      {
        question: "What is the chemical formula of methane?",
        choices: ["C2H6", "C3H8", "CH4", "C2H4", "C4H10"],
        answer: "CH4",
      },
      {
        question: "Which indicator turns red in acid?",
        choices: [
          "Methyl orange",
          "Phenolphthalein",
          "Universal indicator",
          "Litmus",
          "Bromothymol blue",
        ],
        answer: "Litmus",
      },
      {
        question: "What is the chemical symbol for Copper?",
        choices: ["Co", "Cp", "Cr", "Cu", "Ca"],
        answer: "Cu",
      },
    ],

    physics: [
      {
        question: "What is the SI unit of electric current?",
        choices: ["Volt", "Watt", "Ohm", "Ampere", "Joule"],
        answer: "Ampere",
      },
      {
        question: "What is the speed of light in a vacuum?",
        choices: [
          "3 × 10^6 m/s",
          "3 × 10^8 m/s",
          "3 × 10^10 m/s",
          "3 × 10^4 m/s",
          "3 × 10^12 m/s",
        ],
        answer: "3 × 10^8 m/s",
      },
      {
        question:
          "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
        choices: [
          "Charles's law",
          "Newton's law",
          "Boyle's law",
          "Ohm's law",
          "Hooke's law",
        ],
        answer: "Boyle's law",
      },
      {
        question:
          "What type of mirror is used as a rear-view mirror in vehicles?",
        choices: [
          "Concave mirror",
          "Plane mirror",
          "Parabolic mirror",
          "Convex mirror",
          "Spherical mirror",
        ],
        answer: "Convex mirror",
      },
      {
        question: "What is the unit of measurement for frequency?",
        choices: ["Watt", "Newton", "Hertz", "Pascal", "Joule"],
        answer: "Hertz",
      },
      {
        question: "What is the SI unit of force?",
        choices: ["Watt", "Joule", "Pascal", "Newton", "Ampere"],
        answer: "Newton",
      },
      {
        question:
          "Which law states that every action has an equal and opposite reaction?",
        choices: [
          "Newton's first law",
          "Newton's second law",
          "Newton's third law",
          "Hooke's law",
          "Ohm's law",
        ],
        answer: "Newton's third law",
      },
      {
        question: "What is the unit of electrical resistance?",
        choices: ["Volt", "Ampere", "Watt", "Ohm", "Joule"],
        answer: "Ohm",
      },
      {
        question: "What type of energy does a moving object possess?",
        choices: [
          "Potential energy",
          "Chemical energy",
          "Thermal energy",
          "Kinetic energy",
          "Nuclear energy",
        ],
        answer: "Kinetic energy",
      },
      {
        question: "What is the SI unit of pressure?",
        choices: ["Newton", "Joule", "Pascal", "Bar", "Watt"],
        answer: "Pascal",
      },
      {
        question: "Which color of light has the highest frequency?",
        choices: ["Red", "Orange", "Yellow", "Green", "Violet"],
        answer: "Violet",
      },
      {
        question: "What is the acceleration due to gravity on Earth?",
        choices: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.2 m/s²", "7.9 m/s²"],
        answer: "9.8 m/s²",
      },
      {
        question:
          "Which law states that the current through a conductor is proportional to the voltage?",
        choices: [
          "Faraday's law",
          "Newton's law",
          "Boyle's law",
          "Ohm's law",
          "Coulomb's law",
        ],
        answer: "Ohm's law",
      },
      {
        question: "What is the unit of power?",
        choices: ["Joule", "Newton", "Ampere", "Watt", "Volt"],
        answer: "Watt",
      },
      {
        question: "Which type of wave requires a medium to travel?",
        choices: [
          "Electromagnetic wave",
          "Light wave",
          "Radio wave",
          "Mechanical wave",
          "Gamma wave",
        ],
        answer: "Mechanical wave",
      },
      {
        question: "What is the principle behind a transformer?",
        choices: [
          "Electromagnetic induction",
          "Photoelectric effect",
          "Nuclear fission",
          "Thermal expansion",
          "Static electricity",
        ],
        answer: "Electromagnetic induction",
      },
      {
        question: "Which mirror produces a virtual, erect and magnified image?",
        choices: [
          "Convex mirror",
          "Plane mirror",
          "Concave mirror",
          "Parabolic mirror",
          "Spherical mirror",
        ],
        answer: "Concave mirror",
      },
      {
        question: "What is the SI unit of work?",
        choices: ["Newton", "Watt", "Pascal", "Joule", "Ampere"],
        answer: "Joule",
      },
      {
        question: "What phenomenon causes a straw to appear bent in water?",
        choices: [
          "Reflection",
          "Diffraction",
          "Refraction",
          "Dispersion",
          "Interference",
        ],
        answer: "Refraction",
      },
      {
        question: "What is the formula for calculating speed?",
        choices: [
          "Speed = Force × Time",
          "Speed = Mass × Acceleration",
          "Speed = Distance / Time",
          "Speed = Work / Power",
          "Speed = Voltage / Current",
        ],
        answer: "Speed = Distance / Time",
      },
      {
        question: "Which type of charge do electrons carry?",
        choices: ["Positive", "Neutral", "Variable", "Zero", "Negative"],
        answer: "Negative",
      },
      {
        question: "What is the SI unit of temperature?",
        choices: ["Celsius", "Fahrenheit", "Kelvin", "Rankine", "Joule"],
        answer: "Kelvin",
      },
      {
        question: "Which phenomenon explains why the sky is blue?",
        choices: [
          "Reflection",
          "Refraction",
          "Diffraction",
          "Scattering",
          "Interference",
        ],
        answer: "Scattering",
      },
      {
        question: "What is the energy stored in a stretched spring called?",
        choices: [
          "Kinetic energy",
          "Thermal energy",
          "Chemical energy",
          "Elastic potential energy",
          "Nuclear energy",
        ],
        answer: "Elastic potential energy",
      },
      {
        question: "Which law of motion defines inertia?",
        choices: [
          "Newton's third law",
          "Newton's second law",
          "Newton's first law",
          "Hooke's law",
          "Faraday's law",
        ],
        answer: "Newton's first law",
      },
      {
        question:
          "What is the process of heat transfer through direct contact called?",
        choices: [
          "Convection",
          "Radiation",
          "Conduction",
          "Absorption",
          "Emission",
        ],
        answer: "Conduction",
      },
      {
        question: "Which device is used to measure electric current?",
        choices: [
          "Voltmeter",
          "Ohmmeter",
          "Galvanometer",
          "Ammeter",
          "Thermometer",
        ],
        answer: "Ammeter",
      },
      {
        question: "What is the formula for calculating power?",
        choices: [
          "Power = Force × Distance",
          "Power = Mass × Velocity",
          "Power = Work / Time",
          "Power = Voltage × Resistance",
          "Power = Current / Voltage",
        ],
        answer: "Power = Work / Time",
      },
      {
        question: "Which type of lens is used to correct short-sightedness?",
        choices: [
          "Convex lens",
          "Bifocal lens",
          "Cylindrical lens",
          "Concave lens",
          "Plane lens",
        ],
        answer: "Concave lens",
      },
      {
        question: "What is the term for the bending of waves around obstacles?",
        choices: [
          "Reflection",
          "Refraction",
          "Diffraction",
          "Scattering",
          "Interference",
        ],
        answer: "Diffraction",
      },
      {
        question: "Which particle has no electric charge?",
        choices: ["Proton", "Electron", "Ion", "Neutron", "Positron"],
        answer: "Neutron",
      },
      {
        question:
          "What is the speed of sound in air at room temperature approximately?",
        choices: ["140 m/s", "240 m/s", "343 m/s", "500 m/s", "700 m/s"],
        answer: "343 m/s",
      },
      {
        question: "Which type of radiation has the greatest penetrating power?",
        choices: [
          "Alpha radiation",
          "Beta radiation",
          "Infrared radiation",
          "Gamma radiation",
          "Ultraviolet radiation",
        ],
        answer: "Gamma radiation",
      },
      {
        question:
          "What is the relationship between frequency and wavelength of a wave?",
        choices: [
          "Directly proportional",
          "They are equal",
          "No relationship",
          "Inversely proportional",
          "Exponentially related",
        ],
        answer: "Inversely proportional",
      },
      {
        question: "Which law explains the buoyancy of objects in fluids?",
        choices: [
          "Newton's law",
          "Hooke's law",
          "Ohm's law",
          "Archimedes' principle",
          "Boyle's law",
        ],
        answer: "Archimedes' principle",
      },
      {
        question: "What is the unit of electric charge?",
        choices: ["Ampere", "Volt", "Coulomb", "Ohm", "Watt"],
        answer: "Coulomb",
      },
      {
        question:
          "Which type of electromagnetic wave is used in microwave ovens?",
        choices: [
          "Radio waves",
          "Infrared waves",
          "Microwaves",
          "Ultraviolet waves",
          "X-rays",
        ],
        answer: "Microwaves",
      },
      {
        question:
          "What happens to resistance when temperature increases in a conductor?",
        choices: [
          "Decreases",
          "Stays the same",
          "Becomes zero",
          "Increases",
          "Fluctuates",
        ],
        answer: "Increases",
      },
      {
        question:
          "What is the term for the minimum energy needed to start a chemical reaction?",
        choices: [
          "Kinetic energy",
          "Potential energy",
          "Thermal energy",
          "Activation energy",
          "Nuclear energy",
        ],
        answer: "Activation energy",
      },
      {
        question: "Which instrument is used to measure atmospheric pressure?",
        choices: [
          "Thermometer",
          "Hygrometer",
          "Anemometer",
          "Barometer",
          "Manometer",
        ],
        answer: "Barometer",
      },
      {
        question: "What is the formula for calculating density?",
        choices: [
          "Density = Mass × Volume",
          "Density = Weight / Area",
          "Density = Mass / Volume",
          "Density = Force / Area",
          "Density = Volume / Mass",
        ],
        answer: "Density = Mass / Volume",
      },
      {
        question: "Which type of current flows in one direction only?",
        choices: [
          "Alternating current",
          "Fluctuating current",
          "Oscillating current",
          "Direct current",
          "Induced current",
        ],
        answer: "Direct current",
      },
      {
        question:
          "What is the name of the force that opposes motion between two surfaces?",
        choices: [
          "Gravity",
          "Tension",
          "Normal force",
          "Friction",
          "Applied force",
        ],
        answer: "Friction",
      },
      {
        question:
          "Which phenomenon is responsible for the formation of rainbows?",
        choices: [
          "Reflection only",
          "Refraction only",
          "Diffraction",
          "Dispersion and refraction",
          "Scattering",
        ],
        answer: "Dispersion and refraction",
      },
      {
        question: "What is the SI unit of magnetic flux density?",
        choices: ["Ampere", "Volt", "Weber", "Tesla", "Henry"],
        answer: "Tesla",
      },
      {
        question: "Which type of energy transformation occurs in a battery?",
        choices: [
          "Kinetic to electrical",
          "Thermal to electrical",
          "Chemical to electrical",
          "Nuclear to electrical",
          "Light to electrical",
        ],
        answer: "Chemical to electrical",
      },
      {
        question:
          "What is the term for the number of complete waves passing a point per second?",
        choices: [
          "Wavelength",
          "Amplitude",
          "Period",
          "Frequency",
          "Wave speed",
        ],
        answer: "Frequency",
      },
      {
        question:
          "Which law states that the volume of a gas is directly proportional to its temperature at constant pressure?",
        choices: [
          "Boyle's law",
          "Ohm's law",
          "Newton's law",
          "Charles's law",
          "Avogadro's law",
        ],
        answer: "Charles's law",
      },
      {
        question:
          "What is the term for heat transfer through electromagnetic waves?",
        choices: [
          "Conduction",
          "Convection",
          "Radiation",
          "Absorption",
          "Transmission",
        ],
        answer: "Radiation",
      },
      {
        question:
          "Which device converts mechanical energy into electrical energy?",
        choices: ["Motor", "Transformer", "Capacitor", "Generator", "Resistor"],
        answer: "Generator",
      },
    ],
  };

  let quizQuestions = [];

  let currentIndex = 0;
  let reviewIndex = 0;
  let selectedChoice = null;
  let time = 90;
  let timeinterval = null;

  // score is at 0 at default
  let score = 0;

  // creating an array that holds the choice a user picked
  const userAnswer = [];

  //  Enabling start quiz button
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startQuiz();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextButton();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevButton();
    });
  }

  if (scoreBtn) {
    scoreBtn.addEventListener("click", () => {
      displayScore();
    });
  }

  // Restart the quiz afresh
  if (restartBtn1) {
    restartBtn1.addEventListener("click", () => {
      score = 0;
      selectedChoice = null;
      resultContainer.classList.add("hidden");
      currentIndex = 0;
      questionContainer.classList.remove("hidden");
      quizStatus.innerHTML = "";
      scoreBtn.classList.add("hidden");
      questionText.classList.remove("hidden");
      choicesList.classList.remove("hidden");
      reviewContainer.classList.add("hidden");
      showQuestion();
      showChoices();
      menuBtn3.classList.remove("hidden");
      menuBtn.classList.add("hidden");
      questionNo.classList.remove("hidden");
    });
  }

  // second restart button that functions in review
  if (restartBtn2) {
    restartBtn2.addEventListener("click", () => {
      score = 0;
      selectedChoice = null;
      resultContainer.classList.add("hidden");
      currentIndex = 0;
      questionContainer.classList.remove("hidden");
      quizStatus.innerHTML = "";
      scoreBtn.classList.add("hidden");
      questionText.classList.remove("hidden");
      choicesList.classList.remove("hidden");
      reviewContainer.classList.add("hidden");
      startQuiz();
      questionNo.classList.remove("hidden");
    });
  }

  // user can review questions and answers
  if (reviewBtn) {
    reviewBtn.addEventListener("click", () => {
      reviewIndex = 0;
      reviewContainer.classList.remove("hidden");
      resultContainer.classList.add("hidden");
      reviewContainer.innerHTML = "";
      showReview();

      // quizQuestions.forEach((question, index) => {
      //   // creating a div element that wraps the items in the review container
      //   const reviewContents = document.createElement("div");

      //   // creating a h3 element for the question
      //   const userQuestionText = document.createElement("h3");
      //   userQuestionText.textContent = question.question;
      //   userQuestionText.classList.add("special-font1");

      //   // p element for the userAnswer
      //   const userAnswerText = document.createElement("p");
      //   userAnswerText.textContent = `Your answer: ${userAnswer[index]}`;
      //   userAnswerText.classList.add("special-font2");

      //   // p element for the correct answer
      //   const correctAnswerText = document.createElement("p");
      //   correctAnswerText.style.color = "yellow";
      //   correctAnswerText.textContent = `Correct answer: ${question.answer} `;

      //   if (userAnswer[index] === question.answer) {
      //     userAnswerText.style.color = "green";
      //     userAnswerText.textContent = `Your answer: ${userAnswer[index]} "✅"`;
      //   } else {
      //     userAnswerText.style.color = "red";
      //     userAnswerText.textContent = `Your answer: ${userAnswer[index]} "❌"`;
      //   }

      //   // appending the content in the div created to the div
      //   reviewContents.appendChild(userQuestionText);
      //   reviewContents.appendChild(userAnswerText);
      //   reviewContents.appendChild(correctAnswerText);

      //   // appending the review content to review container that is created in html
      //   reviewContainer.appendChild(reviewContents);
      //   reviewContainer.appendChild(restartBtn2);
      // });
    });
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      showMenu();
    });
  }

  if (menuBtn2) {
    menuBtn2.addEventListener("click", () => {
      showMenu2();
    });
  }

  if (menuBtn3) {
    menuBtn3.addEventListener("click", () => {
      showMenu3();
    });
  }

  if (biologyBtn) {
    biologyBtn.addEventListener("click", () => {
      // biology dropdwon visibility
      dropdownList.classList.toggle("hidden");

      // closes and open the icon
      biologyIcon.classList.toggle("open");

      // the list builds only when the dropdown is visible
      if (!dropdownList.classList.contains("hidden")) {
        dropdownList.innerHTML = "";
        subjectBtn.classList.add("hidden");

        // looping through bilogy array
        quizSubjects.biology.forEach((item, index) => {
          const questionList = document.createElement("li");
          questionList.textContent = `${index + 1}. ${item.question}`;

          // quiz start when clicked
          questionList.addEventListener("click", () => {
            quizQuestions = quizSubjects.biology;
            currentIndex = index;
            dropdownList.classList.add("hidden");
            startTimer();
            startQuiz();
            menuBtn.classList.add("hidden");
            menuBtn2.classList.remove("hidden");
          });
          dropdownList.appendChild(questionList);
          menuBtn2.classList.remove("hidden");
        });
      }
    });
  }

  if (chemistryBtn) {
    chemistryBtn.addEventListener("click", () => {
      // dropdwon visibility
      dropdownList.classList.toggle("hidden");

      // closes and open the icon
      chemistryIcon.classList.toggle("open");

      // the list builds only when the dropdown is visible
      if (!dropdownList.classList.contains("hidden")) {
        dropdownList.innerHTML = "";
        subjectBtn.classList.add("hidden");

        // looping through chemistry array
        quizSubjects.chemistry.forEach((item, index) => {
          const questionList = document.createElement("li");
          questionList.textContent = `${index + 1}. ${item.question}`;

          // quiz start when clicked
          questionList.addEventListener("click", () => {
            quizQuestions = quizSubjects.chemistry;
            currentIndex = index;
            dropdownList.classList.add("hidden");
            startTimer();
            startQuiz();
            menuBtn.classList.add("hidden");
          });
          dropdownList.appendChild(questionList);
          menuBtn2.classList.remove("hidden");
        });
      }
    });
  }

  if (physicsBtn) {
    physicsBtn.addEventListener("click", () => {
      // dropdwon visibility
      dropdownList.classList.toggle("hidden");

      // closes and open the icon
      physicsIcon.classList.toggle("open");

      // the list builds only when the dropdown is visible
      if (!dropdownList.classList.contains("hidden")) {
        dropdownList.innerHTML = "";
        subjectBtn.classList.add("hidden");
        // looping through physics array
        quizSubjects.physics.forEach((item, index) => {
          const questionList = document.createElement("li");
          questionList.textContent = `${index + 1}. ${item.question}`;

          // quiz start when clicked
          questionList.addEventListener("click", () => {
            quizQuestions = quizSubjects.physics;
            currentIndex = index;
            dropdownList.classList.add("hidden");
            startTimer();
            startQuiz();
            menuBtn.classList.add("hidden");
            menuBtn2.classList.remove("hidden");
          });
          dropdownList.appendChild(questionList);
          menuBtn2.classList.remove("hidden");
        });
      }
    });
  }

  //   Displaying question
  function showQuestion() {
    const currentQuestion = quizQuestions[currentIndex];
    questionText.textContent = currentQuestion.question;
    questionNo.innerHTML = `Question ${currentIndex + 1}`;
    questionNo.classList.add("question-tag");

    questionText.classList.add("special-color");
  }

  //   Displaying choices
  function showChoices() {
    const currentChoices = quizQuestions[currentIndex];
    choicesList.innerHTML = "";
    selectedChoice = null;
    currentChoices.choices.forEach((choice) => {
      const list = document.createElement("li");
      list.textContent = choice;
      choicesList.appendChild(list);

      // A choice that a user selected will be the selectedChoice
      list.addEventListener("click", () => {
        choicesList
          .querySelectorAll("li")
          .forEach((item) => item.classList.remove("selected"));
        list.classList.add("selected");
        // A variable named previous answer holds the array which is user answer that contains the choices that a user picks
        const previousAnswer = userAnswer[currentIndex];

        selectedChoice = choice;

        console.log("selected choice:", selectedChoice);

        // if the selectedChoice is equal to the answer of the current question, then the score will be updated
        if (
          selectedChoice === quizQuestions[currentIndex].answer &&
          previousAnswer !== quizQuestions[currentIndex].answer
        ) {
          score++;
          console.log(
            "The previous choice is wrong and the current choice is right so the score has been added by 1",
          );
          console.log("Score:", score);
        } else {
          console.log("wrong choice");
        }

        // if the previous answer is right but the current choice is wrong, score the score will be subtracted
        if (
          previousAnswer === quizQuestions[currentIndex].answer &&
          selectedChoice !== quizQuestions[currentIndex].answer
        ) {
          score--;
          console.log("Score", score);
          console.log(
            "Previous choice is right and current choice is wrong so score subtracted by 1",
          );
        }

        // if the previous choice picked is the same as current choice picked then nothing happens
        if (previousAnswer === selectedChoice) {
          alert("choice has already been picked!");
          console.log("choice has already been picked!");
          return;
        }

        userAnswer[currentIndex] = selectedChoice;
      });

      // Enabling the next button to appear after a choice is selected
      list.addEventListener("click", () => {
        navigator.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
      });

      //   Previous Button only appears when on the second quiz question
      if (currentIndex > 0) {
        prevBtn.classList.remove("hidden");
      }
    });
  }

  //   Enabling the next button and shows a message after the quiz is completed
  function nextButton() {
    currentIndex++;
    if (currentIndex < quizQuestions.length) {
      showQuestion();
      showChoices();
    } else {
      questionText.classList.add("hidden");
      choicesList.classList.add("hidden");
      nextBtn.classList.add("hidden");
      prevBtn.classList.add("hidden");
      const quizCompleted = document.createElement("h2");
      quizCompleted.textContent = "Quiz Completed!";
      questionNo.classList.add("hidden");
      menuContainer.classList.add("hidden");
      quizStatus.appendChild(quizCompleted);
      scoreBtn.classList.remove("hidden");
      questionContainer.appendChild(scoreBtn);
    }
  }

  //   Enabling the prev button
  function prevButton() {
    currentIndex--;
    showQuestion();
    showChoices();
  }

  // displaying score
  function displayScore() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    questionNo.classList.add("hidden");
    userScore.innerHTML = `${score} out of ${quizQuestions.length}`;
  }

  // what displays when the quiz starts
  function startQuiz() {
    startBtn.classList.add("hidden");
    menuBtn.classList.remove("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
    showChoices();
  }

  function showReview() {
    const reviewQuestion = quizQuestions[reviewIndex];
    const reviewUserAnswer = userAnswer[reviewIndex];
    const reviewCorrectAnswer = reviewQuestion.answer;
    reviewContainer.innerHTML = "";
    // the div
    const reviewContent = document.createElement("div");

    // question
    const userQuestionText = document.createElement("h2");
    userQuestionText.textContent = reviewQuestion.question;

    // user answer
    const userChoice = document.createElement("p");
    userChoice.textContent = `Your answer: ${reviewUserAnswer}`;
    userChoice.classList.add("special-font2");

    // correctAnswer
    const correctAnswer = document.createElement("p");
    correctAnswer.textContent = `Correct answer: ${reviewCorrectAnswer}`;
    correctAnswer.classList.add("special-font2");

    // previous button visibility
    if (reviewIndex === 0) {
      reviewPrevBtn.classList.add("hidden");
    } else {
      reviewPrevBtn.classList.remove("hidden");
    }

    // next button visibility
    if (reviewIndex === quizQuestions.length - 1) {
      reviewNextBtn.classList.add("hidden");
    } else {
      reviewNextBtn.classList.remove("hidden");
    }

    reviewContent.appendChild(userQuestionText);
    reviewContent.appendChild(userChoice);
    reviewContent.appendChild(correctAnswer);
    reviewContent.appendChild(reviewNavigator);
    // reviewContent.appendChild(reviewNextBtn);
    reviewContainer.appendChild(reviewContent);

    //   const reviewUserAnser = userAnswer[reviewIndex];
    //   reviewUserAnser.textContent = `Your answer: ${userAnswer[reviewCurrentQuestion]}`;
  }

  // what happens when previous button is clicked in review
  reviewPrevBtn.addEventListener("click", () => {
    reviewIndex--;
    showReview();
  });

  // what happens when next button is clicked in review
  reviewNextBtn.addEventListener("click", () => {
    reviewIndex++;
    showReview();
  });

  function showMenu() {
    startBtn.classList.add("hidden");
    menuBtn.classList.add("hidden");
    menuContainer.classList.remove("hidden");
    menuBtn.classList.add("special-color");
  }

  function showMenu2() {
    questionContainer.classList.add("hidden");
    dropdownList.classList.add("hidden");
    menuBtn2.classList.add("hidden");
    subjectBtn.classList.remove("hidden");
  }

  function showMenu3() {
    questionContainer.classList.add("hidden");
    dropdownList.classList.add("hidden");
    menuContainer.classList.remove("hidden");
    menuBtn2.classList.add("hidden");
    menuBtn3.classList.add("hidden");
    subjectBtn.classList.remove("hidden");
  }

  function startTimer() {
    clearInterval(timeinterval);
    timeinterval = setInterval(() => {
      // update time
      time--;

      // update time display
      const minute = Math.floor(time / 60);
      const seconds = time % 60;
      timerDisplay.textContent = `${minute} : ${seconds < 10 ? "0" : ""} ${seconds}`;

      // action when time runs out
      if (time === 0) {
        clearInterval(timeinterval);
        timeUp();
      }

      // when time is left with 15 seconds
      if (time === 15) {
        timerDisplay.classList.add("red-color");
      }
    }, 1000);
  }

  function timeUp() {
    timerDisplay.classList.add("hidden");
    questionText.classList.add("hidden");
    choicesList.classList.add("hidden");
    navigator.classList.add("hidden");
    questionNo.classList.add("hidden");
    prevBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");
    menuContainer.classList.add("hidden");

    const timeUpMessage = document.createElement("h2");
    timeUpMessage.textContent = "Time's up!";
    timeUpMessage.classList.add("time-up-message");
    quizStatus.appendChild(timeUpMessage);

    scoreBtn.classList.remove("hidden");
    questionContainer.appendChild(scoreBtn);
  }
});
