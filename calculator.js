var holding = []

function methods(num1, num2, f) {
    return f(num1,num2)
}

function addition(number1,number2) {
    return Number(number1) + Number(number2)
}

function subtract(number1,number2) {
    return number1 - number2
}

function divide(number1,number2) {
    return number1 / number2
}

function multiply(number1,number2) {
    return number1 * number2
}

function clearing(array) {
	array.splice(0,array.length)
	document.getElementById("display").value = 0

}

function pushing(array, item) {
	array.push(item)
	var show = document.getElementById("display")
	show.value = array.join('')

}

function myIndexOf(type, arr) {    
    for (var i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == type){
            return i;
        }
    }
    return -1;
}

function calculate(array, methodology) {
	var temp = [],
		method = [],
		f,
		num = []


	function transform(inputArr,outputArr,methodArr, finalArr) {

		for (var i=0;i<inputArr.length;i++) {


			if(typeof(inputArr[i]) == 'number') {
				outputArr.push(inputArr[i])
			}
			
			else if(typeof(inputArr[i]) == 'string') {
				methodArr.push(inputArr.splice(i, 1))
				inputArr.splice(0, outputArr.length, outputArr.join(''))
				break
			}
		}
		finalArr.push(inputArr[0],methodArr[0])
		inputArr.splice(0,1)
		outputArr = []
		methodArr = []

		for (var j=0;j<inputArr.length;j++) {

			if ( myIndexOf("string", inputArr) >= 0) {
				transform(inputArr, outputArr, methodArr, finalArr)
			}
			
			else {

				inputArr.splice(0,inputArr.length,inputArr.join(''))
				finalArr.push(inputArr)
			} 
		}
	}

	transform(array, num, method, temp)
	
	for (var j=0;j<temp.length-1;j+=2) {
		
		for (var k=1;k<temp.length;k+=2) {
			if (temp[k] == '+') {
				f = addition
			}
			
			else if (temp[k] == '-') {
				f = subtract
			}
			
			else if (temp[k] == '*') {
				f = multiply
			}
			
			else {
				f = divide
			}
		}

		var calculated = methodology(temp[0], temp[j+2], f)
		
		temp.splice(0, 1, calculated)

		var sum = temp[0]
	}

	var displaying = document.getElementById("display")
	displaying.value = sum

	array.splice(0,array.length,temp[0])
}
