const data = require('./matches.json');
// var obj={}
// for(i=0;i<data.length;i++){
//     obj[data[i]['season']]={}
   
// }
// console.log(obj)

//let jsonData = require('./source.json');
let obj={};
let count={};
//let count1={};
for(let i=0;i<data.length;i++){
    if(data[i]['season']==='2017'){
        const val=data[i]['team1'];
        if(val in count){
            count[val]=count[val]+1;
        }else{
            count[val]=1;
        }
     }
     
    
    //console.log(count);
// for(let i=0;i<data.length;i++){
    if(data[i]['season']==='2017'){
           obj[data[i]['season']]={count};

           //if(data[i]['season']==='2008'){
        //     obj[data[i]['season']]={count1};
        //    }
          
}
    
}
console.log(obj);
