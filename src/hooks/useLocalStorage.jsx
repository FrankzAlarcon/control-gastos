import {useState, useEffect} from 'react'

function useLocalStorage(key, initialValue) {
  const [value, setValue] =  useState(initialValue);
  
  useEffect(() => {
    const storageValue = localStorage.getItem(key);
    if(storageValue) {
      setValue(JSON.parse(storageValue));
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));      
    }    
  }, []);

  const saveValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  }

  return [
    value,
    saveValue
  ]
}

export default useLocalStorage