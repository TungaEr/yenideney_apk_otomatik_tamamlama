
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