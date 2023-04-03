let laptop = 
{
    cpu : "i9",
    ram : 12,
    brand : "iphone",

    getConfig : function()
    {
        console.log(this.cpu);
    }
}


let laptop1 = 
{
    cpu : "i7",
    ram : 16,
    brand : "HP",

    getConfig : function()
    {
        console.log(this.cpu);
    },

    compare :function(other)
    {
         if(this.cpu < other.cpu )
         {
            console.log(this);
         }
         
         else
         {
            console.log(other);
         }
      
    }
}
laptop.getConfig();
laptop1.compare(laptop);