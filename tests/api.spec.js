import {test,expect} from "@playwright/test"

test ("get method to fetch all the repositories",async({request})=>{
    const response= await request.get("https://api.github.com/user/repos",{
        headers:{
            Authorization: "Bearer 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"
        }
    });

    expect(response.status()).toBe(200);
    console.log("STATUS :",response.status());
    const body= await response.json()
    console.log(body);
    
})