let items = [5,4,3,2,1];

function selectionSort(data){
    let minId;
    for(let i=0;i<data.length;i++){
        minId=i;
        for(let j =i+1;j<data.length;j++){
            if(data[j]<data[minId]){
                minId=3;
                minId=j;
            }
        }
        let temp =data[minId];
        data[minId]=data[i]
        data[i]=temp
    }

}

selectionSort(items)
console.warn(items)