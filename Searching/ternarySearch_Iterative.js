function ternarySearch(arr, x)
{
	let n = arr.length;
	let low = 0;
	let high = n-1;
	let mid1, mid2;

	while(low < high)
	{
		mid1 = low + Math.floor((high - low)/3);
		mid2 = high - Math.floor((high - low)/3);

		if(arr[mid1] == x)
			return mid1;
		if(arr[mid2] == x)
			return mid2;

		if(x < arr[mid1])
			high = mid1-1;
		else
			if(x > arr[mid2])
				low = mid2+1;
		else
		{
			low = mid1+1;
			high = mid2-1;
		}
	}
	return -1;
}

let arr = [10,20,30,40,50,60,70]
let x = 83;

let res = ternarySearch(arr, x);
(res == -1) ? console.log("Element not found") :
	console.log(x + " found at index " + res);
