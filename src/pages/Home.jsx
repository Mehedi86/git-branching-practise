import React from 'react'
import { Tooltip } from '../components/Tooltip'

export default function Home() {
  return (
    <div className='flex justify-center items-center'>
      <Tooltip text={'this is tooltip'}>
        <button>
          Let's go
        </button>
      </Tooltip>
    </div>
  )
}
