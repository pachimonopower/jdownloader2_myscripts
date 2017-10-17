/* =============== Global API =============== */
/* =========  Methods =========*/
alert(myObject[]);/*Show a Message Box*/
/* Example: */alert(JD_HOME);
var myObject = callAPI(myString, myString, myObject[]);/*Call the MyJDownloader API*/
/* Example: */callAPI("downloadsV2", "queryLinks", { "name": true})
callAsync(myFunction, myString[]);/*Call a local Process asynchronous*/
/* Example: */callAsync(function(exitCode,stdOut,errOut){ alert("Closed Notepad");},"notepad.exe",JD_HOME+"\\license.txt");
var myString = callSync(myString[]);/*Call a local Process. Blocks Until the process returns*/
/* Example: */var pingResultString = callSync("ping","jdownloader.org");
var myBoolean = deleteFile(myString/*path*/, myBoolean/*recursive*/);/*Delete a file or a directory*/
/* Example: */var myBooleanResult=deleteFile(JD_HOME+"/mydirectory/",false);
var myBoolean = doReconnect();/*Perform a reconnect and wait for it*/
/* Example: */var success= doReconnect();
var myCrawledLink[] = getAllCrawledLinks();/*Get a list of all crawledlinks*/
var myCrawledPackage[] = getAllCrawledPackages();/*Get a list of all crawledpackages*/
var myDownloadLink[] = getAllDownloadLinks();/*Get a list of all downloadlinks*/
var myFilePackage[] = getAllFilePackages();/*Get a list of all packages*/
var myLong = getAverageSpeed();/*Get current average Download Speed in bytes/second*/
var myBrowser = getBrowser();/*Get an Environment Object*/
var myString = getChecksum(myString, myString);/*Create a Checksum for a file. Types: e.g. CRC32, md5, SHA-1, SHA-256*/
var myCrawledLink = getCrawledLinkByUUID(myLong/*uuid*/);/*Get a CrawledLink Link by it's uuid*/
var myCrawledPackage = getCrawledPackageByUUID(myLong/*uuid*/);/*Get a CrawledLink Package by it's uuid*/
var myDownloadLink = getDownloadLinkByUUID(myLong/*uuid*/);/*Get a DownloadList Link by it's uuid*/
var myFilePackage = getDownloadPackageByUUID(myLong/*uuid*/);/*Get a DownloadList Package by it's uuid*/
var myString = getEnv(myString/*environment variable*/);/*Gets the value of the specified environment variable*/
var myEnvironment = getEnvironment();/*Get an Environment Object*/
var myString = getPage(myString/*URL*/);/*Loads a website (Method: GET) and returns the source code*/
/* Example: */var myhtmlSourceString=getPage("http://jdownloader.org");
var myFilePath = getPath(myString/*Path to a file or folder*/);/*Get a FilePath Object*/
var myObject = getProperty(myString/*"key"*/, myBoolean/*global(boolean)*/);/*Get a Property. Set global to true if you want to access a global property*/
/* Example: */var value=getProperty("myobject", false);
var myDownloadLink[] = getRunningDownloadLinks();/*Get a list of all running downloadlinks*/
var myFilePackage[] = getRunningDownloadPackages();/*Get a list of all running packages*/
var myLong = getTotalSpeed();/*Get current total Download Speed in bytes/second*/
var myBoolean = isDownloadControllerIdle();/*Check if Download Controller is in IDLE State*/
var myBoolean = isDownloadControllerPaused();/*Check if Download Controller is in PAUSE State*/
var myBoolean = isDownloadControllerRunning();/*Check if Download Controller is in RUNNING State*/
var myBoolean = isDownloadControllerStopping();/*Check if Download Controller is in STOPPING State (Still running, but stop has been pressed)*/
log(myObject[]);/*Log to stderr and to JDownloader Log Files*/
playWavAudio(myString/*myFilePathOrUrl*/);/*Play a Wav Audio file*/
/* Example: */playWavAudio(JD_HOME+"/themes/standard/org/jdownloader/sounds/captcha.wav");
var myString = postPage(myString/*URL*/, myString/*PostData*/);/*Loads a website (METHOD: POST) and returns the source code*/
/* Example: */var myhtmlSourceString=postPage("http://support.jdownloader.org/index.php","searchquery=captcha");
var myString = readFile(myString/*filepath*/);/*Read a text file*/
/* Example: */var myString=readFile(JD_HOME+"/license.txt");
refreshAccounts(myBoolean/*true|false (Wait for account checks)*/, myBoolean/*true|false (Force Check)*/);/*Refresh all premium accounts*/
/* Example: */refreshAccounts(true,true);
var myBoolean = removeCrawledLinkByUUID(myString);/*Remove a crawledlink by uuid*/
var myBoolean = removeCrawledPackageByUUID(myString);/*Remove a crawledpackage by uuid*/
var myBoolean = removeDownloadLinkByUUID(myString);/*Remove a downloadlink by uuid*/
var myBoolean = removeFilePackageByUUID(myString);/*Remove a package by uuid*/
requestReconnect();/*Request a reconnect*/
/* Example: */requestReconnect();
require(myString/*myFilePathOrUrl*/);/*Loads a Javascript file or url. ATTENTION. The loaded script can access the API as well.*/
/* Example: */require("https://raw.githubusercontent.com/douglascrockford/JSON-js/master/json.js");
setDownloadsPaused(myBoolean);/*Pause/Unpause Downloads*/
var myObject = setProperty(myString/*"key"*/, myObject/*anyValue*/, myBoolean/*global(boolean)*/);/*Set a Property. This property will be available until JD-exit or a script overwrites it. if global is true, the property will be available for al scripts*/
/* Example: */var oldValue=setProperty("myobject", { "name": true}, false);
setSpeedlimit(myInt/*speedlimit in bytes/second*/);/*Set the Speedlimit in bytes/second. Values<=0 -> Disable Limiter*/
sleep(myInt/*milliseconds*/);/*Perform a sleep and wait for x milliseconds*/
/* Example: */sleep(1000);
startDownloads();/*Start Downloads*/
stopDownloads();/*Stop Downloads*/
writeFile(myString/*filepath*/, myString/*myText*/, myBoolean/*append*/);/*Write a text file*/
/* Example: */writeFile(JD_HOME+"/log.txt",JSON.stringify(this)+"\r\n",true);
/* =========  Properties =========*/
//JDownloader Installation Directory;
var myString = JD_HOME;
/* =============== Classes =============== */
/* === Archive === */
/* =========  Methods =========*/
var myBoolean = myArchive.equals(myObject);
var myString = myArchive.getArchiveType();
var myDownloadLink[] = myArchive.getDownloadLinks();
var myString = myArchive.getExtractToFolder();
var myFilePath[] = myArchive.getExtractedFilePaths();
var myString[] = myArchive.getExtractedFiles();
var myString = myArchive.getExtractionLog();
var myString = myArchive.getFolder();
var myObject = myArchive.getInfo();
var myString = myArchive.getName();
var myString = myArchive.getUsedPassword();
var myInt = myArchive.hashCode();
var myBoolean = myArchive.isPasswordProtected();
/* === Browser === */
/* =========  Methods =========*/
var myBrowser = myBrowser.cloneBrowser();
var myBoolean = myBrowser.equals(myObject);
var myString = myBrowser.getHTML();
var myString = myBrowser.getPage(myString);
var myString = myBrowser.getURL();
var myInt = myBrowser.hashCode();
var myString = myBrowser.postPage(myString, myString);
/* === CrawledLink === */
/* The context download list link*/
/* =========  Methods =========*/
var myBoolean = myCrawledLink.equals(myObject);
var myLong = myCrawledLink.getAddedDate();
var myArchive = myCrawledLink.getArchive();
var myString = myCrawledLink.getAvailableState();
var myLong = myCrawledLink.getBytesTotal();
var myString = myCrawledLink.getComment();
var myString = myCrawledLink.getContainerURL();
var myString = myCrawledLink.getContentURL();
var myString = myCrawledLink.getDownloadPath();
var myString = myCrawledLink.getHost();
var myString = myCrawledLink.getName();
var myString = myCrawledLink.getOriginURL();
var myCrawledPackage = myCrawledLink.getPackage();
var myString = myCrawledLink.getPriority();
var myObject = myCrawledLink.getProperty(myString);
var myString = myCrawledLink.getReferrerURL();
var myObject = myCrawledLink.getSessionProperty(myString);
var myString = myCrawledLink.getUUID();
var myString = myCrawledLink.getUrl();
var myInt = myCrawledLink.hashCode();
var myBoolean = myCrawledLink.isEnabled();
var myBoolean = myCrawledLink.remove();
myCrawledLink.setEnabled(myBoolean);
myCrawledLink.setName(myString/*new Name*/);/*Sets a new filename*/
myCrawledLink.setPriority(myString);
myCrawledLink.setProperty(myString, myObject);
myCrawledLink.setSessionProperty(myString, myObject);
var myString = myCrawledLink.toString();
/* === CrawledPackage === */
/* The context linkgabber list package*/
/* =========  Methods =========*/
var myBoolean = myCrawledPackage.equals(myObject);
var myLong = myCrawledPackage.getAddedDate();
var myArchive[] = myCrawledPackage.getArchives();
var myLong = myCrawledPackage.getBytesTotal();
var myString = myCrawledPackage.getComment();
var myString = myCrawledPackage.getDownloadFolder();
var myCrawledLink[] = myCrawledPackage.getDownloadLinks();
var myString = myCrawledPackage.getName();
var myString = myCrawledPackage.getPriority();
var myString = myCrawledPackage.getUUID();
var myInt = myCrawledPackage.hashCode();
var myBoolean = myCrawledPackage.remove();
myCrawledPackage.setComment(myString);
myCrawledPackage.setDownloadFolder(myString);
myCrawledPackage.setName(myString);
myCrawledPackage.setPriority(myString);
var myString = myCrawledPackage.toString();
/* === DownloadLink === */
/* The context download list link*/
/* =========  Methods =========*/
myDownloadLink.abort();
var myBoolean = myDownloadLink.equals(myObject);
var myLong = myDownloadLink.getAddedDate();
var myArchive = myDownloadLink.getArchive();
var myLong = myDownloadLink.getBytesLoaded();
var myLong = myDownloadLink.getBytesTotal();
var myString = myDownloadLink.getComment();
var myString = myDownloadLink.getContainerURL();
var myString = myDownloadLink.getContentURL();
var myLong = myDownloadLink.getDownloadDuration();
var myString = myDownloadLink.getDownloadPath();
var myLong = myDownloadLink.getDownloadSessionDuration();
var myLong = myDownloadLink.getDownloadTime();
var myLong = myDownloadLink.getEta();
var myString = myDownloadLink.getExtractionStatus();
var myString = myDownloadLink.getFinalLinkStatus();
var myLong = myDownloadLink.getFinishedDate();
var myString = myDownloadLink.getHost();
var myString = myDownloadLink.getName();
var myString = myDownloadLink.getOriginURL();
var myFilePackage = myDownloadLink.getPackage();
var myString = myDownloadLink.getPriority();
var myObject = myDownloadLink.getProperty(myString);
var myString = myDownloadLink.getReferrerURL();
var myObject = myDownloadLink.getSessionProperty(myString);
var myString = myDownloadLink.getSkippedReason();
var myLong = myDownloadLink.getSpeed();
var myString = myDownloadLink.getStatus();
var myString = myDownloadLink.getUUID();
var myString = myDownloadLink.getUrl();
var myInt = myDownloadLink.hashCode();
var myBoolean = myDownloadLink.isEnabled();
var myBoolean = myDownloadLink.isFinished();
var myBoolean = myDownloadLink.isResumeable();
var myBoolean = myDownloadLink.isRunning();
var myBoolean = myDownloadLink.isSkipped();
var myBoolean = myDownloadLink.remove();
myDownloadLink.reset();
myDownloadLink.resume();
myDownloadLink.setEnabled(myBoolean);
myDownloadLink.setName(myString/*new Name*/);/*Sets a new filename*/
myDownloadLink.setPriority(myString);
myDownloadLink.setProperty(myString, myObject);
myDownloadLink.setSessionProperty(myString, myObject);
myDownloadLink.setSkipped(myBoolean);
var myString = myDownloadLink.toString();
/* === Environment === */
/* =========  Methods =========*/
var myString = myEnvironment.getARCHFamily();
var myLong = myEnvironment.getJavaVersion();
var myString = myEnvironment.getNewLine();
var myString = myEnvironment.getOS();
var myString = myEnvironment.getOSFamily();
var myString = myEnvironment.getPathSeparator();
var myBoolean = myEnvironment.is64BitArch();
var myBoolean = myEnvironment.is64BitJava();
var myBoolean = myEnvironment.is64BitOS();
var myBoolean = myEnvironment.isBSD();
var myBoolean = myEnvironment.isHeadless();
var myBoolean = myEnvironment.isLinux();
var myBoolean = myEnvironment.isMac();
var myBoolean = myEnvironment.isWindows();
/* === FilePackage === */
/* The context download list package*/
/* =========  Methods =========*/
var myBoolean = myFilePackage.equals(myObject);
var myLong = myFilePackage.getAddedDate();
var myArchive[] = myFilePackage.getArchives();
var myLong = myFilePackage.getBytesLoaded();
var myLong = myFilePackage.getBytesTotal();
var myString = myFilePackage.getComment();
var myString = myFilePackage.getDownloadFolder();
var myDownloadLink[] = myFilePackage.getDownloadLinks();
var myLong = myFilePackage.getFinishedDate();
var myString = myFilePackage.getName();
var myString = myFilePackage.getPriority();
var myString = myFilePackage.getUUID();
var myInt = myFilePackage.hashCode();
var myBoolean = myFilePackage.isFinished();
var myBoolean = myFilePackage.remove();
myFilePackage.setComment(myString);
myFilePackage.setDownloadFolder(myString);
myFilePackage.setName(myString);
myFilePackage.setPriority(myString);
var myString = myFilePackage.toString();
/* === FilePath === */
/* =========  Methods =========*/
var myBoolean = myFilePath.copyTo(myString);
var myBoolean = myFilePath.delete();
var myBoolean = myFilePath.deleteRecursive();
var myBoolean = myFilePath.equals(myObject);
var myBoolean = myFilePath.exists();
var myString = myFilePath.getAbsolutePath();
var myFilePath[] = myFilePath.getChildren();
var myLong = myFilePath.getCreatedDate();
var myString = myFilePath.getExtension();
var myLong = myFilePath.getModifiedDate();
var myString = myFilePath.getName();
var myFilePath = myFilePath.getParent();
var myString = myFilePath.getPath();
var myLong = myFilePath.getSize();
var myInt = myFilePath.hashCode();
var myBoolean = myFilePath.isDirectory();
var myBoolean = myFilePath.isFile();
var myBoolean = myFilePath.mkdirs();
var myBoolean = myFilePath.moveTo(myString);
var myBoolean = myFilePath.renameTo(myString);
var myString = myFilePath.toString();

// ========= Properties for the EventTrigger 'ダウンロード開始時'  =========
var myFilePackage = package;
var myDownloadLink = link;
