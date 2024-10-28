export interface IVacants {
  id: string;
  title: string;
  description: string;
  status: 'ACTIVE' | 'INACTIVE'; 
  company: {
    id: string;
    name: string;
    location: string;
    contact: string;
    company: string; 
  };
}
