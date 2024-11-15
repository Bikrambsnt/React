const url = 'https://saavn.dev/api/search/songs?query=Believer';
const options = { method: 'GET' };

async function getData() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data); // This will log the search results for "Believer"
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function
getData();
