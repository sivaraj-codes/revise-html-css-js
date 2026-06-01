const signupForm = document.forms["signupForm"];
signupForm.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const formData = new FormData(signupForm);
    debugger
    console.log("formData",{formData})
    let _data=Object.fromEntries(formData)
    console.log("SUbmit Data",{_data})
    try{
        let responseStream = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(_data),
          },
        );
debugger
        let jsonResp = await responseStream.json();
        console.log("success",{jsonResp})

    }catch(err){
        console.log("Error API",err)
    }
})

const handleChangeSc=(e)=>{
  console.log("onChange",e)
}