import { storage } from '@/consts'

const setItem = (storage: storage, value: string) => {
  localStorage.setItem(storage, value)
}

const getItem = (storage: storage): string | null => {
  return localStorage.getItem(storage)
}

const removeItem = (storage: storage) => {
  localStorage.removeItem(storage)
}

const getUserData = (key: string) => {
  try {
    const userData = JSON.parse(localStorageService.getItem(storage.USER) || '{}')

    return userData?.[key] || null
  } catch (error) {
    console.error('Error parsing user data:', error)
    return null
  }
}

const localStorageService = { setItem, getItem, removeItem, getUserData }

export default localStorageService
