

export interface iperson{
    tabledata: iaddress[]
}
interface iaddress{
    name: string;
    age: number;
    mobile:string;
    email:string;
    ads:string;
    landamrkdata:landmark[]
}
interface landmark{
    lname: string;
}
