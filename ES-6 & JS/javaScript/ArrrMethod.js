let nums = [134,5,6,7,7,4,5,43,24,4,6,6,7,78,7,54];

nums.filter(n => n%2==0)
.map(n => n*2)
.forEach((n) =>
    {
      console.log(n);
    })

    //we have reduce((a,b)=>a+b);  //takes multiple values and gives one output and we hve to store that 

    let data = [10,50,3,7,9,555,60,78];

    //let res = new Set("bookkeeper");
    let res = new Set();
  //  console.log(res);
    res.add(3);
    res.add(3);
    res.add("telusko");

    for(let ele of res)
    {
       console.log(ele);
    }
    console.log(res.has(3));
    console.log(res.has("telusko"));

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();