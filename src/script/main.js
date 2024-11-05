import { BASE_URL } from '../constant'
import '../style/style.css'
import fetchContacts from './services/fetchContacts'
import postContacts from './services/postContact'


const appElement = document.querySelector("#app")
const form = document.querySelector("form")
const phoneNumberInput = document.querySelector("#phoneNumberInput")
const nameInput = document.querySelector("#nameInput")


function renderContacts(contactList = []) {

    appElement.innerHTML = "";
    const contactListElm = document.createElement("ul")

    contactList.forEach(contact => {
        const contactElm = document.createElement("li")

        const nameElm = document.createElement("span")
        nameElm.innerText = contact.name
        const phoneNumberElm = document.createElement("span")
        phoneNumberElm.innerText = contact.phoneNumber

        contactElm.append(nameElm, phoneNumberElm)

        contactListElm.append(contactElm)
    })

    appElement.append(contactListElm)
}





// error handling



// try {

//     fetchContacts().then((data) => {
//         renderContacts(data)
//     })

// } catch (error) {

//     console.log(error)


// }


async function fetchAndLoadContacts() {


    try {
        const data = await fetchContacts();
        renderContacts(data)
    } catch (error) {
        switch (error.message) {
            case "404":
                alert("داده ای یافت نشد!")
                break;
            case "401":
                alert("شما دسترسی ندارید")
                break;
            default:
                alert("مشکلی در دریافت داده وجود دارد لطفا مجددا تلاش کنید")
                console.error(error)
                break;
        }
    }

}

fetchAndLoadContacts()





form.addEventListener("submit", async (e) => {
    e.preventDefault();



    try {

        const contactName = nameInput.value
        const phoneNumber = phoneNumberInput.value

        if (contactName.length < 1 || phoneNumber.length < 3) {
            console.log(contactName, phoneNumber)
            throw new Error("Form Error")
        }
        const res = await postContacts({ name: contactName, phoneNumber: phoneNumber })

        if (res.ok) {
            alert("مخاطب با موفقیت ایجاد شد")
            await fetchAndLoadContacts()
        }
    } catch (error) {

        switch (error.message) {
            case "Form Error":
                alert("لطفا فرم را به طور صحیح تکمیل کنید")
                break;

            default:
                break;
        }
    }




})




