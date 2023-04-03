//async js programming

const datas = [
    { name: "mzk", profession: "DevOps" },
    { name: "mka", profession: "Java Developer" }
]

const getDatas = () =>
{
    let output = ""
    setTimeout(() =>
    {

        datas.forEach((data, index) =>
        {
            output += `<li>${index}   ${data.name}</li>`
        })
        document.body.innerHTML = output
    }, 1000);
}


//Using CallBack Function
// function createdata(newData,callBack)
// {
//   setTimeout(() => {
//     datas.push(newData);
//     callBack();
//   }, 2000);
// }

// createdata({name:"erina",profession: "DevOps"},getDatas)
// // getDatas();



//Using promises

// function createdata(newData) {
//     // return a new Promise with a resolve and reject function
//     return new Promise((resolve, reject) => {
//       // simulate an asynchronous operation with setTimeout
//       setTimeout(() => {
//         // push the new data object to the datas array
//         datas.push(newData);
//         let error = false;
//         if (!error) {
//           // if there is no error, resolve the Promise
//           resolve();
//         } else {
//           // if there is an error, reject the Promise with an error message
//           reject("Error has been occured");
//         }
//       }, 2000);
//     });
//   }
  



// createdata({ name: "erina", profession: "DevOps" })
// .then(getDatas)
// .catch(error => console.log(error));




//async and await




function createdata(newData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        datas.push(newData);
        let error = false;
        if (!error) {
          resolve();
        } else {
          reject("Error has been occured")
        }
      }, 2000);
    });
  }
  

async function start(){
 await createdata({ name: "erina", profession: "DevOps" })
 getDatas();
}

start();