import { BASE_URL } from "../../constant";

export default async function postContacts(data) {
    /*  
    {
    name : "hasan",
    phoneNumber : "+989123456789"
    }
    */
    const res = await fetch(`${BASE_URL}/phoneBook`, {
        method: "POST",
        body: JSON.stringify(data)
    })
    return res
}