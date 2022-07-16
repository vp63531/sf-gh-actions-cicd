const path = require('path');
const fs = require('fs');

let testsToRun = __dirname+'/testsAll.txt';

 
function extractApexClasses(){

    fs.writeFileSync(testsToRun,'');
    let testClsStr = '';    
    const directoryPath = path.join(__dirname, 'force-app/main/default/classes');    
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        files.forEach(function (file) {
            if(file.toLowerCase().endsWith('test.cls') || 
                (file.toLowerCase().startsWith('testrunner') 
                    && file.toLowerCase().endsWith('.cls')) ){
                testClsStr += file.replace('.cls','') + ',';
            }
        });
        //remove extra comma..
        if(testClsStr.endsWith(',')){
            testClsStr = testClsStr.substring(0, testClsStr.length - 1);
        }
        fs.writeFileSync(testsToRun, testClsStr);        
    });
}

extractApexClasses();