class Rectangle{
   constructor(height,width){
    this.height=height;
    this.width=width;
  
   
   }
  area(){
 
   console.log("Area of triangle"+this.height*this.width);
  }
  perimeter(){
   console.log("Area of perimiter"+(2*(this.height+this.width)));
  }
}
let num1=new Rectangle(10,20);
num1.area();
num1.perimeter();
