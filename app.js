(() => {
 const c=window.YATRASETU_CONFIG||{};
 const d=document.getElementById('download');
 document.getElementById('version').textContent=(c.version&&c.version!=='Coming soon')?`${c.appName} ${c.version}`:'YatraSetu for Android';
 document.getElementById('versionMeta').textContent=(c.version&&c.version!=='Coming soon')?`Release: ${c.releaseDate||'Date not provided'} · ${c.apkSize||'APK'}`:'First APK release has not been published yet.';
 if(c.apkUrl){d.href=c.apkUrl;document.getElementById('downloadNote').textContent=`${c.version||'Latest version'} · ${c.apkSize||'Android APK'}`;}
 else{d.href='#';d.addEventListener('click',e=>{e.preventDefault();alert('The official APK has not been published yet. Please check back after the first release.');});document.getElementById('downloadNote').textContent='APK download will be enabled after the first release.';}
 const r=document.getElementById('release');r.href=c.releaseUrl||`mailto:${c.developerEmail}?subject=YatraSetu%20release%20information`;
 document.getElementById('feedback').href=`mailto:${c.developerEmail}?subject=YatraSetu%20Feedback&body=Feedback%20category%3A%0A%0AMessage%3A`;
 document.getElementById('year').textContent=new Date().getFullYear();
})();