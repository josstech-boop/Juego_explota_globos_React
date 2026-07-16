import React, { useContext, useEffect, useState } from 'react';
import './pantallaJuego.css';
import { JugadorContext } from '../JugadorContext';
import { PantallaDinamica } from '../PantallaDinamica';

const Juego = () => {
  const {

    nombreJugador,
    puntaje,
    temporizador,
    setTemporizador,


  } = useContext(JugadorContext)

  //logica del temporizador

  useEffect(() => {

    // const espera = setTimeout(() => {
    const tiempo = setInterval(() => {

      setTemporizador((prevTemporizador) => {

        if (prevTemporizador === 30) {
          clearInterval(tiempo)
          return prevTemporizador
        }

        return prevTemporizador + 1

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
          {/* Bloque 1 */}
          <div className="globo-juego globo-rojo pos-1">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-verde pos-2">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-azul pos-3">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-negro pos-4">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-rojo pos-5">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>

          {/* Bloque 2 */}
          <div className="globo-juego globo-verde pos-6">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-azul pos-7">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-negro pos-8">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-rojo pos-9">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-verde pos-10">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>

          {/* Bloque 3 */}
          <div className="globo-juego globo-azul pos-11">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-rojo pos-12">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-negro pos-13">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-verde pos-14">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-azul pos-15">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>

          {/* Bloque 4 */}
          <div className="globo-juego globo-negro pos-16">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-rojo pos-17">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-verde pos-18">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-azul pos-19">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-negro pos-20">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>

          {/* Bloque 5 (Nuevos de Relleno) */}
          <div className="globo-juego globo-rojo pos-21">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-verde pos-22">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-azul pos-23">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-negro pos-24">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
          <div className="globo-juego globo-rojo pos-25">
            <div className="brillo-globo"></div>
            <div className="hilo-globo"></div>
          </div>
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