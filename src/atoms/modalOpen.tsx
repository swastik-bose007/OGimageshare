import { atom } from 'jotai'

export const modalOpenAtom = atom<boolean>(false)
export const selectedItemAtom = atom<number | null>(null)