export async function poetryApiCall(type: string, length: number) {
  let response = await fetch(
    `https://boiling-mesa-86109.herokuapp.com/api/${type}/${length}`
  );
  let data = await response.json();
  console.log(data);
  return data;
}

export async function rapApiCall(words: string) {
  let response = await fetch(
    `https://boiling-mesa-86109.herokuapp.com/api/rap/${words}`
  );
  let data = await response.json();
  console.log(data);
  return data;
}
