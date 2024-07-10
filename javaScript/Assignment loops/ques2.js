const marks=-1
if(marks>=90 && marks<=100){
    console.log(`grade A`)
}else if(marks>=70 && marks<90){
    console.log("grade B")
}else if(marks>=50 && marks<70){
    console.log("grade C")
}else if(marks>=0 && marks<50){
    console.log("grade F")
}else {
    console.log(" invalid input ")
}