'use client';

import Script from 'next/script';

export default function AutoPongPage() {
    const styles = {
        container: {
            minHeight: '100vh',
            backgroundColor: '#111',
            color: '#eee',
            fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
        },
        wrap: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px',
        },
        canvas: {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            imageRendering: 'pixelated',
            cursor: 'pointer',
        },
        hud: {
            marginTop: '18px',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            fontSize: '14px',
            opacity: 0.95,
            flexWrap: 'wrap',
        },
        pill: {
            padding: '8px 10px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backgroundColor: 'rgba(20, 20, 20, 0.7)',
            borderRadius: '999px',
            display: 'inline-flex',
            gap: '10px',
            alignItems: 'center',
        },
        btn: {
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '999px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backgroundColor: 'rgba(30, 30, 30, 0.85)',
            color: '#eee',
            fontWeight: '600',
        },
        hint: {
            opacity: 0.75,
            fontSize: '12px',
        },
        menu: {
            position: 'fixed',
            right: '30px',
            top: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            backgroundColor: 'rgba(20, 20, 20, 0.7)',
            padding: '20px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(10px)',
            width: '160px',
            zIndex: 100,
        },
        menuTitle: {
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            opacity: 0.5,
            fontWeight: '700',
            marginBottom: '4px',
        }
    };

    return (
        <div style={styles.container}>
            <Script
                src="/autopong-game.js"
                strategy="afterInteractive"
            />

            <div id="modeMenu" style={styles.menu}>
                <div style={styles.menuTitle}>Game Mode</div>
                <button className="autopong-btn active" data-mode="1" style={styles.btn}>Classic</button>
                <button className="autopong-btn" data-mode="2" style={styles.btn}>Checkerboard</button>
                <button className="autopong-btn" data-mode="3" style={styles.btn}>Four Teams</button>

                <div style={{ ...styles.menuTitle, marginTop: '20px' }}>Speed</div>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <button id="speedUp" style={styles.btn}>+</button>
                    <button id="speedDown" style={styles.btn}>-</button>
                </div>
                <div id="speedometer" style={{ fontSize: '11px', fontWeight: '700', color: '#aaa', textAlign: 'center', background: 'rgba(0,0,0,0.2)', padding: '4px', borderRadius: '4px' }}>
                    Speed: 800
                </div>
            </div>

            <div style={styles.wrap}>
                <canvas id="game" width="640" height="640" style={styles.canvas}></canvas>
            </div>

            <div style={styles.hud}>
                <div id="scoreContainer" style={styles.pill}>
                    {/* Dynamic scores injected by game.js */}
                </div>
                <div style={styles.pill}>
                    <span style={styles.hint}>Click: Play/Pause, R: Reset</span>
                </div>
                <button id="resetBtn" style={styles.btn}>Reset</button>
            </div>

            <p style={{ marginTop: '40px', fontSize: '14px', opacity: 0.5 }}>
                Integrated into chrisracicot.com
            </p>
        </div>
    );
}
