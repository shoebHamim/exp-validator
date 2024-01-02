const validateBtn=document.getElementById('validate-btn')
const result=document.querySelector('.result')
validateBtn.addEventListener('click',()=>{
  const expression=document.getElementById('expression-input').value
  const expressionType=document.getElementById('expression-type').value
  if (expressionType==='email'){
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if(emailRegex.test(expression)){
      result.innerText='Valid Email!'
      result.className='valid'
    } else {
      result.innerText='Invalid Email'
      result.className='invalid'
    }
  }
  else if(expressionType === 'phone'){
    const phoneRegex = /^01\d{9}$/;
    if(phoneRegex.test(expression)){
      result.innerText='Valid Phone Number!'
      result.className='valid'
    } else {
      result.innerText='Invalid Phone Number'
      result.className='invalid'
    }
  }
  else if(expressionType === 'post-code'){
    const phoneRegex = /^\d{4}$/;
    if(phoneRegex.test(expression)){
      result.innerText='Valid Post Code!'
      result.className='valid'
    } else {
      result.innerText='Invalid Poset Code'
      result.className='invalid'
    }
  }

  // else if(expressionType==='phone')
})