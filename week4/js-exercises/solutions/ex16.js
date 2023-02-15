// write your solution here

function buildTriangle(numb) {
    var triangle = '';
    for(var x =1; x <= numb; x++){
        triangle += makeLine(x);
        
    }
    return triangle;
    
}
