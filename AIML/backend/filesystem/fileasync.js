const fs = require('fs/promises');
const read = async () => {
    try{
        const data = await fs.readFile("./data.txt","utf8");
        console.log(data)
    }catch(error){
        console.log(error.message)
    }
}
const write = async () => {
    try{
        await fs.writeFile("./data2.txt","This is my new file");
    }catch(error){
        console.log(error.message)
    }
}
write();