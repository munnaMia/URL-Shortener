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
const outputURL = document.getElementById("outputBox");
const UL = document.getElementById("mainUL");

const storageKey = "URLshortdata";
let urlContainer = JSON.parse(localStorage.getItem(storageKey)) || [];

async function urlShotener() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        outputURL.innerText = result.shortUrl; // Output to main screen

        urlContainer.push({
            id: new Date().getTime().toString(),
            URL: result.shortUrl,
        });
    } catch (error) {
        console.error(error);
    }
}

const savaToLocalStorage = () => {
    if (longURL.value === "") {
        outputURL.innerText = "Please enter a URL!";
        return;
    }
    options.body.url = longURL.value;
    urlShotener(); // push item itno array
    localStorage.setItem(storageKey, JSON.stringify(urlContainer));
    render(); // render the output after the modification
};

const render = () => {
    const li = document.createElement("li");
    const list = JSON.parse(localStorage.getItem(storageKey));

    //main rendering
    if (list.length !== 0) {
        UL.innerHTML = "";
        list.map((item) => {
            li.appendChild(document.createTextNode(item.URL));
            UL.appendChild(li);
        });
    }
};

const clearHistory = () => {
    UL.innerHTML = "";
    urlContainer = []; //clear the array
    localStorage.clear(); // delete from local storage
};
