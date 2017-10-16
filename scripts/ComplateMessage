// Complate Message
// Trigger required: Download Stop

// Parameter.
var isUseSound = true;
//var soundPass = JD_HOME + "/themes/standard/org/jdownloader/sounds/" + "se_maoudamashii_onepoint23.wav"; // like sounds
var soundPass = JD_HOME + "/themes/standard/org/jdownloader/sounds/" + "captcha.wav"; // captcha sounds

var isUseTimeStamp = true;

var lineFeed = "\r\n\r\n\r\n\r\n"; // jd2 issue. show board.

// Main Process.
function getTimeStamp() {
    var dt = new Date();
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var week = dt.getDay();
    var day = dt.getDate();
    var hour = dt.getHours();
    var minute = dt.getMinutes();
    var second = dt.getSeconds();
    var timeStamp = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
    return timeStamp;
}

if (link.isFinished()) {

    if (isUseSound) {
        playWavAudio(soundPass); // like sounds
    }

    if (isUseTimeStamp) {
        alert("[" + getTimeStamp() + "] " + link.name + lineFeed); // timestamp and fileName
    } else {
        alert(link.name + lineFeed); // filename only
    }

}
