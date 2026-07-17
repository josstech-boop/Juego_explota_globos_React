import React, { useContext, useEffect, useState } from 'react';
import './pantallaJuego.css';
import { JugadorContext } from '../JugadorContext';
import { PantallaDinamica } from '../PantallaDinamica';
import { Globos } from '../Globos';

const Juego = () => {
  const {

    nombreJugador,
    puntaje,
    temporizador,
    setTemporizador,
    setPantallaDinamica,
    BuscarPosicion,
    globosDibujar,


  } = useContext(JugadorContext)

  //logica del temporizador
  useEffect(() => {

    const tiempo = setInterval(() => {

      setTemporizador((prevTemporizador) => {

        if (prevTemporizador === 0) {
          setPantallaDinamica('final')
          clearInterval(tiempo)
          return prevTemporizador
        }

        return prevTemporizador - 1

      })
    }, 1000)


    //estoy colocando un Return porque a la hora de montar la primera vez limpie el primer 
    //setTimeout o interval,  luego al segundo montaje no me de errores 
    //donde tenga doble setTimeOut o intervaly tenga errores
    return () => {
      clearInterval(tiempo)
    }

  }, [])

  //logica de los globos random

  useEffect(() => {

    console.log('globos dibujar', globosDibujar)

    const tiempo = setInterval(() => {

      if (temporizador === 0) {
        clearInterval(tiempo)
        return
      }

      BuscarPosicion()

    }, 500)

    return () => {
      clearInterval(tiempo)
    }

  }, [globosDibujar])


  return (
    <div className="pantalla-juego">
      {/* Fondo y Elementos del Cielo */}
      <div className="cielo">
        <div className="nube nube-1"></div>
        <div className="nube nube-2"></div>
        <div className="nube nube-3"></div>
      </div>

      {/* Contenedor Principal del Juego */}
      <main className="interfaz-juego">

        {/* Barra Superior de Información */}
        <header className="barra-superior">
          {/* Tarjeta 1: Jugador */}
          <div className="tarjeta-info tarjeta-jugador">
            <span className="icono-tarjeta">👤</span>
            <div className="info-textos">
              <span className="etiqueta-tarjeta">Jugador</span>
              <span className="valor-tarjeta">{nombreJugador}</span>
            </div>
          </div>

          {/* Tarjeta 2: Puntaje */}
          <div className="tarjeta-info tarjeta-puntaje">
            <span className="icono-tarjeta">⭐</span>
            <div className="info-textos">
              <span className="etiqueta-tarjeta">Puntaje</span>
              <span className="valor-tarjeta">{puntaje}</span>
            </div>
          </div>

          {/* Tarjeta 3: Tiempo */}
          <div className="tarjeta-info tarjeta-tiempo">
            <span className="icono-tarjeta">⏰</span>
            <div className="info-textos">
              <span className="etiqueta-tarjeta">Tiempo</span>
              <span className="valor-tarjeta">{temporizador} Segundos</span>
            </div>
          </div>
        </header>

        {/* Área de Juego (Contenedor de Globos) */}
        <section className="area-globos">
          
          {
            globosDibujar.map((globo) => {
              <Globos key={`${globo.color}_${globo.posicion}`} posicion={globo.posicion} color={globo.color} />
            })

          }


          <Globos posicion={8} color={'rojo'} />
          <Globos posicion={16} color={'verde'} />
          <Globos posicion={20} color={'negro'} />

        </section>


        {/* Leyenda de Puntos (Parte Inferior) */}
        <footer className="leyenda-puntos">
          <div className="item-leyenda"><span className="punto-color rojo">🔴</span> +1</div>
          <div className="item-leyenda"><span className="punto-color verde">🟢</span> +2</div>
          <div className="item-leyenda"><span className="punto-color azul">🔵</span> +5</div>
          <div className="item-leyenda"><span className="punto-color negro">⚫</span> -3</div>
        </footer>

      </main>

      {/* Franja de Césped */}
      <div className="cesped">
        <div className="capa-cesped-atras"></div>
        <div className="capa-cesped-delante"></div>
      </div>
    </div>
  );
}


export { Juego }