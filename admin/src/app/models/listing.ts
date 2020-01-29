export class Listing {

    Id: number;
    title: string;
    location: string;
    description: string;
    numberOfPeople: number;
    pricePerNight: number;
    hostId: number;
    url: string;

    constructor (Id, title, location, description, numberOfPeople, pricePerNight, hostId, url) {
        this.Id = Id;
        this.title = title;
        this.location = location;
        this.description = description;
        this.numberOfPeople = numberOfPeople;
        this.pricePerNight = pricePerNight;
        this.hostId = hostId;
        this.url = url;
    }
}
