
// const urlDB = "file:///media/riwip4-045/6C76-775E/proyecto-minverse/DB/db.json";

const urlDB = "http://localhost:4000/log%20in";

// validationCustom01
// validationCustom02
// validationCustom05
// inputEmail4
// inputPassword4
// validationCustom05
// validationCustom03


export const getRegister = async () => {
  
  try {
    const reverse = await fetch(urlDB);
    const registers = await reverse.json();
    return registers;
  } catch (error) {
    alert('hay un error en tu codigo por favor verifica tu informacion y vuelve a intentarlo');
  }

}

export const newRegister = (register)=>{
  try {
    fetch(urlDB, {
      method: 'POST',
      body: JSON.stringify(register),
      headers: {
        'content-Type':'application/JSON'
      }

    })
     window.location.href = index.html;

  } catch (error) {
     alert('hay un error en tu codigo por favor verifica tu informacion y vuelve a intentarlo');
  }


}
