// const fs = require("fs");
const readExcelFile = require("read-excel-file/node");

// fs.readFile("./files/animeLIst.xlsx", (err, data) => {
//     if (err){
//         throw err;
//     }
//     console.log(data);
// });

readExcelFile("./files/animeList.xlsx").then((rows) => {
    var numberOfRows = rows.length;
    console.log(numberOfRows);
    console.log(rows);
});
