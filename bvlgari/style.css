:root{
  --bg0:#fbfbf9;
  --bg1:#f1f1ef;
  --ink:#0b0b0c;
  --muted:#8a8a90;
  --card:#ffffff;
  --gold:#c6a75e;
  --btn-border:#e7e7ea;
  --shadow:0 28px 90px rgba(0,0,0,.09);
  --radius:26px;
}

*{
  box-sizing:border-box;
}

body{
  margin:0;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial;
  color:var(--ink);
  background:
    radial-gradient(1200px 700px at 20% -10%, rgba(198,167,94,.12), transparent 60%),
    radial-gradient(900px 600px at 110% 30%, rgba(0,0,0,.05), transparent 55%),
    linear-gradient(180deg,var(--bg0),var(--bg1));
}

.wrap{
  max-width:860px;
  margin:0 auto;
  padding:22px 18px 52px;
}

/* HERO */
.hero{
  position:relative;
  border-radius:30px;
  overflow:hidden;
  box-shadow:0 30px 100px rgba(0,0,0,.18);
  margin:8px 0 22px;
  background:#000;
}

.hero img{
  width:100%;
  height:440px;
  object-fit:cover;
  display:block;
  filter:contrast(1.05) saturate(1.05);
}

.hero::after{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(900px 420px at 18% 72%, rgba(198,167,94,.18), transparent 60%),
    linear-gradient(to top, rgba(0,0,0,.82), rgba(0,0,0,.18) 55%, rgba(0,0,0,0));
}

.hero-overlay{
  position:absolute;
  left:22px;
  right:22px;
  bottom:18px;
  color:#fff;
}

.hero-title{
  font-size:clamp(24px,6.2vw,40px);
  font-weight:900;
  letter-spacing:1.4px;
  text-transform:uppercase;
}

.hero-sub{
  margin-top:6px;
  font-size:12px;
  font-weight:800;
  letter-spacing:.2em;
  text-transform:uppercase;
  opacity:.9;
}

/* Heading */
h1{
  margin:10px 0 6px;
  font-weight:900;
  font-size:clamp(22px,4.8vw,30px);
}

.gold-line{
  width:72px;
  height:2px;
  background:linear-gradient(
    90deg,
    transparent 0%,
    var(--gold) 18%,
    var(--gold) 82%,
    transparent 100%
  );
  margin:12px 0 22px;
  border-radius:999px;
}

/* Modes */
.modes{
  display:flex;
  gap:26px;
  align-items:center;
  margin:6px 0 16px;
  font-weight:700;
}

.modes label{
  cursor:pointer;
}

input[type="radio"]{
  accent-color:var(--ink);
}

/* Card */
.card{
  background:rgba(255,255,255,.85);
  border:1px solid rgba(0,0,0,.08);
  backdrop-filter:blur(10px);
  border-radius:var(--radius);
  box-shadow:var(--shadow);
  padding:22px;
}

.head{
  display:flex;
  align-items:center;
  gap:14px;
  flex-wrap:wrap;
  margin-bottom:14px;
  padding-bottom:12px;
  border-bottom:1px solid rgba(0,0,0,.08);
}

.brand{
  font-weight:900;
  font-size:18px;
}

.pill{
  font-size:12px;
  font-weight:900;
  letter-spacing:.18em;
  text-transform:uppercase;
  color:var(--muted);
  margin-left:8px;
}

.actions{
  margin-left:auto;
  display:flex;
  gap:12px;
}

.iconbtn{
  width:46px;
  height:44px;
  border-radius:14px;
  border:1px solid var(--btn-border);
  background:#fff;
  font-size:18px;
  cursor:pointer;
  transition:.2s;
}

.iconbtn:hover{
  border-color:rgba(198,167,94,.85);
  color:var(--gold);
  transform:translateY(-1px);
}

.iconbtn.active{
  border-color:var(--gold);
  color:var(--gold);
  background:rgba(198,167,94,.08);
  box-shadow:
    0 0 0 1px rgba(198,167,94,.4),
    0 12px 30px rgba(198,167,94,.25);
}

.caption{
  white-space:pre-wrap;
  font-weight:600;
  font-size:16px;
  line-height:1.6;
}

.toast{
  position:fixed;
  left:50%;
  bottom:26px;
  transform:translateX(-50%);
  background:#111;
  color:#fff;
  padding:9px 14px;
  border-radius:999px;
  font-weight:800;
  opacity:0;
  transition:.25s;
}

.toast.show{
  opacity:1;
}
