/* 
    Async & Await
*/

// TRY CATCH -> vai verificar se temos erro
async function getCoin() {
    try {
        const data = await fetch('https://api.coingecko.com/api/v3/exchange_rates')
        const json = await data.json();
        console.log(json);
    } catch(error) {
        console.log(error);
    }
}

getCoin();