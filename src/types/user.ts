interface Company {
  name: string;
  title: string;
  department: string;
}

interface Address {
  address: string;
  city: string;
  state: string;
  country: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
  age: number;
  gender: string;
  image: string;
  role: string;
  university: string;
  company: Company;
  address: Address;
}

export interface UsersApiResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
