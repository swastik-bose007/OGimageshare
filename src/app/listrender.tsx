import React, { useCallback } from 'react'
import { list } from '@/data/list'
import { useAtom } from 'jotai'
import { modalOpenAtom, selectedItemAtom } from '@/atoms/modalOpen'

const ListRender: React.FC = () => {
  const [, setModalOpen] = useAtom(modalOpenAtom)
  const [, setSelectedItem] = useAtom(selectedItemAtom)

  
  const handleItemClick = useCallback((itemId: number) => {
    setSelectedItem(itemId)
    setModalOpen(true)
  }, [setModalOpen, setSelectedItem])

  return (
    <div className='grid grid-cols-3 gap-4'>
      {list.map((item) => (
        <div 
          key={item.id} 
          className="col-span-3 md:col-span-1 bg-orange-500 h-full w-full p-6 border-2 border-black cursor-pointer"
          onClick={() => handleItemClick(item.id)}
        >
          <h1 className='text-3xl font-semibold text-white'>
            {item.name}
          </h1>
          <p className='text-base text-wrap px-4 leading-[120%] mt-4 text-white text-start'>{item.description}</p>
          <div className="flex justify-center items-center gap-4 mt-5">
            <div className="flex flex-col gap-1">
              <p className='text-lg text-white font-medium '>{item.greed}</p>
              <p className='text-sm text-white'>Greed</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className='text-lg text-white font-medium '>{item.pride}</p>
              <p className='text-sm text-white'>Pride</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className='text-lg text-white font-medium '>{item.envy}</p>
              <p className='text-sm text-white'>Envy</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className='text-lg text-white font-medium '>{item.sloth}</p>
              <p className='text-sm text-white'>Sloth</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className='text-lg text-white font-medium '>{item.wrath}</p>
              <p className='text-sm text-white'>Wrath</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className='text-lg text-white font-medium '>{item.gluttony}</p>
              <p className='text-sm text-white'>Gluttony</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className='text-lg text-white font-medium '>{item.lust}</p>
              <p className='text-sm text-white'>Lust</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListRender
