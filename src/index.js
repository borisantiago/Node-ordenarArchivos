/*const fs = require('fs');

const path = "C:\\OrdenarArchivos\\assets\\"

if(fs.existsSync(path+"Imagenes")){
    console.log("Ya existe el directorio imagenes");
}else{
    fs.mkdir(path+"Imagenes", (err)=>{
       if(err){
        console.log(error.message);  
       } 
       console.log("Directorio Imagenes creado");
    });
    
}



var files = fs.readdirSync(path);

for(var i =0; i<files.length; i++){
    console.log(files[i]); 
    
}
*/


const fs = require("fs");


const path = "C:\\OrdenarArchivos\\assets"

  if (fs.existsSync(path)) {
    var crearCarpetas = [
      "Imagenes",
      "Documentos",
      "Musica",
      "Instaladores"
    ];

    crearCarpetas.forEach((archivo) => {
      if (archivo !== "otros") {
        fs.mkdir(
          `${path}\\${archivo}`,
          { recursive: true },
          (err) => {
            if (!err) {
              //lectura de los archivos
              fs.readdir(path, (err, files) => {
                if (!err) {
                  let onlyFiles = files.filter((file) => {
                    return fs.statSync(`${path}\\${file}`).isFile();
                  });
                  onlyFiles.forEach((file) => {
                    if (archivo === "Documentos") {
                        if (file.endsWith(".txt") ||
                            file.endsWith(".docx") ||
                            file.endsWith(".doc") ||
                            file.endsWith(".pdf") ||
                            file.endsWith(".xlsx") ||
                            file.endsWith(".xls") ||
                            file.endsWith(".pptx")) {
                              moverCarpeta(path, archivo, file);
                        }
                      
                    } else if (archivo === "Imagenes") {
                      if (
                        file.endsWith(".jpg") ||
                        file.endsWith(".png") ||
                        file.endsWith(".JPG") ||
                        file.endsWith(".PNG") ||
                        file.endsWith(".jpeg") ||
                        file.endsWith(".JPEG") ||
                        file.endsWith(".mp4") ||
                        file.endsWith(".avi")
                      ) {
                        if (fs.existsSync(`${path}\\${file}`)) {
                          moverCarpeta(path, archivo, file);
                        }
                      }
                    }  else if (archivo === "Musica") {
                      if (file.endsWith(".mp3") ||
                          file.endsWith(".wav")) {
                        if (fs.existsSync(`${path}\\${file}`)) {
                          moverCarpeta(path, archivo, file);
                        }
                      }
                    } else if (archivo === "Instaladores") {
                      if (file.endsWith(".exe")) {
                        if (fs.existsSync(`${path}\\${file}`)) {
                          moverCarpeta(path, archivo, file);
                        }
                      }
                    }
                  });
                }
              });
            }
          }
        );
      } else {
        fs.mkdir(
          `${path}\\${archivo}`,
          { recursive: true },
          (err) => {
            if (!err) {
              //lectura de los archivos
              fs.readdir(path, (err, files) => {
                if (!err) {
                  let onlyFiles = files.filter((file) => {
                    return fs.statSync(`${path}\\${file}`).isFile();
                  });
                  onlyFiles.forEach((file) => {
                    if (fs.existsSync(`${path}\\${file}`)) {
                      moverCarpeta(path, archivo, file);
                    }
                  });
                }
              });
            }
          }
        );
      }
    });
  }



function moverCarpeta(path, archivo, file) {
  setTimeout(function () {
    try {
      fs.rename(
        `${path}\\${file}`,
        `${path}\\${archivo}\\${file}`,
        (err) => {
          if (!err) {
          }
        }
      );
    } catch (error) {}
  }, 100);
}