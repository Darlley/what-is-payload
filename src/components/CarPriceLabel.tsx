"use client"

import { useFormFields } from '@payloadcms/ui'
import { Car } from '@/payload-types'
import { useEffect, useState } from 'react'

export default function CarPriceLabel() {
  const carID = useFormFields(([fields]) => fields?.car?.value)
  const [car, setCar] = useState<Car | null>(null)

  useEffect(() => {
    if(car?.id !== carID){
      const fetchCar = async () => {
        try {
          const carResult: Car = await fetch(`/api/cars/${carID}?depth=0`).then((res) => res.json())
          if(carResult) setCar(carResult)
        } catch(err){
        console.error(err)
        }
      }
      fetchCar()
    }
  }, [car, carID])

  if(carID && typeof car === undefined) return <div>Loading...</div>

  if(!carID || !car) {
    return (
      <span>No car selected</span>
    )
  }

  return (
    <span>{car.title} Price</span>
  )
}
