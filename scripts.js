
// menu for click buttom
document.querySelector('.menu').addEventListener('click', () =>{
    document.querySelectorAll('.target').forEach((element) =>{
        element.classList.toggle('change');
    })
})


const icons = document.querySelectorAll('.section-one-icons i');
//last item doesnot have any next sibling to fix this we have to do extra work here
//we need to create new variable
let item = 1
setInterval(() => {
 item++
   

    const icon = document.querySelector('.section-one-icons .change')
    
    //first element
    icon.classList.remove('change');
    if(item > icons.length){
        icons[0].classList.add('change')
        item = 1
    }else{
     //second elements
    icon.nextElementSibling.classList.add('change');
    } 

},1000)
