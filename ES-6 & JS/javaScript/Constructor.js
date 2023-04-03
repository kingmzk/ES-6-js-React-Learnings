function Alien(name , tech)
{
    this.name = name;
    this.tech = tech;

    this.work = function()
    {
        console.log("Solving bugs here");
    }
  
}


let Alien1 = new Alien("king" , "mzk");
console.log(Alien1);
Alien1.work();