//================ Athens ================
function athensClock(){
    var monthValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dayValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var today = new Date();

    document.getElementById('athensDate').innerHTML = (dayValues[today.getDay()] + " " + today.getDate() + " " + monthValues[today.getMonth()] + " " + today.getFullYear());

    var athensHour = today.getHours();
    var athensMinute = today.getMinutes();
    var athensSecond = today.getSeconds();

    athensHour = athensHour < 10 ? "0" + athensHour: athensHour;
    athensMinute = athensMinute < 10 ? "0" + athensMinute: athensMinute;
    athensSecond = athensSecond < 10 ? "0" + athensSecond: athensSecond;

    document.getElementById("athensHour").innerHTML = athensHour;
    document.getElementById("athensMinute").innerHTML = athensMinute;
    document.getElementById("athensSecond").innerHTML = athensSecond;
}
var athensFinal = setInterval(athensClock, 1000);

//================ London ================
function londonClock(){
    var monthValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dayValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    var londonTime = -2; // Different Time Zone From Athens
    var todayLondon = new Date();
    var londonDate = new Date(todayLondon.getTime() + londonTime * 3600 * 1000);

    var finalLondonTime = dayValues[londonDate.getDay()] + " " + londonDate.getDate() + ' ' + monthValues[londonDate.getMonth()] + ' ' + londonDate.getFullYear();
    document.getElementById('londonDate').innerHTML = finalLondonTime;

    var londonHour = londonDate.getHours();
    var londonMinute = londonDate.getMinutes();
    var londonSecond = londonDate.getSeconds();

    londonHour = londonHour < 10 ? "0" + londonHour: londonHour;
    londonMinute = londonMinute < 10 ? "0" + londonMinute: londonMinute;
    londonSecond = londonSecond < 10 ? "0" + londonSecond: londonSecond;

    document.getElementById("londonHour").innerHTML = londonHour;
    document.getElementById("londonMinute").innerHTML = londonMinute;
    document.getElementById("londonSecond").innerHTML = londonSecond;
}
var londonFinal = setInterval(londonClock, 1000);

//================ Tokyo ================
function tokyoClock(){
    var monthValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dayValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    var tokyoTime = 6; // Different Time Zone From Athens
    var todayTokyo = new Date();
    var tokyoDate = new Date(todayTokyo.getTime() + tokyoTime * 3600 * 1000);

    var finalTokyoTime = dayValues[tokyoDate.getDay()] + " " + tokyoDate.getDate() + ' ' + monthValues[tokyoDate.getMonth()] + ' ' + tokyoDate.getFullYear();
    document.getElementById('tokyoDate').innerHTML = finalTokyoTime;
    
    var tokyoHour = tokyoDate.getHours();
    var tokyoMinute = tokyoDate.getMinutes();
    var tokyoSecond = tokyoDate.getSeconds();

    tokyoHour = tokyoHour < 10 ? "0" + tokyoHour: tokyoHour;
    tokyoMinute = tokyoMinute < 10 ? "0" + tokyoMinute: tokyoMinute;
    tokyoSecond = tokyoSecond < 10 ? "0" + tokyoSecond: tokyoSecond;

    document.getElementById("tokyoHour").innerHTML = tokyoHour;
    document.getElementById("tokyoMinute").innerHTML = tokyoMinute;
    document.getElementById("tokyoSecond").innerHTML = tokyoSecond;
}
var tokyoFinal = setInterval(tokyoClock, 1000);

//================ Delhi ================
function delhiClock(){
    var monthValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dayValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    var delhiTime = 2.5; // Different Time Zone From Athens
    var todayDelhi = new Date();
    var delhiDate = new Date(todayDelhi.getTime() + delhiTime * 3600 * 1000);

    var finalDelhiTime = dayValues[delhiDate.getDay()] + " " + delhiDate.getDate() + ' ' + monthValues[delhiDate.getMonth()] + ' ' + delhiDate.getFullYear();
    document.getElementById('delhiDate').innerHTML = finalDelhiTime;
    
    var delhiHour = delhiDate.getHours();
    var delhiMinute = delhiDate.getMinutes();
    var delhiSecond = delhiDate.getSeconds();

    delhiHour = delhiHour < 10 ? "0" + delhiHour: delhiHour;
    delhiMinute = delhiMinute < 10 ? "0" + delhiMinute: delhiMinute;
    delhiSecond = delhiSecond < 10 ? "0" + delhiSecond: delhiSecond;

    document.getElementById("delhiHour").innerHTML = delhiHour;
    document.getElementById("delhiMinute").innerHTML = delhiMinute;
    document.getElementById("delhiSecond").innerHTML = delhiSecond;
}
var delhiFinal = setInterval(delhiClock, 1000);

//================ Shanghai ================
function shanghaiClock(){
    var monthValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dayValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    var shanghaiTime = 5; // Different Time Zone From Athens
    var todayShanghai = new Date();
    var shanghaiDate = new Date(todayShanghai.getTime() + shanghaiTime * 3600 * 1000);

    var finalShanghaiTime = dayValues[shanghaiDate.getDay()] + " " + shanghaiDate.getDate() + ' ' + monthValues[shanghaiDate.getMonth()] + ' ' + shanghaiDate.getFullYear();
    document.getElementById('shanghaiDate').innerHTML = finalShanghaiTime;
    
    var shanghaiHour = shanghaiDate.getHours();
    var shanghaiMinute = shanghaiDate.getMinutes();
    var shanghaiSecond = shanghaiDate.getSeconds();

    shanghaiHour = shanghaiHour < 10 ? "0" + shanghaiHour: shanghaiHour;
    shanghaiMinute = shanghaiMinute < 10 ? "0" + shanghaiMinute: shanghaiMinute;
    shanghaiSecond = shanghaiSecond < 10 ? "0" + shanghaiSecond: shanghaiSecond;

    document.getElementById("shanghaiHour").innerHTML = shanghaiHour;
    document.getElementById("shanghaiMinute").innerHTML = shanghaiMinute;
    document.getElementById("shanghaiSecond").innerHTML = shanghaiSecond;
}
var shanghaiFinal = setInterval(shanghaiClock, 1000);

//================ Sao Paulo ================
function saoPauloClock(){
    var monthValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dayValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    var saoPauloTime = -6; // Different Time Zone From Athens
    var todaySaoPaulo = new Date();
    var saoPauloDate = new Date(todaySaoPaulo.getTime() + saoPauloTime * 3600 * 1000);

    var finalSaoPauloTime = dayValues[saoPauloDate.getDay()] + " " + saoPauloDate.getDate() + ' ' + monthValues[saoPauloDate.getMonth()] + ' ' + saoPauloDate.getFullYear();
    document.getElementById('saoPauloDate').innerHTML = finalSaoPauloTime;
    
    var saoPauloHour = saoPauloDate.getHours();
    var saoPauloMinute = saoPauloDate.getMinutes();
    var saoPauloSecond = saoPauloDate.getSeconds();

    saoPauloHour = saoPauloHour < 10 ? "0" + saoPauloHour: saoPauloHour;
    saoPauloMinute = saoPauloMinute < 10 ? "0" + saoPauloMinute: saoPauloMinute;
    saoPauloSecond = saoPauloSecond < 10 ? "0" + saoPauloSecond: saoPauloSecond;

    document.getElementById("saoPauloHour").innerHTML = saoPauloHour;
    document.getElementById("saoPauloMinute").innerHTML = saoPauloMinute;
    document.getElementById("saoPauloSecond").innerHTML = saoPauloSecond;
}
var saoPauloFinal = setInterval(saoPauloClock, 1000);

//================ Mexico City ================
function mexicoCityClock(){
    var monthValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dayValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    var mexicoCityTime = -9; // Different Time Zone From Athens
    var todayMexicoCity = new Date();
    var mexicoCityDate = new Date(todayMexicoCity.getTime() + mexicoCityTime * 3600 * 1000);

    var finalMexicoCityTime = dayValues[mexicoCityDate.getDay()] + " " + mexicoCityDate.getDate() + ' ' + monthValues[mexicoCityDate.getMonth()] + ' ' + mexicoCityDate.getFullYear();
    document.getElementById('mexicoCityDate').innerHTML = finalMexicoCityTime;
    
    var mexicoCityHour = mexicoCityDate.getHours();
    var mexicoCityMinute = mexicoCityDate.getMinutes();
    var mexicoCitySecond = mexicoCityDate.getSeconds();

    mexicoCityHour = mexicoCityHour < 10 ? "0" + mexicoCityHour: mexicoCityHour;
    mexicoCityMinute = mexicoCityMinute < 10 ? "0" + mexicoCityMinute: mexicoCityMinute;
    mexicoCitySecond = mexicoCitySecond < 10 ? "0" + mexicoCitySecond: mexicoCitySecond;

    document.getElementById("mexicoCityHour").innerHTML = mexicoCityHour;
    document.getElementById("mexicoCityMinute").innerHTML = mexicoCityMinute;
    document.getElementById("mexicoCitySecond").innerHTML = mexicoCitySecond;
}
var mexicoCityFinal = setInterval(mexicoCityClock, 1000);

//================ Cairo ================
function cairoClock(){
    var monthValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dayValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    var cairoTime = 0; // Same Time Zone From Athens
    var todayCairo = new Date();
    var cairoDate = new Date(todayCairo.getTime() + cairoTime * 3600 * 1000);

    var finalCairoTime = dayValues[cairoDate.getDay()] + " " + cairoDate.getDate() + ' ' + monthValues[cairoDate.getMonth()] + ' ' + cairoDate.getFullYear();
    document.getElementById('cairoDate').innerHTML = finalCairoTime;
    
    var cairoHour = cairoDate.getHours();
    var cairoMinute = cairoDate.getMinutes();
    var cairoSecond = cairoDate.getSeconds();

    cairoHour = cairoHour < 10 ? "0" + cairoHour: cairoHour;
    cairoMinute = cairoMinute < 10 ? "0" + cairoMinute: cairoMinute;
    cairoSecond = cairoSecond < 10 ? "0" + cairoSecond: cairoSecond;

    document.getElementById("cairoHour").innerHTML = cairoHour;
    document.getElementById("cairoMinute").innerHTML = cairoMinute;
    document.getElementById("cairoSecond").innerHTML = cairoSecond;
}
var cairoFinal = setInterval(cairoClock, 1000);

//================ Mumbai ================
function mumbaiClock(){
    var monthValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dayValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    var mumbaiTime = 2.5; // Different Time Zone From Athens
    var todayMumbai = new Date();
    var mumbaiDate = new Date(todayMumbai.getTime() + mumbaiTime * 3600 * 1000);

    var finalMumbaiTime = dayValues[mumbaiDate.getDay()] + " " + mumbaiDate.getDate() + ' ' + monthValues[mumbaiDate.getMonth()] + ' ' + mumbaiDate.getFullYear();
    document.getElementById('mumbaiDate').innerHTML = finalMumbaiTime;
    
    var mumbaiHour = mumbaiDate.getHours();
    var mumbaiMinute = mumbaiDate.getMinutes();
    var mumbaiSecond = mumbaiDate.getSeconds();

    mumbaiHour = mumbaiHour < 10 ? "0" + mumbaiHour: mumbaiHour;
    mumbaiMinute = mumbaiMinute < 10 ? "0" + mumbaiMinute: mumbaiMinute;
    mumbaiSecond = mumbaiSecond < 10 ? "0" + mumbaiSecond: mumbaiSecond;

    document.getElementById("mumbaiHour").innerHTML = mumbaiHour;
    document.getElementById("mumbaiMinute").innerHTML = mumbaiMinute;
    document.getElementById("mumbaiSecond").innerHTML = mumbaiSecond;
}
var mumbaiFinal = setInterval(mumbaiClock, 1000);

//================ Beijing ================
function beijingClock(){
    var monthValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dayValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    var beijingTime = 5; // Different Time Zone From Athens
    var todayBeijing = new Date();
    var beijingDate = new Date(todayBeijing.getTime() + beijingTime * 3600 * 1000);

    var finalBeijingTime = dayValues[beijingDate.getDay()] + " " + beijingDate.getDate() + ' ' + monthValues[beijingDate.getMonth()] + ' ' + beijingDate.getFullYear();
    document.getElementById('beijingDate').innerHTML = finalBeijingTime;
    
    var beijingHour = beijingDate.getHours();
    var beijingMinute = beijingDate.getMinutes();
    var beijingSecond = beijingDate.getSeconds();

    beijingHour = beijingHour < 10 ? "0" + beijingHour: beijingHour;
    beijingMinute = beijingMinute < 10 ? "0" + beijingMinute: beijingMinute;
    beijingSecond = beijingSecond < 10 ? "0" + beijingSecond: beijingSecond;

    document.getElementById("beijingHour").innerHTML = beijingHour;
    document.getElementById("beijingMinute").innerHTML = beijingMinute;
    document.getElementById("beijingSecond").innerHTML = beijingSecond;
}
var beijingFinal = setInterval(beijingClock, 1000);

//================ Dhaka ================
function dhakaClock(){
    var monthValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dayValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    var dhakaTime = 3; // Different Time Zone From Athens
    var todayDhaka = new Date();
    var dhakaDate = new Date(todayDhaka.getTime() + dhakaTime * 3600 * 1000);

    var finalDhakaTime = dayValues[dhakaDate.getDay()] + " " + dhakaDate.getDate() + ' ' + monthValues[dhakaDate.getMonth()] + ' ' + dhakaDate.getFullYear();
    document.getElementById('dhakaDate').innerHTML = finalDhakaTime;
    
    var dhakaHour = dhakaDate.getHours();
    var dhakaMinute = dhakaDate.getMinutes();
    var dhakaSecond = dhakaDate.getSeconds();

    dhakaHour = dhakaHour < 10 ? "0" + dhakaHour: dhakaHour;
    dhakaMinute = dhakaMinute < 10 ? "0" + dhakaMinute: dhakaMinute;
    dhakaSecond = dhakaSecond < 10 ? "0" + dhakaSecond: dhakaSecond;

    document.getElementById("dhakaHour").innerHTML = dhakaHour;
    document.getElementById("dhakaMinute").innerHTML = dhakaMinute;
    document.getElementById("dhakaSecond").innerHTML = dhakaSecond;
}
var dhakaFinal = setInterval(dhakaClock, 1000);

//================ Osaka ================
function osakaClock(){
    var monthValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dayValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    var osakaTime = 6; // Different Time Zone From Athens
    var todayOsaka = new Date();
    var osakaDate = new Date(todayOsaka.getTime() + osakaTime * 3600 * 1000);

    var finalOsakaTime = dayValues[osakaDate.getDay()] + " " + osakaDate.getDate() + ' ' + monthValues[osakaDate.getMonth()] + ' ' + osakaDate.getFullYear();
    document.getElementById('osakaDate').innerHTML = finalOsakaTime;
    
    var osakaHour = osakaDate.getHours();
    var osakaMinute = osakaDate.getMinutes();
    var osakaSecond = osakaDate.getSeconds();

    osakaHour = osakaHour < 10 ? "0" + osakaHour: osakaHour;
    osakaMinute = osakaMinute < 10 ? "0" + osakaMinute: osakaMinute;
    osakaSecond = osakaSecond < 10 ? "0" + osakaSecond: osakaSecond;

    document.getElementById("osakaHour").innerHTML = osakaHour;
    document.getElementById("osakaMinute").innerHTML = osakaMinute;
    document.getElementById("osakaSecond").innerHTML = osakaSecond;
}
var osakaFinal = setInterval(osakaClock, 1000);