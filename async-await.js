function getNamePromise() {
  return new Promise(function (resolve, reject) {
    resolve("Adan Prromise");
  });
}

getNamePromise().then((data) => console.log(data));

//promise<String>
async function get() {
  return "adan async";
}

get().then((datas) => console.log(datas));

/* async response value berbentuk promise dan tidak perllu
membuat promise secara manual  

await mendapatkan value dari promise
hanya boleh di dalam asnyc function
*/



