export class Saloon {
    name: string;
    location: string;
    contactNumber: string;
    image: string;
    services: string;
    pricing: string;

    setData(saloonObj) {
        this.name = saloonObj.name;
        this.location = saloonObj.location;
        this.contactNumber = saloonObj.contactNumber;
        this.image = saloonObj.image;
        this.services = saloonObj.services;
        this.pricing = saloonObj.pricing;
    }
}
