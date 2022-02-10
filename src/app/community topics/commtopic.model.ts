export class CommTopicModel {
    logo: string;
    title: string;
    firstLine: string;
    secondLine:string;
    thirdLine:string;
    fourthLine:string;
    link: string;
    link2:string;
    color: string;
    
    constructor(logo:string,
        title:string,
        firstLine:string,
        secondLine:string,
        thirdLine:string,
        fourthLine:string,
        link:string,
        link2: string,
        color:string){
            this.logo=logo;
            this.title=title;
            this.firstLine=firstLine;
            this.secondLine=secondLine;
            this.thirdLine=thirdLine;
            this.fourthLine=fourthLine;
            this.link=link;
            this.link2=link2;
            this.color=color;
        }
}