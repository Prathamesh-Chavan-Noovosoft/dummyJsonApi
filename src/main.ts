function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function hideLoader() {
  const loader = document.getElementById("loader");
  loader && (loader.style.display = "none");
}
async function fetchPosts() {
  await sleep(5000);
  const res = await fetch("https://dummyjson.com/posts");
  if (res) hideLoader();
  const data = await res.json();
  console.log(data);
  return data;
}
function displayPosts(data) {
  const resultDiv = document.getElementById("res");
  const resultData = document.createElement("div");
  const text = document.createTextNode(`UserId: ${data.UserId}`);
  resultData.appendChild(text);
  resultDiv?.appendChild(resultData);
}
window.onload = async () => {
  const data = await fetchPosts();
  console.log(data);
  displayPosts(data);
};
