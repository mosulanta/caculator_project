const zero = document.querySelector(".ZeroButton")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const equalTo = document.querySelector("#equalTo")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const clearAll = document.querySelector("#clearAll")
const deleteBtn = document.querySelector("#delete")
const divide = document.querySelector("#divide")
const multiply = document.querySelector("#multiply")
const raiseToPower = document.querySelector("#raiseToPower")
const solutionDisplay = document.querySelector("#solutionDisplay")
const equationsDisplay = document.querySelector("#equationsDisplay")




  const arrayNum = []


  function clear(){
    arrayNum.length = 0;
  }

  one.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push(1)
    const input =  arrayNum.join("")
     console.log(input)
     equationsDisplay.innerHTML= input;
  })


    two.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push(2)
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })

    three.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push(3)
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })

    four.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push(4)
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })


   five.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push(5)
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })

    six.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push(6)
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })


   seven.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push(7)
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })


  eight.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push(8)
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })

   
  nine.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push(9)
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })

  
  zero.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push(0)
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })


    
   plus.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push("+")
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })


   
   minus.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push("-")
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })

   
   dot.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push(".")
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })


  
   multiply.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push("*")
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })


  
   divide.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push("/")
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })

  
  
  deleteBtn.addEventListener('click',(e) =>{
    e.preventDefault()
    const input =  arrayNum.pop()
    const del = arrayNum.join("")
    console.log(del)
     equationsDisplay.innerHTML= del;
  })
  
  
  equalTo.addEventListener('click',(e) =>{
    e.preventDefault()
    const calculate = arrayNum.join("")
    const calc = eval(calculate)
    console.log(calc)
    solutionDisplay.innerHTML= calc;
  })
      

   
    raiseToPower.addEventListener('click',(e) =>{
    e.preventDefault()
     arrayNum.push("**")
    const input =  arrayNum.join("")
     console.log(input)
      equationsDisplay.innerHTML= input;
  })
      
  

  
  
   clearAll.addEventListener('click',(e) =>{
    e.preventDefault()
     clear()
     console.log(arrayNum)
     solutionDisplay.innerHTML="0";
     equationsDisplay.innerHTML="0";
  })