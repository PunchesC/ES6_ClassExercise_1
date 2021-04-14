class Room {
  constructor(name, length, width, avaliable = true, capacity = 15){
    this.name = name;
    this.length = length;
    this.width = width;
    this.avaliable = avaliable; 
    this.capacity = capacity; 
    
  }
  getArea(){
    return this.length * this.width;
  }
  getPerimeter(){
    return this.length + this.length + this.width + this.width;
  }
}

room1 = new Room("Sun", 30, 20);
room2 = new Room("Green", 15, 20);


console.log(room1);
console.log(room2);
console.log("Sun room area is " + room1.getArea() + " and its perimeter is " + room1.getPerimeter());
console.log("Green room area is " + room2.getArea() + " and its perimeter is " + room2.getPerimeter());

room2.avaliable = false;
room2.capacity = 18;

console.log("Sun room is avaliable : " +room1.avaliable);
console.log("Green room is avaliable : " +room2.avaliable);

console.log("Sun room capacity is " +room1.capacity);
console.log("Green room capacity is " +room2.capacity);
