// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const myArray = [1,2,3,4,3,2];

let abc = myArray.filter((ele,index)=> myArray.indexOf(ele) === index);
console.log(abc)

const data = myArray.reduce((acc,current,index) =>{
  console.log(acc,current,index)
  return acc * current;
},2 );
console.log('data',data)

Array.prototype.MyReduce = function(callBack,ele){
  let returnData = !ele ? this[0]:ele ;
  for(let i = 0 ;i< this.length;i++){
    returnData = callBack(returnData,this[i],i)
  }
  return returnData
}
const data1 = myArray.MyReduce((acc,current,index) =>{
  console.log(acc,current,index)
  return acc * current;
},2 );
console.log(data1);

//filter

const data2 = myArray.filter((ele,index) => ele === 2);
console.log(data2)
Array.prototype.myFilter = function(callback){
  const newArray = []
  for(let i = 0 ; i< this.length;i++){
    if(callback(this[i],i)){
      newArray.push(this[i])
    }
    
  }
  return newArray;
}

const data3 = myArray.myFilter((ele,index) => ele === 2);
console.log(data3)

const myArrayCap = [{name:'prachi',age:27},
{name:'ram',age:29},
{name:'harry',age:17}]
console.log(myArrayCap)
const newMyArrayCap =  myArrayCap.map(ele => {
  let obj = {
    name: ele.name[0].toUpperCase()+ ele.name.slice(1),
    age:ele.age
  }
 return obj
})
console.log(newMyArrayCap[0])


let myString = 'i am a good student';

console.log(myString.split(' ').reverse());
console.log(myString.split(' ').map(ele => {
 // console.log(ele.split(''))
  return ele.split('').reverse().join('')
}).join(' '));
let flatArray =[1,4,[5,7,[9,9]]]
console.log(flatArray.flat(2))
console.log(
  flatArray.reduce((ele,curr)=>{
  if(typeof curr == 'number'){
ele.push(curr)
  }else{
    ele.push(...curr)
  }
  return ele;

},[]))

function flatArrayNew(input){

  return function newArr(flatArray){
    
  return  flatArray.reduce((ele,curr)=>{
      if(typeof curr == 'number'){
    ele.push(curr)
      }else{
        ele.push(...curr)
      }
      return ele;
    
    },[])
  }

}

// Q: Design a custom json. stringify function !

// Difficulty level : hard

// Task :
// :- Design a custom json .stringify function which takes a json input and return a string of that json.
// :- Should take care of nested objects and arrays as well
// :- empty objects also to be accepted


// Example :
// customJSONString({t1:["t1"],t2:{t3:{t4:"t5"}}})
// should return
// '{"t1":["t1"],"t2":{"t3":{"t4":"t5"}}}'

const jsonStr = {t1:["t1"],
t2:{t3:{t4:"t5"}
}};
function customJsonStr(){
 // for(let i =0;i<)
 return function newString(jsonStr){
  for(let ele in jsonStr){
    console.log(ele,Object.keys(jsonStr[ele]),jsonStr[ele])
    if(Object.keys(jsonStr[ele])){
      //newString(jsonStr[ele])
    }
  }
 }
  

}
console.log(customJsonStr()(jsonStr))