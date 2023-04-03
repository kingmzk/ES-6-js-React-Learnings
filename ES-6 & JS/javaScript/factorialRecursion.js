let num = 4;
let res = fact(num)
console.log(res)

function fact(num)
{
    if(num == 0)
    {
        return 1;
    }
  
    else
    {
        return num*fact(num-1);
    }

}


