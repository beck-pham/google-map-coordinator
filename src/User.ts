import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      // lat and lng string type by default
      lat: parseFloat(faker.address.longitude()),
      lng: parseFloat(faker.address.latitude())
    }
  }
};