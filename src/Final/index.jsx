import React from 'react';
import './final.css';

function Final() {
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
        
        {/* Información del Jugador y Puntaje */}
        <div className="resumen-jugador">
          <div className="bloque-info">
            <span className="etiqueta">Jugador</span>
            <span className="valor-texto">Joselyn</span>
          </div>
          <div className="bloque-info destacada">
            <span className="etiqueta">Puntaje Final</span>
            <span className="valor-destacado">28 puntos</span>
          </div>
        </div>

        {/* Cuadrícula de Estadísticas */}
        <section className="cuadricula-estadisticas">
          {/* Tarjeta 1 */}
          <div className="tarjeta-est">
            <span className="icono-est">🎈</span>
            <span className="valor-est">17</span>
            <span className="etiqueta-est">Globos explotados</span>
          </div>

          {/* Tarjeta 2 */}
          <div className="tarjeta-est">
            <span className="icono-est">🟢</span>
            <span className="valor-est">15</span>
            <span className="etiqueta-est">Globos positivos</span>
          </div>

          {/* Tarjeta 3 */}
          <div className="tarjeta-est">
            <span className="icono-est">⚫</span>
            <span className="valor-est">2</span>
            <span className="etiqueta-est">Globos negros</span>
          </div>

          {/* Tarjeta 4 */}
          <div className="tarjeta-est">
            <span className="icono-est">🏅</span>
            <span className="valor-est">6</span>
            <span className="etiqueta-est">Mejor racha</span>
          </div>
        </section>

        {/* Caja de Felicitación / Mensaje */}
        <div className="caja-mensaje">
          <p className="texto-mensaje">🎉 ¡Eres un maestro explotando globos!</p>
        </div>

        {/* Botón de Acción */}
        <button type="button" className="boton-reiniciar">
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

export {Final}