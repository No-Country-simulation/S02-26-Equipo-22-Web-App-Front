export interface Data {
  data: string;
  id?: number | void;
}
export interface ChildrenType {
  children: React.ReactNode;
}

export interface namesFormularie {
  firstName: string;
  secondSurname: string;
  email: string;
  password: string;
  secondPassword: string;
}

export interface FilterHorses {
  breed: string;
  moreSales: number;
  temperament: string;
  moreAgeThan3: string
  age: number;
  // ofertas
  installments: string;
  // velocidad de envios
  shipping: string;
}
export interface HorsesEntity {
  id: number
  name: string
  image: string
  breed: string;
  price: number;
  sales: number;
  moreAgeThan3: string
  temperament: string;
  age: string;
  // ofertas
  installments: string;
  // velocidad de envios
  shipping: string;
}
