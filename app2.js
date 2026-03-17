const url = "https://icanhazdadjock.com/";

async function getJock() {
    try{
        const config = {
            header:{ Accept: "application/json"}
        };
        let res = await axios.get(url);
        console.log(re.data);
    }catch(err){
        console.log(err);
    }
}