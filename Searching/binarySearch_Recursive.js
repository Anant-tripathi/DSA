function binarySearch_Recursive(arr, x, low, high)
{
	if(low > high)
		return -1;
	else
	{
		let mid = (low + (Math.floor(high - low)/2));
		if(arr[mid] == x)
			return mid;
		else
		{
			if(x > mid)
				binarySearch_Recursive(arr, x, mid+1, high);
			else
				binarySearch_Recursive(arr, x, low, mid-1);
		}
	}
}

let arr = [10,20,30,40,50,60,70];
let x = 70;
let res = binarySearch_Recursive(arr, x, 0, arr.length);

(res == -1) ? console.log("Element not found") :
	console.log(x + " found at index " + res);
