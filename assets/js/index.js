if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registeration) => {
      console.log(registeration);
    })
    .catch((error) => console.log(error));
}
