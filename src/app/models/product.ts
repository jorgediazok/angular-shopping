export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(
    id: number,
    name: string,
    description: string = '',
    price: number = 0,
    imageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLtyvJAddBpFYsEian49I6XuPIyc1zFRHSMXJ-TF4C6LAZcYg7H1ILF9xAe1LcOEFOMF8r2wQ&usqp=CAc'
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
