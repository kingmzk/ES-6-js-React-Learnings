
const myThrottling = (fn,d) =>
{
  return function(...args)
    {
        document.getElementById("myid").disabled=true;

        setTimeout(() => {
            fn();
        }, d);
    }
}




const newFun=myThrottling(()=>
{
    document.getElementById("myid").disabled=false;
    console.log("User Clicked!")
},3000)








/*
<button type="text" id="myid" onclick="newFun()">HELLO</button>
<script src="./throtling.js"></script>

const myThrottling = (fn, d) => {
  let isThrottled = false;
  return function (...args) {
    if (!isThrottled) {
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
        fn(...args);
      }, d);
    }
  };
};

const newFun = myThrottling(() => {
  document.getElementById("myid").disabled = false;
  console.log("User Clicked!");
}, 3000);
*/