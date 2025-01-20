export const validateEmail = (value: string): string | null => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return 'Please enter a valid email address.'
  }
  return null
}

export const validatePhone = (value: string): string | null => {
  if (!/^\d{9}$/.test(value)) {
    return 'Please enter a valid 9-digit phone number.'
  }
  return null
}

export const validateZipCode = (value: string): string | null => {
  if (!/^\d{5}$/.test(value)) {
    return 'Please enter a valid 5-digit ZIP code.'
  }
  return null
}

export const validateRequired = (value: string): string | null => {
  if (!value.trim()) {
    return 'This field is required.'
  }

  return null
}

export const validateCity = (value: string): string | null => {
  if (!/^[A-Za-z\s]+$/.test(value)) {
    return 'Please enter a valid city name.'
  }
  return null
}

export const validateState = (value: string): string | null => {
  if (!/^[A-Za-z\s]+$/.test(value)) {
    return 'Please enter a valid state name.'
  }
  return null
}
