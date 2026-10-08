import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className='container px-2 sm:px-6 lg:px-40'>{children}</div>
}

export default Container
