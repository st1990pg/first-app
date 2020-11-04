export async function test() {
  let res = await fetch('https://jsonplaceholder.typicode.com/users');
  let json = await res.json();
  return json;
}
