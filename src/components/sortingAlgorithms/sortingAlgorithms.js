export function getInsertionSortAnimations(array){
       
    const animations = []
    //start from 1st index since one element is already sorted
    for (let i = 1; i < array.length;i++)
    {
            let j = i-1
            let key = array[i]    
            while (j >= 0 && key < array[j])
            {
                
                animations.push([j+1,j])//pushing to show diff colored bars of coparison
                animations.push([j+1,j])//pushing to revert bac their color
                animations.push([j+1,array[j]])
                array[j+1] = array[j]
                j -= 1
            }
            animations.push([i,j+1])
            animations.push([i,j+1])
            animations.push([j+1,key])
            array[j+1] = key
    }
  
    return animations;
}

export function BubbleSortingAlgorithms(array)
{
    const animations = []
    for(let i = 0; i < array.length; i++) 
    {
        for(let j = 0; j < array.length - i - 1; j++) 
        {
            animations.push([j, j+1])//pushing to change their color
            animations.push([j, j+1])//pushing t revert back teh colorto blue
            if(array[j] > array[j+1]) 
            {
                
                animations.push([j, j+1, array[j], array[j+1]])
                let temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp
            }
            else 
            {
                animations.push([j, array[j]])
            }
        }
    }
    return animations
}



export function getSelectionSortAnimation(arr) 
{
    const animations = [];
    //var n = arr.length;
    console.log(arr);
    const sortArr = arr.slice();
    sortArr.sort((a, b)=> a-b);
    console.log(sortArr);
    for (var i = 0; i < arr.length; i++) 
    {
        animations.push([arr[i], sortArr[i]]);
    }
    return animations;

}
export function MergesortingAlgorithms(array) 
{
	//create a shallow copy of given array into a new array object
    const animations = []
    if(array.length <= 1) return array

    const tempArray = array.slice()
    mergeSortHelper(array, 0, array.length - 1, tempArray, animations)
    return animations
}
function mergeSortHelper(mainArray, startIdx, endIdx, tempArray, animations)
 {

    if(startIdx === endIdx) return

    const middleIdx = Math.floor((startIdx + endIdx)/2)
    mergeSortHelper(tempArray, startIdx, middleIdx, mainArray, animations)
    mergeSortHelper(tempArray, middleIdx + 1, endIdx, mainArray, animations)
    doMerge(mainArray, startIdx, middleIdx, endIdx, tempArray, animations)
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, tempArray, animations) {

    let i = startIdx, k = startIdx, j = middleIdx + 1
    
    while(i <= middleIdx && j <= endIdx) {

        animations.push([i, j])
        animations.push([i, j])
    
        if(tempArray[i] <= tempArray[j]) 
        {
            animations.push([k, tempArray[i]]) 
            mainArray[k++] = tempArray[i++]
        }
        else 
        {
            animations.push([k, tempArray[j]])
            mainArray[k++] = tempArray[j++]
        }
    }

    while(i <= middleIdx) 
    {
        animations.push([i, i])
        animations.push([i, i])

        animations.push([k, tempArray[i]])
        mainArray[k++] = tempArray[i++]
    }

    while(j <= endIdx) 
    {
        animations.push([j, j])
        animations.push([j, j])
        animations.push([k, tempArray[j]])
        mainArray[k++] = tempArray[j++]
    }
}

export function demoSort(array)
{
    const animations = []
    for(let i = 0; i < array.length; i++) 
    {
        for(let j = 0; j < array.length - i - 1; j++) 
        {
            animations.push([j, j+1])//pushing to change their color
            animations.push([j, j+1])//pushing again to revert color
            if(array[j] > array[j+1]) 
            {
                
                animations.push([j, j+1, array[j], array[j+1]])
                let temp = array[j+1]
                array[j+1] = array[j]
                array[j] = temp
            }
            else 
            {
                animations.push([j, array[j]])
            }
        }
    }
    return animations;
}



