const promise = new Promise((resolve,reject) =>{
	if(true){
	resolve('stuff worked');

	}
	else{
	reject('error,it broke')
	}
})
const promise1 = new Promise((resolve,reject) =>{
setTimeout(resolve,100,'POokie');
})
const promise2 = new Promise((resolve,reject) =>{
setTimeout(resolve,10000,'Woohoo');
})
const promise3 = new Promise((resolve,reject) =>{
setTimeout(resolve,3000,'oolalala');
})
Promise.all([promise,promise1,promise2,promise3])
.then((values)=>{
	console.log(values);
})

promise
.then(result => result + '!')
.then(result2 =>{
	throw error;
	console.log(result2);
})
.catch(()=>console.log("error"));

const promise = new Promise((resolve,reject)=>{
setTimeout(resolve,3000,'success');
})
promise.then(result=>{console.log('success');})

//Async Await:-to make an asynchronous code look synchronous.
async function playerStart(){
	const firstMove = await movePlayer(100,'Left');
	const secondMove= await movePlayer(400,'Left');
	const thirdMove=await movePlayer(10,'Right');
	const fourthMove=await movePlayer(330,'Left');
}


fetch('http://jsonplaceholder.typicode.com/users')
			.then(response=>response.json())
			.then(users=> this.setState({robots:users}))


async function fetchUsers(){
	const resp = await fetch('http://jsonplaceholder.typicode.com/users')
   const data = await resp.json();
   console.log(data);
}

const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
const getData = async function(){
try{	const[ first,second,third,fourth ] = await 
Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
}
catch(err){
console.log("oops!:(")
	}
}