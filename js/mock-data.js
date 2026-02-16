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
    totalCapacity: 12.5, // MW
    sitesOnline: 22,
    sitesTotal: 24,
    activeAlerts: 3,
    criticalAlerts: 1,
    warningAlerts: 2,
    avgUptime: 96.8,
    totalCO2: 428.5, // tonnes
    revenueCollectedMTD: 4260000, // ₹42.6 Lakh
    revenuePrevMonth: 3800000,
    energyToday: 18450, // kWh
    energyYesterday: 17050,

    // Alerts
    alerts: [
      {
        id: 1,
        severity: "critical",
        title: "Inverter Failure",
        site: "Ludhiana Textile Mill",
        message:
          "Inverter #3 offline. Production impacted. System at 66% capacity.",
        time: "2h ago",
        timestamp: "2025-07-28T11:45:00",
      },
      {
        id: 2,
        severity: "warning",
        title: "Low Battery SoC",
        site: "Dehradun Pharma",
        message: "Battery at 12%. Grid fallback active. Charging paused.",
        time: "5h ago",
        timestamp: "2025-07-28T09:15:00",
      },
      {
        id: 3,
        severity: "warning",
        title: "Communication Delay",
        site: "Pune Auto Components",
        message: "Data stream delayed by 45 minutes. Checking connectivity.",
        time: "8h ago",
        timestamp: "2025-07-28T06:30:00",
      },
      {
        id: 4,
        severity: "resolved",
        title: "Grid Sync Restored",
        site: "Chennai Textiles Park",
        message: "Grid sync restored. All systems normal.",
        time: "1d ago",
        timestamp: "2025-07-27T14:20:00",
      },
    ],

    // 24 Sites for fleet overview
    sites: [
      {
        name: "Noida Manufacturing Hub",
        location: "Noida, UP",
        capacity: "500 kW",
        status: "Online",
        uptime: 99.2,
        alerts: 0,
        generation: 1840,
        lastSync: "2m ago",
        lat: 28.54,
        lng: 77.39,
      },
      {
        name: "Chennai Textiles Park",
        location: "Chennai, TN",
        capacity: "750 kW",
        status: "Online",
        uptime: 98.8,
        alerts: 0,
        generation: 2240,
        lastSync: "1m ago",
        lat: 13.08,
        lng: 80.27,
      },
      {
        name: "Pune Auto Components",
        location: "Pune, MH",
        capacity: "400 kW",
        status: "Online",
        uptime: 97.5,
        alerts: 1,
        generation: 1420,
        lastSync: "45m ago",
        lat: 18.52,
        lng: 73.86,
      },
      {
        name: "Ludhiana Textile Mill",
        location: "Ludhiana, PB",
        capacity: "350 kW",
        status: "Alert",
        uptime: 84.2,
        alerts: 1,
        generation: 680,
        lastSync: "2m ago",
        lat: 30.9,
        lng: 75.86,
      },
      {
        name: "Dehradun Pharma",
        location: "Dehradun, UK",
        capacity: "300 kW",
        status: "Warning",
        uptime: 95.1,
        alerts: 1,
        generation: 1020,
        lastSync: "3m ago",
        lat: 30.32,
        lng: 78.03,
      },
      {
        name: "Bangalore Tech Hub",
        location: "Bangalore, KA",
        capacity: "600 kW",
        status: "Online",
        uptime: 99.1,
        alerts: 0,
        generation: 1950,
        lastSync: "1m ago",
        lat: 12.97,
        lng: 77.59,
      },
      {
        name: "Mumbai Logistics Park",
        location: "Mumbai, MH",
        capacity: "450 kW",
        status: "Online",
        uptime: 98.4,
        alerts: 0,
        generation: 1580,
        lastSync: "2m ago",
        lat: 19.08,
        lng: 72.88,
      },
      {
        name: "Hyderabad Pharma Zone",
        location: "Hyderabad, TS",
        capacity: "550 kW",
        status: "Online",
        uptime: 98.9,
        alerts: 0,
        generation: 1820,
        lastSync: "1m ago",
        lat: 17.39,
        lng: 78.49,
      },
      {
        name: "Jaipur Textile Mill",
        location: "Jaipur, RJ",
        capacity: "420 kW",
        status: "Online",
        uptime: 97.6,
        alerts: 0,
        generation: 1380,
        lastSync: "3m ago",
        lat: 26.91,
        lng: 75.79,
      },
      {
        name: "Ahmedabad Chemical Works",
        location: "Ahmedabad, GJ",
        capacity: "380 kW",
        status: "Online",
        uptime: 98.2,
        alerts: 0,
        generation: 1290,
        lastSync: "2m ago",
        lat: 23.02,
        lng: 72.57,
      },
      {
        name: "Kolkata Steel Plant",
        location: "Kolkata, WB",
        capacity: "700 kW",
        status: "Online",
        uptime: 97.8,
        alerts: 0,
        generation: 2100,
        lastSync: "4m ago",
        lat: 22.57,
        lng: 88.36,
      },
      {
        name: "Indore Food Processing",
        location: "Indore, MP",
        capacity: "320 kW",
        status: "Online",
        uptime: 98.5,
        alerts: 0,
        generation: 1080,
        lastSync: "2m ago",
        lat: 22.72,
        lng: 75.86,
      },
      {
        name: "Chandigarh IT Park",
        location: "Chandigarh, CH",
        capacity: "280 kW",
        status: "Online",
        uptime: 99.0,
        alerts: 0,
        generation: 920,
        lastSync: "1m ago",
        lat: 30.73,
        lng: 76.78,
      },
      {
        name: "Coimbatore Textiles",
        location: "Coimbatore, TN",
        capacity: "350 kW",
        status: "Online",
        uptime: 98.1,
        alerts: 0,
        generation: 1180,
        lastSync: "3m ago",
        lat: 11.0,
        lng: 76.96,
      },
      {
        name: "Surat Diamond Hub",
        location: "Surat, GJ",
        capacity: "400 kW",
        status: "Online",
        uptime: 97.9,
        alerts: 0,
        generation: 1350,
        lastSync: "2m ago",
        lat: 21.17,
        lng: 72.83,
      },
      {
        name: "Vadodara Chemicals",
        location: "Vadodara, GJ",
        capacity: "300 kW",
        status: "Online",
        uptime: 98.3,
        alerts: 0,
        generation: 1010,
        lastSync: "4m ago",
        lat: 22.31,
        lng: 73.19,
      },
      {
        name: "Nagpur Steel Works",
        location: "Nagpur, MH",
        capacity: "650 kW",
        status: "Online",
        uptime: 97.4,
        alerts: 0,
        generation: 2080,
        lastSync: "2m ago",
        lat: 21.15,
        lng: 79.09,
      },
      {
        name: "Bhopal Manufacturing",
        location: "Bhopal, MP",
        capacity: "350 kW",
        status: "Online",
        uptime: 98.7,
        alerts: 0,
        generation: 1190,
        lastSync: "1m ago",
        lat: 23.26,
        lng: 77.41,
      },
      {
        name: "Lucknow Auto Parts",
        location: "Lucknow, UP",
        capacity: "420 kW",
        status: "Online",
        uptime: 97.2,
        alerts: 0,
        generation: 1360,
        lastSync: "3m ago",
        lat: 26.85,
        lng: 80.95,
      },
      {
        name: "Kanpur Leather Works",
        location: "Kanpur, UP",
        capacity: "280 kW",
        status: "Online",
        uptime: 96.8,
        alerts: 0,
        generation: 890,
        lastSync: "5m ago",
        lat: 26.45,
        lng: 80.35,
      },
      {
        name: "Kochi Marine Exports",
        location: "Kochi, KL",
        capacity: "250 kW",
        status: "Online",
        uptime: 98.6,
        alerts: 0,
        generation: 840,
        lastSync: "2m ago",
        lat: 9.97,
        lng: 76.27,
      },
      {
        name: "Vizag Steel Complex",
        location: "Vizag, AP",
        capacity: "800 kW",
        status: "Online",
        uptime: 98.0,
        alerts: 0,
        generation: 2560,
        lastSync: "1m ago",
        lat: 17.69,
        lng: 83.22,
      },
      {
        name: "Guwahati Tea Estate",
        location: "Guwahati, AS",
        capacity: "200 kW",
        status: "Online",
        uptime: 96.5,
        alerts: 0,
        generation: 640,
        lastSync: "6m ago",
        lat: 26.14,
        lng: 91.74,
      },
      {
        name: "Patna Agri Processing",
        location: "Patna, BR",
        capacity: "300 kW",
        status: "Online",
        uptime: 97.1,
        alerts: 0,
        generation: 980,
        lastSync: "4m ago",
        lat: 25.61,
        lng: 85.14,
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

// ============================================================
// SECURITY & WATERMARK INJECTION
// Automatically adds T-Global watermark to every page
// ============================================================
(function injectWatermark() {
  document.addEventListener("DOMContentLoaded", () => {
    // 1. Create the style element for the watermark
    const style = document.createElement("style");
    style.innerHTML = `
      .tglobal-watermark {
        position: fixed;
        inset: 0;
        z-index: 99999;
        pointer-events: none; /* Allows clicks to pass through */
        background-image: url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' font-family='Inter, sans-serif' font-weight='bold' font-size='18' fill='rgba(0, 0, 0, 0.06)' text-anchor='middle' transform='rotate(-45 150 150)'%3ETGLOBAL %E2%80%A2 PROPOSAL%3C/text%3E%3C/svg%3E");
        background-repeat: repeat;
        opacity: 1;
        mix-blend-mode: multiply;
      }

      /* Optional: Add a footer badge */
      .tglobal-badge {
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 100000;
        background: #1A1A1A;
        color: #fff;
        padding: 6px 12px;
        border-radius: 6px;
        font-family: 'Inter', sans-serif;
        font-size: 11px;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        opacity: 0.8;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    // 2. Create the Overlay Div
    const overlay = document.createElement("div");
    overlay.className = "tglobal-watermark";
    document.body.appendChild(overlay);

    // 3. Create the fixed badge (Optional)
    const badge = document.createElement("div");
    badge.className = "tglobal-badge";
    badge.innerHTML = "DESIGNED BY TGLOBAL";
    document.body.appendChild(badge);
  });
})();
