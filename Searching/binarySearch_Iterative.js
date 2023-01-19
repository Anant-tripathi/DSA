function binarySearch_Iterative(arr, x)
{
	let n = arr.length;
	let mid;
	let low = 0;
	let high = n-1;

	while(low < high)
	{
		mid = low + Math.floor((high - low)/2);

		if(arr[mid] == x)
			return mid;
		else
			if(x > arr[mid])
				low = mid + 1;
		else
			high = mid - 1;
	}
	return -1;
}

let arr = [10,20,30,40,50,60,70];
let x = 40;

let res = binarySearch_Iterative(arr, x);
if(res == -1)
	console.log("Element not found");
else
	console.log(x + " found at index " + res);
