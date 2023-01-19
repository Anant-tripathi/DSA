function binarySearch_Iterative(arr, x)
{
	let n = arr.length;
	let low = 0;
	let high = n-1;
	let mid;

	while(low < high)
	{
		mid = low + (Math.floor(high - low)/2);
		if(arr[mid] == x)
			return mid;
		else
			if(x > mid)
				low = mid+1;
		else
			high = mid-1;
	}
	return -1;
}

let arr = [10,20,30,40,50,60,70];
let x = 60;
let res = binarySearch_Iterative(arr, x);

(res == -1) ? console.log("Element not found") : 
	console.log(x + " found at index " + res);
