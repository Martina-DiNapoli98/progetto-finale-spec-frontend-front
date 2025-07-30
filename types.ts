export type Trip = {
  title: string;              
  category: string;          
  description: string;      
  price?: number;             
  durationDays?: number;      
  readonly code?: string; 
  img?: string  ;
  partenza: string;
  ritorno: string;  
};