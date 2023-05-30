const regform= document.getElementById("register");

const baseurl= "https://students.codex.today/createAccount"
regform.addEventListener("submit",(event)=>{

    event.preventDefault();
    const formData={
        name:regform.name.value,
        email:regform.email.value,
        phone:regform.phone.value,
        password:regform.password.value,
        access:regform.access.value
    };

    fetch (baseurl,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
    })
  .then(res=> res.json())
  .then(data =>console.log(data))
  .catch(err =>console.log(err))

  alert("registered successfully");
})



//login//

login.addEventListener("submit", async(eventt)=>{
    try{
        eventt.preventDefault();
        const formData={
            email: login.email.value,
            password:login.password.value
        }
    
        const res= await fetch("https://students.codex.today/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        const data =await res.json();
        localStorage.setItem("access",data.access);
    
        const keys=Object.keys(data);
        keys.forEach((e)=>localStorage.setItem(e,data[e]));
        window.location.assign("/html/epichome.html")
        console.log(data);
        } catch (error){
            console.log(error)
        }
    });
    
    
    
    window.onload=()=>{
    
    const token= localStorage.getItem("token");
    if(token){
        window.location.assign("/html/epichome.html");
    }
    }