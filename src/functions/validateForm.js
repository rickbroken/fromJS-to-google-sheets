export const validateForm = async(setIncomplete,setSaving,data) => {
  if(data.tpDoc === ''){
    setIncomplete({status: true, text: 'Seleccione tipo de documento'});
    setTimeout(() => {
      setIncomplete({status: false, text: ''});
      setSaving(false);
      return true;
    }, 2000);
    return false;
  } else if(data.documento === ''){
    setIncomplete({status: true, text: 'Escriba un numero de documento'});
    setTimeout(() => {
      setIncomplete({status: false, text: ''});
      setSaving(false);
      return true;
    }, 2000);
    return false;
  } else if(data.nombYApell === ''){
    setIncomplete({status: true, text: 'Escriba los nombres y apellidos'});
    setTimeout(() => {
      setIncomplete({status: false, text: ''});
      setSaving(false);
      return true;
    }, 2000);
    return false;
  } else if(data.fechaReporte === ''){
    setIncomplete({status: true, text: 'Seleccine una fecha de reporte'});
    setTimeout(() => {
      setIncomplete({status: false, text: ''});
      setSaving(false);
      return true;
    }, 2000);
    return false;
  } else if(data.recibeLlamada === ''){
    setIncomplete({status: true, text: 'Escriba quien recibio el reporte'});
    setTimeout(() => {
      setIncomplete({status: false, text: ''});
      setSaving(false);
      return true;
    }, 2000);
    return false;
  } else if(data.acompanante === ''){
    setIncomplete({status: true, text: 'Seleccione si requiere acompañante'});
    setTimeout(() => {
      setIncomplete({status: false, text: ''});
      setSaving(false);
      return true;
    }, 2000);
    return false;
  } else if(data.casaDePaso === ''){
    setIncomplete({status: true, text: 'Seleccione si requiere Casa de Paso'});
    setTimeout(() => {
      setIncomplete({status: false, text: ''});
      setSaving(false);
      return true;
    }, 2000);
    return false;
  } else {
    return true;
  }
}