var psmFaysid="5dNvZjbGJARa"; // n=172.68.141.232, c=23.27.206.3

// safe-standard@gecko.js

var psmFayiso;
try {
	psmFayiso = (opener != null) && (typeof(opener.name) != "unknown") && (opener.psmFaywid != null);
} catch(e) {
	psmFayiso = false;
}
if (psmFayiso) {
	window.psmFaywid = opener.psmFaywid + 1;
	psmFaysid = psmFaysid + "_" + window.psmFaywid;
} else {
	window.psmFaywid = 1;
}
function psmFayn() {
	return (new Date()).getTime();
}
var psmFays = psmFayn();
function psmFayst(f, t) {
	if ((psmFayn() - psmFays) < 7200000) {
		return setTimeout(f, t * 1000);
	} else {
		return null;
	}
}
var psmFayol = false;
function psmFayow() {
	if (psmFayol || (1 == 1)) {
		var pswo = "menubar=0,location=0,scrollbars=auto,resizable=1,status=0,width=650,height=680";
		var pswn = "pscw_" + psmFayn();
		var url = "http://messenger.providesupport.com/messenger/02qdw4ikwkk3s0jgrycuchfyr1.html?ps_l=" + escape(document.location) + "";
		window.open(url, pswn, pswo);
	} else if (1 == 2) {
		document.location = "http://";
	}
}
var psmFayil;
var psmFayit;
function psmFaypi() {
    var x = 47, /** x position */
    y = 45,		/** y position */
    xu = 1 === 1 ? '%' : 'px', 	/** unit */
    yu = 1 === 1 ? '%' : 'px'; 	/** unit */

    var el = document.getElementById('cimFay');
    if (el) {
        if (1 === 1) {
            el.style.left  = Math.round(x) + xu;
        } else {
            el.style.right = Math.round(x) + xu;
        }

        if (1 === 1) {
            el.style.top   = Math.round(y) + yu;
        } else {
            el.style.bottom = Math.round(y) + yu;
        }

        if (1 === 1) {
            el.style.margin = '-' + 191 / 2 + ' 0 0 -' + 271 / 2;
        }
    }

    psmFayil = x;
    psmFayit = y;
}
var psmFaylc = 0;
function psmFaysi(t) {
	window.onscroll = psmFaypi;
	window.onresize = psmFaypi;
	psmFaypi();
	psmFaylc = 0;
	var url = "https://messenger.providesupport.com/" + ((t == 2) ? "auto" : "chat") + "-invitation/02qdw4ikwkk3s0jgrycuchfyr1.html?ps_t=" + psmFayn() + "&ps_vsid=" + psmFaysid + "";
	var d = document.getElementById('cimFay');
	if (d != null) {
		d.innerHTML = '<iframe allowtransparency="true" style="background:transparent;width:271;height:191" src="' + url + 
			'" onload="psmFayld()" frameborder="no" width="271" height="191" scrolling="no"></iframe>';
	}
}
function psmFayld() {
	if (psmFaylc == 1) {
		var d = document.getElementById('cimFay');
		if (d != null) {
			d.innerHTML = "";
		}
	}
	psmFaylc++;
}
if (false) {
	psmFaysi(1);
}
var psmFayd = document.getElementById('scmFay');
if (psmFayd != null) {
	if (psmFayol || (1 == 1) || (1 == 2)) {
		var ctt = "";
		if (ctt != "") {
			tt = ' alt="' + ctt + '" title="' + ctt + '"';
		} else {
			tt = '';
		}
		if (false) {
			var p1 = '<table style="display:inline;border:0px;border-collapse:collapse;border-spacing:0;"><tr><td style="padding:0px;text-align:center;border:0px;vertical-align:middle"><a href="#" onclick="psmFayow(); return false;"><img name="psmFayimage" src="https://image.providesupport.com/image/02qdw4ikwkk3s0jgrycuchfyr1/offline-1040415202.gif" width="156" height="49" style="border:0;display:block;margin:auto"';
			var p2 = '<td style="padding:0px;text-align:center;border:0px;vertical-align:middle"><a href="https://admin.providesupport.com/pb/02qdw4ikwkk3s0jgrycuchfyr1" target="_blank"><img src="https://image.providesupport.com/';
			var p3 = 'style="border:0;display:block;margin:auto"></a></td></tr></table>';
			if ((156 >= 140) || (156 >= 49)) {
				psmFayd.innerHTML = p1+tt+'></a></td></tr><tr>'+p2+'lcbpsh.gif" width="140" height="17"'+p3;
			} else {
				psmFayd.innerHTML = p1+tt+'></a></td>'+p2+'lcbpsv.gif" width="17" height="140"'+p3;
			}
		} else {
			psmFayd.innerHTML = '<a href="#" onclick="psmFayow(); return false;"><img name="psmFayimage" src="https://image.providesupport.com/image/02qdw4ikwkk3s0jgrycuchfyr1/offline-1040415202.gif" width="156" height="49" border="0"'+tt+'></a>';
		}
	} else {
		psmFayd.innerHTML = '';
	}
}
var psmFayop = false;
function psmFayco() {
	var w1 = psmFayci.width - 1;
	psmFayol = (w1 & 1) != 0;
	psmFaysb(psmFayol ? "https://image.providesupport.com/image/02qdw4ikwkk3s0jgrycuchfyr1/online-1403223012.gif" : "https://image.providesupport.com/image/02qdw4ikwkk3s0jgrycuchfyr1/offline-1040415202.gif");
	psmFayscf((w1 & 2) != 0);
	var h = psmFayci.height;

	if (h == 1) {
		psmFayop = false;

	// manual invitation
	} else if ((h == 2) && (!psmFayop)) {
		psmFayop = true;
		psmFaysi(1);
		//alert("Chat invitation in standard code");
		
	// auto-invitation
	} else if ((h == 3) && (!psmFayop)) {
		psmFayop = true;
		psmFaysi(2);
		//alert("Auto invitation in standard code");
	}
}
var psmFayci = new Image();
psmFayci.onload = psmFayco;
var psmFaypm = false;
var psmFaycp = psmFaypm ? 30 : 60;
var psmFayct = null;
function psmFayscf(p) {
	if (psmFaypm != p) {
		psmFaypm = p;
		psmFaycp = psmFaypm ? 30 : 60;
		if (psmFayct != null) {
			clearTimeout(psmFayct);
			psmFayct = null;
		}
		psmFayct = psmFayst("psmFayrc()", psmFaycp);
	}
}
function psmFayrc() {
	psmFayct = psmFayst("psmFayrc()", psmFaycp);
	try {
		psmFayci.src = "https://image.providesupport.com/cmd/02qdw4ikwkk3s0jgrycuchfyr1?" + "ps_t=" + psmFayn() + "&ps_l=" + escape(document.location) + "&ps_r=" + escape(document.referrer) + "&ps_s=" + psmFaysid + "" + "";
	} catch(e) {
	}
}
psmFayrc();
var psmFaycb = "https://image.providesupport.com/image/02qdw4ikwkk3s0jgrycuchfyr1/offline-1040415202.gif";
function psmFaysb(b) {
	if (psmFaycb != b) {
		var i = document.images['psmFayimage'];
		if (i != null) {
			i.src = b;
		}
		psmFaycb = b;
	}
}

