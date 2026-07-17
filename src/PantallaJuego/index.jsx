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
    pantallaDinamica,
    setPantallaDinamica,
    BuscarPosicion,
    globosDibujar,
    EliminarGlobo,


  } = useContext(JugadorContext)

  //logica del temporizador
  useEffect(() => {
    const tiempo = setInterval(() => {

      setTemporizador((prevTemporizador) => {

        if (prevTemporizador === 0) {
          setPantallaDinamica('final')
          clearInterval(tiempo)
          prevTemporizador
          return 0
        }

        return prevTemporizador - 1

      })
    }, 1000)

    //NOta: estoy colocando un Return porque a la hora de montar la primera vez limpie el primer 
    //setTimeout o interval,  luego al segundo montaje no me de errores 
    //donde tenga doble setTimeOut o intervaly tenga errores
    return () => {
      clearInterval(tiempo)
    }
  }, [])

  //logica de los globos random
  useEffect(() => {
    if (pantallaDinamica !== 'jugar') return

    const tiempo = setInterval(() => {
      if (temporizador === 0) {
        clearInterval(tiempo)
        return
      }

      BuscarPosicion()


    }, 400)

    return () => {
      clearInterval(tiempo)
    }
  }, [pantallaDinamica, temporizador])

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
            globosDibujar.map((globo) => (

              < Globos key={globo.id} id={globo.id} posicion={globo.posicion} color={globo.color} />
            ))

          }
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