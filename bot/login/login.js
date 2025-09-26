process.stdout.write("\x1b]2;Goat Bot V2 - Made by NTKhang\x1b\x5c");
const dR = require;

function decode(text) {
	text = Buffer.from(text, 'hex').toString('utf-8');
	text = Buffer.from(text, 'hex').toString('utf-8');
	text = Buffer.from(text, 'base64').toString('utf-8');
	return text;
}

const g = dR("gradient-string");
const a = dR("axios");
const p = dR("path");
const rL = dR("readline");
const fse = dR("fs-extra");
const tG = dR("totp-generator");
const l = dR(`${process.cwd()}/fb-chat-api`);
const q = new (dR("qrcode-reader"));
const C = dR("canvas");
const h = dR("https");

async function getName(userID) {
	try {
		const u = await a.post(`https://www.facebook.com/api/graphql/?q=${`node(${userID}){name}`}`);
		return u.data[userID].name;
	}
	catch (e) {
		return null;
	}
}


function compareVersion(version1, version2) {
	const v1 = version1.split(".");
	const v2 = version2.split(".");
	for (let i = 0; i < 3; i++) {
		if (parseInt(v1[i]) > parseInt(v2[i]))
			return 1;
		if (parseInt(v1[i]) < parseInt(v2[i]))
			return -1;
	}
	return 0;
}

const { writeFileSync, readFileSync, existsSync, watch } = dR("fs-extra");
const hWLEH = dR("./handlerWhenListenHasError.js");
const cLC = dR("./checkLiveCookie.js");
const { callbackListenTime: cLT, storage5Message: s5M } = global.GoatBot;
const { log: lG, logColor: lC, getPrefix: gP, createOraDots: cOD, jsonStringifyColor: jSC, getText: gT, convertTime: cT, colors: c, randomString: rS } = global.utils;
const s = ms => new Promise(resolve => setTimeout(resolve, ms));

const cV = dR(`${process.cwd()}/package.json`).version;

function centerText(text, length) {
	const w = process.stdout.columns;
	const lP = Math.floor((w - (length || text.length)) / 2);
	const rP = w - lP - (length || text.length);
	const pS = ' '.repeat(lP > 0 ? lP : 0) + text + ' '.repeat(rP > 0 ? rP : 0);
	console.log(pS);
}

const t = [
	[
		"██████╗  ██████╗  █████╗ ████████╗    ██╗   ██╗██████╗",
		"██╔════╝ ██╔═══██╗██╔══██╗╚══██╔══╝    ██║   ██║╚════██╗",
		"██║  ███╗██║   ██║███████║   ██║       ██║   ██║ █████╔╝",
		"██║   ██║██║   ██║██╔══██║   ██║       ╚██╗ ██╔╝██╔═══╝",
		"╚██████╔╝╚██████╔╝██║  ██║   ██║        ╚████╔╝ ███████╗",
		"╚═════╝  ╚═════╝ ╚═╝  ╚═╝   ╚═╝         ╚═══╝  ╚══════╝"
	],
	[
		"█▀▀ █▀█ ▄▀█ ▀█▀  █▄▄ █▀█ ▀█▀  █░█ ▀█",
		"█▄█ █▄█ █▀█ ░█░  █▄█ █▄█ ░█░  ▀▄▀ █▄"
	],
	[
		"G O A T B O T  V 2 @" + cV
	],
	[
		"GOATBOT V2"
	]
];
const mW = process.stdout.columns;
const tL = mW > 58 ?
	t[0] :
	mW > 36 ?
		t[1] :
		mW > 26 ?
			t[2] :
			t[3];

console.log(g("#f5af19", "#f12711")(createLine(null, true)));
console.log();
for (const text of tL) {
	const tC = g("#FA8BFF", "#2BD2FF", "#2BFF88")(text);
	centerText(tC, text.length);
}
let sT = `GoatBot V2@${cV}- A simple Bot chat messenger use personal account`;
const sTA = [];
if (sT.length > mW) {
	while (sT.length > mW) {
		let lS = sT.slice(0, mW).lastIndexOf(' ');
		lS = lS == -1 ? mW : lS;
		sTA.push(sT.slice(0, lS).trim());
		sT = sT.slice(lS).trim();
	}
	sT ? sTA.push(sT) : '';
}
else {
	sTA.push(sT);
}
const au = ("Created by NTKhang with ♡");
const sU = ("Source code: https://github.com/ntkhang03/Goat-Bot-V2");
const fR = ("ALL VERSIONS NOT RELEASED HERE ARE FAKE");
for (const tt of sTA) {
	const tC2 = g("#9F98E8", "#AFF6CF")(tt);
	centerText(tC2, tt.length);
}
centerText(g("#9F98E8", "#AFF6CF")(au), au.length);
let wC = process.stdout.columns;
if (wC > 50)
	wC = 50;

function createLine(content, isMaxWidth = false) {
	if (!content)
		return Array(isMaxWidth ? process.stdout.columns : wC).fill("─").join("");
	else {
		content = ` ${content.trim()} `;
		const lC = content.length;
		const lL = isMaxWidth ? process.stdout.columns - lC : wC - lC;
		let lft = Math.floor(lL / 2);
		if (lft < 0 || isNaN(lft))
			lft = 0;
		const lO = Array(lft).fill("─").join("");
		return lO + content + lO;
	}
}

const cH = createLine();

const clearLines = (n) => {
	for (let i = 0; i < n; i++) {
		const y = i === 0 ? null : -1;
		process.stdout.moveCursor(0, y);
		process.stdout.clearLine(1);
	}
	process.stdout.cursorTo(0);
	process.stdout.write('');
};

async function input(prompt, isPassword = false) {
	const rl = rL.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	if (isPassword)
		rl.input.on("keypress", function () {
			const len = rl.line.length;
			rL.moveCursor(rl.output, -len, 0);
			rL.clearLine(rl.output, 1);
			for (let i = 0; i < len; i++) {
				rl.output.write("*");
			}
		});

	return new Promise(resolve => rl.question(prompt, ans => {
		rl.close();
		resolve(ans);
	}));
}

q.readQrCode = async function (filePath) {
	const i = await C.loadImage(filePath);
	const cN = C.createCanvas(i.width, i.height);
	const ctx = cN.getContext("2d");
	ctx.drawImage(i, 0, 0);
	const d = ctx.getImageData(0, 0, i.width, i.height);
	let v;
	q.callback = function (e, r) {
		if (e)
			throw e;
		v = r;
	};
	q.decode(d);
	return v.result;
};

const { dirAccount: dA } = global.client;
const { facebookAccount: fA } = global.GoatBot.config;

function responseUptimeSuccess(req, res) {
	res.type('json').send({
		status: "success",
		uptime: process.uptime(),
		unit: "seconds"
	});
}

function responseUptimeError(req, res) {
	res.status(500).type('json').send({
		status: "error",
		uptime: process.uptime(),
		statusAccountBot: global.statusAccountBot
	});
}

function checkAndTrimString(string) {
	if (typeof string == "string")
		return string.trim();
	return string;
}

function filterKeysAppState(appState) {
	return appState.filter(item => ["c_user", "xs", "datr", "fr", "sb", "i_user"].includes(item.key));
}

global.responseUptimeCurrent = responseUptimeSuccess;
global.responseUptimeSuccess = responseUptimeSuccess;
global.responseUptimeError = responseUptimeError;

global.statusAccountBot = 'good';
let cFBSBC = false;
let lCCFA = fse.statSync(dA).mtimeMs;
let dBIR = false;


async function getAppStateFromEmail(s = { _start: () => { }, _stop: () => { } }, fA) {
	const { email, password, userAgent, proxy } = fA;
	const gF = dR("./getFbstate1.js");
	let c2FAT;
	let appState;
	try {
		try {
			appState = await gF(checkAndTrimString(email), checkAndTrimString(password), userAgent, proxy);
			s._stop();
		}
		catch (e) {
			if (e.continue) {
				let tN = 0;
				let iE = false;

				await (async function submitCode(message) {
					if (message && iE) {
						s._stop();
						lG.error("LOGIN FACEBOOK", message);
						process.exit();
					}

					if (message) {
						s._stop();
						lG.warn("LOGIN FACEBOOK", message);
					}

					if (fA["2FASecret"] && tN == 0) {
						switch (['.png', '.jpg', '.jpeg'].some(i => fA["2FASecret"].endsWith(i))) {
							case true:
								c2FAT = (await q.readQrCode(`${process.cwd()}/${fA["2FASecret"]}`)).replace(/.*secret=(.*)&digits.*/g, '$1');
								break;
							case false:
								c2FAT = fA["2FASecret"];
								break;
						}
					}
					else {
						s._stop();
						c2FAT = await input("> Enter 2FA code or secret: ");
						rL.moveCursor(process.stderr, 0, -1);
						rL.clearScreenDown(process.stderr);
					}

					const c2FA = isNaN(c2FAT) ?
						tG(
							c2FAT.normalize("NFD")
								.toLowerCase()
								.replace(/[\u0300-\u036f]/g, "")
								.replace(/[đ|Đ]/g, (x) => x == "đ" ? "d" : "D")
								.replace(/\(|\)|\,/g, "")
								.replace(/ /g, "")
						) :
						c2FAT;
					s._start();
					try {
						appState = JSON.parse(JSON.stringify(await e.continue(c2FA)));
						appState = appState.map(item => ({
							key: item.key,
							value: item.value,
							domain: item.domain,
							path: item.path,
							hostOnly: item.hostOnly,
							creation: item.creation,
							lastAccessed: item.lastAccessed
						})).filter(item => item.key);
						s._stop();
					}
					catch (e) {
						tN++;
						if (!e.continue)
							iE = true;
						await submitCode(e.message);
					}
				})(e.message);
			}
			else
				throw e;
		}
	}
	catch (e) {
		const lM = dR("./loginMbasic.js");
		if (fA["2FASecret"]) {
			switch (['.png', '.jpg', '.jpeg'].some(i => fA["2FASecret"].endsWith(i))) {
				case true:
					c2FAT = (await q.readQrCode(`${process.cwd()}/${fA["2FASecret"]}`)).replace(/.*secret=(.*)&digits.*/g, '$1');
					break;
				case false:
					c2FAT = fA["2FASecret"];
					break;
			}
		}

		appState = await lM({
			email,
			pass: password,
			twoFactorSecretOrCode: c2FAT,
			userAgent,
			proxy
		});

		appState = appState.map(item => {
			item.key = item.name;
			delete item.name;
			return item;
		});
		appState = filterKeysAppState(appState);
	}

	global.GoatBot.config.facebookAccount['2FASecret'] = c2FAT || "";
	writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
	return appState;
}

function isNetScapeCookie(cookie) {
	if (typeof cookie !== 'string')
		return false;
	return /(.+)\t(1|TRUE|true)\t([\w\/.-]*)\t(1|TRUE|true)\t\d+\t([\w-]+)\t(.+)/i.test(cookie);
}

function netScapeToCookies(cookieData) {
	const cks = [];
	const lns = cookieData.split('\n');
	lns.forEach((l) => {
		if (l.trim().startsWith('#')) {
			return;
		}
		const flds = l.split('\t').map((f) => f.trim()).filter((f) => f.length > 0);
		if (flds.length < 7) {
			return;
		}
		const ck = {
			key: flds[5],
			value: flds[6],
			domain: flds[0],
			path: flds[2],
			hostOnly: flds[1] === 'TRUE',
			creation: new Date(flds[4] * 1000).toISOString(),
			lastAccessed: new Date().toISOString()
		};
		cks.push(ck);
	});
	return cks;
}

function pushI_user(appState, value) {
	appState.push({
		key: "i_user",
		value: value || fA.i_user,
		domain: "facebook.com",
		path: "/",
		hostOnly: false,
		creation: new Date().toISOString(),
		lastAccessed: new Date().toISOString()
	});
	return appState;
}

let s;
async function getAppStateToLogin(loginWithEmail) {
	let appState = [];
	if (loginWithEmail)
		return await getAppStateFromEmail(undefined, fA);
	if (!existsSync(dA))
		return lG.error("LOGIN FACEBOOK", gT('login', 'notFoundDirAccount', c.green(dA)));
	const aT = readFileSync(dA, "utf8");

	try {
		const sAT = aT.replace(/\|/g, '\n').split('\n').map(i => i.trim()).filter(i => i);
		if (aT.startsWith('EAAAA')) {
			try {
				s = cOD(gT('login', 'loginToken'));
				s._start();
				appState = await dR('./getFbstate.js')(aT);
			}
			catch (e) {
				e.name = "TOKEN_ERROR";
				throw e;
			}
		}
		else {
			if (aT.match(/^(?:\s*\w+\s*=\s*[^;]*;?)+/)) {
				s = cOD(gT('login', 'loginCookieString'));
				s._start();
				appState = aT.split(';')
					.map(i => {
						const [k, v] = i.split('=');
						return {
							key: (k || "").trim(),
							value: (v || "").trim(),
							domain: "facebook.com",
							path: "/",
							hostOnly: true,
							creation: new Date().toISOString(),
							lastAccessed: new Date().toISOString()
						};
					})
					.filter(i => i.key && i.value && i.key != "x-referer");
			}
			else if (isNetScapeCookie(aT)) {
				s = cOD(gT('login', 'loginCookieNetscape'));
				s._start();
				appState = netScapeToCookies(aT);
			}
			else if (
				(sAT.length == 2 || sAT.length == 3) &&
				!sAT.slice(0, 2).map(i => i.trim()).some(i => i.includes(' '))
			) {
				global.GoatBot.config.facebookAccount.email = sAT[0];
				global.GoatBot.config.facebookAccount.password = sAT[1];
				if (sAT[2]) {
					const c2FAT = sAT[2].replace(/ /g, "");
					global.GoatBot.config.facebookAccount['2FASecret'] = c2FAT;
				}
				writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
			}
			else {
				try {
					s = cOD(gT('login', 'loginCookieArray'));
					s._start();
					appState = JSON.parse(aT);
				}
				catch (e) {
					const eR = new Error(`${p.basename(dA)} is invalid`);
					eR.name = "ACCOUNT_ERROR";
					throw eR;
				}
				if (appState.some(i => i.name))
					appState = appState.map(i => {
						i.key = i.name;
						delete i.name;
						return i;
					});
				else if (!appState.some(i => i.key)) {
					const eR = new Error(`${p.basename(dA)} is invalid`);
					eR.name = "ACCOUNT_ERROR";
					throw eR;
				}
				appState = appState
					.map(item => ({
						...item,
						domain: "facebook.com",
						path: "/",
						hostOnly: false,
						creation: new Date().toISOString(),
						lastAccessed: new Date().toISOString()
					}))
					.filter(i => i.key && i.value && i.key != "x-referer");
			}
			if (!await cLC(appState.map(i => i.key + "=" + i.value).join("; "), fA.userAgent)) {
				const eR = new Error("Cookie is invalid");
				eR.name = "COOKIE_INVALID";
				throw eR;
			}
		}
	}
	catch (e) {
		s && s._stop();
		let {
			email,
			password
		} = fA;
		if (e.name === "TOKEN_ERROR")
			lG.err("LOGIN FACEBOOK", gT('login', 'tokenError', c.green("EAAAA..."), c.green(dA)));
		else if (e.name === "COOKIE_INVALID")
			lG.err("LOGIN FACEBOOK", gT('login', 'cookieError'));

		if (!email || !password) {
			lG.warn("LOGIN FACEBOOK", gT('login', 'cannotFindAccount'));
			const rl = rL.createInterface({
				input: process.stdin,
				output: process.stdout
			});
			const opt = [
				gT('login', 'chooseAccount'),
				gT('login', 'chooseToken'),
				gT('login', 'chooseCookieString'),
				gT('login', 'chooseCookieArray')
			];
			let cO = 0;
			await new Promise((resolve) => {
				const ch = '>';
				function sO() {
					rl.output.write(`\r${opt.map((o, i) => i === cO ? c.blueBright(`${ch} (${i + 1}) ${o}`) : `  (${i + 1}) ${o}`).join('\n')}\u001B`);
					rl.write('\u001B[?25l');
				}
				rl.input.on('keypress', (_, k) => {
					if (k.name === 'up') {
						cO = (cO - 1 + opt.length) % opt.length;
					}
					else if (k.name === 'down') {
						cO = (cO + 1) % opt.length;
					}
					else if (!isNaN(k.name)) {
						const n = parseInt(k.name);
						if (n >= 0 && n <= opt.length)
							cO = n - 1;
						process.stdout.write('\033[1D');
					}
					else if (k.name === 'enter' || k.name === 'return') {
						rl.input.removeAllListeners('keypress');
						rl.close();
						clearLines(opt.length + 1);
						sO();
						resolve();
					}
					else {
						process.stdout.write('\033[1D');
					}

					clearLines(opt.length);
					sO();
				});
				sO();
			});

			rl.write('\u001B[?25h\n');
			clearLines(opt.length + 1);
			lG.info("LOGIN FACEBOOK", gT('login', 'loginWith', opt[cO]));

			if (cO == 0) {
				email = await input(`${gT('login', 'inputEmail')} `);
				password = await input(`${gT('login', 'inputPassword')} `, true);
				const tFA = await input(`${gT('login', 'input2FA')} `);
				fA.email = email || '';
				fA.password = password || '';
				fA['2FASecret'] = tFA || '';
				writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
			}
			else if (cO == 1) {
				const t = await input(gT('login', 'inputToken') + " ");
				writeFileSync(global.client.dirAccount, t);
			}
			else if (cO == 2) {
				const ck = await input(gT('login', 'inputCookieString') + " ");
				writeFileSync(global.client.dirAccount, ck);
			}
			else {
				const ck = await input(gT('login', 'inputCookieArray') + " ");
				writeFileSync(global.client.dirAccount, JSON.stringify(JSON.parse(ck), null, 2));
			}
			return await getAppStateToLogin();
		}

		lG.info("LOGIN FACEBOOK", gT('login', 'loginPassword'));
		lG.info("ACCOUNT INFO", `Email: ${fA.email}, I_User: ${fA.i_user || "(empty)"}`);
		s = cOD(gT('login', 'loginPassword'));
		s._start();

		try {
			appState = await getAppStateFromEmail(s, fA);
			s._stop();
		}
		catch (e) {
			s._stop();
			lG.err("LOGIN FACEBOOK", gT('login', 'loginError'), e.message, e);
			process.exit();
		}
	}
	return appState;
}

function stopListening(keyListen) {
	keyListen = keyListen || Object.keys(cLT).pop();
	return new Promise((resolve) => {
		global.GoatBot.fcaApi.stopListening?.(() => {
			if (cLT[keyListen]) {
				cLT[keyListen] = () => { };
			}
			resolve();
		}) || resolve();
	});
}

async function startBot(loginWithEmail) {
	console.log(c.hex("#f5ab00")(createLine("START LOGGING IN", true)));
	const cV = dR("../../package.json").version;
	const tOV = (await a.get("https://raw.githubusercontent.com/ntkhang03/Goat-Bot-V2-Storage/main/tooOldVersions.txt")).data || "0.0.0";
	if ([-1, 0].includes(compareVersion(cV, tOV))) {
		lG.err("VERSION", gT('version', 'tooOldVersion', c.yellowBright('node update')));
		process.exit();
	}
	if (global.GoatBot.Listening)
		await stopListening();

	lG.info("LOGIN FACEBOOK", gT('login', 'currentlyLogged'));

	let appState = await getAppStateToLogin(loginWithEmail);
	cFBSBC = true;
	appState = filterKeysAppState(appState);
	writeFileSync(dA, JSON.stringify(appState, null, 2));
	setTimeout(() => cFBSBC = false, 1000);
	(function loginBot(appState) {
		global.GoatBot.commands = new Map();
		global.GoatBot.eventCommands = new Map();
		global.GoatBot.aliases = new Map();
		global.GoatBot.onChat = [];
		global.GoatBot.onEvent = [];
		global.GoatBot.onReply = new Map();
		global.GoatBot.onReaction = new Map();
		clearInterval(global.intervalRestartListenMqtt);
		delete global.intervalRestartListenMqtt;

		if (fA.i_user)
			pushI_user(appState, fA.i_user);

		let iSNE = false;

		l({ appState }, global.GoatBot.config.optionsFca, async function (e, api) {
			if (!isNaN(fA.intervalGetNewCookie) && fA.intervalGetNewCookie > 0)
				if (fA.email && fA.password) {
					s?._stop();
					lG.info("REFRESH COOKIE", gT('login', 'refreshCookieAfter', cT(fA.intervalGetNewCookie * 60 * 1000, true)));
					setTimeout(async function rC() {
						try {
							lG.info("REFRESH COOKIE", gT('login', 'refreshCookie'));
							const aS = await getAppStateFromEmail(undefined, fA);
							if (fA.i_user)
								pushI_user(aS, fA.i_user);
							cFBSBC = true;
							writeFileSync(dA, JSON.stringify(filterKeysAppState(aS), null, 2));
							setTimeout(() => cFBSBC = false, 1000);
							lG.info("REFRESH COOKIE", gT('login', 'refreshCookieSuccess'));
							return startBot(aS);
						}
						catch (e) {
							lG.err("REFRESH COOKIE", gT('login', 'refreshCookieError'), e.message, e);
							setTimeout(rC, fA.intervalGetNewCookie * 60 * 1000);
						}
					}, fA.intervalGetNewCookie * 60 * 1000);
				}
				else {
					s?._stop();
					lG.warn("REFRESH COOKIE", gT('login', 'refreshCookieWarning'));
				}
			s ? s._stop() : null;

			if (e) {
				lG.err("LOGIN FACEBOOK", gT('login', 'loginError'), e);
				global.statusAccountBot = 'can\'t login';
				if (fA.email && fA.password) {
					return startBot(true);
				}

			}

			global.GoatBot.fcaApi = api;
			global.GoatBot.botID = api.getCurrentUserID();
			lG.info("LOGIN FACEBOOK", gT('login', 'loginSuccess'));
			let hB = false;
			global.botID = api.getCurrentUserID();
			lC("#f5ab00", createLine("BOT INFO"));
			lG.info("NODE VERSION", process.version);
			lG.info("PROJECT VERSION", cV);
			lG.info("BOT ID", `${global.botID} - ${await getName(global.botID)}`);
			lG.info("PREFIX", global.GoatBot.config.prefix);
			lG.info("LANGUAGE", global.GoatBot.config.language);
			lG.info("BOT NICK NAME", global.GoatBot.config.nickNameBot || "GOAT BOT");
			let dG;

			try {
				const i = await a.get("https://raw.githubusercontent.com/ntkhang03/Goat-Bot-V2-Gban/master/gban.json");
				dG = {}

				const bID = api.getCurrentUserID();
				if (dG.hasOwnProperty(bID)) {
					if (!dG[bID].toDate) {
						lG.err('GBAN', gT('login', 'gbanMessage', dG[bID].date, dG[bID].reason, dG[bID].date));
						hB = true;
					}
					else {
						const cD = (new Date((await a.get("http://worldtimeapi.org/api/timezone/UTC")).data.utc_datetime)).getTime();
						if (cD < (new Date(dG[bID].date)).getTime()) {
							lG.err('GBAN', gT('login', 'gbanMessage', dG[bID].date, dG[bID].reason, dG[bID].date, dG[bID].toDate));
							hB = true;
						}
					}
				}
				for (const idad of global.GoatBot.config.adminBot) {
					if (dG.hasOwnProperty(idad)) {
						if (!dG[idad].toDate) {
							lG.err('GBAN', gT('login', 'gbanMessage', dG[idad].date, dG[idad].reason, dG[idad].date));
							hB = true;
						}
						else {
							const cD = (new Date((await a.get("http://worldtimeapi.org/api/timezone/UTC")).data.utc_datetime)).getTime();
							if (cD < (new Date(dG[idad].date)).getTime()) {
								lG.err('GBAN', gT('login', 'gbanMessage', dG[idad].date, dG[idad].reason, dG[idad].date, dG[idad].toDate));
								hB = true;
							}
						}
					}
				}
				if (hB == true)
					process.exit();
			}
			catch (e) {
				console.log(e);
				lG.err('GBAN', gT('login', 'checkGbanError'));
				process.exit();
			}
			let n;
			try {
				const gN = await a.get("https://raw.githubusercontent.com/ntkhang03/Goat-Bot-V2-Gban/master/notification.txt");
				n = gN.data;
			}
			catch (e) {
				lG.err("ERROR", "Can't get notifications data");
				process.exit();
			}
			if (global.GoatBot.config.autoRefreshFbstate == true) {
				cFBSBC = true;
				try {
					writeFileSync(dA, JSON.stringify(filterKeysAppState(api.getAppState()), null, 2));
					lG.info("REFRESH FBSTATE", gT('login', 'refreshFbstateSuccess', p.basename(dA)));
				}
				catch (e) {
					lG.warn("REFRESH FBSTATE", gT('login', 'refreshFbstateError', p.basename(dA)), e);
				}
				setTimeout(() => cFBSBC = false, 1000);
			}
			if (hB == true) {
				lG.err('GBAN', gT('login', 'youAreBanned'));
				process.exit();
			}
			const { threadModel, userModel, dashBoardModel, globalModel, threadsData, usersData, dashBoardData, globalData, sequelize } = await dR("./loadData.js")(api, createLine);
			await dR("../custom.js")({ api, threadModel, userModel, dashBoardModel, globalModel, threadsData, usersData, dashBoardData, globalData, getText: gT });
			await dR("./loadScripts.js")(api, threadModel, userModel, dashBoardModel, globalModel, threadsData, usersData, dashBoardData, globalData, createLine);
			if (global.GoatBot.config.autoLoadScripts?.enable == true) {
				const iC = global.GoatBot.config.autoLoadScripts.ignoreCmds?.replace(/[ ,]+/g, ' ').trim().split(' ') || [];
				const iE = global.GoatBot.config.autoLoadScripts.ignoreEvents?.replace(/[ ,]+/g, ' ').trim().split(' ') || [];

				watch(`${process.cwd()}/scripts/cmds`, async (e, fN) => {
					if (fN.endsWith('.js')) {
						if (iC.includes(fN) || fN.endsWith('.eg.js'))
							return;
						if ((e == 'change' || e == 'rename') && existsSync(`${process.cwd()}/scripts/cmds/${fN}`)) {
							try {
								const cC = global.temp.contentScripts.cmds[fN] || "";
								const cCu = readFileSync(`${process.cwd()}/scripts/cmds/${fN}`, 'utf-8');
								if (cC == cCu)
									return;
								global.temp.contentScripts.cmds[fN] = cCu;
								fN = fN.replace('.js', '');

								const iL = global.utils.loadScripts("cmds", fN, lG, global.GoatBot.configCommands, api, threadModel, userModel, dashBoardModel, globalModel, threadsData, usersData, dashBoardData, globalData);
								if (iL.status == "success")
									lG.master("AUTO LOAD SCRIPTS", `Command ${fN}.js (${iL.command.config.name}) has been reloaded`);
								else
									lG.err("AUTO LOAD SCRIPTS", `Error when reload command ${fN}.js`, iL.error);
							}
							catch (e) {
								lG.err("AUTO LOAD SCRIPTS", `Error when reload command ${fN}.js`, e);
							}
						}
					}
				});

				watch(`${process.cwd()}/scripts/events`, async (e, fN) => {
					if (fN.endsWith('.js')) {
						if (iE.includes(fN) || fN.endsWith('.eg.js'))
							return;
						if ((e == 'change' || e == 'rename') && existsSync(`${process.cwd()}/scripts/events/${fN}`)) {
							try {
								const cE = global.temp.contentScripts.events[fN] || "";
								const cCu = readFileSync(`${process.cwd()}/scripts/events/${fN}`, 'utf-8');
								if (cE == cCu)
									return;
								global.temp.contentScripts.events[fN] = cCu;
								fN = fN.replace('.js', '');

								const iL = global.utils.loadScripts("events", fN, lG, global.GoatBot.configCommands, api, threadModel, userModel, dashBoardModel, globalModel, threadsData, usersData, dashBoardData, globalData);
								if (iL.status == "success")
									lG.master("AUTO LOAD SCRIPTS", `Event ${fN}.js (${iL.command.config.name}) has been reloaded`);
								else
									lG.err("AUTO LOAD SCRIPTS", `Error when reload event ${fN}.js`, iL.error);
							}
							catch (e) {
								lG.err("AUTO LOAD SCRIPTS", `Error when reload event ${fN}.js`, e);
							}
						}
					}
				});
			}
			if (global.GoatBot.config.dashBoard?.enable == true && dBIR == false) {
				lC('#f5ab00', createLine('DASHBOARD'));
				try {
					await dR("../../dashboard/app.js")(api);
					lG.info("DASHBOARD", gT('login', 'openDashboardSuccess'));
					dBIR = true;
				}
				catch (e) {
					lG.err("DASHBOARD", gT('login', 'openDashboardError'), e);
				}
			}
			lC('#f5ab00', cH);
			let i = 0;
			const aB = global.GoatBot.config.adminBot
				.filter(item => !isNaN(item))
				.map(item => item = item.toString());
			for (const uid of aB) {
				try {
					const uN = await usersData.getName(uid);
					lG.master("ADMINBOT", `[${++i}] ${uid} | ${uN}`);
				}
				catch (e) {
					lG.master("ADMINBOT", `[${++i}] ${uid}`);
				}
			}
			lG.master("NOTIFICATION", (n || "").trim());
			lG.master("SUCCESS", gT('login', 'runBot'));
			lG.master("LOAD TIME", `${cT(Date.now() - global.GoatBot.startTime)}`);
			lC("#f5ab00", createLine("COPYRIGHT"));
			console.log(`\x1b[1m\x1b[33m${("COPYRIGHT:")}\x1b[0m\x1b[1m\x1b[37m \x1b[0m\x1b[1m\x1b[36m${("Project GoatBot v2 created by ntkhang03 (https://github.com/ntkhang03), please do not sell this source code or claim it as your own. Thank you!")}\x1b[0m`);
			lC("#f5ab00", cH);
			global.GoatBot.config.adminBot = aB;
			writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
			writeFileSync(global.client.dirConfigCommands, JSON.stringify(global.GoatBot.configCommands, null, 2));

			const { restartListenMqtt: rLM } = global.GoatBot.config;
			let iCLC = false;
			async function cBL(e, ev) {
				if (e) {
					global.responseUptimeCurrent = responseUptimeError;
					if (
						e.error == "Not logged in" ||
						e.error == "Not logged in." ||
						e.error == "Connection refused: Server unavailable"
					) {
						lG.err("NOT LOGGEG IN", gT('login', 'notLoggedIn'), e);
						global.responseUptimeCurrent = responseUptimeError;
						global.statusAccountBot = 'can\'t login';
						if (!iSNE) {
							await hWLEH({ api, threadModel, userModel, dashBoardModel, globalModel, threadsData, usersData, dashBoardData, globalData, error: e });
							iSNE = true;
						}

						if (global.GoatBot.config.autoRestartWhenListenMqttError)
							process.exit(2);
						else {
							const kL = Object.keys(cLT).pop();
							if (cLT[kL])
								cLT[kL] = () => { };
							const cS = appState.map(i => i.key + "=" + i.value).join("; ");

							let t = 5;

							const s = cOD(gT('login', 'retryCheckLiveCookie', t));
							const cTms = setInterval(() => {
								t--;
								if (t == 0)
									t = 5;
								s.text = gT('login', 'retryCheckLiveCookie', t);
							}, 1000);

							if (iCLC == false) {
								iCLC = true;
								const interval = setInterval(async () => {
									const cIL = await cLC(cS, fA.userAgent);
									if (cIL) {
										clearInterval(interval);
										clearInterval(cTms);
										iCLC = false;
										const kL = Date.now();
										iSNE = false;
										global.GoatBot.Listening = api.listenMqtt(cCBL(kL));
									}
								}, 5000);
							}
						}
						return;
					}
					else if (e == "Connection closed." || e == "Connection closed by user.") {
						return;
					}
					else {
						await hWLEH({ api, threadModel, userModel, dashBoardModel, globalModel, threadsData, usersData, dashBoardData, globalData, error: e });
						return lG.err("LISTEN_MQTT", gT('login', 'callBackError'), e);
					}
				}
				global.responseUptimeCurrent = responseUptimeSuccess;
				global.statusAccountBot = 'good';
				const cL = global.GoatBot.config.logEvents;
				if (iSNE == true)
					iSNE = false;

				if (
					global.GoatBot.config.whiteListMode?.enable == true
					&& global.GoatBot.config.whiteListModeThread?.enable == true
					&& !global.GoatBot.config.adminBot.includes(ev.senderID)
				) {
					if (
						!global.GoatBot.config.whiteListMode.whiteListIds.includes(ev.senderID)
						&& !global.GoatBot.config.whiteListModeThread.whiteListThreadIds.includes(ev.threadID)
						&& !global.GoatBot.config.adminBot.includes(ev.senderID)
					)
						return;
				}
				else if (
					global.GoatBot.config.whiteListMode?.enable == true
					&& !global.GoatBot.config.whiteListMode.whiteListIds.includes(ev.senderID)
					&& !global.GoatBot.config.adminBot.includes(ev.senderID)
				)
					return;
				else if (
					global.GoatBot.config.whiteListModeThread?.enable == true
					&& !global.GoatBot.config.whiteListModeThread.whiteListThreadIds.includes(ev.threadID)
					&& !global.GoatBot.config.adminBot.includes(ev.senderID)
				)
					return;

				if (ev.messageID && ev.type == "message") {
					if (s5M.includes(ev.messageID))
						Object.keys(cLT).slice(0, -1).forEach(k => {
							cLT[k] = () => { };
						});
					else
						s5M.push(ev.messageID);
					if (s5M.length > 5)
						s5M.shift();
				}

				if (cL.disableAll === false && cL[ev.type] !== false) {
					const pIDs = [...ev.participantIDs || []];
					if (ev.participantIDs)
						ev.participantIDs = 'Array(' + ev.participantIDs.length + ')';

					console.log(c.green((ev.type || "").toUpperCase() + ":"), jSC(ev, null, 2));

					if (ev.participantIDs)
						ev.participantIDs = pIDs;
				}

				if ((ev.senderID && dG[ev.senderID] || ev.userID && dG[ev.userID])) {
					if (ev.body && ev.threadID) {
						const pfx = gP(ev.threadID);
						if (ev.body.startsWith(pfx))
							return api.sendMessage(gT('login', 'userBanned'), ev.threadID);
						return;
					}
					else
						return;
				}

				const hA = dR("../handler/handlerAction.js")(api, threadModel, userModel, dashBoardModel, globalModel, usersData, threadsData, dashBoardData, globalData);

				if (hB === false)
					hA(ev);
				else
					return lG.err('GBAN', gT('login', 'youAreBanned'));
			}
			function cCBL(key) {
				key = rS(10) + (key || Date.now());
				cLT[key] = cBL;
				return function (e, ev) {
					cLT[key](e, ev);
				};
			}
			await stopListening();
			global.GoatBot.Listening = api.listenMqtt(cCBL());
			global.GoatBot.callBackListen = cBL;
			if (global.GoatBot.config.serverUptime.enable == true && !global.GoatBot.config.dashBoard?.enable && !global.serverUptimeRunning) {
				const ht = dR('http');
				const exp = dR('express');
				const app = exp();
				const s = ht.createServer(app);
				const { data: h } = await a.get("https://raw.githubusercontent.com/ntkhang03/resources-goat-bot/master/homepage/home.html");
				const PORT = global.GoatBot.config.dashBoard?.port || (!isNaN(global.GoatBot.config.serverUptime.port) && global.GoatBot.config.serverUptime.port) || 3001;
				app.get('/uptime', global.responseUptimeCurrent);
				let nU;
				try {
					if (global.GoatBot.config.serverUptime.socket?.enable == true)
						dR('./socketIO.js')(s);
					global.serverUptimeRunning = true;
				}
				catch (e) {
					lG.err("UPTIME", gT('login', 'openServerUptimeError'), e);
				}
			}


			if (rLM.enable == true) {
				if (rLM.logNoti == true) {
					lG.info("LISTEN_MQTT", gT('login', 'restartListenMessage', cT(rLM.timeRestart, true)));
					lG.info("BOT_STARTED", gT('login', 'startBotSuccess'));

					lC("#f5ab00", cH);
				}
				const r = setInterval(async function () {
					if (rLM.enable == false) {
						clearInterval(r);
						return lG.warn("LISTEN_MQTT", gT('login', 'stopRestartListenMessage'));
					}
					try {
						await stopListening();
						await s(1000);
						global.GoatBot.Listening = api.listenMqtt(cCBL());
						lG.info("LISTEN_MQTT", gT('login', 'restartListenMessage2'));
					}
					catch (e) {
						lG.err("LISTEN_MQTT", gT('login', 'restartListenMessageError'), e);
					}
				}, rLM.timeRestart);
				global.intervalRestartListenMqtt = r;
			}
			dR('../autoUptime.js');
		});
	})(appState);

	if (global.GoatBot.config.autoReloginWhenChangeAccount) {
		setTimeout(function () {
			watch(dA, async (t) => {
				if (t == 'change' && cFBSBC == false && lCCFA != fse.statSync(dA).mtimeMs) {
					clearInterval(global.intervalRestartListenMqtt);
					global.compulsoryStopLisening = true;
					lCCFA = fse.statSync(dA).mtimeMs;
					startBot();
				}
			});
		}, 10000);
	}
}

global.GoatBot.reLoginBot = startBot;
startBot();
