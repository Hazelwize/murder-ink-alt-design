document.querySelector('#toaf').addEventListener('click', toaf);
document.querySelector('#tiger').addEventListener('click', tiger);
document.querySelector('#ice').addEventListener('click', ice);
document.querySelector('#borus').addEventListener('click', borus);
document.querySelector('#tao').addEventListener('click', tao);


const sendou = document.querySelector('iframe')
const avatar = document.querySelector('#photoID')
const ign = document.querySelector('#playerName')
const map =  document.querySelector('#map')
const mode =  document.querySelector('#mode')
const weapon = document.querySelector('#weapon')
const role = document.querySelector('#role')
const secret = document.querySelector('.block-1')


function toaf() {
    sendou.src="https://sendou.ink/u/toaf"
    avatar.src="assets/toaf.png"
    ign.innerText="TOAF"
    role.innerText='Mid-Line'
    map.innerText="Mako Mart"
    mode.innerText='Rainmaker'
    weapon.innerText='Bamboozler'
    secret.style.background = 'none';
    
}

function tiger() {
    sendou.src ="https://sendou.ink/u/488449820600827946";
    avatar.src="assets/tiger.png";
    ign.innerText="TIGER";
    role.innerText='Slayer'
    map.innerText="Walleye Warehouse"
    mode.innerText='Rainmaker'
    weapon.innerText='Hero Roller'
    secret.style.background = 'none';
    
    
}

function ice() {
    sendou.src ="https://sendou.ink/u/icewave";
    avatar.src="assets/ice.png";
    ign.innerText="ICE";
    role.innerText='Slayer'
    map.innerText="Moray Towers"
    mode.innerText='Tower Control'
    weapon.innerText='Splash-o-Matic'
    secret.style.background = 'none';
    
}

function borus() {
    sendou.src="https://sendou.ink/u/421974011283767307";
    avatar.src="assets/borus.png";
    ign.innerText="BORUS";
    role.innerText='Skirmisher'
    map.innerText="Ancho-V Games"
    mode.innerText='Clam Blitz'
    weapon.innerText='n\'Zap 83'
    secret.style.background = 'none';
}

function tao() {
    sendou.src="https://sendou.ink/u/tao";
    avatar.src="assets/Tao.png";
    ign.innerText="TAO";
    role.innerText='Support'
    map.innerText='Wahoo World'
    mode.innerText='Rainmaker'
    weapon.innerText='Enperry Splat Dualies'
    secret.style.background = 'none';
    
}

