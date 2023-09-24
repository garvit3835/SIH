export const sendSignupData = async(obj)=> {

    const response = await fetch("http://localhost:3000/patient/signup/creds", {
        method: "POST", 
        mode: "cors", 
        
        headers: {
          "Content-Type": "application/json",
          
        },
        
        body: JSON.stringify(obj), 
      });
      return response.json();
}