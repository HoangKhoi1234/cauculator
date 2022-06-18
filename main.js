// var name,a,b,c,d
// name=prompt('NAME')
// a=Number(prompt('toan'))
// b=Number(prompt('van'))
// c=Number(prompt('anh'))
// d=parseInt((a+b+c)/3)

// if (d>10){
//     alert('Please enter again')
// }
// else if (d>=9){
//     alert('Ban '+name+' co '+d+'diem va xep loai GIOI')
// }
// else if (d>=8){
//     alert('Ban '+name+' co '+d+'diem va xep loai KHA')
// }
// else if (d>=5){
//     alert('Ban '+name+' co '+d+'diem va xep loai TRUNG BINH')
// }
// else if (d>=3){
//     alert('Ban '+name+' co '+d+'diem va xep loai KEM')
// }

var a,b,c,d
c=prompt('Enter the cauculation signs "+(Plus),-(Minus),*(Multiply),/(divide by interger)),%(Divide by remainder),^(Square),sqrt(Square root)"')
a=Number(prompt('Enter 1st number'))
b=Number(prompt('Enter 2nd number'))
switch (c) 
{
    case '+':{
        d=Number(a+b)
        alert('Solution of equation '+a+' + '+b+' is '+d)
        break;
    }
    case '-':{
        d=Number(a-b)
        alert('Solution of equation '+a+' - '+b+' is '+d)
        break;
    }
    case '*':{
        d=Number(a*b)
        alert('Solution of equation '+a+' * '+b+' is '+d)
        break;
    }
    case '*':{
        d=Number(a/b)
        alert('Solution of equation '+a+' / '+b+' is '+d)
        break;
    }
    case '*':{
        d=Number(a%b)
        alert('Solution of equation '+a+' % '+b+' is '+d)
        break;
    }
    case '^':{
        d=Number(a**b)
        alert('Solution of equation '+a+' ^ '+b+' is '+d)
        break;
    }
    case 'sqrt':{
        d=Number(Math.sqrt(a))
        alert('Solution of equation Square.root('+a+')is '+d)
        break;
    }
    default:{
        alert('No value,type again')
        break;
    }

}

























