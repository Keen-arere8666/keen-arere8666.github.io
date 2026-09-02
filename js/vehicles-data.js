/**
 * Auto Marinikas - Inventory Data
 * Μεταχειρισμένα Αυτοκίνητα & Οχήματα
 */

const VEHICLES_DATA = [
  {
    id: "am-01",
    make: "Mercedes-Benz",
    model: "A 180 d AMG Line",
    year: 2021,
    price: 24900,
    monthlyPayment: 345,
    mileage: 68500,
    fuel: "Diesel",
    fuelEl: "Πετρέλαιο",
    transmission: "Automatic",
    transmissionEl: "Αυτόματο 7G-DCT",
    engine: "1.461 cc",
    power: "116 HP",
    body: "Hatchback",
    bodyEl: "Hatchback",
    doors: 5,
    color: "Mountain Grey Metallic",
    colorEl: "Γκρι Μεταλλικό",
    badge: "Εγγύηση 1 Έτος",
    badgeType: "warranty",
    isFeatured: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Εξαιρετική κατάσταση, πρώτο χέρι, πλήρες βιβλίο service στην επίσημη αντιπροσωπεία. Πακέτο AMG Line μέσα-έξω, ζάντες 18'', ψηφιακός πίνακας MBUX, κάμερα οπισθοπορείας και LED High Performance φώτα.",
    features: [
      "AMG Line Εξωτερικό & Εσωτερικό",
      "MBUX Dual Digital Cockpit",
      "Κάμερα Οπισθοπορείας 180°",
      "LED High Performance Προβολείς",
      "Apple CarPlay & Android Auto",
      "Αυτόματος Διζωνικός Κλιματισμός",
      "Cruise Control & Speed Limiter",
      "Bucket Sport Δερμάτινα Καθίσματα",
      "Parktronic Εμπρός & Πίσω",
      "Ζάντες Αλουμινίου AMG 18''"
    ],
    verified: {
      km: "Γνήσια Πιστοποιημένα Χιλιόμετρα",
      inspection: "Έλεγχος 100+ Σημείων",
      clean: "Βιολογικός Καθαρισμός"
    }
  },
  {
    id: "am-02",
    make: "BMW",
    model: "320d xDrive M Sport",
    year: 2020,
    price: 31500,
    monthlyPayment: 435,
    mileage: 82000,
    fuel: "Diesel",
    fuelEl: "Πετρέλαιο",
    transmission: "Automatic",
    transmissionEl: "Αυτόματο Steptronic 8",
    engine: "1.995 cc",
    power: "190 HP",
    body: "Sedan",
    bodyEl: "Sedan",
    doors: 4,
    color: "Portimao Blue",
    colorEl: "Μπλε Μεταλλικό",
    badge: "Κορυφαία Επιλογή",
    badgeType: "featured",
    isFeatured: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Τετρακίνητο (xDrive) με γνήσιο εργοστασιακό πακέτο M Sport. Ιδανικό για ταξίδια και πόλη με μέση κατανάλωση κάτω από 5.4L/100km. Ατρακάριστο, ελεγμένο από μηχανικούς μας.",
    features: [
      "M Sport Πακέτο Ανάρτησης & Αμαξώματος",
      "BMW Live Cockpit Professional",
      "Τετρακίνηση xDrive",
      "Laser LED Φωτιστικά Σώματα",
      "Keyless Go & Hands-Free Πορτμπαγκάζ",
      "Δερμάτινο Τιμόνι M με Paddles",
      "Ηλεκτρικά Αναδιπλούμενοι Καθρέπτες",
      "Ambient Light 11 Χρωμάτων"
    ],
    verified: {
      km: "Γνήσια Πιστοποιημένα Χιλιόμετρα",
      inspection: "Έλεγχος 100+ Σημείων",
      clean: "Βιολογικός Καθαρισμός"
    }
  },
  {
    id: "am-03",
    make: "Audi",
    model: "Q3 Sportback 35 TFSI S-Line",
    year: 2021,
    price: 29800,
    monthlyPayment: 410,
    mileage: 54000,
    fuel: "Petrol",
    fuelEl: "Βενζίνη (Mild Hybrid)",
    transmission: "Automatic",
    transmissionEl: "Αυτόματο S-Tronic 7",
    engine: "1.498 cc",
    power: "150 HP",
    body: "SUV",
    bodyEl: "SUV / Coupe",
    doors: 5,
    color: "Ibis White",
    colorEl: "Λευκό",
    badge: "Νέα Άφιξη",
    badgeType: "new",
    isFeatured: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Εντυπωσιακό coupe SUV με ήπια υβριδική τεχνολογία για χαμηλά τέλη και κατανάλωση. S-Line σχεδίαση, Audi Virtual Cockpit, προβολείς Matrix LED και σπορ καθίσματα.",
    features: [
      "S-Line Εξωτερική & Εσωτερική Σχεδίαση",
      "Audi Virtual Cockpit Plus",
      "Matrix LED Προβολείς με Δυναμικά Φλας",
      "Audi Drive Select (5 προγράμματα)",
      "Ηλεκτρική Πόρτα Χώρου Αποσκευών",
      "Lane Assist & Pre-Sense Front",
      "Ζάντες 19'' Audi Sport",
      "Ασύρματη Φόρτιση Smartphone"
    ],
    verified: {
      km: "Γνήσια Πιστοποιημένα Χιλιόμετρα",
      inspection: "Έλεγχος 100+ Σημείων",
      clean: "Βιολογικός Καθαρισμός"
    }
  },
  {
    id: "am-04",
    make: "Toyota",
    model: "Yaris Cross 1.5 Hybrid Dynamic",
    year: 2022,
    price: 21900,
    monthlyPayment: 299,
    mileage: 38000,
    fuel: "Hybrid",
    fuelEl: "Υβριδικό (Self-Charging)",
    transmission: "Automatic",
    transmissionEl: "Αυτόματο e-CVT",
    engine: "1.490 cc",
    power: "116 HP",
    body: "SUV",
    bodyEl: "Crossover SUV",
    doors: 5,
    color: "Brass Gold Bi-Tone",
    colorEl: "Χρυσό με Μαύρη Οροφή",
    badge: "Μηδενικά Τέλη",
    badgeType: "eco",
    isFeatured: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1590362891988-f7761b378b66?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590362891988-f7761b378b66?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Απόλυτη οικονομία (3.8L/100km) και μηδενικά τέλη κυκλοφορίας. Εργοστασιακή εγγύηση μπαταρίας Toyota σε ισχύ, άριστη κατάσταση σαν καινούργιο.",
    features: [
      "Toyota Safety Sense 2.5",
      "Adaptive Cruise Control (Full Range)",
      "Οθόνη Αφής 9'' με Navigation",
      "Κάμερα Οπισθοπορείας & Αισθητήρες",
      "Smart Entry & Push Button Start",
      "Αυτόματη Μεγάλη Σκάλα Φώτων",
      "Διχρωμία Bi-Tone με Μαύρη Οροφή"
    ],
    verified: {
      km: "Γνήσια Πιστοποιημένα Χιλιόμετρα",
      inspection: "Έλεγχος 100+ Σημείων",
      clean: "Βιολογικός Καθαρισμός"
    }
  },
  {
    id: "am-05",
    make: "Volkswagen",
    model: "Golf 8 1.5 eTSI R-Line",
    year: 2021,
    price: 22800,
    monthlyPayment: 315,
    mileage: 51000,
    fuel: "Hybrid",
    fuelEl: "Mild Hybrid Βενζίνη",
    transmission: "Automatic",
    transmissionEl: "Αυτόματο DSG 7",
    engine: "1.498 cc",
    power: "150 HP",
    body: "Hatchback",
    bodyEl: "Hatchback",
    doors: 5,
    color: "Deep Black Pearl",
    colorEl: "Μαύρο Μεταλλικό",
    badge: "R-Line Πακέτο",
    badgeType: "featured",
    isFeatured: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Κορυφαία έκδοση R-Line με σπορ καθίσματα, τιμόνι αφής, Innovision Cockpit και δυναμική οδική συμπεριφορά. Σύστημα απενεργοποίησης κυλίνδρων (ACT) για οικονομία.",
    features: [
      "R-Line Σπορ Πακέτο Εξοπλισμού",
      "Innovision Cockpit 10'' + 10.25''",
      "IQ.LIGHT - LED Matrix Προβολείς",
      "Front Assist & Travel Assist",
      "Σπορ Ανάρτηση R-Line",
      "Ambient Φωτισμός 30 Χρωμάτων",
      "Ζάντες Αλουμινίου Bergamo 18''"
    ],
    verified: {
      km: "Γνήσια Πιστοποιημένα Χιλιόμετρα",
      inspection: "Έλεγχος 100+ Σημείων",
      clean: "Βιολογικός Καθαρισμός"
    }
  },
  {
    id: "am-06",
    make: "Nissan",
    model: "Qashqai 1.3 DiG-T N-Connecta",
    year: 2020,
    price: 19400,
    monthlyPayment: 270,
    mileage: 64000,
    fuel: "Petrol",
    fuelEl: "Βενζίνη",
    transmission: "Manual",
    transmissionEl: "Χειροκίνητο 6 σχέσεων",
    engine: "1.332 cc",
    power: "140 HP",
    body: "SUV",
    bodyEl: "SUV",
    doors: 5,
    color: "Magnetic Red",
    colorEl: "Κόκκινο Μεταλλικό",
    badge: "Super Προσφορά",
    badgeType: "offer",
    isFeatured: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Το πιο δημοφιλές οικογενειακό SUV στην πλούσια έκδοση N-Connecta. Πανοραμική κάμερα 360°, γυάλινη οροφή, ράγες οροφής και άριστος κινητήρας 1.3 Turbo.",
    features: [
      "Around View Monitor (Κάμερες 360°)",
      "Πανοραμική Γυάλινη Οροφή",
      "NissanConnect Οθόνη 7'' με GPS",
      "Αναγνώριση Σημάτων Κυκλοφορίας",
      "Keyless Entry & Start",
      "Αισθητήρες Βροχής & Φώτων",
      "Φιμέ Πίσω Τζάμια"
    ],
    verified: {
      km: "Γνήσια Πιστοποιημένα Χιλιόμετρα",
      inspection: "Έλεγχος 100+ Σημείων",
      clean: "Βιολογικός Καθαρισμός"
    }
  },
  {
    id: "am-07",
    make: "Ford",
    model: "Puma 1.0 EcoBoost mHEV ST-Line",
    year: 2021,
    price: 18900,
    monthlyPayment: 260,
    mileage: 46000,
    fuel: "Hybrid",
    fuelEl: "Ήπια Υβριδικό (mHEV)",
    transmission: "Manual",
    transmissionEl: "Χειροκίνητο 6 σχέσεων",
    engine: "999 cc",
    power: "125 HP",
    body: "SUV",
    bodyEl: "Crossover",
    doors: 5,
    color: "Desert Island Blue",
    colorEl: "Μπλε Μεταλλικό",
    badge: "Εγγύηση",
    badgeType: "warranty",
    isFeatured: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Σπορ σχεδιασμός ST-Line με MegaBox 80 λίτρων στο πορτμπαγκάζ. Πολύ χαμηλή κατανάλωση και εξαιρετικό κράτημα στον δρόμο.",
    features: [
      "ST-Line Σπορ Σχεδίαση & Ανάρτηση",
      "Ψηφιακός Πίνακας Οργάνων 12.3''",
      "MegaBox Αποθηκευτικός Χώρος",
      "SYNC 3 με Apple CarPlay / Android Auto",
      "Αισθητήρες Παρκαρίσματος",
      "Drive Modes (Normal, Eco, Sport, Slippery, Trail)"
    ],
    verified: {
      km: "Γνήσια Πιστοποιημένα Χιλιόμετρα",
      inspection: "Έλεγχος 100+ Σημείων",
      clean: "Βιολογικός Καθαρισμός"
    }
  },
  {
    id: "am-08",
    make: "Yamaha",
    model: "TMAX 560 Tech MAX",
    year: 2022,
    price: 12800,
    monthlyPayment: 185,
    mileage: 16500,
    fuel: "Petrol",
    fuelEl: "Βενζίνη",
    transmission: "Automatic",
    transmissionEl: "Αυτόματο CVT",
    engine: "562 cc",
    power: "48 HP",
    body: "Motorcycle",
    bodyEl: "Maxi Scooter / Μοτοσυκλέτα",
    doors: 0,
    color: "Tech Kamo",
    colorEl: "Χακί Μεταλλικό",
    badge: "Κορυφαίο Scooter",
    badgeType: "featured",
    isFeatured: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80"
    ],
    description: "Η κορυφαία έκδοση Tech MAX με ηλεκτρικά ρυθμιζόμενη ζελατίνα, cruise control, θερμαινόμενα γκριπ και θερμαινόμενη σέλα. Άριστη κατάσταση.",
    features: [
      "Ηλεκτρικά Ρυθμιζόμενος Ανεμοθώρακας",
      "Cruise Control",
      "Θερμαινόμενα Grips & Θερμαινόμενη Σέλα",
      "Smart Key (Keyless)",
      "TFT Οθόνη Συνδεσιμότητας",
      "Traction Control & D-Mode (2 χαρτογραφήσεις)"
    ],
    verified: {
      km: "Γνήσια Πιστοποιημένα Χιλιόμετρα",
      inspection: "Έλεγχος 100+ Σημείων",
      clean: "Βιολογικός Καθαρισμός"
    }
  }
];
