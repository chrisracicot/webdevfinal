'use client';

import Script from 'next/script';
import './autopong.css';

export default function AutoPongPage() {
    return (
        <div className="autopong-container">
            <Script
                src="/autopong-game.js"
                strategy="afterInteractive"
            />

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

