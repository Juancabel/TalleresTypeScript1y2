export class Serie{
    number:number;
    name:string;
    channel:string;
    seasons:number;
    synopsis:string;
    webPage:string;
    image:string;

    constructor(number:number, name:string, channel:string, seasons:number,synopsis:string,webPage:string,image:string){
        this.number=number;
        this.name=name;
        this.channel=channel;
        this.seasons=seasons;
        this.synopsis=synopsis;
        this.webPage=webPage;
        this.image=image;       
    }
}