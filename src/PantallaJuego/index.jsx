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


  } = useContext(JugadorContext)

  //logica del temporizador

  useEffect(() => {

    // const espera = setTimeout(() => {
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
    // }, 3000)


    //estoy colocando un Return porque a la hora de montar la primera vez limpie el primer 
    //setTimeout o interval,  luego al segundo montaje no me de errores 
    //donde tenga doble setTimeOut o intervaly tenga errores
    return () => {
      clearInterval(tiempo)
    }

  }, [])




  return (
    <div className="pantalla-juego">
      {/* Fondo y Elementos del Cielo */}
      <div className="cielo">
        <div className="nube nube-1"></div>
        <div className="nube nube-2"></div>
        <div className="nube nube-3"></div>
      </div>

      {/* Contenedor Principal del Juego */}
      <main className="interfaz-ju          // setPantallaDinamica('final')
ego">

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


          <Globos id={4} color={'azul'} />
          <Globos id={8} color={'rojo'} />
          <Globos id={16} color={'verde'} />
          <Globos id={20} color={'negro'} />



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