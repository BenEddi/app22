export class User
{
    id:number;
    description:string;
    name:string;
    username:string;
    email:string;
    tel:string;
    password:string;
    token:string;

    constructor(private n:string,private desc:string,private em:string,private Tel:string)
    {
        this.name=n;
        this.description=desc;
        this.email=em;
        this.tel=Tel;
    }
}