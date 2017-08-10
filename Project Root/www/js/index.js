var semptomlardizisi = new Array("nefes darlığı","siyanoz","santral siyanoz","periferik siyanoz", "ağız kuruluğu", "ateş", "bulantı","halsizlik", "karın ağrısı", "kusma", "polidipsi", "poliüri");
var girilensemptomlardizisi = new Array();	var gercek_g_semptomlardizisi = new Array();	</script>
<script type="text/javascript">	function icerme(a, obj){var tekrar=0; for (var x = 0; x < a.length; x++) {if (a[x] === obj) {tekrar++;}}if (tekrar==0) {return false;} else{return true;}}</script>
<script type="text/javascript">
function semptomekleyici(){if(gercek_g_semptomlardizisi.length==0){document.getElementById("bilgiveuyari").value = "Bilgi ve uyarılar...";if(icerme(semptomlardizisi,document.getElementById("semptomgir").value)==true){girilensemptomlardizisi.push(document.getElementById("semptomgir").value);gercek_g_semptomlardizisi.push(document.getElementById("semptomgir").value);
document.getElementById("girilensemptomlarlistesi").value = girilensemptomlardizisi.toString();}}
else{document.getElementById("bilgiveuyari").value = "Bilgi ve uyarılar...";if(icerme(gercek_g_semptomlardizisi,document.getElementById("semptomgir").value)==false && icerme(semptomlardizisi,document.getElementById("semptomgir").value)==true ){{girilensemptomlardizisi.push(document.getElementById("semptomgir").value); gercek_g_semptomlardizisi.push(document.getElementById("semptomgir").value); document.getElementById("girilensemptomlarlistesi").value = girilensemptomlardizisi.toString(); }}} 
function yazdirici2 (){ var buraya = document.getElementById("girilensemptomlarlistesi"); buraya.value = girilensemptomlardizisi.join("\n");}; 
yazdirici2();
sonuc_getir();}
function semptomcikarici(){if(icerme(semptomlardizisi,document.getElementById("semptomcikar").value) == true){if(icerme(gercek_g_semptomlardizisi,document.getElementById("semptomcikar").value) == true){var mekan = gercek_g_semptomlardizisi.indexOf(document.getElementById("semptomcikar").value);
gercek_g_semptomlardizisi.splice(mekan,1); girilensemptomlardizisi.splice(mekan,1);
document.getElementById("bilgiveuyari").value = "'" + document.getElementById("semptomcikar").value + "'" + " listeden çıkarıldı.";
document.getElementById("girilensemptomlarlistesi").value = girilensemptomlardizisi.toString();}else{document.getElementById("bilgiveuyari").value = "Bu semptom zaten girilmemiş.";}}else{document.getElementById("bilgiveuyari").value = "Böyle bir semptom ya da bulgu yoktur.";} 
function yazdirici3 (){ var buraya = document.getElementById("girilensemptomlarlistesi"); buraya.value = girilensemptomlardizisi.join("\n");}; 
yazdirici3();
sonuc_getir();}



var nefes_darligi = new Array("KOAH","Kronik Bronşit","Amfizem","Tip A Amfizem","Tip B Amfizem","Astım","Status Astmatikus","Astımda Aspirin Kullanımı","Astımda Beta Bloker Kullanımı","Pnömoni","Akut Bronşit","Akciğer Tüberkülozu","Kalp Yetersizliği","Sol Kalp Yetersizliği","Akut Sol Kalp Yetersizliği","Konjestif Kalp Yetersizliği","Pulmoner Venöz Hipertansiyon","Akut Pulmoner Ödem","Kardiyojenik Akut Pulmoner Ödem","Nonkardiyak Akut Pulmoner Ödem","ARDS","Pulmoner Hipertansiyon","Primer Pulmoner Hipertansiyon","Sekonder Pulmoner Hipertansiyon","Akut Pulmoner Hipertansiyon","Pulmoner Emboli","Multipl Pulmoner Emboli","Bronşektazi","Atelektazi","Obstrüktif Atelektazi","Kontraksiyon Atelektazisi","Kompresyon Atelektazisi","Plevral Efüzyon","Pnömotoraks","Travmatik Pnömotoraks","Spontan Pnömotoraks","Eozinofilik Pnömoni","Poliarteritis Nodosa","İnsektisid Zehirlenmesi","Kolinerjik İlaç Zehirlenmesi","Yabancı Cisim Aspirasyonu",
"Bronş Kanseri","Bronş Adenomu","Karsinoid Tümör","Akciğer Kanseri","Akciğere Kanser Metastazı","Lenfanjitis Karsinomatoza","Lenfoma","Malign LAP","LAP","Koyu ve Yapışkan Balgam","Kistik Fibrozis","İnterstisyel Akciğer Hastalıkları","Alerjik Alveolit","Çiftçi Akciğeri","Kuş Besleyicisi Akciğeri","Alerjik Bronkopulmoner Aspergilloz","Löffler Sendromu","Kronik Eozinofilik Pnömoni","Hipereozinofilik Sendrom","Churg-Strauss Sendromu","Pnömokonyoz","Kömür İşçisi Pnömokonyozu","Silikozis","Asbestozis","Berilyozis","Siderozis","Sarkoidoz","Wegener Granülomatozu","Goodpasture Sendromu","İdiyopatik Pulmoner Hemosideroz","Bissinozis","Anjina Pektoris","Fallot Tetralojisi","Atriyal Miksoma","Retrofaringeal Abse","Farinksi İnfiltre Eden Tümör","Akut Larenjit","Larinks Spazmı","Alerjik Larinks Ödemi","Akut Epiglottit","İrritan Gaz Solunması","Larinks Sifilizi","Larinks Tüberkülozu","Larinks Tümörü","Larinks Travması",
"Endotrakeal Tüp Nedenli Larinks Stenozu","Bulber Paralizi","Psödobulber Paralizi","Glottis Disfonksiyonu","Guatr","Hashimato Tiroiditi","Tiroid Kanseri","Aort Anevrizması","Çift Aort Yayı","Hodgkin Hastalığı","Mediastinal Hodgkin Hastalığı","Non-Hodgkin Lenfoma","Mediastinal Lenfoma","Mediasten Tümörleri","Metastatik Lenf Bezleri","Özofagus Kanseri","Ankilozan Spondilit","Kifoskolyoz","Pektus Ekskavatum","Poliomiyelit","Guillain Barre Sendromu","Motor Nöron Hastalığı","Miyastenia Gravis","Hipopotasemik Paralizi","Frenik Sinir Paralizisi","Diyafragmatik Herni","Obezite","Pnömoperitoneum","İntraabdominal Tümör","İntraabdominal Kist","Gebelik","Assit","Meteorizm","Barbitürat Kullanımı","Opioid Kullanımı","Bazı Anesteziklerin Kullanımı","Beyin Sapı Hastalıkları","CO Zehirlenmesi","Methemoglobinemi","Sülfhemoglobinemi","Düşük Atmosferik Oksijen Basıncı","Yüksek İrtifa","Akut Dağ Hastalığı","Kronik Dağ hastalığı","Monge Hastalığı",
"Ateş","Pulmoner Alveoler Proteinoz","Kaplan Sendromu","Romatoid Artrit","Sistemik Lupus Eritematozus","Progresif Sistemik Skleroz","Sistemik Skleroz","Skleroderma","İdiyopatik Pulmoner Fibrozis","Hamman-Rich Sendromu","Radyasyon Fibrozu","Pakiplörit","Fibrotoraks","Anemi","Demir eksikliği Anemisi","Pernisyöz Anemi","Hipertiroidi","İlaçlara Bağlı Pulmoner Fibrozis","Busulfan Kullanımı","Nitrofurantoin Kullanımı","Bleomisin Kullanımı","Metotreksat Kullanımı","Nitrozüre Kullanımı","Prokarbazin Kullanımı","Siklofosfamit Kullanımı","Amiodaron Kullanımı","Uzun Süreli Oksijen İnhalasyonu Kullanımı","Yüksek Konsantrasyonlu Oksijen Kullanımı","Prokainamid Kullanımı","İzoniazid Kullanımı","Para Aminosalisilik Asit Kullanımı","Hidralazin Kullanımı","Altın Tuzu Kullanımı","Allopürinol Kullanımı","İlaçlara Bağlı Eozinofilik Pnömoni","Sülfonamid Kullanımı","Penisilin Kullanımı","Klorpropamid Kullanımı","Tiazid Kullanımı",
"Aspirin Kullanımı","Fenitoin Kullanımı","Karbamazepin Kullanımı","NSAİİ Kullanımı","TAD Kullanımı","Psikojenik Dispne","Nörosirkülatuar Asteni","Hiperventilasyon Sendromu");
var siyanoz = new Array("Pnömoni","Akut Pulmoner Ödem","ARDS", "KOAH","Amfizem","Kronik Bronşit","Bronş Kanseri","Yabancı Cisim Aspirasyonu","Akut Sol Kalp Yetersizliği", "Sol Kalp Yetersizliği", "Kalp Yetersizliği","AV Şant","Fallot Tetralojisi","Büyük Arterlerin Transpozisyonu","Tek Ventrikül","Truncus Arteriosus","Ebstein Anomalisi","Pulmoner Atrezi","Mitral Atrezi","Triküspit Atrezisi","EisenmengerSendromu", "Pulmoner AV Fistül","Methemoglobinemi","Sülfhemoglobinemi","Akut Dağ Hastalığı","Yüksek İrtifa","Düşük Atmosferik Oksijen Basıncı","Hemoglobinopati","Kansas Hemoglobini","Reynaud Fenomeni","Reynaud Hastalığı","Sekonder Reynaud Fenomeni","Skleroderma","Sistemik Skleroz","Konjestif Kalp Yetersizliği","Kalp Debisi Düşmesi ve Venöz Staz","Mitral Darlığı","Şok","Tromboflebit","Polisitemi","Akrosiyanoz");
var santral_siyanoz = new Array("Pnömoni","Akut Pulmoner Ödem","ARDS", "KOAH","Amfizem","Kronik Bronşit","Bronş Kanseri","Yabancı Cisim Aspirasyonu","Konjestif Kalp Yetersizliği","Akut Sol Kalp Yetersizliği", "Sol Kalp Yetersizliği", "Kalp Yetersizliği","AV Şant","Fallot Tetralojisi","Büyük Arterlerin Transpozisyonu","Tek Ventrikül","Truncus Arteriosus","Ebstein Anomalisi","Pulmoner Atrezi","Mitral Atrezi","Triküspit Atrezisi","EisenmengerSendromu", "Pulmoner AV Fistül","Methemoglobinemi","Sülfhemoglobinemi","Akut Dağ Hastalığı","Yüksek İrtifa","Düşük Atmosferik Oksijen Basıncı");
var periferik_siyanoz = new Array("Hemoglobinopati","Kansas Hemoglobini","Reynaud Fenomeni","Reynaud Hastalığı","Sekonder Reynaud Fenomeni","Skleroderma","Sistemik Skleroz","Konjestif Kalp Yetersizliği","Kalp Debisi Düşmesi ve Venöz Staz","Mitral Darlığı","Şok","Tromboflebit","Polisitemi","Akrosiyanoz");
var ates = new Array("Gastroenterit", "Üsye", "Bruselloz","FMF", "Erişkin Still Hastalığı");
var karin_agrisi = new Array("Akut Apandisit","Gastroenterit","Gastrit","Crohn","FMF");



 function sonuc_getir() {if(gercek_g_semptomlardizisi.length==0){document.getElementById("sonuclistesi").value = "Semptom/Bulgu ekleyiniz...";}else{var sonuclardizisi = new Array();
// Tüm semptomları yaz
for(x=0; x<gercek_g_semptomlardizisi.length; x++){if(gercek_g_semptomlardizisi[x]=="nefes darlığı"){for(y=0; y<nefes_darligi.length; y++){sonuclardizisi.push(nefes_darligi[y]); }}}
for(x=0; x<gercek_g_semptomlardizisi.length; x++){ if(gercek_g_semptomlardizisi[x]=="siyanoz"){for(y=0; y<siyanoz.length; y++){sonuclardizisi.push(siyanoz[y]); }}}
for(x=0; x<gercek_g_semptomlardizisi.length; x++){if(gercek_g_semptomlardizisi[x]=="santral siyanoz"){for(y=0; y<santral_siyanoz.length; y++){sonuclardizisi.push(santral_siyanoz[y]); }}}
for(x=0; x<gercek_g_semptomlardizisi.length; x++){if(gercek_g_semptomlardizisi[x]=="periferik siyanoz"){for(y=0; y<periferik_siyanoz.length; y++){sonuclardizisi.push(periferik_siyanoz[y]); }}}
for(x=0; x<gercek_g_semptomlardizisi.length; x++){if(gercek_g_semptomlardizisi[x]=="ateş"){for(y=0; y<ates.length; y++){sonuclardizisi.push(ates[y]); }}}
for(x=0; x<gercek_g_semptomlardizisi.length; x++){if(gercek_g_semptomlardizisi[x]=="karın ağrısı"){for(y=0; y<karin_agrisi.length; y++){sonuclardizisi.push(karin_agrisi[y]); }}}




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




function hakkinda_goster() {var hakkinda = new Array("Atasagun Semptom ve Bulgu Tarayıcı, şikayet ve bulgulara göre olası hastalıkları tahmin eden bir sitedir.");	document.getElementById("hakkindaveuyari").value = hakkinda.toString();	}
function kullanim_kosullari_goster() {var hakkinda = new Array("Bu site, hastalıkların kesin tanısını koymaz, size yalnızca ihtimaller sunar. Sitenin size sunduğu bilgiler doktor tavsiyesi değildir. Hastalığınızın tanısı için doktorunuza başvurunuz. Bu sitede yazan bilgilerin doktor tavsiyesi olarak kullanılması halinde site hiç bir sorumluluk kabul etmez.");document.getElementById("hakkindaveuyari").value = hakkinda.toString();	}	
function nasil_kullanilir_goster() {var hakkinda = new Array("Tarayıcı olarak Google Chrome kullanmanız önerilir. Semptom ya da bulgularınızı girerken daima küçük harf kullanınız, sonuna boşluk eklemeyiniz. Size önerilen listeden çıkan seçeneklerden seçmeniz işinizi kolaylaştırır."); document.getElementById("hakkindaveuyari").value = hakkinda.toString();	}




	function ekleyen(e){
    if(e.keyCode === 13){
    e.preventDefault();
	semptomekleyici();
	}}
	
	
	
	
		function cikaran(e){
    if(e.keyCode === 13){
    e.preventDefault();
	semptomcikarici();
	}}
	
	
	