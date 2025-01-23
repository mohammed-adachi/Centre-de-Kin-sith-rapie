// src/app/models/resource.model.ts

export interface Room {
    id: number;
    name: string;
    capacity: number;
  }
  
  export interface Machine {
    id: number;
    name: string;
    type: string;
  }
  
  export interface Package {
    id: number;
    name: string;
    price: number;
    duration: string;  // par exemple: '1 mois', '6 mois', etc.
  }
  