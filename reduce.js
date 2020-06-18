const data=require('./matches.json');
//using reduce method
// let output = data.reduce((acc,item)=>{
//     let key=item['team1'];
//     if(acc[key]){
//         acc[key]++;
//     }
//     else{
//         acc[key]=1;
//     }
//     return acc;
// },{});
// console.log(output)

//matches per season
const result= data.reduce((acc,cv)=>{
    var team1 = cv['team1'];
    var team2 = cv['team2'];
    var season = cv['season'];
    if(acc[season]){
        if([team1]){
                acc[season][team1]++
        }
        else{
            acc[season][team1][team2]=1;
       }
       
        
    }
    
    
    
    return acc;
},{})
console.log(result)
















