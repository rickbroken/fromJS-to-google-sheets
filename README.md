## Guardar informacion de Formulario JS en Google Sheets Excel 

¿Quieres guardar información en una Hoja de calculo en Google Sheets con JavaScript? ✅ Es así como desarrolle una App Web donde puedes gestionar tu información y guardarla directamente en la nube, esta app esta desarrollada con Next JS, ✨y soluciona el problema de tener que lidiar con hojas de calculo desde dispositivos móviles por la poca accesibilidad. podrás enviar información no importa donde estés.🎯

### Estrcutura de carpetas:
```
└── 📁form-google-sheets
    └── .eslintrc.json
    └── .gitignore
    └── 📁img
        └── icono.png
    └── jsconfig.json
    └── next.config.js
    └── package-lock.json
    └── package.json
    └── postcss.config.js
    └── 📁public
        └── next.svg
        └── vercel.svg
    └── README.md
    └── 📁src
        └── 📁app
            └── favicon.ico
            └── globals.css
            └── layout.js
            └── page.jsx
        └── 📁components
            └── ContInputSelect.jsx
            └── ContInputText.jsx
            └── ContTypeReport.jsx
            └── ContTypeTransport.jsx
            └── FormReport.jsx
            └── Header.jsx
            └── InputDateReport.jsx
            └── InputDateReportFPP.jsx
            └── InputSelectTpDoc.jsx
            └── InputTextarea.jsx
            └── TypeSex.jsx
        └── 📁elements
            └── AlertIncomplete.jsx
            └── AlertSaving.jsx
        └── 📁functions
            └── saveData.js
            └── validateForm.js
    └── tailwind.config.js
```

## Instalacion del proyecto

### 1. Clonar Repositorio
En la carpeta que desees, desde la terminar de tu SO de preferencia ejecuta ```git clone https://github.com/rickbroken/fromJS-to-google-sheets.git```, Esto clonara el repositorio en tu carpeta.

### 2. Ingresa en la carpeta raiz
```cd formJS-to-google-sheets```

### 3. Instala Node Modules
``` npm install ```

### 4. Registrate en herramienta API SHEETS BEST
Sheets Best es una herramienta con un plan GRATUITO de 30 dias, si bien pueden haber mejores herramientas que te den un tiempo ilimitado y gratuito, en esta ocacion provaremos este servicio ya que tiene otros planes de pagos con funcionalidades muy completas.

Registrate en la plataforma [sheets.bets](https://sheet.best/admin/) Y mira la documentacion de como vicular tu archivo de Excel en Google Sheets a tu servicio de sheets bets: [Documentacion sheets best](https://sheetbestdocs.netlify.app/#how-to-prepare-your-sheet)

### 5. Remplaza la url FORM
El servicio te dara una url en donde podras enviar los datos por medio de una promesa. debes remplzar esa url en la siguiente ruta:
```
└── 📁form-google-sheets
    └── 📁src
        └── 📁functions
            └── saveData.js
```

### Con esto listo, ya podras corresr tu proyecto de manera local y 100% funcional.