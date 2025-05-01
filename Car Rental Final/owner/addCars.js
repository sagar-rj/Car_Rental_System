// Sample car data to store in localStorage
const carData = [
  {
      id: 0,
      name: "Car 1",
      image: "img/car1.jpg",
      price: 769,
      description: "Good Deal, Excellent, Petrol"
  },
  {
      id: 1,
      name: "Car 2",
      image: "img/car2.jpg",
      price: 769,
      description: "Good Deal, Excellent, Petrol"
  },
  {
      id: 2,
      name: "Car 3",
      image: "img/car3.jpg",
      price: 899,
      description: "Luxury, Diesel, Comfortable"
  }
];

// Save to localStorage
localStorage.setItem('cars', JSON.stringify(carData));
