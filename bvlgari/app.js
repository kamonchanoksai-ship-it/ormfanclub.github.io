// ✅ ใส่ลิงก์ CSV จริงของ Google Sheet ตรงนี้
const SHEET_URL = "// ✅ ใส่ลิงก์ CSV จริงของ Google Sheet ตรงนี้
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRdPtHYl8KRLNJOXKZ9gC5RPQoF5aHWlwfSHG90HbYRrZPsi2LLv3J2u_WJ8g5f7n16zZPORBaMNqqq/pub?output=csv";

let DB = { ig: [], x: [] };
let isEdit = false;

const captionBox = document.getElementById("captionBox");
const pillType = document.getElementById("pillType");
const toast = document.getElementById("toast");

const btnRand = document.getElementById("btnRand");
const btnCopy = document.getElementById("btnCopy");
const btnEdit = document.getElementById("btnEdit");

function showToast(message = "Copied"){
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"), 1100);
}

/* Robust CSV parser (รองรับ comma/quote ในข้อความ) */
function parseCSV(text){
  const rows = [];
  let row = [], cur = "", inQuotes = false;

  for(let i=0;i<text.length;i++){
    const ch = text[i], next = text[i+1];

    if(ch === '"' && inQuotes && next === '"'){ cur += '"'; i++; continue; }
    if(ch === '"'){ inQuotes = !inQuotes; continue; }

    if(ch === ',' && !inQuotes){ row.push(cur); cur=""; continue; }

    if((ch === '\n' || ch === '\r') && !inQuotes){
      if(ch === '\r' && next === '\n') i++;
      row.push(cur);
      if(row.some(v=>v.trim()!=="")) rows.push(row);
      row=[]; cur=""; continue;
    }
    cur += ch;
  }

  row.push(cur);
  if(row.some(v=>v.trim()!=="")) rows.push(row);
  return rows;
}

function normalizePlatform(raw){
  const p = (raw||"").trim().toLowerCase();
  if(p==="ig" || p==="instagram") return "ig";
  if(p==="x" || p==="twitter" || p.includes("twitter")) return "x";
  return "";
}

async function loadData(){
  if(!SHEET_URL || SHEET_URL.includes("PASTE_YOUR_CSV_URL_HERE")){
    captionBox.textContent = "Please set SHEET_URL in app.js";
    return;
  }

  const res = await fetch(SHEET_URL, { cache:"no-store" });
  if(!res.ok) throw new Error("Fetch failed");

  const csv = await res.text();
  const table = parseCSV(csv);
  const rows = table.slice(1); // skip header

  DB = { ig: [], x: [] };

  rows.forEach(cols=>{
    const key = normalizePlatform(cols[0]);
    const text = (cols[1] || "").trim();
    if(key && text) DB[key].push(text);
  });
}

function generate(){
  const p = document.querySelector('input[name="platform"]:checked').value;
  const arr = DB[p] || [];

  pillType.textContent = (p==="ig") ? "post" : "tweet";

  if(!arr.length){
    captionBox.textContent = `No captions available for ${p.toUpperCase()}.`;
    return;
  }

  const rand = arr[Math.floor(Math.random()*arr.length)];
  captionBox.textContent = rand;
}

btnRand.addEventListener("click", async ()=>{
  try{
    captionBox.textContent = "Loading...";
    await loadData();
    generate();
  }catch(e){
    console.error(e);
    captionBox.textContent = "Error loading captions. Check SHEET_URL + Publish to web (CSV).";
  }
});

btnCopy.addEventListener("click", async ()=>{
  const text = captionBox.textContent.trim();
  if(!text) return;
  await navigator.clipboard.writeText(text);
  showToast("Copied");
});

btnEdit.addEventListener("click", ()=>{
  isEdit = !isEdit;
  captionBox.contentEditable = isEdit ? "true" : "false";
  captionBox.style.outline = isEdit ? "2px solid #c6a75e" : "none";
  btnEdit.classList.toggle("active", isEdit);
  showToast(isEdit ? "Edit mode" : "Locked");
});

// pill เปลี่ยนทันทีเมื่อสลับ platform
document.querySelectorAll('input[name="platform"]').forEach(r=>{
  r.addEventListener("change", ()=>{
    const p = document.querySelector('input[name="platform"]:checked').value;
    pillType.textContent = (p==="ig") ? "post" : "tweet";
  });
});";

let DB = { ig: [], x: [] };
let isEdit = false;

const captionBox = document.getElementById("captionBox");
const pillType = document.getElementById("pillType");
const toast = document.getElementById("toast");

const btnRand = document.getElementById("btnRand");
const btnCopy = document.getElementById("btnCopy");
const btnEdit = document.getElementById("btnEdit");

function showToast(message = "Copied"){
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"), 1100);
}

/* Robust CSV parser (รองรับ comma/quote ในข้อความ) */
function parseCSV(text){
  const rows = [];
  let row = [], cur = "", inQuotes = false;

  for(let i=0;i<text.length;i++){
    const ch = text[i], next = text[i+1];

    if(ch === '"' && inQuotes && next === '"'){ cur += '"'; i++; continue; }
    if(ch === '"'){ inQuotes = !inQuotes; continue; }

    if(ch === ',' && !inQuotes){ row.push(cur); cur=""; continue; }

    if((ch === '\n' || ch === '\r') && !inQuotes){
      if(ch === '\r' && next === '\n') i++;
      row.push(cur);
      if(row.some(v=>v.trim()!=="")) rows.push(row);
      row=[]; cur=""; continue;
    }
    cur += ch;
  }

  row.push(cur);
  if(row.some(v=>v.trim()!=="")) rows.push(row);
  return rows;
}

function normalizePlatform(raw){
  const p = (raw||"").trim().toLowerCase();
  if(p==="ig" || p==="instagram") return "ig";
  if(p==="x" || p==="twitter" || p.includes("twitter")) return "x";
  return "";
}

async function loadData(){
  if(!SHEET_URL || SHEET_URL.includes("PASTE_YOUR_CSV_URL_HERE")){
    captionBox.textContent = "Please set SHEET_URL in app.js";
    return;
  }

  const res = await fetch(SHEET_URL, { cache:"no-store" });
  if(!res.ok) throw new Error("Fetch failed");

  const csv = await res.text();
  const table = parseCSV(csv);
  const rows = table.slice(1); // skip header

  DB = { ig: [], x: [] };

  rows.forEach(cols=>{
    const key = normalizePlatform(cols[0]);
    const text = (cols[1] || "").trim();
    if(key && text) DB[key].push(text);
  });
}

function generate(){
  const p = document.querySelector('input[name="platform"]:checked').value;
  const arr = DB[p] || [];

  pillType.textContent = (p==="ig") ? "post" : "tweet";

  if(!arr.length){
    captionBox.textContent = `No captions available for ${p.toUpperCase()}.`;
    return;
  }

  const rand = arr[Math.floor(Math.random()*arr.length)];
  captionBox.textContent = rand;
}

btnRand.addEventListener("click", async ()=>{
  try{
    captionBox.textContent = "Loading...";
    await loadData();
    generate();
  }catch(e){
    console.error(e);
    captionBox.textContent = "Error loading captions. Check SHEET_URL + Publish to web (CSV).";
  }
});

btnCopy.addEventListener("click", async ()=>{
  const text = captionBox.textContent.trim();
  if(!text) return;
  await navigator.clipboard.writeText(text);
  showToast("Copied");
});

btnEdit.addEventListener("click", ()=>{
  isEdit = !isEdit;
  captionBox.contentEditable = isEdit ? "true" : "false";
  captionBox.style.outline = isEdit ? "2px solid #c6a75e" : "none";
  btnEdit.classList.toggle("active", isEdit);
  showToast(isEdit ? "Edit mode" : "Locked");
});

// pill เปลี่ยนทันทีเมื่อสลับ platform
document.querySelectorAll('input[name="platform"]').forEach(r=>{
  r.addEventListener("change", ()=>{
    const p = document.querySelector('input[name="platform"]:checked').value;
    pillType.textContent = (p==="ig") ? "post" : "tweet";
  });
});
