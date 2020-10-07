var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
targetUrl = "https://demo.thingsboard.io/api/v1/QyXLfVS7KD5UMji/attributes?clientKeys=Value"
fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    console.table(data);
    document.querySelector("pre").innerHTML = `Value: ${data.client.Value}`
    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });