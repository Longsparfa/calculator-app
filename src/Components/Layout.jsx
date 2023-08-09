import React, { useState } from 'react'
import Output from './Output'

// const calculatePercentage = (number, percentage) => {
//   return (number * percentage) / 100;
// }

const Layout = () => {
  let [input, setInput] = useState('0');
  let [result, setResult] = useState('');



  const handleClick = (evt) => {
    const value = evt.target.value;

    // if (input.includes(value === '%')) {
    //   const parts = input.split('%')
    //   // if (parts.length !== 2) {
    //   //   throw new Error('Invalid input')
    //   // }
    //   const num1 = parseFloat(parts[0]);
    //   const num2 = parseFloat(parts[1]);

    //   return num1 % num2
    // }
    if (value === '='){
      if (input !== '') {
        // if (value === '%') {
        //     const parts = input.split(value)
        //     if (parts.length !== 2) {
        //       throw new Error('invalid expression')
        //     }
        //     const num1 = parseFloat(parts[0]);
        //     const num2 = parseFloat(parts[1]);

        //     return num1 % num2;
          
        // }
        let res = ''
        try {
          res = eval(input)
        } catch (error) {
          setResult('Math error')
        }
        if (res === undefined) {
          setResult('Math error')
        } else {
          setResult(input + '=')
          setInput(res)
        }
      }
    } else if (value === 'C') {
      setInput('0');
      setResult('');
    } else if (value === 'DEL') {
          if (input) {
            setInput(input.substring(0, input.length-1))
            if (input.length === 1) {
              setInput('0')
            }
          }
    } else if (input === '0') {
      setInput(value)
    
    }else {
      setInput((input +=value))
    }
  }

  return (
    <div className=''>
        <div className='border-2 border-solid border-white shadow-[10px_10px_30px_0px_rgba(0,0,0,0.25)] rounded-[20px] absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 w-[400px] h-[500px]'>
          <Output user={input} answer={result} />
            
            <h1 className='ml-40 mt-8'><span className='text-yellow-600'>PA<i>R</i></span><span className='text-cyan-600'>FA</span></h1>
            <div className='grid grid-cols-4 gap-[10px] p-[10px] m-auto'>
                <input type='button' value={'C'} className='h-[60px] p-[5px] rounded-[3px] border-2 border-solid border-inherent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))]  bg-red-800 border-red-200 text-white hover:bg-red-400' onClick={handleClick}></input>
                <input type='button' value={'DEL'} className='h-[60px] p-[5px] rounded-[3px] border-2 border-solid border-inherent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] bg-red-800 border-red-200 text-white hover:bg-red-400' onClick={handleClick}></input>
                <input type='button' value={'%'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] text-white bg-yellow-500 hover:bg-yellow-300' onClick={handleClick}></input>
                <input type='button' value={'/'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] text-white bg-yellow-500 hover:bg-yellow-300' onClick={handleClick}></input>

                <input type='button' value={'7'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] hover:bg-[#909090]' onClick={handleClick}></input>
                <input type='button' value={'8'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] hover:bg-[#909090]' onClick={handleClick}></input>
                <input type='button' value={'9'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] hover:bg-[#909090]' onClick={handleClick}></input>
                <input type='button' value={'*'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] text-white bg-yellow-500 hover:bg-yellow-300' onClick={handleClick}></input>

                <input type='button' value={'4'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] .bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] hover:bg-[#909090]' onClick={handleClick}></input>
                <input type='button' value={'5'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] hover:bg-[#909090]' onClick={handleClick}></input>
                <input type='button' value={'6'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] hover:bg-[#909090]' onClick={handleClick}></input>
                <input type='button' value={'-'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] text-white bg-yellow-500 hover:bg-yellow-300' onClick={handleClick}></input>

                <input type='button' value={'1'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] hover:bg-[#909090]' onClick={handleClick}></input>
                <input type='button' value={'2'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] hover:bg-[#909090]' onClick={handleClick}></input>
                <input type='button' value={'3'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] hover:bg-[#909090]' onClick={handleClick}></input>
                <input type='button' value={'+'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] text-white bg-yellow-500 hover:bg-yellow-300 ' onClick={handleClick}></input>

                <input type='button' value={'0'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] hover:bg-[#909090]' onClick={handleClick}></input>
                <input type='button' value={'.'} className='h-[60px] p-[5px] bg-white rounded-[3px] border-2 border-solid border-inherent bg-transparent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] hover:bg-[#909090]' onClick={handleClick}></input>
                <input type='button' value={'='} className='h-[60px] p-[5px] rounded-[3px] border-2 border-solid border-inherent text-black text-[2rem] bg-[linear-gradient(to_bottom,_transparent,_transparent_50%,_rgba(0,0,0,.04))] border-cyan-500 text-white bg-cyan-500 hover:bg-cyan-400' onClick={handleClick}></input>
            </div>
        </div>
    </div>
  )
}

export default Layout;