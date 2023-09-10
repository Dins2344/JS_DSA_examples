function cartesian (x,y){
    let xy =[]
    for (let i =0; i<x.length;i++){
        for (let j=0;j<y.length;j++){
            xy.push([x[i],y[j]])
        }
    }
    console.log(xy)
}

cartesian([1,2,3,4],[4,5,8,7])