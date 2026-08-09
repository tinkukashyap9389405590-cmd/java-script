const BASE_URL= "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown=document.querySelectorAll("dropdown selecct");
for(code in countryList){
    console.log(code);
}

// for(let select of dropdown){
//     for(let curr in countryList){
//         let newOption=document.creatElement("option");     
//         newOption.innerText=currCode;   
//         newOption.value=currCode;
//         if(select.name === "from" && currCode === "USD"){
//             newOption.selected="selected";
//         } else if(select.name === "to" && currCode === "USD"){
//             newOption.selected="selected";
//         }
//         select.append(newOption);
//     }
//     select.addListener("change",(evt) =>{
//     updateFlage(evt.targate);
// });
// }
// const updateFlage=(Element)=>{
//     console.log(Elment);
// };


