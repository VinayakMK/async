//const getData = async ()=>{
    /*var data = 'my data'
    return data*/
    /*var data = await 'my data'
    console.log(data)*/
//}
//getData().then(data => console.log(data))
/*getData();
console.log(1);
console.log(2);*/

async function getData(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let formatteddata = await response.json()
        console.log(response)
    } catch(error) {
        console.log('Error :',error)
    }
}
getData()