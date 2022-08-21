
import React from 'react';

class LocalStorage {
    setItem (key, value) {
        localStorage.setItem(key, value)
    } 
    
    getItem (key) {
       return localStorage.getItem(key)
    }
}



