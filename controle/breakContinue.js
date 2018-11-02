const numb = [1,2,3,4,5,6,7,8]

for( x in numb){
    if(x == 5) 
        break

        console.log(`${x} = ${numb[x]}`)
}


for(y in numb){
    if(y == 5 ){
        continue
    }
    console.log(`${y} = ${numb[y]}`)
}