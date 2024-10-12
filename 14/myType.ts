type Car = {
    brand: string;
    age: number;
};

const carMap: Map<Car, number | number[]> = new Map();

carMap.set({ brand: "Volvo", age: 25 }, 100);        
carMap.set({ brand: "Mercedes", age: 30 }, [200, 300]);   
carMap.set({ brand: "BMW", age: 35 }, 400);      

console.log(carMap);
