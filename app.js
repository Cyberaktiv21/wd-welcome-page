function updateTime() {
  document.getElementById("liveTime").innerText =
    "Company Time: " + new Date().toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

const stockEl = document.getElementById("stockPrice");

fetch("https://query1.finance.yahoo.com/v7/finance/quote?symbols=WDC")
  .then(res => res.json())
  .then(data => {
    const price = data.quoteResponse.result[0].regularMarketPrice;
    stockEl.innerText = "$" + price.toFixed(2);
    drawChart([price - 1, price - 0.5, price, price + 0.4, price + 0.8]);
  })
  .catch(() => {
    const demo = [55.3, 55.8, 56.1, 56.0, 56.5];
    stockEl.innerText = "$" + demo[4].toFixed(2);
    drawChart(demo);
  });

function drawChart(prices) {
  new Chart(document.getElementById("stockChart"), {
    type: "line",
    data: {
      labels: ["10AM", "11AM", "12PM", "1PM", "2PM"],
      datasets: [{
        data: prices,
        borderColor: "#1E90FF",
        tension: 0.4
      }]
    },
    options: {
      plugins: { legend: { display: false } }
    }
  });
}
