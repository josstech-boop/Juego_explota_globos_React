import React, { useContext } from 'react';
import './final.css';
import { JugadorContext } from '../JugadorContext';

function Final() {

  const {
    nombreJugador,
    puntaje,
    reiniciar,
    estadisticaGlobos

  } = useContext(JugadorContext)


  return (
    <div className="pantalla-resultado">
      {/* Fondo y Elementos del Cielo */}
      <div className="cielo">
        <div className="nube nube-1"></div>
        <div className="nube nube-2"></div>
        <div className="nube nube-3"></div>
      </div>

      {/* Tarjeta Central de Resultados */}
      <main className="tarjeta-resultado">
        <h1 className="titulo-fin">🏆 ¡Fin del Juego!</h1>

        {/* Caja de Felicitación / Mensaje */}
        <div className="caja-mensaje">
          <p className="texto-mensaje">
            {puntaje <= 0 ? '💥 ¡Cuidado con los globos negros! 💥' : puntaje > 0 && puntaje <= 10 ? '🎈 ¡Buen intento! ¡Sigue practicando! 🎈' : puntaje > 10 && puntaje <= 25
              ? '✨ ¡Muy bien! ¡Lo estás haciendo genial! ✨' : puntaje > 25 ? '🏅 ¡Eres un maestro explotando globos! 🏅' : ''}
          </p>
        </div>

        {/* Información del Jugador y Puntaje */}
        <div className="resumen-jugador">
          <div className="bloque-info">
            <span className="etiqueta">Jugador</span>
            <span className="valor-texto">{nombreJugador}</span>
          </div>
          <div className="bloque-info destacada">
            <span className="etiqueta">Puntaje Final</span>
            <span className="valor-destacado">{puntaje} puntos</span>
          </div>
        </div>

        {/* Cuadrícula de Estadísticas */}
        <section className="cuadricula-estadisticas">
          {/* Tarjeta 1 */}
          <div className="tarjeta-est">
            <span className="icono-est">🎈</span>
            <span className="valor-est">{estadisticaGlobos.globosExplotados}</span>
            <span className="etiqueta-est">Globos explotados</span>
          </div>

          {/* Tarjeta 2 */}
          <div className="tarjeta-est">
            <span className="icono-est">🟢</span>
            <span className="valor-est">{estadisticaGlobos.globosPositivos}</span>
            <span className="etiqueta-est">Globos positivos</span>
          </div>

          {/* Tarjeta 3 */}
          <div className="tarjeta-est">
            <span className="icono-est">⚫</span>
            <span className="valor-est">{estadisticaGlobos.globosNegativos}</span>
            <span className="etiqueta-est">Globos negros</span>
          </div>

        </section>



        {/* Botón de Acción */}
        <button type="button" className="boton-reiniciar"
          onClick={reiniciar}
        >
          Jugar otra vez
        </button>
      </main>

      {/* Franja de Césped */}
      <div className="cesped">
        <div className="capa-cesped-atras"></div>
        <div className="capa-cesped-delante"></div>
      </div>
    </div>
  );
}

export { Final }
