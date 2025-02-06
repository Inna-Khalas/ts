interface IUser {
  name: string;
  age: number;
  email: string;
  address?: {
    [key: string]: string;
  };
}

const mango: IUser = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: IUser = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
