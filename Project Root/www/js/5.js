function sonuc_getir() {if(gercek_g_semptomlardizisi.length==0){document.getElementById("sonuclistesi").value = "Semptom/Bulgu ekleyiniz...";}else{var sonuclardizisi = new Array();
// Tüm semptomları yaz
for(x=0; x<gercek_g_semptomlardizisi.length; x++){if(gercek_g_semptomlardizisi[x]=="nefes darlığı"){for(y=0; y<nefes_darligi.length; y++){sonuclardizisi.push(nefes_darligi[y]); }}}
for(x=0; x<gercek_g_semptomlardizisi.length; x++){ if(gercek_g_semptomlardizisi[x]=="siyanoz"){for(y=0; y<siyanoz.length; y++){sonuclardizisi.push(siyanoz[y]); }}}
for(x=0; x<gercek_g_semptomlardizisi.length; x++){if(gercek_g_semptomlardizisi[x]=="santral siyanoz"){for(y=0; y<santral_siyanoz.length; y++){sonuclardizisi.push(santral_siyanoz[y]); }}}
for(x=0; x<gercek_g_semptomlardizisi.length; x++){if(gercek_g_semptomlardizisi[x]=="periferik siyanoz"){for(y=0; y<periferik_siyanoz.length; y++){sonuclardizisi.push(periferik_siyanoz[y]); }}}
for(x=0; x<gercek_g_semptomlardizisi.length; x++){if(gercek_g_semptomlardizisi[x]=="ateş"){for(y=0; y<ates.length; y++){sonuclardizisi.push(ates[y]); }}}
for(x=0; x<gercek_g_semptomlardizisi.length; x++){if(gercek_g_semptomlardizisi[x]=="karın ağrısı"){for(y=0; y<karin_agrisi.length; y++){sonuclardizisi.push(karin_agrisi[y]); }}}
//------------------------------------------------------------------------------------------------
var yenidizi = new Array(sonuclardizisi.length);
for(i=0; i<sonuclardizisi.length; i++){yenidizi[i]=new Array(2);
if(sonuclardizisi[i]!="Silindi"){yenidizi[i][0]=sonuclardizisi[i];
yenidizi[i][1]=1;sonuclardizisi[i]="Silindi"; 
for(c=0; c<sonuclardizisi.length; c++){if(sonuclardizisi[c]==yenidizi[i][0]){sonuclardizisi[c]="Silindi"; 
yenidizi[i][1] += 1;}else{}}}else{}}  var yenidizi2 = new Array(yenidizi.length);
for(tarayan=0; tarayan<yenidizi.length; tarayan++) {yenidizi2[tarayan] = new Array(2); if(yenidizi[tarayan][0]!= null || undefined) {yenidizi2[tarayan][0] = yenidizi[tarayan][0];yenidizi2[tarayan][1] = yenidizi[tarayan][1]; } else{}}
for(tara2=1; tara2<yenidizi2.length+1; tara2++) {if(yenidizi2[yenidizi2.length - tara2][0]== null || undefined) {yenidizi2[yenidizi2.length - tara2].splice(0,1);yenidizi2[yenidizi2.length - tara2].splice(1,1); } else{}}
for(siralayaci=0; siralayaci<yenidizi2.length + 1; siralayaci++) {yenidizi2.sort(function(x,y){return y[1]-x[1]}); }
var sirali_sonuclar_dizisi = new Array(yenidizi2.length); 
for(yz=0; yz<yenidizi2.length; yz++){sirali_sonuclar_dizisi.push("- " + yenidizi2[yz][0] + "(" + yenidizi2[yz][1] + ")");}
function diziyi_temizle(actual){var temizdizi = new Array();for(var i = 0; i < actual.length; i++){if(actual[i]){temizdizi.push(actual[i]);}}return temizdizi;}
for(i=1; i<sirali_sonuclar_dizisi.length + 1; i++){if(sirali_sonuclar_dizisi[sirali_sonuclar_dizisi.length-i] == "- undefined(undefined)"){delete sirali_sonuclar_dizisi[sirali_sonuclar_dizisi.length-i];}}var sirali_sonuclar_dizisi2 = new Array();sirali_sonuclar_dizisi2 = diziyi_temizle(sirali_sonuclar_dizisi);

// sirali_sonuclar_dizisi2[0] = sirali_sonuclar_dizisi2[0].replace(' ', '');

function yazdirici (){ var buraya = document.getElementById("sonuclistesi"); buraya.value = sirali_sonuclar_dizisi2.join("\n");}; yazdirici();

// document.getElementById("sonuclistesi").value = sirali_sonuclar_dizisi2.toString();	
// document.getElementById("bilgiveuyari").value = "Bilgi ve uyarılar...";	
document.getElementById("hakkindaveuyari").value = "Hakkında, Kullanım Koşulları, Nasıl Kullanılır..."; }}