let arr=["Mango","Banana","Pineapple","chitale","coconut"];
for(let i=0;i<arr.length;i++){
    console.log(i,"=",arr[i]);

}
console.log("Reversing whole array-------------------------");
for(let i=arr.length-1;i>=0;i--){
    console.log(i,"=",arr[i]);
}
console.log("Nested array by loops-------------------------");
let arra=[["Iron Man","Captain America","Thor"],["Antman","Spiderman","Pantman"],["Black video","Hawkey"]];
for(let i=0;i<arra.length;i++){
    for(let j=0;j<arra[i].length;j++){
        console.log(arra[j][i]);//we can use her logic to print first nested array then second
        
    }

}