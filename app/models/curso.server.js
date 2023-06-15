export async function getCurso() {
  const url = process.env.API_URL;
  const respuesta = await fetch(`${url}/curso?populate=imagen`);
  return await respuesta.json();
}
