'use client';

import Script from 'next/script';

export default function AutoPongPage() {
    return (
        <div className="autopong-container">
            <Script
                src="/autopong-game.js"
                strategy="afterInteractive"
            />
            <style jsx global>{`
        .autopong-container {
          min-height: 100vh;
          background: #111;
          color: #eee;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .autopong-wrap {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .autopong-canvas {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          image-rendering: pixelated;
          cursor: pointer;
        }

        .autopong-hud {
          margin-top: 18px;
          display: flex;
          justify-content: center;
          gap: 20px;
          font-size: 14px;
          opacity: 0.95;
          flex-wrap: wrap;
        }

        .autopong-pill {
          padding: 8px 10px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(20, 20, 20, 0.7);
          border-radius: 999px;
          display: inline-flex;
          gap: 10px;
          align-items: center;
        }

        .autopong-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          display: inline-block;
        }

        .autopong-btn {
          cursor: pointer;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(30, 30, 30, 0.85);
          color: #eee;
          font-weight: 600;
          transition: transform 0.1s;
        }

        .autopong-btn:active {
          transform: translateY(1px);
        }

        .autopong-hint {
          opacity: 0.75;
          font-size: 12px;
        }

        .autopong-menu {
          position: fixed;
          right: 30px;
          top: 40px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: rgba(20, 20, 20, 0.7);
          padding: 20px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          width: 160px;
          z-index: 100;
        }

        @media (max-width: 1000px) {
          .autopong-menu {
            position: relative;
            right: auto;
            top: auto;
            width: 100%;
            max-width: 400px;
            margin-bottom: 20px;
            order: -1;
          }
        }

        .autopong-menu-title {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.5;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .autopong-menu .autopong-btn {
          width: 100%;
          text-align: center;
          transition: all 0.2s;
        }

        .autopong-menu .autopong-btn.active {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
        }

        .autopong-score-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .autopong-score-item:not(:last-child) {
          margin-right: 15px;
        }
      `}</style>

            <div className="autopong-menu" id="modeMenu">
                <div className="autopong-menu-title">Game Mode</div>
                <button className="autopong-btn active" data-mode="1">Classic</button>
                <button className="autopong-btn" data-mode="2">Checkerboard</button>
                <button className="autopong-btn" data-mode="3">Four Teams</button>

                <div className="autopong-menu-title" style={{ marginTop: '20px' }}>Speed</div>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <button className="autopong-btn" id="speedUp">+</button>
                    <button className="autopong-btn" id="speedDown">−</button>
                </div>
                <div id="speedometer" style={{ fontSize: '11px', fontWeight: '700', color: '#aaa', textAlign: 'center', background: 'rgba(0,0,0,0.2)', padding: '4px', borderRadius: '4px' }}>
                    Speed: 800
                </div>
            </div>

            <div className="autopong-wrap">
                <canvas id="game" width="640" height="640" className="autopong-canvas"></canvas>
            </div>

            <div className="autopong-hud">
                <div className="autopong-pill" id="scoreContainer">
                    {/* Dynamic scores injected by game.js */}
                </div>
                <div className="autopong-pill">
                    <span className="autopong-hint">Click: Play/Pause, R: Reset</span>
                </div>
                <button className="autopong-btn" id="resetBtn">Reset</button>
            </div>

            <p style={{ marginTop: '40px', fontSize: '14px', opacity: 0.5 }}>
                Integrated into chrisracicot.com
            </p>
        </div>
    );
}
