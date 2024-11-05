import { BASE_URL } from "../../constant"

export default async function fetchContacts() {

    const res = await fetch(`${BASE_URL}/phoneBook`)
    const data = await res.json()

    return data
}