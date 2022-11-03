/** 배열을 전부 쪼갠다음에(length 1) 그 뒤에 정렬을하는 방식 * */function mergeSort(arr) {    if(arr.length <2){        return arr    }    const mid = Math.floor(arr.length /2)    const left = mergeSort(arr.slice(0,mid))    const right = mergeSort(arr.slice(mid))    return merge(left,right)}function merge (leftArr,rightArr) {    const result = []    while(leftArr.length && rightArr.length){        if(leftArr[0] < rightArr[0]){            result.push(leftArr.shift())        }else{            result.push(rightArr.shift())        }    }    return [...result,...leftArr, ...rightArr]}