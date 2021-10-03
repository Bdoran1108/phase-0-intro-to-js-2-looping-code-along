// Code your solutions in this file
const countDown = (num) => {
while(num>=0){
console.log(num)
num = num-1


}

}

countDown(10)

const writeCards = (arr,event) => {
    let output = []
for(let i=0;i<arr.length;i++){
const message = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
output.push(message)

}
return output

}
writeCards(['bob','joe','Brian'],'Birthday')
