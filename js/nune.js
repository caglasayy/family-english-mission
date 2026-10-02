// Nune V2 Controller
function nGo(panelId, btnEl) {
    document.querySelectorAll('.n-panel').forEach(p => p.style.display = 'none');
    document.getElementById('pnl-' + panelId).style.display = 'block';
    if(btnEl) {
        document.querySelectorAll('.nav-tabs button').forEach(b => b.classList.remove('active'));
        btnEl.classList.add('active');
    }
    if(panelId === 'dict') renderDict(); // call original app.js function
}

// Override openGamesHub for Nune UI
function openGamesHub() {
    nGo('games', document.getElementById('navGames'));
    const area = document.getElementById('soloGameArea');
    if(area) area.style.display = 'none';
    const menu = document.querySelector('#gamesHubMenu');
    if(menu) menu.style.display = 'grid';
}

function nUpdateScore() {
    document.getElementById('nKeremXP').textContent = state.xp.Kerem;
    document.getElementById('nBabaXP').textContent = state.xp.Baba;
}
setInterval(nUpdateScore, 1000);

// Nune Chat Logic
const nuneChats = [
    { text: 'Merhaba! Ben NUNE 👋<br>Bugün seninle İngilizce öğreneceğiz!<br><br>Hazır mısın?', btns: [{t: 'Evet, hazırım! 🚀', action: 1}, {t: 'Biraz daha izleyeyim', action: 2}] },
    { text: 'Harika! Önce Video Bölümlerinden <b>1. Meet Nune!</b> videosunu izleyerek başlayalım.', btns: [{t: 'Tamam, başlıyorum!', action: 3}] },
    { text: 'Sorun değil, sen ne zaman istersen buradayım! 💖', btns: [{t: 'Şimdi hazırım!', action: 1}] },
    { text: 'Videoyu izledikten sonra Oyunlar sekmesinden <b>Kelime Eşleştirme</b> oynamayı unutma! 🎮', btns: [{t: 'Oyunlara Git', action: 4}] }
];

function nChat(step) {
    const chat = nuneChats[step];
    document.getElementById('nChatText').innerHTML = chat.text;
    document.getElementById('nChatBtns').innerHTML = chat.btns.map(b => {
        let style = b.action===1 ? "background:#fff6c7; border-color:var(--yellow); color:var(--navy);" : "";
        return `<button class="chat-btn" style="${style}" onclick="nChatAction(${b.action})">${b.t}</button>`;
    }).join('');
}

function nChatAction(action) {
    if(action === 1) nChat(1);
    else if(action === 2) nChat(2);
    else if(action === 3) nChat(3);
    else if(action === 4) openGamesHub();
}

// Intercept setProfile to update UI
const originalSetProfile = setProfile;
window.setProfile = function(name) {
    originalSetProfile(name);
    // Update active state on badges
    document.querySelectorAll('.profile-badge').forEach(b => b.style.borderColor = 'var(--border)');
    if(name === 'Kerem') {
        document.querySelectorAll('.profile-badge')[0].style.borderColor = 'var(--pink)';
    } else {
        document.querySelectorAll('.profile-badge')[1].style.borderColor = 'var(--pink)';
    }
}
// Set initial
setTimeout(() => window.setProfile('Kerem'), 500);
