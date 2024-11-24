import React from 'react'
import { useAtom } from 'jotai'
import { modalOpenAtom, selectedItemAtom } from '@/atoms/modalOpen'
import { list } from '@/data/list'

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useAtom(modalOpenAtom)
  const [selectedId] = useAtom(selectedItemAtom)

  if (!isOpen) return null

  const selectedItem = list.find(item => item.id === selectedId)
  if (!selectedItem) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4 relative">
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-3xl font-bold mb-4">{selectedItem.name}</h2>
        <p className="text-gray-600 mb-6">{selectedItem.description}</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-orange-100 p-4 rounded-lg">
            <p className="text-lg font-semibold">{selectedItem.greed}</p>
            <p className="text-sm text-gray-600">Greed</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg">
            <p className="text-lg font-semibold">{selectedItem.pride}</p>
            <p className="text-sm text-gray-600">Pride</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg">
            <p className="text-lg font-semibold">{selectedItem.envy}</p>
            <p className="text-sm text-gray-600">Envy</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg">
            <p className="text-lg font-semibold">{selectedItem.sloth}</p>
            <p className="text-sm text-gray-600">Sloth</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg">
            <p className="text-lg font-semibold">{selectedItem.wrath}</p>
            <p className="text-sm text-gray-600">Wrath</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg">
            <p className="text-lg font-semibold">{selectedItem.gluttony}</p>
            <p className="text-sm text-gray-600">Gluttony</p>
          </div>
          <div className="bg-orange-100 p-4 rounded-lg">
            <p className="text-lg font-semibold">{selectedItem.lust}</p>
            <p className="text-sm text-gray-600">Lust</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal