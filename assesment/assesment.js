'use strict';

const userNameInput = document.getElementById('user-name');

const assesmentButton = document.getElementById('assesment');

const resultDivided = document.getElementById('result-area');

const tweetDivided = document.getElementById('tweet-area');
assesmentButton.onclick = () => {
    const userName = userNameInput.value;
    if(userName.length === 0){
        return;
    }
    console.log(userName);
    resultDivided.innerText = '';
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assesment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    tweetDivided.innerText = '';
    const anchor = document.createElement('a')
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' + 
    encodeURIComponent('あなたのいいところ') +
    '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href',hrefValue);
    anchor.setAttribute('class','twitter-hashtag-butoon');
    anchor.setAttribute('data-text',result);
    anchor.innerText = 'Tweet #あなたのいいところ';
    tweetDivided.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src','https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);
};



const answers = [
    '{userName}のいいところは優しさです。',
    '{userName}のいいところは柔軟性です。',
    '{userName}のいいところは決断力です。',
    '{userName}のいいところは知識です。',
    '{userName}のいいところはユニークさです。',
    '{userName}のいいところは用心深さです。',
    '{userName}のいいところは思いやりです。',
    '{userName}のいいところは感受性です。',
    '{userName}のいいところは節度です。',
    '{userName}のいいところは好奇心です。',
    '{userName}のいいところは情熱です。',
    '{userName}のいいところは誠実なところです。',
    '{userName}のいいところはリーダーシップです。',
    '{userName}のいいところは努力家なところです。',
    '{userName}のいいところは面白いところです。',
];

@param {string} userName
@return {string}

function assesment(userName){
    let sumOfCharCode = 0;
    for(let i = 0; i < userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    result = result.replaceAll('{userName}',userName);
    return result;
}

console.log(assesment('太郎'));
console.log(assesment('太郎'));
console.log(assesment('タロウ'));
console.log(assesment('田中'));
console.log(assesment('タナカ'));

console.assert(
    assesment('太郎')===
    '太郎のいいところは決断力です。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
);
console.assert(
    assesment('太郎')===assesment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
)