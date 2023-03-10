function binarySearch_Iterative(arr, key)
{
	let n = arr.length;
	let low = 0;
	let high = n-1;

	while(low <= high)
	{
		let mid = low + Math.floor((high - low)/2);

		if(arr[mid] == key)
			return mid;

		else
			if(key > arr[mid])
			low = mid+1;
		else
			high = mid-1;
	}
	return -1;
};

let arr = [10,20,30,40,50,60,70];
let x = 60;
let res = binarySearch_Iterative(arr, x);

(res == -1) ? console.log("Element not found") : 
	console.log(x + " found at index " + res);
