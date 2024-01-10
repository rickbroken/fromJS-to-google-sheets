export const saveData = async(data) => {
  try {
    const respuesta = await fetch("https://sheet.best/api/sheets/aa81d702-369f-43b1-af25-bd004cf9c2bd", {
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