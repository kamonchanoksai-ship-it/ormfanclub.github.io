// ✅ Google Sheet CSV ของคุณ (ใส่ให้แล้ว)
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdPtHYl8KRLNJOXKZ9gC5RPQoF5aHWlwfSHG90HbYRrZPsi2LLv3J2u_WJ8g5f7n16zZPORBaMNqqq/pub?output=csv";

let DB = { ig: [], x: [] };
let isEdit = false;

const captionBox = document.getElementById("captionBox");
const pillType = document.getElementById("pillType");
const toast = document.getElementById("toast");

const btnRand = document.getElementById("btnRand");
const btnCopy = document.getElementById("btnCopy");
const btnEdit = document.getElementById("btnEdit");

// ----- Toast -----
function showToast(message = "Copied") {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1100);
}

// ----- Robust CSV parser (รองรับ comma/quote) -----
function parseCSV(text) {
  const rows = [];
  let row = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    // escaped quote: ""
    if (ch === '"' && inQuotes && next === '"') {
      cur += '"';
      i++;
      continue;
    }

    // toggle quote
    if (ch === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    // comma delimiter
    if (ch === "," && !inQuotes) {
      row.push(cur);
      cur = "";
      continue;
    }

    // newline delimiter
    if ((ch === "\n" || ch === "\r") && !inQuotes) {
      if (ch === "\r" && next === "\n") i++; // CRLF
      row.push(cur);

      if (row.some((v) => v.trim() !== "")) rows.push(row);

      row = [];
      cur = "";
      continue;
    }

    cur += ch;
  }

  row.push(cur);
  if (row.some((v) => v.trim() !== "")) rows.push(row);

  return rows;
}

// ----- Platform mapping (ให้ X ดึงแน่นอน) -----
function normalizePlatform(raw) {
  const p = (raw || "").trim().toLowerCase();

  if (p === "ig" || p === "instagram") return "ig";

  // รองรับ x, X (Twitter), twitter
  if (p === "x" || p === "twitter" || p.includes("twitter") || p === "x (twitter)") return "x";

  return "";
}

async function loadData() {
  const res = await fetch(SHEET_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Fetch failed: " + res.status);

  const csv = await res.text();
  const table = parseCSV(csv);

  // แถวแรกเป็น header
  const rows = table.slice(1);

  DB = { ig: [], x: [] };

  rows.forEach((cols) => {
    const key = normalizePlatform(cols[0]);
    const text = (cols[1] || "").trim();

    if (key && text) DB[key].push(text);
  });
}

function getSelectedPlatform() {
  const el = document.querySelector('input[name="platform"]:checked');
  return el ? el.value : "ig";
}

function updatePill(p) {
  pillType.textContent = p === "ig" ? "post" : "tweet";
}

function generate() {
  const p = getSelectedPlatform();
  updatePill(p);

  const arr = DB[p] || [];
  if (!arr.length) {
    captionBox.textContent = `No captions available for ${p.toUpperCase()}.`;
    return;
  }

  const rand = arr[Math.floor(Math.random() * arr.length)];
  captionBox.textContent = rand;
}

// ----- Buttons -----
btnRand.addEventListener("click", async () => {
  try {
    captionBox.textContent = "Loading...";
    await loadData();
    generate();
  } catch (e) {
    console.error(e);
    captionBox.textContent = "Error loading captions. Check Google Sheet publish (CSV).";
  }
});

btnCopy.addEventListener("click", async () => {
  const text = captionBox.textContent.trim();
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied");
  } catch (e) {
    console.error(e);
    showToast("Copy failed");
  }
});

btnEdit.addEventListener("click", () => {
  isEdit = !isEdit;

  captionBox.contentEditable = isEdit ? "true" : "false";
  captionBox.style.outline = isEdit ? "2px solid #c6a75e" : "none";
  btnEdit.classList.toggle("active", isEdit);

  showToast(isEdit ? "Edit mode" : "Locked");
});

// เปลี่ยน platform แล้วให้ pill อัปเดตทันที
document.querySelectorAll('input[name="platform"]').forEach((r) => {
  r.addEventListener("change", () => updatePill(getSelectedPlatform()));
});

// init
updatePill(getSelectedPlatform());
