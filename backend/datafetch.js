const fetchdata = async () => {

    const response = await fetch('http://localhost:3000/data');
    const json = await response.json();

    console.log(json);
}

fetchdata

