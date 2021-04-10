document.querySelector("#pageviews span").innerText = '100K';
document.querySelector("#price span").innerText = '$16.00';

document.querySelector("input[type='range']").addEventListener("input", (event) => {
    if (document.querySelector("input[type=checkbox]").checked === true)
    {
        document.querySelector("#pageviews span").innerText = `${event.target.value}K`;
        document.querySelector("#price span").innerText = `$${(price(event.target.value)*0.75).toFixed(2)}`;   
    }
    else
    {
        document.querySelector("#pageviews span").innerText = `${event.target.value}K`;
        document.querySelector("#price span").innerText = `$${price(event.target.value).toFixed(2)}`;
    }
});

document.querySelector("input[type=checkbox]").addEventListener("click", (event) => {
    if (document.querySelector("input[type=checkbox]").checked === true)
    {
        document.querySelector("#pageviews span").innerText = `${document.querySelector("input[type='range']").value}K`;
        document.querySelector("#price span").innerText = `$${(price(document.querySelector("input[type='range']").value)*0.75).toFixed(2)}`;   
    }
    else
    {
        document.querySelector("#pageviews span").innerText = `${document.querySelector("input[type='range']").value}K`;
        document.querySelector("#price span").innerText = `$${price(document.querySelector("input[type='range']").value).toFixed(2)}`;
    }
});

function price(views) {
    return (16*views)/100;
}