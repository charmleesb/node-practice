const fs = require('fs');
const folderName = process.argv[2] || 'Project';    // 인수 없을 시 default 'Project'

/* 비동기 방식 */
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });

/* 동기 방식 */
try {
    fs.mkdirSync(folderName);
    // 쓰는 내용 공백이라도 적어야 함
    fs.writeFileSync(`${folderName}/index.html`, '');
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}