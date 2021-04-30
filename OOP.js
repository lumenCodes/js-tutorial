function Circle (radius) {
   
    this.radius= radius;

    let defaultLocation = {x:0, y:3};
  
    /**
     * line 5-10 is a private function and method.
     */ 


     this.getDefaultLocation = function(){
        return defaultLocation;
        
         // note that I can return the private functions and methods
    };
    
    this.draw = function(){
       /**Note that default location and compute optimium location can be accessed in here */
        console.log('draw');
        
    };

    Object.defineProperty(this, 'defaultLocation',{
        get: function(){
            return defaultLocation;
        }
        set: function(value){
            if (!value.x || !value.y)
            throw new Error('invalid location')
        defaultLocation = value;
        }
    }); 
}

const circle = new Circle (10);
circle.
circle.defaultLocation 

// console.log(defaultLocation)  //this is out of scope

 
/// inheritance

