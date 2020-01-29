export class Booking {
    Id: number;
    listingId: number;
    userId: number;
    hostId: number;
    status: string;
    dateStart: string;
    dateEnd: string;

    constructor (Id, listingId, userId, hostId, status, dateStart, dateEnd) {
        this.Id = Id;
        this.listingId = listingId;
        this.userId = userId;
        this.hostId = hostId;
        this.status = status;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }
}
