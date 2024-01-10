export const saveData = async(data) => {
  try {
    const respuesta = await fetch("https://sheet.best/api/sheets/URL-EXAMPLE", { //https://sheet.best/
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return respuesta;
  } catch (error) {
    return console.log(error);
  }
}