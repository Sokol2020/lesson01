const XML = ({ formId, someElem = [] }) => {
  const xhr = new XMLHttpRequest();
  let arrData = [];

  const getData = () => {
    xhr.open("GET", "db.json");

    xhr.responseType = "json";

    xhr.onload = () => {
      if (xhr.status >= 400) {
        console.error(xhr.response);
      } else {
        arrData.push(xhr.response);
      }
    };

    xhr.send();
  };

  const sendData = () => {
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    xhr.send(JSON.stringify(arrData[0]));
  };

  getData();
  setTimeout(() => {
    sendData();
  }, 1000);
};

export default XML;