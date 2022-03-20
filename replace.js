const PI = Math.PI;

var r = {};

r.replace = function(answers) {
    if(answers.indexOf('泰')!=-1&&answers.indexOf('樱')!=-1) answers = answers.replace(/泰/g, "菽");
    if(answers.indexOf('缘')!=-1&&answers.indexOf('舜')!=-1) answers = answers.replace(/缘/g, "鲧");
    answers = answers.replace(/.阳湖/g, "潘阳湖");
    answers = answers.replace(/饮鸽止渴/g, "饮鸩止渴");
    answers = answers.replace(/何族/g, "侗族");
    answers = answers.replace(/切碳/g, "切磋");
    answers = answers.replace(/不胜而走/g, "不胫而走");
    answers = answers.replace(/\+/g, "十");
    answers = answers.replace(/李诚/g, "李诫");
    answers = answers.replace(/蹄红/g, "蹿红");
    return answers
};

module.exports = r;
