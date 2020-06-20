//Acá pongo mi modelo de producto !

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  details: {
    header: string;
    title: string;
    description: string;
    image1: string;
    image2: string;
    image3: string;
    footer: string;
  };

  constructor(
    id: number,
    name: string,
    description: string = '',
    price: number = 0,
    imageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLtyvJAddBpFYsEian49I6XuPIyc1zFRHSMXJ-TF4C6LAZcYg7H1ILF9xAe1LcOEFOMF8r2wQ&usqp=CAc',
    details: {
      header: string;
      title: string;
      description: string;
      image1: string;
      image2: string;
      image3: string;
      footer: string;
    }
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.details = details;
  }
}
