export async function getGuitarras() {
  const url = process.env.API_URL;
  const respuesta = await fetch(`${url}/guitarras?populate=Imagen`);
  return await respuesta.json();
}
export async function getGuitarra(url) {
  const urlApi = process.env.API_URL;
  const respuesta = await fetch(
    `${urlApi}/guitarras?filters[url]=${url}&populate=Imagen`
  );
  return await respuesta.json();
}
