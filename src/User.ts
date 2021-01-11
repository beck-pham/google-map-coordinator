import faker from 'faker';
import { Mappable } from './CustomMap';

// to make sure User have all the property of Mappable interaface
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string ='red'; // <- if we don't have this property, ts will points out the err in User.ts (by using implements)

  
  // to initalize
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      // lat and lng string type by default
      lat: parseFloat(faker.address.longitude()),
      lng: parseFloat(faker.address.latitude())
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
};