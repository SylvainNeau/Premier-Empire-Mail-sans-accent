// ==UserScript==
// @name         Premier Empire Mail sans accent
// @namespace    http://your.homepage/
// @version      0.1
// @description  Supprime les caracteres chiants dans la liste de diffusion des mails pour Premier Empire
// @author       Sylvain Néau
// @match        http://www.premier-empire.net/jeu/
// @match        http://www.premier-empire.net/jeu/courrier.php
// @grant        none
// ==/UserScript==

function $(id) { return document.getElementById(id) }

var tete = document.getElementsByTagName("head");

var uw = (this.unsafeWindow) ? this.unsafeWindow : window;

newScript = document.createElement('script');
newScript.appendChild(document.createTextNode(ReplaceIt + ';'));
(document.head).appendChild(newScript);

var fenMail = document.getElementById('formCourrier');
newImg = document.createElement('img');
newImg.setAttribute('src','../images/profil.png');
newImg.setAttribute('class','imgButton');
newImg.setAttribute('onmouseover','montre(\'<b>Remplacer les caract de merde</b>\')\;');
newImg.setAttribute('onmouseout','cache();');
newImg.setAttribute('onclick','ReplaceIt ();');
fenMail.appendChild(newImg);


function ReplaceIt (){
    var listDiff = document.getElementById('txtDestinataire');
    var MyStr = listDiff.value;
    //console.log(MyStr);
    
    var tabremp = {"&Ccedil;" : "Ç","&#256;" : "Ā","&#257;" : "ā","&#258;" : "Ă","&#259;" : "ă","&#260;" : "Ą","&#261;" : "ą","&#262;" : "Ć","&#263;" : "ć","&#264;" : "Ĉ","&#265;" : "ĉ","&#268;" : "Č","&#269;" : "č","&#270;" : "Ď","&#271;" : "ď","&#272;" : "Đ","&#273;" : "đ","&#274;" : "Ē","&#275;" : "ē","&#280;" : "Ę","&#281;" : "ę","&#282;" : "Ě","&#283;" : "ě","&#284;" : "Ĝ","&#285;" : "ĝ","&#286;" : "Ğ","&#287;" : "ğ","&#290;" : "Ģ","&#291;" : "ģ","&#292;" : "Ĥ","&#293;" : "ĥ","&#296;" : "Ĩ","&#297;" : "ĩ","&#298;" : "Ī","&#299;" : "ī","&#304;" : "İ","&#305;" : "ı","&#308;" : "Ĵ","&#309;" : "ĵ","&#310;" : "Ķ","&#311;" : "ķ","&#312;" : "ĸ","&#313;" : "Ĺ","&#314;" : "ĺ","&#315;" : "Ļ","&#316;" : "ļ","&#317;" : "Ľ","&#318;" : "ľ","&#321;" : "Ł","&#322;" : "ł","&#323;" : "Ń","&#324;" : "ń","&#325;" : "Ņ","&#326;" : "ņ","&#327;" : "Ň","&#328;" : "ň","&#330;" : "Ŋ","&#331;" : "ŋ","&#336;" : "Ő","&#337;" : "ő","&#340;" : "Ŕ","&#341;" : "ŕ","&#342;" : "Ŗ","&#343;" : "ŗ","&#344;" : "Ř","&#345;" : "ř","&#346;" : "Ś","&#347;" : "ś","&#348;" : "Ŝ","&#349;" : "ŝ","&#350;" : "Ş","&#351;" : "ş","&#352;" : "Š","&#353;" : "š","&#354;" : "Ţ","&#355;" : "ţ","&#356;" : "Ť","&#357;" : "ť","&#358;" : "Ŧ","&#359;" : "ŧ","&#360;" : "Ũ","&#361;" : "ũ","&#362;" : "Ū","&#363;" : "ū","&#364;" : "Ŭ","&#365;" : "ŭ","&#366;" : "Ů","&#367;" : "ů","&#368;" : "Ű","&#369;" : "ű","&#376;" : "Ÿ","&#377;" : "Ź","&#378;" : "ź","&#379;" : "Ż","&#380;" : "ż","&#381;" : "Ž","&#382;" : "ž","&#8470;" : "№","&Aacute;" : "Á","&aacute;" : "á","&Acirc;" : "Â","&acirc;" : "â","&AElig;" : "Æ","&aelig;" : "æ","&Agrave;" : "À","&agrave;" : "à","&Aring;" : "Å","&aring;" : "å","&Atilde;" : "Ã","&atilde;" : "ã","&Auml;" : "Ä","&auml;" : "ä","&bull;" : "•","&Ccedil;" : "Ç","&ccedil;" : "ç","&copy;" : "©","&dagger;" : "†","&deg;" : "°","&Eacute;" : "É","&eacute;" : "é","&Ecirc;" : "Ê","&ecirc;" : "ê","&Egrave;" : "È","&egrave;" : "è","&ETH;" : "Ð","&eth;" : "ð","&Euml;" : "Ë","&euml;" : "ë","&euro;" : "€","&Iacute;" : "Í","&iacute;" : "í","&Icirc;" : "Î","&icirc;" : "î","&iexcl;" : "¡","&Igrave;" : "Ì","&igrave;" : "ì","&iquest;" : "¿","&Iuml;" : "Ï","&iuml;" : "ï","&laquo;" : "«","&mdash;" : "—","&micro;" : "µ","&middot;" : "·","&ndash;" : "–","&Ntilde;" : "Ñ","&ntilde;" : "ñ","&Oacute;" : "Ó","&oacute;" : "ó","&Ocirc;" : "Ô","&ocirc;" : "ô","&OElig;" : "Œ","&oelig;" : "œ","&Ograve;" : "Ò","&ograve;" : "ò","&ordf;" : "ª","&ordm;" : "º","&Oslash;" : "Ø","&oslash;" : "ø","&Otilde;" : "Õ","&otilde;" : "õ","&Ouml;" : "Ö","&ouml;" : "ö","&permil;" : "‰","&pound;" : "£","&raquo;" : "»","&reg;" : "®","&szlig;" : "ß","&THORN;" : "Þ","&thorn;" : "þ","&trade;" : "™","&Uacute;" : "Ú","&uacute;" : "ú","&Ucirc;" : "Û","&ucirc;" : "û","&Ugrave;" : "Ù","&ugrave;" : "ù","&uml;" : "ö","&Uuml;" : "Ü","&uuml;" : "ü","&Yacute;" : "Ý","&yuml;" : "ÿ"};

    var listRempDiff = "";
    
    var txtDestinataire = document.getElementById ("txtDestinataire");
	var tabDestinataires = txtDestinataire.value.split (";");
    txtDestinataire.value = "";
    var y;
    tabDestinataires.forEach(function(y) { 
        //console.log(y);
        var p = String.fromCharCode(65533);
        var tabFragDest = y.split(p);
        //console.log("Fragment 1 : " + tabFragDest[0] + " Fragment 2 : " + tabFragDest[1]);
        if (tabFragDest[1] == undefined){
            listRempDiff += tabFragDest[0];
            listRempDiff += ";";
            txtDestinataire.value += tabFragDest[0];
            txtDestinataire.value += ";";
        } else {
            var data = "nom=" + tabFragDest[0];
	
			//nouvelle connexion
			var xhr_object = setNewXMLHttpRequest();
			if (xhr_object == null) return;
	
			//on fait le traitement
			xhr_object.open("POST", "courrier_getDestinataire.php", true); 
			xhr_object.onreadystatechange = function() { 
	   			if(xhr_object.readyState == 4){
	   				var reponse = xhr_object.responseText;
                    if  (reponse == ""){
	   					console.log("none");
                    }else{
	   					//on affiche le contenu
						var NewTabFragDest = xhr_object.responseText;
                        var TabNewTabFragDest = NewTabFragDest.split ("'");
                        var cherche = TabNewTabFragDest[5].match(/&.{4,8};/gi);
                        var remplacement = TabNewTabFragDest[5].replace(cherche,tabremp[cherche]);
                        listRempDiff += remplacement;
            			listRempDiff += ";";
                        txtDestinataire.value += remplacement;
            			txtDestinataire.value += ";";
					}
	   			} 
			}
			xhr_object.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr_object.send(data);
        }
        
    });
}
