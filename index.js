document.querySelector("input[type='range']").addEventListener("input", (event) => {
        document.querySelector("#pageviews span").innerText = `${event.target.value}K`;
        document.querySelector("#price span").innerText = `$${price(event.target.value).toFixed(2)}`;
});

function price(views) {
    return (16*views)/100;
}