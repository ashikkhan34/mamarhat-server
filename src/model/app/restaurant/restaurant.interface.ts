
export interface IRestaurant {     
  name: string;               
  email: string;             
  phone?: string;             
  aboutRestaurant:string;           
  image?: string;           
  rating?: number;            
  isActive?: boolean;         
  createdAt?: Date;          
  updatedAt?: Date;       
}