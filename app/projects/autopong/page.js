'use client';

export default function AutoPongPage() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#111' }}>
      <iframe
        src="/autopong/index.html"
        title="Auto Pong"
        style={{ width: '100%', height: 'calc(100vh - 80px)', border: 'none', display: 'block' }}
      />
      <p style={{ marginTop: '20px', fontSize: '14px', opacity: 0.5, textAlign: 'center', color: '#eee', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
        Integrated into chrisracicot.com
      </p>
    </div>
  );
}
