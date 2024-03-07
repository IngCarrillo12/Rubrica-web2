import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({image, title, description, category, link}) => {
  const iconCategory = {Equipo:'https://img.icons8.com/doodle/48/conference-call.png ',
   Motor:'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-formula-1-racing-flaticons-lineal-color-flat-icons-2.png',
  Mesa:'https://img.icons8.com/dusk/64/restaurant-table.png'}
  return (
    <div class="flex flex-col w-3/4 md:w-1/4 h-[auto] rounded-lg md:h-[30rem] border box-border transition-shadow hover:shadow-2xl hover:shadow-blue-500">
  <div class="flex items-center space-x-4 px-4 py-2">
    <img width="28px" height="28px" src={iconCategory[category]} />
    <span class="text-sm font-semibold  text-blue-500">{category}</span>
  </div>
  <div class="p-0">
    <img src={image} className="aspect-video overflow-hidden" height="225" width="100%" alt="image deporte" />
  </div>
  <div class="flex flex-col px-4 py-2 ">
    <h3 class="text-lg font-bold border-b-2 text-blue-500">{title}</h3>
    <p class="text-sm font-base break-words pt-2">{description}</p>
  </div>
  <div class="flex flex-col px-4 py-2">
    <label class="font-semibold  text-blue-500" for="">Link:</label>
    <Link class="text-sm font-base underline break-words">{link}</Link>
  </div>
</div>
  )
}
