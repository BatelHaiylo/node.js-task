const fs = require("fs")

class MyServer {
  writeFile = () => {
    fs.writeFile("exsecute", "Rehovot", (error) => {
      if (error) {
        return console.log(error);
      }
      return console.log("file was created succsesfully");
    });
  };
  readAFile = () => {
    fs.readFile("exsecute", { encoding: 'utf8' }, (error, data) => {
      if (error) {
        return console.log(error);
      }
      return console.log(data);
    });
  };
}

module.exports = {
    myClassObject : new MyServer(),
    MyServer
}
