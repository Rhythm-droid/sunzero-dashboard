/**
 * SunZero Dashboard — Mock Data
 * All simulated data for the dashboard mockup.
 * Centralized here so changes propagate everywhere.
 */

const MOCK = {
  // ============================================================
  // SITE INFO
  // ============================================================
  site: {
    name: "Noida Factory",
    capacity: "500 KW",
    location: "Noida, Uttar Pradesh",
    ppaRate: 4.5, // ₹/kWh
    gridRate: 9.2, // ₹/kWh
    ppaStartDate: "2025-01-15",
    ppaDuration: "10 years",
    installDate: "2024-11-20",
    systemType: "Solar + Battery",
    batteryCapacity: "250 kWh",
  },

  // ============================================================
  // USER
  // ============================================================
  user: {
    name: "Rajesh Kumar",
    initials: "RK",
    role: "Facility Manager",
    email: "rajesh.kumar@company.com",
  },

  // ============================================================
  // KPI SUMMARY (Overview Dashboard)
  // ============================================================
  kpis: {
    energyGenerated: {
      value: 42850,
      unit: "kWh",
      trend: 12.3,
      direction: "up",
    },
    costSavings: { value: 342800, unit: "₹", trend: 8.7, direction: "up" },
    co2Avoided: { value: 34.2, unit: "tonnes", trend: 15.1, direction: "up" },
    systemUptime: { value: 98.5, unit: "%", status: "operational" },
  },

  // ============================================================
  // OVERVIEW CHART — Monthly data (28 days of July 2025)
  // ============================================================
  overviewChart: {
    labels: Array.from({ length: 28 }, (_, i) => `Jul ${i + 1}`),

    // Solar generation: peaks mid-month, slight variations
    solar: [
      1280, 1350, 1420, 1510, 1480, 1390, 1200, 1450, 1520, 1580, 1620, 1550,
      1480, 1350, 1600, 1680, 1720, 1750, 1690, 1580, 1420, 1550, 1630, 1700,
      1650, 1520, 1400, 1300,
    ],

    // Grid consumption: inversely correlated with solar
    grid: [
      850, 780, 720, 650, 680, 740, 920, 700, 640, 580, 540, 600, 680, 780, 560,
      480, 440, 410, 470, 580, 720, 610, 530, 460, 510, 640, 740, 830,
    ],
  },

  // ============================================================
  // ENERGY MONITORING — Hourly data (24 hours of a day)
  // ============================================================
  energyHourly: {
    labels: [
      "12 AM",
      "1 AM",
      "2 AM",
      "3 AM",
      "4 AM",
      "5 AM",
      "6 AM",
      "7 AM",
      "8 AM",
      "9 AM",
      "10 AM",
      "11 AM",
      "12 PM",
      "1 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM",
      "6 PM",
      "7 PM",
      "8 PM",
      "9 PM",
      "10 PM",
      "11 PM",
    ],

    // Solar: zero at night, ramps up morning, peaks midday, drops evening
    solar: [
      0, 0, 0, 0, 0, 10, 120, 340, 680, 1020, 1380, 1620, 1850, 1780, 1650,
      1420, 1050, 580, 180, 20, 0, 0, 0, 0,
    ],

    // Grid: high at night/morning, drops when solar kicks in, rises evening
    grid: [
      520, 480, 460, 450, 470, 510, 480, 360, 220, 130, 60, 30, 0, 0, 20, 80,
      250, 420, 580, 620, 590, 560, 540, 530,
    ],

    // Battery: discharges during transitions, charges during peak solar
    battery: [
      30, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 80, 60, 40, 100, 120, 80,
      40, 30, 30, 30,
    ],

    // Status per hour
    status: [
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Peak",
      "Peak",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
      "Normal",
    ],

    // Efficiency per hour
    efficiency: [
      94, 93, 92, 91, 92, 93, 96, 97, 98, 98, 99, 99, 99, 97, 98, 97, 96, 95,
      94, 93, 93, 92, 92, 93,
    ],
  },

  // ============================================================
  // LOAD PROFILE
  // ============================================================
  loadProfile: {
    base: { value: 18200, percent: 42, duration: "10h 5m", color: "#E8740C" },
    peak: { value: 12450, percent: 29, duration: "6h 55m", color: "#C62828" },
    intermediate: {
      value: 12200,
      percent: 29,
      duration: "7h 0m",
      color: "#6B8FA6",
    },
  },

  // ============================================================
  // SAVINGS & BILLING
  // ============================================================
  savings: {
    ppaRate: 4.5,
    gridRate: 9.2,
    savingsPercent: 51,
    solarBill: 192825,
    gridEstimate: 394220,
    netSavings: 201395,

    // Monthly savings trend (6 months)
    monthly: {
      labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      ppaBills: [175000, 180500, 185200, 188400, 190100, 192825],
      gridEstimates: [360000, 368000, 375000, 382000, 389000, 394220],
    },
  },

  // ============================================================
  // CARBON IMPACT
  // ============================================================
  carbon: {
    totalCO2: 34.2,
    annualGoalPercent: 78,
    treesEquivalent: 1540,
    carsRemoved: 15,
    homesEquivalent: 8,
    flightsAvoided: 22,

    // Monthly CO2 trend
    monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      values: [3.8, 4.1, 4.5, 4.9, 5.2, 5.8, 5.9],
      cumulative: [3.8, 7.9, 12.4, 17.3, 22.5, 28.3, 34.2],
    },
  },

  // ============================================================
  // ENERGY FLOW (Real-time snapshot)
  // ============================================================
  energyFlow: {
    solar: { power: 124.5, unit: "kW", status: "generating", percent: 72 },
    grid: { power: 28.3, unit: "kW", status: "importing", percent: 16 },
    battery: {
      power: 20.8,
      unit: "kW",
      status: "discharging",
      soc: 68,
      percent: 12,
    },
    load: { power: 173.6, unit: "kW", status: "consuming" },
  },

  // ============================================================
  // INVESTOR DATA
  // ============================================================
  investor: {
    totalInvested: 25000000, // ₹2.5 Cr
    totalReturns: 4200000, // ₹42 Lakh
    portfolioIRR: 24.8, // %
    activeProjects: 5,

    // Portfolio performance (12 months)
    performance: {
      labels: [
        "Aug'24",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan'25",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
      ],
      expected: [
        180, 360, 550, 750, 960, 1180, 1410, 1650, 1900, 2160, 2430, 2710,
      ],
      actual: [
        190, 385, 590, 810, 1040, 1290, 1540, 1800, 2080, 2370, 2680, 3000,
      ],
    },

    // Projects list
    projects: [
      {
        name: "Noida Factory",
        location: "Noida, UP",
        capacity: "500 KW",
        invested: 8500000,
        revenue: 1420000,
        irr: 28.2,
        status: "Active",
        startDate: "2024-11-20",
      },
      {
        name: "Gurgaon Warehouse",
        location: "Gurgaon, HR",
        capacity: "350 KW",
        invested: 6200000,
        revenue: 980000,
        irr: 23.5,
        status: "Active",
        startDate: "2025-01-10",
      },
      {
        name: "Pune Manufacturing",
        location: "Pune, MH",
        capacity: "750 KW",
        invested: 12500000,
        revenue: 1800000,
        irr: 22.1,
        status: "Active",
        startDate: "2025-03-05",
      },
      {
        name: "Chennai Logistics",
        location: "Chennai, TN",
        capacity: "280 KW",
        invested: 4800000,
        revenue: 0,
        irr: 0,
        status: "Installing",
        startDate: "2025-07-15",
      },
      {
        name: "Jaipur Textile Mill",
        location: "Jaipur, RJ",
        capacity: "420 KW",
        invested: 7200000,
        revenue: 0,
        irr: 0,
        status: "Planning",
        startDate: "2025-09-01",
      },
    ],
  },

  // ============================================================
  // ADMIN FLEET DATA
  // ============================================================
  admin: {
    totalCapacity: 2.3, // MW
    sitesOnline: 12,
    sitesTotal: 14,
    activeAlerts: 3,
    avgUptime: 97.2,
    totalCO2: 128.5, // tonnes
    revenueCollected: 14200000, // ₹1.42 Cr

    // Sites for fleet overview
    sites: [
      {
        name: "Noida Factory",
        capacity: "500 KW",
        status: "Online",
        uptime: 98.5,
        alerts: 0,
        generation: 1850,
        lat: 28.5355,
        lng: 77.391,
      },
      {
        name: "Gurgaon Warehouse",
        capacity: "350 KW",
        status: "Online",
        uptime: 97.8,
        alerts: 0,
        generation: 1240,
        lat: 28.4595,
        lng: 77.0266,
      },
      {
        name: "Pune Manufacturing",
        capacity: "750 KW",
        status: "Online",
        uptime: 99.1,
        alerts: 0,
        generation: 2680,
        lat: 18.5204,
        lng: 73.8567,
      },
      {
        name: "Mumbai Office Park",
        capacity: "200 KW",
        status: "Online",
        uptime: 96.3,
        alerts: 1,
        generation: 680,
        lat: 19.076,
        lng: 72.8777,
      },
      {
        name: "Bangalore Tech Hub",
        capacity: "300 KW",
        status: "Online",
        uptime: 98.9,
        alerts: 0,
        generation: 1120,
        lat: 12.9716,
        lng: 77.5946,
      },
      {
        name: "Hyderabad Complex",
        capacity: "450 KW",
        status: "Degraded",
        uptime: 89.2,
        alerts: 2,
        generation: 1450,
        lat: 17.385,
        lng: 78.4867,
      },
      {
        name: "Chennai Logistics",
        capacity: "280 KW",
        status: "Installing",
        uptime: 0,
        alerts: 0,
        generation: 0,
        lat: 13.0827,
        lng: 80.2707,
      },
      {
        name: "Jaipur Textile Mill",
        capacity: "420 KW",
        status: "Planning",
        uptime: 0,
        alerts: 0,
        generation: 0,
        lat: 26.9124,
        lng: 75.7873,
      },
    ],
  },

  // ============================================================
  // HEATMAP DATA (7 days × 24 hours)
  // Intensity 0-100 representing consumption level
  // ============================================================
  heatmap: [
    // Mon: low overnight, ramps up morning, peaks midday, drops evening
    [
      5, 5, 4, 4, 6, 15, 25, 40, 55, 70, 80, 90, 95, 85, 80, 85, 70, 55, 35, 25,
      20, 12, 8, 5,
    ],
    // Tue
    [
      5, 4, 4, 8, 12, 20, 35, 50, 65, 80, 92, 95, 88, 80, 85, 90, 75, 55, 40,
      28, 18, 10, 6, 5,
    ],
    // Wed
    [
      5, 5, 5, 5, 10, 18, 30, 45, 60, 75, 88, 92, 95, 88, 82, 88, 72, 52, 38,
      25, 18, 10, 6, 5,
    ],
    // Thu
    [
      5, 5, 4, 5, 8, 16, 28, 42, 58, 72, 85, 90, 92, 85, 80, 85, 70, 50, 35, 22,
      15, 8, 5, 5,
    ],
    // Fri
    [
      5, 5, 5, 5, 8, 18, 30, 45, 62, 78, 90, 95, 95, 82, 80, 80, 65, 48, 32, 22,
      15, 8, 5, 5,
    ],
    // Sat (lighter — weekend)
    [
      5, 5, 4, 4, 5, 8, 15, 28, 40, 55, 65, 68, 62, 60, 55, 48, 35, 25, 15, 8,
      5, 5, 5, 5,
    ],
    // Sun (lightest)
    [
      5, 5, 4, 4, 5, 5, 10, 22, 35, 45, 55, 58, 58, 55, 48, 40, 28, 18, 10, 5,
      5, 5, 5, 5,
    ],
  ],
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Format number with Indian comma system
 * e.g., 342800 → "3,42,800"
 */
function formatIndianNumber(num) {
  const str = Math.abs(Math.round(num)).toString();
  if (str.length <= 3) return str;
  const last3 = str.slice(-3);
  const rest = str.slice(0, -3);
  const formatted = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + last3;
  return num < 0 ? "-" + formatted : formatted;
}

/**
 * Format currency in Indian format with ₹
 * e.g., 342800 → "₹3,42,800"
 */
function formatCurrency(num) {
  return "₹" + formatIndianNumber(num);
}

/**
 * Format large numbers to Lakh/Crore
 * e.g., 2500000 → "₹25.0 L", 14200000 → "₹1.42 Cr"
 */
function formatCurrencyShort(num) {
  if (num >= 10000000) return "₹" + (num / 10000000).toFixed(2) + " Cr";
  if (num >= 100000) return "₹" + (num / 100000).toFixed(1) + " L";
  return formatCurrency(num);
}

/**
 * Get heatmap color based on intensity (0-100)
 */
function getHeatmapColor(intensity) {
  const colors = [
    { threshold: 10, color: "#FFF3E0" },
    { threshold: 25, color: "#FFE0B2" },
    { threshold: 40, color: "#FFCC80" },
    { threshold: 55, color: "#FFB74D" },
    { threshold: 65, color: "#FFA726" },
    { threshold: 75, color: "#FF9800" },
    { threshold: 82, color: "#FB8C00" },
    { threshold: 88, color: "#F57C00" },
    { threshold: 93, color: "#EF6C00" },
    { threshold: 100, color: "#E65100" },
  ];
  for (const c of colors) {
    if (intensity <= c.threshold) return c.color;
  }
  return "#E65100";
}
