export async function getPosts() {
  const url = process.env.API_URL;
  const respuesta = await fetch(`${url}/posts?populate=imagen`);
  return await respuesta.json();
}

export async function getPost(url) {
  const urlApi = process.env.API_URL;
  const respuesta = await fetch(
    `${urlApi}/posts?filters[url]=${url}&populate=imagen`
  );

  return await respuesta.json();
}
