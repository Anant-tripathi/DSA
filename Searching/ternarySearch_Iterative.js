function ternarySearch(arr, key)
{
	let n = arr.length;
	let low = 0;
	let high = n-1;

	while(low < high)
	{
		let mid1 = low + Math.floor((high - low)/3);
		let mid2 = high - Math.floor((high - low)/3);

		if(arr[mid1] == key)
			return mid1;
		if(arr[mid2] == key)
			return mid2;

		if(key > arr[mid1])
			low = mid1+1;
		else
			if(key < arr[mid2])
				high = mid2-1;
		else
		{
			low = mid1+1;
			high = mid2-1;
		}
	}
	return -1;
};

let arr = [10,20,30,40,50,60,70]
let x = 30;

let res = ternarySearch(arr, x);
(res == -1) ? console.log("Element not found") :
	console.log(x + " found at index " + res);
