function binarySearch(arr, n, x)
{
	let low = 0;
	let high = arr[n-1];
	let middle;
	while(low < high)
	{
		let middle = low + Math.floor((high-low)/2);
		if(arr[middle] === x)
			return middle;
		else
			if(x > arr[middle])
				low = middle+1;
		else
			high = middle-1;
	}
	return -1;
}

let arr = [10,20,30,40,50,60,70,80];
let n = arr.length;
let x = 70;
let res = binarySearch(arr, n, x);
if(res)
	console.log(x + "found at index " + res);
else
	console.log("element not found");
