export default async function apiCall(type, length) {
  let response = await fetch(
    `https://boiling-mesa-86109.herokuapp.com/api/${type}/${length}`
  );
  let data = await response.json();
  console.log(data);
  return data;
}
