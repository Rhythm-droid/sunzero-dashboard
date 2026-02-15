/**
 * SunZero Dashboard — Chart Configurations
 * Shared Chart.js setup for all dashboard pages.
 * Requires: Chart.js CDN + mock-data.js loaded before this file.
 */

// ============================================================
// GLOBAL CHART.JS DEFAULTS
// ============================================================
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.color = "#8A8A8A";
Chart.defaults.plugins.legend.display = false;
Chart.defaults.plugins.tooltip.backgroundColor = "#1A1A1A";
Chart.defaults.plugins.tooltip.titleFont = { size: 11, weight: "600" };
Chart.defaults.plugins.tooltip.bodyFont = { size: 12, weight: "500" };
Chart.defaults.plugins.tooltip.padding = {
  top: 10,
  bottom: 10,
  left: 14,
  right: 14,
};
Chart.defaults.plugins.tooltip.cornerRadius = 8;
Chart.defaults.plugins.tooltip.displayColors = true;
Chart.defaults.plugins.tooltip.boxWidth = 8;
Chart.defaults.plugins.tooltip.boxHeight = 8;
Chart.defaults.plugins.tooltip.boxPadding = 4;
Chart.defaults.plugins.tooltip.usePointStyle = true;
Chart.defaults.elements.point.radius = 0;
Chart.defaults.elements.point.hoverRadius = 5;
Chart.defaults.elements.point.hoverBorderWidth = 2;
Chart.defaults.elements.point.hoverBackgroundColor = "#FFFFFF";
Chart.defaults.elements.line.tension = 0.4;
Chart.defaults.elements.line.borderWidth = 2.5;
Chart.defaults.scale.grid.color = "#F0F0F0";
Chart.defaults.scale.grid.drawBorder = false;
Chart.defaults.scale.ticks.padding = 8;

// ============================================================
// COLOR TOKENS
// ============================================================
const COLORS = {
  primary: "#E8740C",
  primaryFaded: "rgba(232, 116, 12, 0.12)",
  gridBlue: "#6B8FA6",
  gridBlueFaded: "rgba(107, 143, 166, 0.08)",
  batteryGreen: "#66BB6A",
  batteryGreenFaded: "rgba(102, 187, 106, 0.08)",
  success: "#2E7D32",
  error: "#C62828",
  gridLine: "#F0F0F0",
  textMuted: "#8A8A8A",
  textPrimary: "#1A1A1A",
};

// ============================================================
// OVERVIEW PAGE: Energy Overview Chart (Solar vs Grid — 28 days)
// ============================================================
function renderOverviewChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  const data = MOCK.overviewChart;

  // Create gradient fills
  const chartCtx = ctx.getContext("2d");

  const solarGradient = chartCtx.createLinearGradient(0, 0, 0, 280);
  solarGradient.addColorStop(0, "rgba(232, 116, 12, 0.20)");
  solarGradient.addColorStop(1, "rgba(232, 116, 12, 0.01)");

  const gridGradient = chartCtx.createLinearGradient(0, 0, 0, 280);
  gridGradient.addColorStop(0, "rgba(107, 143, 166, 0.12)");
  gridGradient.addColorStop(1, "rgba(107, 143, 166, 0.01)");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "Solar Generation",
          data: data.solar,
          borderColor: COLORS.primary,
          backgroundColor: solarGradient,
          fill: true,
          pointBackgroundColor: COLORS.primary,
          pointBorderColor: "#FFFFFF",
          pointHoverBorderColor: COLORS.primary,
          order: 1,
        },
        {
          label: "Grid Consumption",
          data: data.grid,
          borderColor: COLORS.gridBlue,
          backgroundColor: gridGradient,
          fill: true,
          pointBackgroundColor: COLORS.gridBlue,
          pointBorderColor: "#FFFFFF",
          pointHoverBorderColor: COLORS.gridBlue,
          order: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: {
        tooltip: {
          callbacks: {
            title: (items) => items[0].label + ", 2025",
            label: (item) =>
              ` ${item.dataset.label}: ${item.parsed.y.toLocaleString()} kWh`,
            afterBody: (items) => {
              const solar = items[0].parsed.y;
              const grid = items[1].parsed.y;
              const total = solar + grid;
              return `\n  Total: ${total.toLocaleString()} kWh`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            maxTicksLimit: 7,
            font: { size: 11 },
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            color: COLORS.gridLine,
          },
          ticks: {
            callback: (val) => val.toLocaleString(),
            font: { size: 11 },
            maxTicksLimit: 6,
          },
          title: {
            display: true,
            text: "kWh",
            font: { size: 11, weight: "500" },
            color: COLORS.textMuted,
          },
        },
      },
    },
  });
}

// ============================================================
// ENERGY MONITORING: Generation vs Consumption (24 hours)
// ============================================================
function renderEnergyDetailChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  const data = MOCK.energyHourly;
  const chartCtx = ctx.getContext("2d");

  const solarGradient = chartCtx.createLinearGradient(0, 0, 0, 320);
  solarGradient.addColorStop(0, "rgba(232, 116, 12, 0.22)");
  solarGradient.addColorStop(1, "rgba(232, 116, 12, 0.01)");

  const gridGradient = chartCtx.createLinearGradient(0, 0, 0, 320);
  gridGradient.addColorStop(0, "rgba(107, 143, 166, 0.14)");
  gridGradient.addColorStop(1, "rgba(107, 143, 166, 0.01)");

  const batteryGradient = chartCtx.createLinearGradient(0, 0, 0, 320);
  batteryGradient.addColorStop(0, "rgba(102, 187, 106, 0.12)");
  batteryGradient.addColorStop(1, "rgba(102, 187, 106, 0.01)");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "Solar Generation",
          data: data.solar,
          borderColor: COLORS.primary,
          backgroundColor: solarGradient,
          fill: true,
          pointBackgroundColor: COLORS.primary,
          pointBorderColor: "#FFFFFF",
          pointHoverBorderColor: COLORS.primary,
          order: 1,
        },
        {
          label: "Grid Import",
          data: data.grid,
          borderColor: COLORS.gridBlue,
          backgroundColor: gridGradient,
          fill: true,
          pointBackgroundColor: COLORS.gridBlue,
          pointBorderColor: "#FFFFFF",
          pointHoverBorderColor: COLORS.gridBlue,
          order: 2,
        },
        {
          label: "Battery",
          data: data.battery,
          borderColor: COLORS.batteryGreen,
          backgroundColor: batteryGradient,
          fill: true,
          pointBackgroundColor: COLORS.batteryGreen,
          pointBorderColor: "#FFFFFF",
          pointHoverBorderColor: COLORS.batteryGreen,
          order: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (item) =>
              ` ${item.dataset.label}: ${item.parsed.y.toLocaleString()} kWh`,
            afterBody: (items) => {
              let total = 0;
              items.forEach((i) => (total += i.parsed.y));
              return `\n  Total Load: ${total.toLocaleString()} kWh`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            maxTicksLimit: 12,
            font: { size: 11 },
          },
        },
        y: {
          beginAtZero: true,
          stacked: false,
          grid: { color: COLORS.gridLine },
          ticks: {
            callback: (val) => val.toLocaleString(),
            font: { size: 11 },
            maxTicksLimit: 6,
          },
          title: {
            display: true,
            text: "kWh",
            font: { size: 11, weight: "500" },
            color: COLORS.textMuted,
          },
        },
      },
    },
  });
}

// ============================================================
// SAVINGS PAGE: Monthly PPA vs Grid Comparison (Bar Chart)
// ============================================================
function renderSavingsChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  const data = MOCK.savings.monthly;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "SunZero PPA Bill",
          data: data.ppaBills,
          backgroundColor: COLORS.primary,
          borderRadius: 6,
          borderSkipped: false,
          barPercentage: 0.6,
          categoryPercentage: 0.7,
        },
        {
          label: "Estimated Grid Bill",
          data: data.gridEstimates,
          backgroundColor: "#D1D1D1",
          borderRadius: 6,
          borderSkipped: false,
          barPercentage: 0.6,
          categoryPercentage: 0.7,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: (item) =>
              ` ${item.dataset.label}: ${formatCurrency(item.parsed.y)}`,
            afterBody: (items) => {
              const ppa = items[0].parsed.y;
              const grid = items[1].parsed.y;
              const saved = grid - ppa;
              return `\n  Savings: ${formatCurrency(saved)}`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 11 } },
        },
        y: {
          beginAtZero: true,
          grid: { color: COLORS.gridLine },
          ticks: {
            callback: (val) => "₹" + val / 1000 + "K",
            font: { size: 11 },
            maxTicksLimit: 6,
          },
        },
      },
    },
  });
}

// ============================================================
// CARBON PAGE: Monthly CO2 Offset Trend (Bar + Line)
// ============================================================
function renderCarbonChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  const data = MOCK.carbon.monthly;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "Monthly CO₂ Offset",
          data: data.values,
          backgroundColor: "#2E7D32",
          borderRadius: 6,
          borderSkipped: false,
          barPercentage: 0.5,
          order: 2,
        },
        {
          label: "Cumulative CO₂",
          data: data.cumulative,
          type: "line",
          borderColor: "#1B5E20",
          backgroundColor: "transparent",
          borderWidth: 2.5,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: "#1B5E20",
          pointBorderColor: "#FFFFFF",
          pointBorderWidth: 2,
          order: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: (item) => ` ${item.dataset.label}: ${item.parsed.y} tonnes`,
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 11 } },
        },
        y: {
          beginAtZero: true,
          grid: { color: COLORS.gridLine },
          ticks: {
            callback: (val) => val + "t",
            font: { size: 11 },
          },
          title: {
            display: true,
            text: "Tonnes CO₂",
            font: { size: 11, weight: "500" },
            color: COLORS.textMuted,
          },
        },
      },
    },
  });
}

// ============================================================
// INVESTOR: Portfolio Performance (Actual vs Expected)
// ============================================================
function renderInvestorChart(canvasId) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;

  const data = MOCK.investor.performance;
  const chartCtx = ctx.getContext("2d");

  const actualGradient = chartCtx.createLinearGradient(0, 0, 0, 280);
  actualGradient.addColorStop(0, "rgba(21, 101, 192, 0.15)");
  actualGradient.addColorStop(1, "rgba(21, 101, 192, 0.01)");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: data.labels,
      datasets: [
        {
          label: "Actual Returns",
          data: data.actual,
          borderColor: "#1565C0",
          backgroundColor: actualGradient,
          fill: true,
          pointBackgroundColor: "#1565C0",
          pointBorderColor: "#FFFFFF",
          pointHoverBorderColor: "#1565C0",
          pointRadius: 3,
          pointBorderWidth: 2,
        },
        {
          label: "Expected Returns",
          data: data.expected,
          borderColor: "#B0B0B0",
          backgroundColor: "transparent",
          fill: false,
          borderDash: [6, 4],
          borderWidth: 2,
          pointRadius: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (item) =>
              ` ${item.dataset.label}: ₹${item.parsed.y.toLocaleString()} K`,
          },
        },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 11 }, maxTicksLimit: 6 },
        },
        y: {
          beginAtZero: true,
          grid: { color: COLORS.gridLine },
          ticks: {
            callback: (val) => "₹" + val + "K",
            font: { size: 11 },
          },
        },
      },
    },
  });
}
