export type BaseEntity = {
    id: string;
    createdAt: number;
  };
  
  export type Entity<T> = {
    [K in keyof T]: T[K];
  } & BaseEntity;

export type Name = Entity<  {
    firstName: string;
    lastName: string;
  }>
  
 export type Address = Entity< {
    city: string;
    district: string;
    street: string;
  }>
  
  export type User = Entity<{
    id: number;
    name: Name;
    address: Address;
    phone: string;
    role: string;
    password: string;
  }>

  