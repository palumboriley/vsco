export class SupportTopicsModel {
    logo: string;
    title: string;
    firstLine: string;
    link: string;
    link2:string;
    link3: string;
    color: string;
    
    constructor(logo:string,
        title:string,
        firstLine:string,
        link:string,
        link2: string,
        link3: string,
        color:string){
            this.logo=logo;
            this.title=title;
            this.firstLine=firstLine;
            this.link=link;
            this.link2=link2;
            this.link3=link3;
            this.color=color;
        }
}