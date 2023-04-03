let counter=0;
function getData()
{
    console.log("fetching data" + counter++)
}



function myDebounce(call,sec)
{
    let timer;
    return function(...args)
    {
        if(timer) clearTimeout(timer);
        setTimeout(() => {
            call();
        }, sec);
    }

}



const BetterFunction = myDebounce(getData,1000);