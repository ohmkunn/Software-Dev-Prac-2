import React from 'react'

export default async function getHospitals(id:string) {
    const response = await fetch(`http://localhost:5000/api/v1/hospitals/${id}`)
    if(!response.ok){
        throw new Error("Failed to fetch hospital")
    }
    return await response.json()
}
