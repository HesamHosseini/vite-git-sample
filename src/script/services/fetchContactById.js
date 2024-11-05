import { BASE_URL } from "../../constant"



export default async function fetchContactById(id) {

    const res = await fetch(`${BASE_URL}/phoneBook/${id}`)
    const data = await res.json()

    console.table(data)
}
