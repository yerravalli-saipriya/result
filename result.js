const { Builder, By, until } = require("selenium-webdriver");  
const assert = require("assert");  
async function loginTest() {  
// launch the browser  
let 
driver 
= 
await 
new 
Builder().forBrowser("chrome").build();  try {  
await 
driver.get("http://results.mvsrec.edu.in/SBLogin.aspx");  
await 
driver.findElement(By.id("txtUserName")).sendKeys("24512173
 7129");  
await 
driver.findElement(By.id("txtPassword")).sendKeys("24512173
 7129");  
driver.findElement(By.id("btnSubmit")).click();  
const 
user 
= 
driver.findElement(By.id("lblHTNo")).getText();    
assert.strictEqual(user, "245121737129");  
console.log("success"); 
await 
await 
await 
driver.findElement(By.id("Stud_cpModules_imgbtnExams")).c
 lick();  
driver.findElement(By.id("cpBody_lnkSem")).click();  
const ur = await driver.getCurrentUrl();  
assert.strictEqual(ur,   
await 
"http://results.mvsrec.edu.in/STUDENTLOGIN/Frm_SemwiseStudMarks.asp
 x");  
console.log("Display marks success");  
}   
finally {  
await driver.quit();  
}  
}  
loginTest(); 
