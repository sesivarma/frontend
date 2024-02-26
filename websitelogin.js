var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");

    function register(){
        x.style.left ="50px";
        y.style.left ="450px";
        z.style.left ="0px";

    }
    function login(){
       
        x.style.left ="-400px";
        y.style.left ="50px";
        z.style.left ="110px"; 

    }
    // let specialChar =/(?=.*?[!@?#$%^&*-])/
    // let upperCase =/(?=.*?[A-Z]) /
    // let lowerCase =/(?=.*?[a-z])/
    // let digit = /(?=.*?[0-9])/

    // let demo=document.getElementById("demo")
    //     demo.addEventListener("click",(e)=>{
    //             e.preventDefault()
    //             let name=document.getElementById("name").value
    //             console.log(name);
    //             let email=document.getElementById("email").value
    //             console.log(email); 
    //             // password.addEventListener("keyup",()=>{
    //             //          let password=document.getElementById("password").value
    //             //          console.log(password);
    //             //              if(upperCase.test(password)===false){
    //             //                 demo.innerHTML="It should contain one uppercase"
    //             //               }else if(lowerCase.test(password)===false){
    //             //                 demo.innerHTML="It should contain one lowercase"

    //             //              }else if(digit.test(password)===false){
    //             //                 demo.innerHTML="It should contain one digit"

    //             //              }else if(specialChar.test(password)===false){
    //             //                 demo.innerHTML="It should contain one specialChar"
    //             //                 }
    //             //  }) 
    //     })
    //     window.localStorage.setItem("name",name)
    //     window.localStorage.setItem("email",email)
    //     window.localStorage.setItem("password",password)
       
    // let demo1 = document.getElementById("demo1")
    // console.log(demo1);
    //    demo1.addEventListener("click",(e)=>{
    //     e.preventDefault()

    //     let email1=document.getElementById("email1").value
    //     console.log(email1);
    //     let password1=document.getElementById("password1").value
    //     console.log(password1);
    //     let a=window.localStorage.getItem("name")
    //     let c=window.localStorage.getItem("email")
    //     let b=window.localStorage.getItem("password")
    //     if((email1=== a || email1=== c) && password1 ===b ){
    //         window.alert("welcome to home page")
    //     }else{
    //         window.alert("error msg")
    //     }
    
    // })


    let register1 = document.getElementById("register")
    console.log(register1);

    register1.addEventListener("submit" ,(e) => {
     e.preventDefault()
    //  console.log("jbdjb");
    let name = document.getElementById("name").value
    console.log(name);
    let email = document.getElementById("email").value
    console.log(email);
    let password = document.getElementById("password").value
    console.log(password);
    if(name === "" && email === "" && password === "")
    {
        window.alert("field should not be empty")
    }
     window.alert("click on login button")
     window.open("http://127.0.0.1:5500/login/websitelogin.html")
     let email1 = window.localStorage.setItem("mail" , email)
     let password1 = window.localStorage.setItem("password" , password)

    })


    let login1 = document.getElementById("login")
    console.log(login1);
  
    login1.addEventListener("submit" , (e) => {
        e.preventDefault()
        // console.log("djndj");
        
     let  a = document.getElementById("email1")
     console.log(a);
     let b = document.getElementById("password1")
     console.log(b);
     let c = document.getElementById("name")
     console.log(c);
     if(a.value === "" && b.value === ""){
        window.alert("field should not be empty")
     }else if((a.value != window.localStorage.getItem("mail") ||c.value != window.localStorage.getItem("name"))&& b.value != window.localStorage.getItem("password"))
     {
        window.alert("given details not matching")
     }
     else if((a.value === window.localStorage.getItem("mail") ||c.value === window.localStorage.getItem("name"))&& b.value === window.localStorage.getItem("password"))
     {
        window.alert("login successfull")
        window.open("http://127.0.0.1:5500/login/addtocart/addtocart.html")
     }
    })


