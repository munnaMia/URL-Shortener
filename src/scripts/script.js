const url = "https://url-shortner10.p.rapidapi.com/lits.rocks/";
const options = {
    method: "POST",
    headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "0717b13984mshcf875005c531f3ep1b4390jsn4e8ec2aec582",
        "X-RapidAPI-Host": "url-shortner10.p.rapidapi.com",
    },
    body: {
        url: "",
    },
};
const longURL = document.getElementById("longURL");
const URL_Container = [];

const savaToLocalStorage = () => {
    // Some task take the input url then move with it option.body.url = input url the perfrom tasks
};
// async function find() {
// try {
// const response = await fetch(url, options);
// const result = await response.json();
// console.log(result);
// } catch (error) {
// console.error(error);
// }
// }
//
// find()
const deleteFromLocalStorage = () => {};
