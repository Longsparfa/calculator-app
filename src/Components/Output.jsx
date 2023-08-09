import React from 'react'
import OutputRow from './OutputRow'

const Output = props => {
    
  return (
    <div className='mt-2 h-[80px]'>
        <OutputRow value={props.answer} textSize={{fontSize: '20px'}} />
        <OutputRow value={props.user} />
    </div>
  )
}

export default Output