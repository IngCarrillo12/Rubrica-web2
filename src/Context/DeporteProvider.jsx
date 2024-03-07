import React, { useEffect, useState } from 'react'
import DeporteContext from './DeporteContext'

export const DeporteProvider = ({ children }) => {
    const arrayDeportes = [{id:1, category:'Equipo', title:'BasketBall', description:'El baloncesto es un deporte de equipo, jugado entre dos conjuntos de cinco jugadores cada uno en cuatro períodos de cuartos de diez minutos cada uno doce minutos cada cuarto en la NBA',link:'https://www.nba.com/lakers/los-lakers-homepage', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Kent_Benson_attempts_a_hook_shot_over_Ken_Ferdinand.jpg/275px-Kent_Benson_attempts_a_hook_shot_over_Ken_Ferdinand.jpg'},
    {id:2, category:'Mesa', title:'Domino', description:'Dominó es un juego de mesa en el que se juegan y emplean unas fichas (baldosas) rectangulares,1​ generalmente blancas por la cara y negras por el envés',link:'https://es.wikipedia.org/wiki/Domin%C3%B3', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dominospiel.JPG/200px-Dominospiel.JPG'},
    {id:3, category:'Motor', title:'Rallycross', description:'Rallycross es una disciplina del automovilismo que se disputa en circuitos con superficies mixtas, generalmente asfalto y tierra. Cada fecha de rallycross suele componerse de una serie de mangas eliminatoria',link:'https://es.wikipedia.org/wiki/Rallycross',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hansen2004.jpg/220px-Hansen2004.jpg' },
    {id:4, category:'Mesa', title:'Ajedrez', description:'El ajedrez es un juego de tablero entre dos contrincantes donde cada uno dispone de dieciséis piezas móviles que se desplazan sobre un tablero capturando piezas del jugador contrario',link:'https://es.wikipedia.org/wiki/Ajedrez', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Opening_chess_position_from_black_side.jpg/275px-Opening_chess_position_from_black_side.jpg'},
    {id:5, category:'Motor', title:'Motocross', description:'Motocross1​ o motocrós es una forma de competición de motocicletas en todo terreno celebrada en circuitos cerrados. El deporte fue evolucionando desde las pruebas celebradas en el Reino Unido.',link:'https://es.wikipedia.org/wiki/Motocross', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/MotoX_racing03_edit.jpg/220px-MotoX_racing03_edit.jpg'},
    {id:6, category:'Equipo', title:'Futbol Americano', description:'El fútbol americano es un deporte nacido hace más de cien años en EE. UU. que se expandió a toda Norteamérica, derivado del rugby inglés. Es uno de los deportes de contacto más competitivos de EE. UU.',link:'https://www.espn.com.co/futbol-americano/', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bastien_Pereira_.jpg/275px-Bastien_Pereira_.jpg'},
    {id:7, category:'Mesa', title:'Billar', description:'El billar es un deporte de precisión que se practica impulsando con un taco un número variable de bolas, en una mesa. Tuvo la carta olímpica para los Juegos Olímpicos de 2004.',link:'https://es.wikipedia.org/wiki/Billar', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/London_-_Royal_Automobile_Club_-_2976.jpg/220px-London_-_Royal_Automobile_Club_-_2976.jpg'},
    {id:8, category:'Motor', title:'Motorcycle racing', description:'El deporte de las carreras de motocicletas incluye las carreras de motocicletas en carretera y las carreras todoterreno, ya sea en circuitos o en pistas abiertas, y las carreras en pista. ',link:'https://en.wikipedia.org/wiki/Motorcycle_racing', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Capirossi_Hayden_Rossi_2005.jpg/220px-Capirossi_Hayden_Rossi_2005.jpg' },
    {id:9, category:'Equipo', title:'Futbol', description:'El fútbol, futbol​ o balompié​  es un deporte de equipo jugado entre dos conjuntos de once jugadores cada uno, mientras los árbitros se ocupan de que las normas se cumplan correctamente.',link:'https://app.juniorfc.co/', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/275px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg'}
]
    const [deportes, setDeportes] = useState([])

    useEffect(() => {
      setDeportes(arrayDeportes)
    }, [])
    
  return (
    <DeporteContext.Provider value={{ deportes, setDeportes }}>
        {children}
    </DeporteContext.Provider>
  )
}
