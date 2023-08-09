import React from 'react'

const OutputRow = props => {
  return (
    <div className=''>
        <input type="text" readOnly style={props.textSize} value={props.value} className='block mx-auto w-[90%] text-[3.5rem] h-[50px] border-none bg-cyan-500 text-white text-right pr-[20px] pl-[10px] pt-[10px] pb-[20px]' />
    </div>
  )
}

export default OutputRow