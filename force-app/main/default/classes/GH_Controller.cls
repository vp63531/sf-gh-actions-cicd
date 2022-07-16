public with sharing class GH_Controller {
    public GH_Controller() {
        List<String> theList = new List<String>{'str1','str2','str3'};
        for(String item : theList){
            item += '-adfafafaf-adfafafaf'; //added via jira-4567
            item += 'xxxx';
        }
    }
    public static void someMethod(String str){
        str += '7767tta';
        runOther();
    }
    public static void runOther(){
        System.debug('yahoo');
    }
}
