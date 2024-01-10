export const saveData = async(data) => {
  try {
    const respuesta = await fetch("https://sheet.best/api/sheets/638c711d-7758-4d61-a50f-528b72851389", { //https://sheet.best/
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