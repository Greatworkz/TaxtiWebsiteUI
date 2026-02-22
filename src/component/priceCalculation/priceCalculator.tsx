const LOCATION_TO_KEY: Record<string, string> = {
  "Charles de Gaulle Airport (CDG)": "CDG",
  "Orly Airport (ORY)": "ORY",
  "Beauvais Airport (BVA)": "BVA",
  "Disneyland & Hotels": "DISNEY",
  "Paris (Hotels, Apartments, Historic, Monuments)": "PARIS",
  "Paris Train Stations": "TRAIN",
  "Airport Hotels": "AIRPORT_HOTEL",
  "Versailles": "VERSAILLES",
};

const BASE_PRICES: Record<string, Record<string, number>> = {
  CDG:           { CDG: 0,   ORY: 90,  BVA: 150, DISNEY: 70,  PARIS: 90,  TRAIN: 90,  AIRPORT_HOTEL: 90,  VERSAILLES: 105 },
  ORY:           { CDG: 90,  ORY: 0,   BVA: 150, DISNEY: 90,  PARIS: 55,  TRAIN: 55,  AIRPORT_HOTEL: 85,  VERSAILLES: 75  },
  BVA:           { CDG: 130, ORY: 150, BVA: 0,   DISNEY: 110, PARIS: 120, TRAIN: 120, AIRPORT_HOTEL: 130, VERSAILLES: 145 },
  DISNEY:        { CDG: 75,  ORY: 90,  BVA: 140, DISNEY: 0,   PARIS: 70,  TRAIN: 70,  AIRPORT_HOTEL: 70,  VERSAILLES: 95  },
  PARIS:         { CDG: 65,  ORY: 55,  BVA: 120, DISNEY: 70,  PARIS: 30,  TRAIN: 25,  AIRPORT_HOTEL: 65,  VERSAILLES: 60  },
  TRAIN:         { CDG: 65,  ORY: 55,  BVA: 120, DISNEY: 70,  PARIS: 25,  TRAIN: 20,  AIRPORT_HOTEL: 65,  VERSAILLES: 60  },
  AIRPORT_HOTEL: { CDG: 35,  ORY: 85,  BVA: 130, DISNEY: 70,  PARIS: 65,  TRAIN: 65,  AIRPORT_HOTEL: 25,  VERSAILLES: 110 },
  VERSAILLES:    { CDG: 110, ORY: 75,  BVA: 145, DISNEY: 95,  PARIS: 60,  TRAIN: 60,  AIRPORT_HOTEL: 110, VERSAILLES: 0   },
};

const VEHICLE_MULTIPLIERS: Record<string, number> = {
  "Sedan (1-3 passengers)": 1.0,
  "SUV (1-4 passengers)": 1.25,
  "Minivan (1-7 passengers)": 1.45,
  "Business Class Van": 1.6,
  "Luxury Sedan": 1.5,
  "Luxury SUV": 1.75,
  "Minibus (8-15 passengers)": 2.2,
};

const calculatePrice = (
  fromValue: string,
  toValue: string,
  vehicleType: string,
  tripType: string
): string => {
  const fromKey = LOCATION_TO_KEY[fromValue];
  const toKey = LOCATION_TO_KEY[toValue];
  // if (!fromKey || !toKey || fromKey === toKey || !vehicleType) return "—";
  const base = BASE_PRICES[fromKey]?.[toKey];
  if (!base) return "—";
  const multiplier = VEHICLE_MULTIPLIERS[vehicleType] ?? 1.0;
  const oneWay = Math.ceil(base * multiplier);
  const total = tripType === "round" ? oneWay * 2 : oneWay;
  return total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export default calculatePrice;