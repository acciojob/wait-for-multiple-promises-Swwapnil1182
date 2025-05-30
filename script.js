//your JS code here. If required.
const startTime=performance.now()

const promise1 = () => {
    const delay=1000
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({label:"promise 1", time:delay/1000});
        }, delay)
    });
};

const promise2 = () => {
    const delay=2000
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({label:"promise 2", time:delay/1000})
        }, delay)
    })
}

const promise3 = () => {
    const delay=2000
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({label:"promise 3", time:delay/1000})
        }, delay)
    })
}

Promise.all([promise1(),promise2(),promise3()]).then((results)=>{

    const endTime=performance.now()
    const totalTime=((endTime-startTime)/1000).toFixed(3)

   const tbody=document.getElementById('output')

   tbody.innerHTML=""

   const row=document.createElement("tr")

   results.forEach(result => {
    const row=document.createElement("tr")
    
    row.innerHTML=`
    <td>${result.label}</td>
    <td>${result.time.toFixed(3)
    }</td>
    `
    tbody.appendChild(row)
   });

   const totalRow=document.createElement("tr")
   totalRow.innerHTML=`
   <td>Total</td>
   <td>${totalTime}</td>
   `

   tbody.appendChild(totalRow)

})