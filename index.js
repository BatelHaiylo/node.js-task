const fs = require("fs")

fs.writeFile("./test-file.txt", "first insert", ()=>{})

for (let i=0; i!=101; i++){
    fs.appendFile("./test-file.txt",` ,${i}`, ()=>{})
}

// fs.writeFile("./vikipedia.txt","במדעי המחשב חוצץ (באנגלית: Buffer) הוא מקטע זיכרון המאחסן מידע באופן זמני בעת העברתו ממקום למקום. העברה של מידע יכולה להתבצע מהתקן קלט ליישום מחשב במחשב, מיישום במחשב אל הפלט, בין שני תהליכים, בין שני התקני אחסון וכו. חוצץ יכול להיות מיושם ברמת החומרה או התוכנה.",(error)=>{
//     if(error)console.log(error);
//     console.log("create and write succcsided");
// })

// fs.readFile("./vikipedia.txt",{encoding:'utf8'},(error,data)=>{
//     if(error) return console.log(error);
//     console.log(data);
// })

// fs.readFile("./vikipedia.txt",{encoding:'utf8'},(error,data)=>{
//     if(error) return console.log(error);
//     console.log(data);
//     if(data.length>50)return console.log("more then 50 charts")
//     console.log("less then 50 words")
// })

fs.readFile("./vikipedia.txt",{encoding:'utf8'},(error,data)=>{
    if(error) return console.log(error);
    fs.appendFile("./newViki.txt", `${data.toUpperCase()}`, (error)=>{
        if(error) return console.log(error)
        console.log(data)
    });
})
