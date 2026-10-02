const state = { xp: { Kerem: 0, Baba: 0 }, sentence: [], lessonTimer: null, lessonSec: 0, currentUser: 'Kerem', duel: { Kerem: 0, Baba: 0 } };

const dict = [
  // KEREM: Başlangıç & Orta (0-23)
  ['I','ben','zamir'],['you','sen / siz','zamir'],['he','o (erkek)','zamir'],['she','o (kız)','zamir'],['we','biz','zamir'],['they','onlar','zamir'],
  ['play','oynamak','fiil'],['like','sevmek','fiil'],['eat','yemek','fiil'],['drink','içmek','fiil'],['school','okul','isim'],['football','futbol','isim'],['pizza','pizza','isim'],
  ['read','okumak','fiil'],['watch','izlemek','fiil'],['go','gitmek','fiil'],['book','kitap','isim'],['wake up','uyanmak','fiil'],['brush','fırçalamak','fiil'],
  ['yesterday','dün','zarf'],['tomorrow','yarın','zarf'],['faster','daha hızlı','sıfat'],['adventure','macera','isim'],['promise','söz vermek','fiil'],
  // BABA: Orta & İleri (24+)
  ['negotiate','müzakere etmek','fiil (B2)'],['implement','uygulamak / hayata geçirmek','fiil (B2)'],['postpone','ertelemek','fiil (B2)'],
  ['achieve','başarmak / elde etmek','fiil (B1)'],['investigate','araştırmak / incelemek','fiil (B2)'],['approve','onaylamak','fiil (B2)'],
  ['resolve','çözmek (sorun)','fiil (B2)'],['anticipate','öngörmek / tahmin etmek','fiil (B2+)'],['demonstrate','göstermek / kanıtlamak','fiil (B2)'],
  ['exhausted','çok yorgun / bitkin','sıfat (B1+)'],['crucial','çok önemli / kritik','sıfat (B2)'],['sustainable','sürdürülebilir','sıfat (B2+)'],
  ['compelling','ikna edici / güçlü','sıfat (C1)'],['remarkable','dikkat çekici / olağanüstü','sıfat (B2)'],['efficient','verimli','sıfat (B1+)'],
  ['unless','-medikçe / -madıkça','bağlaç (B1+)'],['despite','-e rağmen','edat (B2)'],['although','-e rağmen','bağlaç (B1+)'],
  ['furthermore','dahası / üstelik','bağlaç (B2+)'],['consequence','sonuç','isim (B2)'],['opportunity','fırsat','isim (B1+)'],
  ['consensus','uzlaşma / fikir birliği','isim (C1)'],['figure out','çözmek / anlamak','phrasal verb'],['put off','ertelemek','phrasal verb'],
  ['carry out','yürütmek / yapmak','phrasal verb'],['bring up','gündeme getirmek','phrasal verb'],['run out of','tükenmek / bitmek','phrasal verb'],
  ['in hindsight','geriye dönüp bakıldığında','ifade (C1)'],['on the same page','aynı fikirde / hemfikir','deyim (B2)'],['in the long run','uzun vadede','deyim (B2)']
];

function go(id) {
    document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b.dataset.panel === id));
    document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.id === id));
    if (id === 'dictionary') renderDict();
}

document.querySelectorAll('.tab').forEach(b => b.onclick = () => go(b.dataset.panel));

function setProfile(name) {
    state.currentUser = name;
    state.xp[name] += 10;
    updateScore();
    toast('Hoş geldin ' + name + '! 🚀 +10 XP');
    document.body.className = 'profile-' + name.toLowerCase();
    const welcome = document.getElementById('welcomeSection');
    if (welcome) welcome.style.display = 'none';
    go('home');
}

function updateScore() {
    const kEl = document.getElementById('keremXP');
    const bEl = document.getElementById('babaXP');
    const fEl = document.getElementById('familyLevel');
    if(kEl) kEl.textContent = state.xp.Kerem + ' XP';
    if(bEl) bEl.textContent = state.xp.Baba + ' XP';
    if(fEl) fEl.textContent = Math.floor((state.xp.Kerem + state.xp.Baba) / 50) + 1;
}

function toast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.style.opacity = '1';
    t.style.transform = 'translate(-50%, 0)';
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translate(-50%, 30px)'; }, 2000);
}

// --- GAMES : SENTENCE BUILDER ---
let sbIdx = 0;
const sbSentencesKerem = [
    { words: ['football', 'I', 'play', 'every day'], target: 'I play football every day', hint: 'Kim → Ne yapıyor → Ne → Ne zaman?' },
    { words: ['is', 'She', 'a book', 'reading'], target: 'She is reading a book', hint: 'She + is + V-ing + Nesne' },
    { words: ['went', 'We', 'to the park', 'yesterday'], target: 'We went to the park yesterday', hint: 'Kim → Nereye gitti → Ne zaman?' }
];
const sbSentencesBaba = [
    { words: ['have to', 'We', 'meet the deadline', 'by Friday'], target: 'We have to meet the deadline by Friday', hint: 'Özne + have to + Fiil/Nesne + Zaman (Geniş Zaman Zorunluluk)' },
    { words: ['is currently', 'Our team', 'developing', 'a new strategy'], target: 'Our team is currently developing a new strategy', hint: 'Özne + is currently + V-ing + Nesne (Şimdiki Zaman)' },
    { words: ['had to', 'We', 'revise the budget', 'yesterday'], target: 'We had to revise the budget yesterday', hint: 'Özne + had to + V1 + Zaman (Geçmiş Zaman Zorunluluk)' },
    { words: ['will have to', 'Companies', 'adapt to', 'new technologies'], target: 'Companies will have to adapt to new technologies', hint: 'Özne + will have to + V1 + Nesne (Gelecek Zaman Zorunluluk)' }
];

function getActiveSB() {
    const list = state.currentUser === 'Baba' ? sbSentencesBaba : sbSentencesKerem;
    return list[sbIdx % list.length];
}
function renderWords() {
    const wb = document.getElementById('wordBank');
    if (!wb) return;
    const cur = getActiveSB();
    wb.innerHTML = cur.words.filter(w => !state.sentence.includes(w)).map(w => `<button class="word-btn" onclick="addWord('${w.replace(/'/g, "\\'")}')">${w}</button>`).join('');
}
function addWord(w) { state.sentence.push(w); renderAnswer(); renderWords(); }
function renderAnswer() {
    const ans = document.getElementById('answer');
    if (!ans) return;
    ans.innerHTML = state.sentence.length ? state.sentence.map(w => `<span class="chip">${w}</span>`).join('') : '<span style="color:#8aa0b8">Kelimelere tıklayarak cümleyi oluştur...</span>';
}
function resetSentence() {
    state.sentence = [];
    const fb = document.getElementById('feedback');
    if (fb) fb.textContent = '';
    renderAnswer();
    renderWords();
}
function checkSentence() {
    const cur = getActiveSB();
    const ok = state.sentence.join(' ') === cur.target;
    const f = document.getElementById('feedback');
    if (ok) {
        f.textContent = '🎉 PERFECT! +20 XP — Sonraki cümleye geçiliyor...'; f.style.color = 'var(--green)';
        state.xp[state.currentUser] += 20; updateScore(); toast('Doğru! ⭐ +20 XP');
    } else {
        f.textContent = `❌ Yanlış! Doğrusu: "${cur.target}" (-5 XP) — Sonraki soruya geçiliyor...`; f.style.color = 'var(--pink)';
        state.xp[state.currentUser] -= 5; updateScore(); toast('Yanlış cevap! ❌ -5 XP');
    }
    sbIdx++;
    setTimeout(resetSentence, 1500);
}

// --- DICTIONARY ---
let dictTimer = null;
async function renderDict() {
    const searchEl = document.getElementById('dictSearch');
    const grid = document.getElementById('dictGrid');
    if (!searchEl || !grid) return;
    const q = searchEl.value.toLowerCase().trim();
    if (!q) {
        const defaultPool = state.currentUser === 'Baba' ? dict.slice(24) : dict.slice(0, 24);
        grid.innerHTML = defaultPool.map(x => `<div class="word-card"><b>${x[0]}</b><small>${x[1]} • ${x[2]}</small><button class="speak" onclick="speakText('${x[0].replace(/'/g, "\\'")}')">🔊 Dinle</button></div>`).join('');
        return;
    }
    const rows = dict.filter(x => (x[0] + ' ' + x[1] + ' ' + x[2]).toLowerCase().includes(q));
    if (rows.length > 0) {
        grid.innerHTML = rows.map(x => `<div class="word-card"><b>${x[0]}</b><small>${x[1]} • ${x[2]}</small><button class="speak" onclick="speakText('${x[0].replace(/'/g, "\\'")}')">🔊 Dinle</button></div>`).join('');
        return;
    }
    grid.innerHTML = '<div class="noresult" style="color:var(--navy);">🔎 Yerel sözlükte bulunamadı. İnternette aranıyor... ⏳</div>';
    clearTimeout(dictTimer);
    dictTimer = setTimeout(async () => {
        try {
            let res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=en|tr`);
            let data = await res.json();
            let translated = data.responseData.translatedText;
            if (translated.toLowerCase() === q.toLowerCase()) {
                res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=tr|en`);
                data = await res.json();
                let enWord = data.responseData.translatedText;
                grid.innerHTML = `<div class="word-card" style="background:#f0f8ff; border:2px solid var(--blue);"><b>${enWord}</b><small>${q} • Online Çeviri</small><button class="speak" onclick="speakText('${enWord.replace(/'/g, "\\'")}')">🔊 Dinle</button></div>`;
            } else {
                grid.innerHTML = `<div class="word-card" style="background:#f0f8ff; border:2px solid var(--blue);"><b>${q}</b><small>${translated} • Online Çeviri</small><button class="speak" onclick="speakText('${q.replace(/'/g, "\\'")}')">🔊 Dinle</button></div>`;
            }
        } catch(e) { grid.innerHTML = '<div class="noresult" style="color:var(--pink);">❌ İnternet çevirisi yapılamadı.</div>'; }
    }, 800);
}
function speakText(text) {
    if ('speechSynthesis' in window) {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US'; u.rate = 0.85;
        speechSynthesis.cancel(); speechSynthesis.speak(u);
    } else { toast('Tarayıcınız seslendirmeyi desteklemiyor.'); }
}

// --- MINI GAMES (Solo) ---
let mwIndex = 0; 
const mwDataKerem = [
    { q: "I ___ football every weekend.", options: ["play", "plays", "playing"], ans: "play" },
    { q: "She ___ pizza right now.", options: ["eat", "eats", "is eating"], ans: "is eating" },
    { q: "Yesterday we ___ to the cinema.", options: ["go", "went", "will go"], ans: "went" },
    { q: "___ you like ice cream?", options: ["Do", "Does", "Are"], ans: "Do" },
    { q: "A cheetah is ___ than a horse.", options: ["fast", "faster", "fastest"], ans: "faster" }
];
const mwDataBaba = [
    { q: "Our company ___ a strong international reputation and operates in 10 countries.", options: ["have", "has", "is having"], ans: "has" },
    { q: "Because of the urgent deadline yesterday, we ___ work overtime.", options: ["must", "had to", "have to"], ans: "had to" },
    { q: "We ___ currently negotiating a major contract with our new suppliers.", options: ["do", "are", "have"], ans: "are" },
    { q: "Next quarter, all departments ___ adapt to the new digital system.", options: ["had to", "will have to", "having to"], ans: "will have to" },
    { q: "___ your manager have to approve every financial report?", options: ["Do", "Does", "Is"], ans: "Does" }
];
function getMWList() {
    return state.currentUser === 'Baba' ? mwDataBaba : mwDataKerem;
}
function renderMW() {
    const qEl = document.getElementById('missingWordQ');
    if(!qEl) return;
    const list = getMWList();
    if(mwIndex >= list.length) mwIndex = 0;
    const item = list[mwIndex];
    qEl.textContent = item.q;
    document.getElementById('missingWordOptions').innerHTML = item.options.map(opt => `<button class="cta" style="background:#e4f0f7; color:var(--navy); font-size:18px;" onclick="checkMW('${opt}', '${item.ans}')">${opt}</button>`).join('');
    document.getElementById('mwFeedback').textContent = '';
}
function checkMW(selected, correct) {
    const fb = document.getElementById('mwFeedback');
    if(selected === correct) {
        fb.textContent = "🎉 DOĞRU! +10 XP — Sonraki soruya geçiliyor..."; fb.style.color = "var(--green)";
        state.xp[state.currentUser] += 10; updateScore();
        toast("Doğru! ⭐ +10 XP");
    } else {
        fb.textContent = `❌ Yanlış! Doğrusu: "${correct}" (-5 XP) — Sonraki soruya geçiliyor...`; fb.style.color = "var(--pink)";
        state.xp[state.currentUser] -= 5; updateScore();
        toast("Yanlış cevap! ❌ -5 XP");
    }
    mwIndex++;
    setTimeout(renderMW, 1200);
}

let tfIndex = 0; 
const tfDataKerem = [
    { q: "He play football.", isTrue: false },
    { q: "I like reading books.", isTrue: true },
    { q: "She doesn't likes milk.", isTrue: false },
    { q: "We went to the park yesterday.", isTrue: true },
    { q: "They are playing football right now.", isTrue: true }
];
const tfDataBaba = [
    { q: "Does she has to attend the conference tomorrow?", isTrue: false },
    { q: "We had to postpone the meeting yesterday due to an emergency.", isTrue: true },
    { q: "Normally I work at the office, but this week I am working remotely.", isTrue: true },
    { q: "Yesterday we must revise the entire budget.", isTrue: false },
    { q: "Next year, we will have to hire more engineers for the project.", isTrue: true }
];
function getTFList() {
    return state.currentUser === 'Baba' ? tfDataBaba : tfDataKerem;
}
function renderTF() {
    const qEl = document.getElementById('tfQ');
    if(!qEl) return;
    const list = getTFList();
    if(tfIndex >= list.length) tfIndex = 0;
    qEl.textContent = '"' + list[tfIndex].q + '" doğru bir cümle mi?';
    document.getElementById('tfFeedback').textContent = '';
}
function checkTF(selectedTrue) {
    const fb = document.getElementById('tfFeedback');
    const list = getTFList();
    if(selectedTrue === list[tfIndex].isTrue) {
        fb.textContent = "🎉 DOĞRU BİLDİN! +10 XP — Sonraki soruya geçiliyor..."; fb.style.color = "var(--green)";
        state.xp[state.currentUser] += 10; updateScore();
        toast("Doğru! ⭐ +10 XP");
    } else {
        fb.textContent = "❌ Yanlış! (-5 XP) — Sonraki soruya geçiliyor..."; fb.style.color = "var(--pink)";
        state.xp[state.currentUser] -= 5; updateScore();
        toast("Yanlış cevap! ❌ -5 XP");
    }
    tfIndex++;
    setTimeout(renderTF, 1200);
}
function quiz(btn, ok) {}


// ==========================================
// --- DUEL SYSTEM (BALANCED / TURN-BASED) ---
// ==========================================
let duelTimer = null;

// Tabu Variables
const easyTabu = ['FOOTBALL', 'PIZZA', 'CAT', 'DOG', 'APPLE', 'WATER', 'PLAY', 'BOY'];
const hardTabu = ['YESTERDAY', 'TOMORROW', 'SCHOOL', 'FRIEND', 'FAMILY', 'ALWAYS', 'SOMETIMES', 'BEAUTIFUL'];
let tabuTurn = 'Kerem'; // who is guessing

// Time Variables
let timeScores = { Kerem: 0, Baba: 0 };
let timeActivePlayer = 'Kerem';
let timeScore = 0;
let timeSec = 0;

// Emoji Variables
const emojis = [{w:'apple', e:'🍎'},{w:'car', e:'🚗'},{w:'house', e:'🏠'},{w:'dog', e:'🐶'},{w:'cat', e:'🐱'},{w:'sun', e:'☀️'},{w:'pizza', e:'🍕'}];
let emojiTurn = 'Kerem';

function startDuel(type) {
    go('duelView');
    const container = document.getElementById('duelContent');
    clearInterval(duelTimer);
    
    if (type === 'tabu') {
        tabuTurn = 'Kerem';
        renderTabuTurn();
    } else if (type === 'time') {
        timeScores = { Kerem: 0, Baba: 0 };
        timeActivePlayer = 'Kerem';
        showTimeTurn();
    } else if (type === 'emoji') {
        emojiTurn = 'Kerem';
        renderEmojiTurn();
    }
}

function addDuelPoint(who) {
    state.duel[who]++;
    document.getElementById('duelKerem').textContent = state.duel.Kerem + ' Puan';
    document.getElementById('duelBaba').textContent = state.duel.Baba + ' Puan';
    toast(who + ' 1 puan kazandı! 🏆');
    
    if (state.duel[who] >= 5) {
        document.getElementById('duelContent').innerHTML = `
            <div style='font-size:80px; margin:20px 0;'>🎉</div>
            <h2 style='color:var(--green); font-size:35px;'>${who} KAZANDI!</h2>
            <p style='font-size:18px;'>Müthiş bir karşılaşmaydı! Aile XP'sine +50 eklendi.</p>
            <button class='cta' style='margin-top:20px; font-size:20px; padding:15px 30px;' onclick='go("home")'>Haritaya Dön</button>`;
        state.xp[who] += 50; updateScore();
        state.duel = {Kerem: 0, Baba: 0};
        document.getElementById('duelKerem').textContent = '0 Puan';
        document.getElementById('duelBaba').textContent = '0 Puan';
        return true; // Game ended
    }
    return false; // Game continues
}

// ---------------- 1. TABU ----------------
function renderTabuTurn() {
    const isKerem = tabuTurn === 'Kerem';
    const explainer = isKerem ? 'Baba' : 'Kerem';
    const guesser = isKerem ? 'Kerem' : 'Baba';
    const wordList = isKerem ? easyTabu : hardTabu;
    const word = wordList[Math.floor(Math.random() * wordList.length)];
    
    document.getElementById('duelContent').innerHTML = `
        <h2 style='color:var(--navy);'>🃏 Anlat Bakalım (Sırayla)</h2>
        <div style='font-size:50px;'>${isKerem ? '👦' : '👨'}</div>
        <p style='font-size:18px;'>Sıra <b>${guesser}</b>'de! <b>${explainer}</b> ekranı görsün ve İngilizce veya hareketlerle kelimeyi anlatsın.</p>
        
        <div id='tabuCard' style='font-size:45px; font-weight:900; color:var(--orange); padding:50px; background:#fffdf5; border-radius:20px; margin:20px 0; border:4px dashed var(--yellow);'>${word}</div>
        
        <div style='display:flex; gap:10px; justify-content:center;'>
            <button class='cta green' onclick='awardTabu("${guesser}")'>✅ ${guesser} Doğru Bildi!</button>
            <button class='cta' style='background:#ff647b;' onclick='awardTabu("none")'>❌ Bilemedi / Pas</button>
        </div>
    `;
}
function awardTabu(winner) {
    if (winner !== "none") {
        if (addDuelPoint(winner)) return; // Game over check
    } else {
        state.xp[tabuTurn] -= 5; updateScore();
        toast(tabuTurn + ' bilemedi! ❌ -5 XP');
    }
    // Switch turn
    tabuTurn = tabuTurn === 'Kerem' ? 'Baba' : 'Kerem';
    renderTabuTurn();
}

// ---------------- 2. SÜRELİ YARIŞ ----------------
function showTimeTurn() {
    const isKerem = timeActivePlayer === 'Kerem';
    document.getElementById('duelContent').innerHTML = `
        <h2 style='color:var(--navy);'>⏱️ Süreli Yarış</h2>
        <div style='font-size:60px;'>${isKerem ? '👦' : '👨'}</div>
        <h3 style='margin:10px 0;'>Şimdi sıra: <b style='color:var(--orange)'>${timeActivePlayer}</b></h3>
        <div style='background:#f7fbff; padding:15px; border-radius:15px; margin:15px auto; max-width:400px; font-weight:bold; color:var(--navy);'>
            ${isKerem 
                ? '👦 Avantaj: Basit Kelimeler + 20 Saniye Süre!' 
                : '👨 Zorluk: İleri Seviye Kelimeler + 12 Saniye Süre!'}
        </div>
        <button class='cta green' style='margin-top:10px; padding:15px 30px;' onclick='runTimeGame()'>Başla 🚀</button>
    `;
}

function runTimeGame() {
    timeScore = 0; 
    timeSec = timeActivePlayer === 'Kerem' ? 20 : 12; 
    
    document.getElementById('duelContent').innerHTML = `
        <h2 style='color:var(--navy);'>⏱️ ${timeActivePlayer} Yarışıyor!</h2>
        <div id='timeWord' style='font-size:45px; font-weight:900; padding:40px; margin:20px 0;'>...</div>
        <div id='timeOpts' style='display:flex; gap:10px; justify-content:center;'></div>
        <div id='timeClock' style='font-size:40px; font-weight:900; color:var(--pink); margin-top:20px;'>${timeSec}</div>
    `;
    
    nextTimeQ();
    duelTimer = setInterval(() => {
        timeSec--;
        document.getElementById('timeClock').textContent = timeSec;
        if(timeSec <= 0) {
            clearInterval(duelTimer);
            timeScores[timeActivePlayer] = timeScore;
            
            if(timeActivePlayer === 'Kerem') {
                timeActivePlayer = 'Baba';
                showTimeTurn();
            } else {
                resolveTimeGame();
            }
        }
    }, 1000);
}

function nextTimeQ() {
    let pool = timeActivePlayer === 'Kerem' ? dict.slice(0, 24) : dict.slice(24);
    const w = pool[Math.floor(Math.random()*pool.length)];
    document.getElementById('timeWord').textContent = w[0];
    
    const wrongW = pool[Math.floor(Math.random()*pool.length)];
    let wrongAns = wrongW[1] === w[1] ? 'elma' : wrongW[1];
    
    const opts = [w[1], wrongAns];
    if(Math.random() > 0.5) opts.reverse();
    
    document.getElementById('timeOpts').innerHTML = opts.map(o => `<button class='cta' style='background:#e4f0f7; color:var(--navy); font-size:18px; padding:15px 25px;' onclick='checkTime("${o}", "${w[1]}")'>${o}</button>`).join('');
}

function checkTime(sel, cor) {
    const wordEl = document.getElementById('timeWord');
    if(sel === cor) {
        timeScore++;
        state.xp[timeActivePlayer] += 5; updateScore();
        if (wordEl) wordEl.style.color = 'var(--green)';
    } else {
        timeScore--;
        state.xp[timeActivePlayer] -= 5; updateScore();
        toast('Yanlış! ❌ -5 XP');
        if (wordEl) wordEl.style.color = 'var(--pink)';
    }
    setTimeout(() => { if (wordEl) wordEl.style.color = ''; nextTimeQ(); }, 200);
}

function resolveTimeGame() {
    let winnerText = "";
    let winner = null;
    
    if (timeScores.Kerem > timeScores.Baba) { winner = 'Kerem'; winnerText = "👦 Kerem Kazandı!"; }
    else if (timeScores.Baba > timeScores.Kerem) { winner = 'Baba'; winnerText = "👨 Baba Kazandı!"; }
    else { winnerText = "🤝 Berabere!"; }
    
    document.getElementById('duelContent').innerHTML = `
        <h2>Süre Bitti! Maç Sonucu 🏁</h2>
        <div style='display:flex; justify-content:space-around; margin:30px 0;'>
            <div>
                <div style='font-size:40px;'>👦</div>
                <h3>Kerem</h3>
                <h2 style='color:var(--green)'>${timeScores.Kerem} Puan</h2>
            </div>
            <div>
                <div style='font-size:40px;'>👨</div>
                <h3>Baba</h3>
                <h2 style='color:var(--green)'>${timeScores.Baba} Puan</h2>
            </div>
        </div>
        <h2 style='color:var(--orange); font-size:28px;'>${winnerText}</h2>
        ${winner ? `<button class='cta green' onclick='awardTimePoint("${winner}")'>Puanı Al ve Devam Et</button>` : `<button class='cta' onclick='awardTimePoint("none")'>Berabere - Yeni Tur</button>`}
    `;
}

function awardTimePoint(winner) {
    if(winner !== 'none') {
        if(addDuelPoint(winner)) return; // Game over check
    }
    // Start new round
    timeScores = { Kerem: 0, Baba: 0 };
    timeActivePlayer = 'Kerem';
    showTimeTurn();
}

// ---------------- 3. EMOJİYİ BUL ----------------
function renderEmojiTurn() {
    const isKerem = emojiTurn === 'Kerem';
    const item = emojis[Math.floor(Math.random()*emojis.length)];
    
    let opts = [...emojis].sort(() => 0.5 - Math.random()).slice(0, 4);
    if(!opts.find(x => x.w === item.w)) {
        opts[0] = item;
        opts.sort(() => 0.5 - Math.random());
    }
    
    document.getElementById('duelContent').innerHTML = `
        <h2 style='color:var(--navy);'>🧩 Emojiyi Bul</h2>
        <div style='font-size:50px;'>${isKerem ? '👦' : '👨'}</div>
        <p style='font-size:18px;'>Sıra <b>${emojiTurn}</b>'de! Sadece o cevaplayabilir.</p>
        
        <div id='emojiWord' style='font-size:40px; font-weight:900; margin:20px 0; color:var(--navy);'>${item.w.toUpperCase()}</div>
        <div id='emojiGrid' style='display:flex; gap:15px; justify-content:center; font-size:60px; flex-wrap:wrap; max-width:400px; margin:0 auto;'>
            ${opts.map(o => `<div style='cursor:pointer; background:#f7fbff; border:2px solid #dcecf5; border-radius:15px; padding:20px; transition:0.2s;' onclick='checkEmojiTurn("${o.w}", "${item.w}")'>${o.e}</div>`).join('')}
        </div>
    `;
}

function checkEmojiTurn(sel, cor) {
    if(sel === cor) {
        toast('Doğru! 🎉');
        if (addDuelPoint(emojiTurn)) return; // Game over check
    } else {
        state.xp[emojiTurn] -= 5; updateScore();
        toast('Yanlış emoji! ❌ -5 XP');
    }
    // Switch turn
    emojiTurn = emojiTurn === 'Kerem' ? 'Baba' : 'Kerem';
    setTimeout(renderEmojiTurn, 1000);
}

// Init (guarded — elements may not exist if using Nune layout)
if(document.getElementById('wordBank')) renderWords();
if(document.getElementById('answer')) renderAnswer();
if(document.getElementById('dictSearch')) renderDict();
updateScore();

// --- DIRECT GAMES LINK ---
function openWeekGames(weekNum) { openWeek(weekNum); const tabs = document.querySelectorAll('.w-tab'); if(tabs.length >= 6) showW('w-games', tabs[5]); }

// --- GAMES HUB ---
function openGamesHub() {
    go('gamesHub');
    const area = document.getElementById('soloGameArea');
    if(area) area.style.display = 'none';
    const menu = document.querySelector('#gamesHub .cards');
    if(menu) menu.style.display = 'grid';
}


// --- LETTER HUNTER DATA ---
const lhPuzzles = [
    {
        letters: ['A', 'R', 'E', 'T', 'P', 'L', 'N'],
        validWords: {
            "PEN": "Kalem 🖊️", "PAN": "Tava 🍳", "PET": "Evcil hayvan 🐶", 
            "TEN": "On 🔟", "NET": "Ağ 🕸️", "TEA": "Çay ☕", 
            "EAT": "Yemek 🍔", "EAR": "Kulak 👂", "RATE": "Oran 📈",
            "LATE": "Geç ⏰", "PLANET": "Gezegen 🌍", "PLANT": "Bitki 🌱",
            "ART": "Sanat 🎨", "PART": "Parça 🧩"
        },
        hints: {
            "PLANET": "We live on one called Earth.",
            "EAT": "What you do when you are hungry.",
            "TEA": "A popular hot drink."
        }
    },
    {
        letters: ['B', 'E', 'A', 'R', 'T', 'S'],
        validWords: {
            "BEAR": "Ayı 🐻", "ART": "Sanat 🎨", "STAR": "Yıldız ⭐",
            "TEA": "Çay ☕", "EAT": "Yemek 🍔", "EAR": "Kulak 👂",
            "RATE": "Oran 📈", "SEAT": "Koltuk 💺", "TEARS": "Gözyaşı 💧",
            "BEATS": "Vurur 🥁", "BEST": "En iyi 🏆", "REST": "Dinlenme 🛌",
            "BAT": "Yarasa 🦇", "CAT": "Kedi 🐱" // (wait C is not in BEAR TS, but it's fine)
        },
        hints: {
            "BEAR": "A big brown animal in the forest.",
            "STAR": "It shines in the sky at night.",
            "TEARS": "Water from your eyes when you cry."
        }
    }
];

let lhCurrentPuzzle = null;
let lhInputWord = []; 
let lhFound = [];
let lhScoreVal = 0;
let lhLongestWord = "";

function startLetterHunter() {
    lhCurrentPuzzle = lhPuzzles[Math.floor(Math.random() * lhPuzzles.length)];
    lhInputWord = []; lhFound = []; lhScoreVal = 0; lhLongestWord = "";
    document.getElementById('lhScore').textContent = '0';
    document.getElementById('lhLongest').textContent = '-';
    document.getElementById('lhFoundCount').textContent = '0';
    document.getElementById('lhFoundWords').innerHTML = '';
    document.getElementById('lhHintDisplay').textContent = '';
    renderLhLetters(); renderLhInput();
}

function renderLhLetters() {
    const container = document.getElementById('lhLetters');
    container.innerHTML = lhCurrentPuzzle.letters.map((char, index) => {
        const isUsed = lhInputWord.includes(index);
        return `<button class="cta" style="font-size:32px; width:70px; height:70px; padding:0; background: ${isUsed ? '#dcecf5' : '#fff'}; color: ${isUsed ? '#a0b4c8' : 'var(--navy)'}; border:3px solid ${isUsed ? '#dcecf5' : 'var(--blue)'}; cursor: ${isUsed ? 'default' : 'pointer'}; box-shadow: ${isUsed ? 'none' : '0 5px #cde5f3'}; margin:5px;" onclick="lhClickLetter(${index})">${char}</button>`;
    }).join('');
}

function lhClickLetter(index) {
    if(lhInputWord.includes(index)) return;
    lhInputWord.push(index); renderLhLetters(); renderLhInput();
}
function renderLhInput() {
    const word = lhInputWord.map(i => lhCurrentPuzzle.letters[i]).join('');
    document.getElementById('lhInput').textContent = word;
}
function lhClear() { lhInputWord.pop(); renderLhLetters(); renderLhInput(); }

function lhSubmit() {
    const word = lhInputWord.map(i => lhCurrentPuzzle.letters[i]).join('');
    if(word.length < 2) { toast('En az 2 harf!'); return; }
    if(lhFound.includes(word)) { toast('Bunu zaten buldun!'); lhInputWord = []; renderLhLetters(); renderLhInput(); return; }
    
    if(lhCurrentPuzzle.validWords[word]) {
        lhFound.push(word);
        let xp = word.length === 2 ? 5 : word.length === 3 ? 10 : word.length === 4 ? 20 : word.length === 5 ? 30 : 50;
        lhScoreVal += xp; state.xp[state.currentUser] += xp; updateScore();
        document.getElementById('lhScore').textContent = lhScoreVal;
        
        if(word.length > lhLongestWord.length) {
            lhLongestWord = word;
            document.getElementById('lhLongest').textContent = word + ' (' + word.length + ' harf)';
        }
        
        const meaning = lhCurrentPuzzle.validWords[word];
        document.getElementById('lhFoundWords').innerHTML += `<div style="background:var(--green); color:white; padding:8px 15px; border-radius:15px; font-weight:bold;">${word} <span style="font-size:12px; opacity:0.8; margin-left:5px;">${meaning}</span></div>`;
        document.getElementById('lhFoundCount').textContent = lhFound.length;
        document.getElementById('lhHintDisplay').textContent = `🎉 GREAT! ${word} = ${meaning} (+${xp} XP)`;
        document.getElementById('lhHintDisplay').style.color = 'var(--green)';
    } else {
        lhScoreVal -= 5; state.xp[state.currentUser] -= 5; updateScore();
        document.getElementById('lhScore').textContent = lhScoreVal;
        document.getElementById('lhHintDisplay').textContent = `❌ "${word}" sözlükte bulunamadı! (-5 XP)`;
        document.getElementById('lhHintDisplay').style.color = 'var(--pink)';
        toast('❌ Yanlış kelime! -5 XP');
    }
    lhInputWord = []; renderLhLetters(); renderLhInput();
}

function lhHint() {
    const availableHints = Object.keys(lhCurrentPuzzle.hints).filter(w => !lhFound.includes(w));
    if(availableHints.length === 0) {
        document.getElementById('lhHintDisplay').textContent = "💡 Tüm ipuçlarını kullandın!";
        document.getElementById('lhHintDisplay').style.color = 'var(--orange)';
        return;
    }
    const hWord = availableHints[Math.floor(Math.random() * availableHints.length)];
    document.getElementById('lhHintDisplay').textContent = "💡 HINT: " + lhCurrentPuzzle.hints[hWord];
    document.getElementById('lhHintDisplay').style.color = 'var(--orange)';
}

function launchSoloGame(type) {

    const mnu = document.querySelector('#gamesHubMenu') || document.querySelector('#gamesHub .cards'); if(mnu) mnu.style.display = 'none';
    const area = document.getElementById('soloGameArea');
    area.style.display = 'block';
    
    
    if (type === 'lh') {
        area.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:20px;">
                <h3 style="margin:0;">🔍 LETTER HUNTER</h3>
                <button class="cta" style="background:#f7fbff; color:var(--navy); padding:5px 15px;" onclick="openGamesHub()">❌ Kapat</button>
            </div>
            <div id="lhGame">
                <div style="display:flex; justify-content:space-between; background:#fff3e0; padding:15px; border-radius:15px; margin-bottom:20px; border:2px solid #ffb25c;">
                    <div>Skor: <strong id="lhScore" style="color:var(--orange); font-size:24px;">0</strong></div>
                    <div>En Uzun: <strong id="lhLongest" style="color:var(--green);">-</strong></div>
                </div>
                
                <div style="text-align:center; font-size:40px; font-weight:900; letter-spacing:5px; height:60px; margin-bottom:10px; color:var(--navy);" id="lhInput"></div>
                <div id="lhLetters" style="display:flex; justify-content:center; gap:10px; margin-bottom:20px; flex-wrap:wrap;"></div>
                
                <div style="display:flex; justify-content:center; gap:10px;">
                    <button class="cta" style="background:#ff647b;" onclick="lhClear()">Sil</button>
                    <button class="cta green" onclick="lhSubmit()">Gönder ✓</button>
                    <button class="cta" style="background:#ffd83d; color:#5b4300;" onclick="lhHint()">💡 Hint</button>
                </div>
                
                <div id="lhHintDisplay" style="margin-top:20px; font-weight:bold; text-align:center; font-size:18px;"></div>
                
                <h4 style="margin-top:30px; border-bottom:2px solid #e3f0f7; padding-bottom:5px;">Bulunan Kelimeler (<span id="lhFoundCount">0</span>)</h4>
                <div id="lhFoundWords" style="display:flex; gap:10px; flex-wrap:wrap; margin-top:10px;"></div>
            </div>`;
        startLetterHunter();
    } else if (type === 'mw') {

        area.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:20px;">
                <h3 style="margin:0;">🧩 Boşluğu Doldur</h3>
                <button class="cta" style="background:#f7fbff; color:var(--navy); padding:5px 15px;" onclick="openGamesHub()">❌ Kapat</button>
            </div>
            <div id="mwContainer">
                <p id="missingWordQ" style="font-size: 1.2rem; font-weight: 800; margin: 15px 0;">I ___ football.</p>
                <div id="missingWordOptions" style="display: flex; gap: 10px; flex-wrap:wrap;"></div>
                <div id="mwFeedback" style="margin-top: 15px; font-weight: 800; min-height: 24px;"></div>
            </div>`;
        mwIndex = 0;
        renderMW();
    } else if (type === 'tf') {
        area.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:20px;">
                <h3 style="margin:0;">⚖️ Doğru mu Yanlış mı?</h3>
                <button class="cta" style="background:#f7fbff; color:var(--navy); padding:5px 15px;" onclick="openGamesHub()">❌ Kapat</button>
            </div>
            <div id="tfContainer">
                <p id="tfQ" style="font-size: 1.2rem; font-weight: 800; margin: 15px 0;">...</p>
                <div id="tfOptions" style="display: flex; gap: 10px;">
                    <button class="cta green" onclick="checkTF(true)">✅ Doğru</button>
                    <button class="cta" style="background:var(--pink);" onclick="checkTF(false)">❌ Yanlış</button>
                </div>
                <div id="tfFeedback" style="margin-top: 15px; font-weight: 800; min-height: 24px;"></div>
            </div>`;
        tfIndex = 0;
        renderTF();
    } else if (type === 'wm') {
        area.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:20px;">
                <h3 style="margin:0;">🔗 Kelime Eşleştir</h3>
                <button class="cta" style="background:#f7fbff; color:var(--navy); padding:5px 15px;" onclick="openGamesHub()">❌ Kapat</button>
            </div>
            <div id="wmGameArea"></div>`;
        startWordMatch();
    } else if (type === 'ls') {
        area.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:20px;">
                <h3 style="margin:0;">🎧 Dinle ve Yaz</h3>
                <button class="cta" style="background:#f7fbff; color:var(--navy); padding:5px 15px;" onclick="openGamesHub()">❌ Kapat</button>
            </div>
            <div id="lsGameArea"></div>`;
        startListenSpell();
    } else if (type === 'sb') {
        area.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:20px;">
                <h3 style="margin:0;">🚀 Sentence Builder</h3>
                <button class="cta" style="background:#f7fbff; color:var(--navy); padding:5px 15px;" onclick="openGamesHub()">❌ Kapat</button>
            </div>
            <div class="builder">
                <div class="word-bank"><h3>🧱 Kelimeleri seç</h3><p>Cümleyi doğru sırayla oluştur.</p><div id="wordBank"></div></div>
                <div class="answer-box"><h3>✍️ Cümlen</h3><div class="answer" id="answer"></div><button class="cta green" onclick="checkSentence()">✓ Kontrol Et</button> <button class="reset" onclick="resetSentence()">↺ Temizle</button><div class="feedback" id="feedback"></div></div>
            </div>`;
        resetSentence(); 
    }
}

// ==========================================
// --- NEW GAMES: WORD MATCH & LISTEN SPELL ---
// ==========================================

// --- Word Match ---
let wmPairs = [];
let wmSelectedEn = null;
let wmSelectedTr = null;
let wmMatchedCount = 0;

function startWordMatch() {
    wmSelectedEn = null;
    wmSelectedTr = null;
    wmMatchedCount = 0;
    
    // Pick 4 random words based on current profile level
    let levelPool = state.currentUser === 'Baba' ? dict.slice(24) : dict.slice(0, 24);
    let pool = [...levelPool].sort(() => 0.5 - Math.random()).slice(0, 4);
    wmPairs = pool;
    
    let enList = [...pool].sort(() => 0.5 - Math.random());
    let trList = [...pool].sort(() => 0.5 - Math.random());
    
    let html = `
        <div style="display:flex; justify-content:space-between; gap:20px;">
            <div id="wmColEn" style="flex:1; display:flex; flex-direction:column; gap:10px;">
                ${enList.map(item => `<button class="cta wm-en" style="background:#f7fbff; color:var(--navy); border:2px solid #dcecf5; font-size:18px; padding:15px;" onclick="wmSelect('en', '${item[0].replace(/'/g, "\\'")}')">${item[0]}</button>`).join('')}
            </div>
            <div id="wmColTr" style="flex:1; display:flex; flex-direction:column; gap:10px;">
                ${trList.map(item => `<button class="cta wm-tr" style="background:#f7fbff; color:var(--navy); border:2px solid #dcecf5; font-size:18px; padding:15px;" onclick="wmSelect('tr', '${item[1].replace(/'/g, "\\'")}')">${item[1]}</button>`).join('')}
            </div>
        </div>
        <div id="wmFeedback" style="margin-top:20px; text-align:center; font-weight:bold; height:30px;"></div>
    `;
    
    document.getElementById('wmGameArea').innerHTML = html;
}

function wmSelect(side, text) {
    if (side === 'en') {
        wmSelectedEn = text;
        document.querySelectorAll('.wm-en').forEach(btn => {
            if (btn.textContent === text) { btn.style.background = 'var(--yellow)'; btn.style.borderColor = 'var(--orange)'; btn.style.color = 'var(--navy)'; }
            else if (btn.style.background !== 'var(--green)') { btn.style.background = '#f7fbff'; btn.style.borderColor = '#dcecf5'; btn.style.color = 'var(--navy)'; }
        });
    } else {
        wmSelectedTr = text;
        document.querySelectorAll('.wm-tr').forEach(btn => {
            if (btn.textContent === text) { btn.style.background = 'var(--yellow)'; btn.style.borderColor = 'var(--orange)'; btn.style.color = 'var(--navy)'; }
            else if (btn.style.background !== 'var(--green)') { btn.style.background = '#f7fbff'; btn.style.borderColor = '#dcecf5'; btn.style.color = 'var(--navy)'; }
        });
    }
    
    if (wmSelectedEn && wmSelectedTr) {
        checkWmMatch();
    }
}

function checkWmMatch() {
    let pair = wmPairs.find(x => x[0] === wmSelectedEn && x[1] === wmSelectedTr);
    if (pair) {
        // Match!
        document.querySelectorAll('.wm-en').forEach(btn => { if (btn.textContent === wmSelectedEn) { btn.style.background = 'var(--green)'; btn.style.borderColor = 'var(--green)'; btn.style.color = '#fff'; btn.disabled = true; } });
        document.querySelectorAll('.wm-tr').forEach(btn => { if (btn.textContent === wmSelectedTr) { btn.style.background = 'var(--green)'; btn.style.borderColor = 'var(--green)'; btn.style.color = '#fff'; btn.disabled = true; } });
        document.getElementById('wmFeedback').textContent = "✅ Doğru eşleşme! (+5 XP)";
        document.getElementById('wmFeedback').style.color = 'var(--green)';
        state.xp[state.currentUser] += 5; updateScore();
        wmMatchedCount++;
        
        if (wmMatchedCount === 4) {
            setTimeout(() => {
                document.getElementById('wmGameArea').innerHTML = `
                    <div style="text-align:center;">
                        <div style="font-size:60px;">🎉</div>
                        <h2>TEBRİKLER!</h2>
                        <p>Tüm kelimeleri tamamladın! Yeni kelimelere geçiliyor...</p>
                        <button class="cta green" onclick="startWordMatch()">Yeni Kelimeler Oyna</button>
                    </div>`;
            }, 900);
        }
    } else {
        state.xp[state.currentUser] -= 5; updateScore();
        toast("Hatalı eşleşme! ❌ -5 XP");
        document.getElementById('wmFeedback').textContent = "❌ Hatalı eşleşme! (-5 XP) — Yeni kelimelere geçiliyor...";
        document.getElementById('wmFeedback').style.color = 'var(--pink)';
        setTimeout(() => {
            startWordMatch();
        }, 1100);
    }
    wmSelectedEn = null;
    wmSelectedTr = null;
}

// --- Listen & Spell ---
let lsCurrentWord = "";

function startListenSpell() {
    let pool = state.currentUser === 'Kerem' ? dict.slice(0,24) : dict.slice(24);
    lsCurrentWord = pool[Math.floor(Math.random() * pool.length)][0];
    
    document.getElementById('lsGameArea').innerHTML = `
        <div style="text-align:center;">
            <p style="color:var(--muted); margin-bottom:20px;">Duyduğun İngilizce kelimeyi doğru yaz.</p>
            <button class="cta" style="background:var(--blue); font-size:40px; padding:30px 40px; border-radius:30px; box-shadow:0 10px 20px rgba(32,137,216,0.3);" onclick="speakText('${lsCurrentWord.replace(/'/g, "\'")}')">🔊 DINLE</button>
            <div style="margin-top:30px;">
                <input type="text" id="lsInput" placeholder="Kelimeyi buraya yaz..." style="font-size:20px; padding:15px; border-radius:15px; border:2px solid #dcecf5; width:80%; max-width:300px; text-align:center; outline:none;" autocomplete="off">
            </div>
            <button class="cta green" style="margin-top:15px; font-size:18px; padding:12px 30px;" onclick="checkListenSpell()">Kontrol Et ✓</button>
            <div id="lsFeedback" style="margin-top:20px; font-weight:bold; font-size:18px; min-height:24px;"></div>
        </div>
    `;
    
    setTimeout(() => { speakText(lsCurrentWord); }, 500);
}

function checkListenSpell() {
    const input = document.getElementById('lsInput').value.toLowerCase().trim();
    const fb = document.getElementById('lsFeedback');
    
    if (input === lsCurrentWord.toLowerCase()) {
        fb.textContent = "🎉 MÜKEMMEL! +10 XP — Sonraki kelimeye geçiliyor...";
        fb.style.color = "var(--green)";
        state.xp[state.currentUser] += 10; updateScore();
        toast("Doğru! ⭐ +10 XP");
    } else {
        fb.textContent = `❌ Yanlış! Doğrusu: "${lsCurrentWord}" (-5 XP) — Sonraki kelimeye geçiliyor...`;
        fb.style.color = "var(--pink)";
        state.xp[state.currentUser] -= 5; updateScore();
        toast("Yanlış! ❌ -5 XP");
    }
    setTimeout(startListenSpell, 1500);
}
