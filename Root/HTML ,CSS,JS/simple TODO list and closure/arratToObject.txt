/* Convert an array([1,2,3,4,5]) to an
 object({‘0’: 1, ‘1’: 3, ‘2’: 6, ‘3’: 10, ‘4’: 15})
  where key represents the index of the array
   and value represents sum of values up until 
   that index in the array.*/
function arrToObject(arr){
    return arr.reduce(function(accumulator,num,index){
        if (index===0){
            accumulator[index]=num
            return accumulator
        }
        accumulator[index]=accumulator[index-1]+num
        return accumulator
    },{})
}
let arr=[1,2,3,4,5]
console.log(arrToObject(arr))