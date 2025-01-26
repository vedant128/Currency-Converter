const urlll = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_aQLqDcsff2UKp7bKrvPQJ19b4ZMl9ORjuQUCChVY";
let dropd = document.querySelector(".sel1"); // Get the dropdown element
let dropd1 = document.querySelector(".sel2");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const btn=document.querySelector("#btn");
const fromcurr=document.querySelector(".sel1");
const tocurr=document.querySelector(".sel2");

const countryList = {
    AUD: "AU",
  BGN: "BG",
  BRL: "BR",
  CAD: "CA",
  CHF: "CH",
  CNY: "CN",
  CZK: "CZ",
  DKK: "DK",
  EUR: "FR",
  GBP: "GB",
  HKD: "HK",
  HRK: "HR",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  ISK: "IS",
  JPY: "JP",
  KRW: "KR",
  MXN: "MX",
  MYR: "MY",
  NOK: "NO",
  NZD: "NZ",
  PHP: "PH",
  PLN: "PL",
  RON: "RO",
  RUB: "RU",
  SEK: "SE",
  SGD: "SG",
  THB: "TH",
  TRY: "TR",
  USD: "US",
  ZAR: "ZA",
};

for (let currCode in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = currCode;
    newoption.value = currCode;
    dropd.append(newoption);

    if (currCode === "USD") {
        newoption.selected = "selected";
    }

    dropd.append(newoption);
    dropd.addEventListener("change",(evt)=>{
        updtflag(evt.target);
    })
}
for (let currCode1 in countryList) {
    let newoption1 = document.createElement("option");
    newoption1.innerText = currCode1;
    newoption1.value = currCode1;
    dropd1.append(newoption1);
    
    if (currCode1 === "INR") {
        newoption1.selected = "selected";
    }
    dropd1.append(newoption1);
    dropd1.addEventListener("change",(evt)=>{
    updtflag(evt.target);
    })
}

const updtflag=(element)=>{
    //   console.log(element);
      let currcode=element.value;
    //   console.log(currcode);
    let countrycode=countryList[currcode];
    console.log(countrycode)
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;

}
btn.addEventListener("click",async (event)=>
{
      event.preventDefault();
    //   console.log(dropd.value);
      let amount=document.querySelector("#inp1");
      let amtval=amount.value;
      if(amtval===""|| amtval<1)
      {
        amtval=1;
      }
      console.log(amtval);
      
      console.log(fromcurr.value,tocurr.value);
    let resp=await fetch(urlll);
    let curdata =await resp.json();
    let rate=curdata.data[tocurr.value];
    
    let para =document.querySelector("#hee");
    let finalamt=rate*amtval;
    para.innerText=`${fromcurr.value} to ${tocurr.value} is ${finalamt}`
})