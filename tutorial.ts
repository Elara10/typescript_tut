// let id:number=5;
// let company:string="ABC";
// let isPublished:boolean=true;

// let ids:number[]=[1,2,3,4,5];
// let x:any="abc";
// let xArr:any[]=[true,"rst",0];

// let a:string="hello"; 
// let b:string="world";

// const concatenateValues=(a:string,b:string)=>{
//     return a+b;
// }
// console.log(concatenateValues("Hello","World"));
// console.log(concatenateValues("5","10"));




// INTERFACES AND TYPES
// interface UserInterface {
//     greet(message: string): void;
// }

// const User: UserInterface = {
//     greet(message){
//         console.log(message);
//     },
// };
// User.greet("Hello");


// interface BusinessPartner {
//     name:string;
//     creditScore:number;
// }
// interface UserIdentity{
//     id:number;
//     email:string;
// }
// type Employee=BusinessPartner & UserIdentity

// const signContract=(employee:Employee):void=>

// {
//     console.log("Contract signed by  " + employee.name + " with email: "  + employee.email)
// }
// signContract({name:"dfvf",creditScore:500,id:6,email:"dfvf@gmail.com"})


// ENUM

// unauthorized,user doesn't exist,wrong credentials,internal

// enum LoginError{
//     unauthorized="unauthorized",
//     NoUser="nouser",
//     WrongCredentials="wrongcredenials",
//     internal="internal",
// }
// const printErrorMsg=(error:LoginError)=>{
//     if(error==LoginError.unauthorized)
//     {
//         console.log("User not authorized");
//     }
//     else if(error==LoginError.NoUser)
//     {
//         console.log("No user found with that username.");
//     }
//     else if(error==LoginError.WrongCredentials)
//     {
//         console.log("Wrong username/password combination");
//     }
//     else{
//         console.log("Internal Error.");
//     }
// }
// printErrorMsg(LoginError.internal);



// GENERIC

// class StorageContainer<T>{
//     private contents :T[];

//     constructor()
//     {
//         this.contents=[];
//     }
//     addItem(item:T):void{
//         this.contents.push(item);
//     }
//     getItem(idx:number):T | undefined 
//     {
//         return this.contents[idx];
//     }
// }

// const usernames=new StorageContainer<string>();
// usernames.addItem("pedrotech");
// usernames.addItem("echobr");
// console.log(usernames.getItem(1));

// class StorageContainer<T>
// {
//     private contents:T[];
//     constructor()
//     {
//         this.contents=[];
//     }
//     addItem(item:T):void{
//         this.contents.push(item);
//     }
//     getItem(idx:number):T 
//     {
//        return this.contents[idx];
//     }
// }
// // const usernames=new StorageContainer<string>();
// // usernames.addItem("abc");
// // usernames.addItem("def");
// // console.log(usernames.getItem(1));

// const friendsCount=new StorageContainer<number>();
// friendsCount.addItem(12);
// friendsCount.addItem(24);
// console.log(friendsCount.getItem(1));



// READ-ONLY VARIABLES

interface Employee{
    readonly employeeId:number;
    startDate:Date;
    name:string;
    department:string
}
const employee:Employee={
    employeeId:1,
    startDate:new Date(),
    name:"abc",
    department:"Finance",
}
employee.name="qwe";
console.log(employee);