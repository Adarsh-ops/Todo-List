let arr=[];
let arr2=[];

function Store()
{
    let s=document.querySelector('input').value;
    arr.push(s);
    console.log(arr);
    document.querySelector('input').value='';
    Store2();
}
document.querySelector('.date').addEventListener('keydown',(event)=>{
    if(event.key==='Enter')
        Store();
});
document.querySelector('.Add').addEventListener('click',()=>{
    Store();
});
function Store2()
{
    let s=document.querySelector('.date').value;
    arr2.push(s);
    console.log(arr2);
    document.querySelector('.date').value='';
    display();    
}
function display()
{
    let list='';
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let element2=arr2[i];
        //Generating Html using Javascript
        let h=`<div>${element}</div>
        <div>${element2}</div>
        <button class="Delete">Delete</button>`;
        list+=h;
        console.log(list);        
    }
    document.querySelector('.disp').innerHTML=list;
    document.querySelectorAll('.Delete').forEach((del,ind)=>{
        del.addEventListener('click',()=>{
            arr.splice(ind,1);
            arr2.splice(ind,1);
            display();
        });
    });
}
