/*
기존 강의 -> require 사용
require 안 쓴 이유
franc 모듈이 ESM만 지원
-> package.json에 "type":"module" 추가 후 langs 모듈 불러옴
-> 이 때 path 작성 필수
*/
import { franc, francAll } from 'franc'
import langs from 'langs/index.js'
import colors from 'colors'

const code = franc(process.argv[2]);
if (code === 'und') {
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SIMPLE TEXT".red);
} else {
    const language = langs.where("3", code).name;
    console.log(`Our best guess is: ${language}`.green);
}