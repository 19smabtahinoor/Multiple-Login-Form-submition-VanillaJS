const formNum1 = document.querySelector('.form1')
const formNum2 = document.querySelector('.form2')
const formNum3 = document.querySelector('.form3')
const YourInfo = document.querySelector('.yourInfo')

const form1NextBtn = document.querySelector('.form1_next_btn')
const form2NextBtn = document.querySelector('.form2_next_btn')
const form2PreviousBtn = document.querySelector('.form2_prev_btn')
const form3PreviousBtn = document.querySelector('.form3_prev_btn')
const form3SubmitBtn = document.querySelector('.form3_submit_btn')

form1NextBtn.addEventListener('click',()=>{ 
    formNum1.classList.add('hideForm')
    formNum2.classList.add('showForm')
    formNum2.classList.remove('hideForm')
})

form2PreviousBtn.addEventListener('click',() => {
    formNum1.classList.remove('hideForm')
    formNum1.classList.add('showForm')
    formNum2.classList.add('hideForm')
})

form2NextBtn.addEventListener('click',()=>{ 
    formNum2.classList.add('hideForm')
    formNum3.classList.add('showForm')
    formNum3.classList.remove('hideForm')
})

form3PreviousBtn.addEventListener('click',() => {
    formNum2.classList.remove('hideForm')
    formNum2.classList.add('showForm')
    formNum3.classList.add('hideForm')
})





//get userdata
const userFirstName = document.querySelector('.fName')
const userLastName = document.querySelector('.LName')
const userCityName = document.querySelector('.city')
const userVillageName = document.querySelector('.village')
const useremailName = document.querySelector('.email')
const usermobileName = document.querySelector('.mobilenumber')
const infoarea = document.querySelector('.yourinfoWrapper')

form3SubmitBtn.addEventListener('click',()=>{
    YourInfo.classList.add('showForm')

    let userInfo = `
    <h1>Your Information</h1>
    <div class="infos">
    <ul>
        <li><b>Your Name : </b>${userFirstName.value} ${userLastName.value}</li>
        <li><b>Your City : </b>${userCityName.value}</li>
        <li><b>Your Village : </b>${userVillageName.value}</li>
        <li><b>Your Email : </b>${useremailName.value}</li>
        <li><b>Your Mobile Number : </b>${usermobileName.value}</li>
    </ul>
    </div>
    `
    infoarea.innerHTML = userInfo

})