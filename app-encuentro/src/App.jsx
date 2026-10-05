import React, { useState, useEffect } from 'react';
import { CalendarDays, MapPin, Users, Info, Phone, ShieldCheck, CreditCard } from 'lucide-react';
import './index.css';

const teamsData = [
  { name: 'CABURE RUGBY', resp: 'Salvador Mosso', phone: '', city: '', province: '', ig: '', qty: 35, sports: 'Rugby' },
  { name: 'LIONAS Y LIONES', resp: 'Silvina Forrester', phone: '', city: '', province: '', ig: '', qty: 35, sports: 'Hockey' },
  { name: 'PUMPAS XV', resp: 'Daniel Fernández', phone: '', city: '', province: '', ig: '', qty: 30, sports: 'Rugby' },
  { name: 'ATLÉTICO DEL ROSARIO', resp: 'Farias Lisandro', phone: '', city: '', province: '', ig: '', qty: 25, sports: 'Rugby' },
  { name: 'OLD RESIAN CLUB', resp: 'Eber Sosa', phone: '', city: '', province: '', ig: '', qty: 20, sports: 'Rugby' },
  { name: 'BUENOS AIRES C&R', resp: 'Cristian Ailer', phone: '', city: '', province: '', ig: '', qty: 30, sports: 'Rugby, Hockey' },
  { name: 'CUYIS', resp: 'Martín Coria', phone: '', city: '', province: '', ig: '', qty: 35, sports: 'Rugby' },
  { name: 'SAN AGUSTÍN XV', resp: 'Bocha', phone: '', city: '', province: '', ig: '', qty: 50, sports: 'Rugby' },
  { name: 'CABURÉ HOCKEY', resp: 'Federico Valencia', phone: '', city: '', province: '', ig: '', qty: 19, sports: 'Hockey' },
  { name: 'ARDILLAS MIXED', resp: 'Martín Caffaro', phone: '', city: '', province: '', ig: '', qty: 20, sports: 'Rugby' },
  { name: 'DEL SUR RUGBY', resp: 'Adriana Álvarez', phone: '', city: '', province: '', ig: '', qty: 15, sports: 'Rugby' },
  { name: 'SANTA MÓNICA', resp: '+5493413-70-7571', phone: '', city: '', province: '', ig: '', qty: 50, sports: 'Hockey' },
  { name: 'BUXERS', resp: 'Analía Meraglia', phone: '', city: '', province: '', ig: '', qty: 15, sports: 'Básquet' },
  { name: 'USAPUCAS XV', resp: 'Vanesa Yance', phone: '', city: '', province: '', ig: '', qty: 50, sports: 'Rugby' },
  { name: 'LOS HAKAS', resp: 'Patricio Del Frate', phone: '', city: '', province: '', ig: '', qty: 20, sports: 'Rugby' },
  { name: 'LUCIÉRNAGAS', resp: 'María Laura Barrionuevo', phone: '', city: '', province: '', ig: '', qty: 15, sports: 'Hockey' },
  { name: 'TÓTEM XV', resp: 'Diego Suárez', phone: '', city: '', province: '', ig: '', qty: 45, sports: 'Rugby, Básquet' },
  { name: 'YUCHANES XV', resp: 'Raúl Benedicto', phone: '', city: '', province: '', ig: '', qty: 28, sports: 'Rugby' },
  { name: 'INKA XV', resp: 'Ignacio Amuchastegui', phone: '', city: '', province: '', ig: '', qty: 30, sports: 'Rugby' },
  { name: 'LOS TATÚ RUGBY', resp: 'Gabriela Silvetti', phone: '', city: '', province: '', ig: '', qty: 30, sports: 'Rugby' },
  { name: 'MONTE GRANDE', resp: 'Patricio Del Frate', phone: '', city: '', province: '', ig: '', qty: 25, sports: 'Rugby' },
  { name: 'UBUNTU MIXED', resp: 'Sandra Petersen', phone: '', city: '', province: '', ig: '', qty: 35, sports: 'Rugby' }
];

function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Check if device is iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));

    // Listen for the install prompt event (Android / Chrome)
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstallPrompt(null);
    }
  };

  return (
    <>
      <nav className="header-nav" aria-label="Navegación principal">
        <a href="#inicio" onClick={() => setActiveTab('inicio')} className="nav-link" aria-current={activeTab === 'inicio' ? 'page' : undefined}>
          <Info size={24} />
          <span>Inicio</span>
        </a>
        <a href="#cronograma" onClick={() => setActiveTab('cronograma')} className="nav-link" aria-current={activeTab === 'cronograma' ? 'page' : undefined}>
          <CalendarDays size={24} />
          <span>Cronograma</span>
        </a>
        <a href="#equipos" onClick={() => setActiveTab('equipos')} className="nav-link" aria-current={activeTab === 'equipos' ? 'page' : undefined}>
          <Users size={24} />
          <span>Equipos</span>
        </a>
      </nav>

      <main className="container">
        
        {/* INICIO SECTION */}
        <section id="inicio" style={{ display: activeTab === 'inicio' ? 'block' : 'none' }}>
          
          {/* Install App Banner */}
          {(installPrompt || isIOS) && (
            <div className="solid-card stagger-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '1.5rem', border: '2px solid var(--color-primary)', background: 'rgba(11, 71, 168, 0.1)', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Info size={28} color="var(--color-primary)" />
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Descarga esta App</h3>
              </div>
              <p style={{ margin: 0, textAlign: 'center', fontSize: '0.95rem' }}>Ten acceso rápido y sin internet directamente desde tu pantalla de inicio.</p>
              
              {installPrompt ? (
                <button onClick={handleInstallClick} style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '100px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', marginTop: '0.5rem' }}>
                  Instalar Aplicación
                </button>
              ) : isIOS ? (
                <div style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-text-muted)', background: 'rgba(0,0,0,0.3)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                  Para instalar en iPhone: Toca el icono de <strong>Compartir</strong> (cuadrado con flecha) y luego selecciona <strong>"Agregar a inicio"</strong>.
                </div>
              ) : null}
            </div>
          )}

          <div style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '1rem' }} className="solid-card stagger-1">
            <img src="/logo.png" alt="Logo Toros XV" style={{ maxWidth: '180px', margin: '0 auto 1.5rem', display: 'block', borderRadius: '50%' }} />
            <h1>9º Encuentro Nacional Mixed Ability</h1>
            <p style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-text)' }}>Rugby, Hockey y Básquet</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <span className="badge badge-primary">Sábado 21 Nov</span>
              <span className="badge badge-accent">Domingo 22 Nov</span>
              <span className="badge badge-outline">Lunes 23 Nov (Feriado)</span>
            </div>
          </div>

          <div className="solid-card stagger-2">
            <div className="icon-container primary"><MapPin size={28} color="#FFF" /></div>
            <h2>Sede Oficial</h2>
            <p><strong>Córdoba Rugby Club</strong><br/>Barrio Liceo General Paz, Avenida Juan B. Justo 6500, Córdoba Capital.</p>
            <p style={{ marginBottom: '1.5rem' }}><strong>Entrada Libre y Gratuita</strong> para espectadores. Estacionamiento interno disponible por $5.000.</p>
            
            <div style={{ width: '100%', height: '300px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
              <iframe
                title="Mapa del Córdoba Rugby Club"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=C%C3%B3rdoba%20Rugby%20Club,%20Avenida%20Juan%20B.%20Justo%206500,%20C%C3%B3rdoba&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.75rem', textAlign: 'center' }}>
              *Mapa interactivo: puedes moverlo o hacer zoom para ver la ubicación exacta del club.
            </p>
          </div>

          <div className="solid-card stagger-3" style={{ borderLeft: '4px solid var(--color-accent)' }}>
            <div className="icon-container accent"><CreditCard size={28} color="#FFF" /></div>
            <h2>Inscripción Jugadores</h2>
            <p><strong>Costo:</strong> $75.000 por persona (incluye, acreditaciones deportivas, comidas, hidratación, revista, presentes, reconocimiento y fiesta de cierre).</p>
            <p><strong>Fecha Límite:</strong> Jueves 5 de noviembre</p>
            <p><strong>Alias:</strong> CORDOBARUGBY</p>
            <p><strong>CBU:</strong> 2850381130000000040418</p>
            <p><strong>Titular:</strong> CORDOBA RUGBY CLUB (CUIT: 30-70753966-2)</p>
          </div>

          <div className="solid-card stagger-4">
            <div className="icon-container"><ShieldCheck size={28} color="var(--color-text)" /></div>
            <h2>Logística y Seguridad</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <li><strong>💧 Hidratación:</strong> Postas fijas en cada sector con agua, hielo y sombra.</li>
              <li><strong>⏱️ Voluntarios "Reloj":</strong> Coordinadores con cronómetro y señal sonora exclusiva.</li>
              <li><strong>🚑 Seguridad:</strong> Médicos, paramédicos y ambulancia permanente. Protocolo por tormenta eléctrica activado.</li>
              <li><strong>🎙️ Audio:</strong> Sistema centralizado de parlantes con locutor oficial.</li>
            </ul>
          </div>
          
          <div className="solid-card stagger-4" style={{ textAlign: 'center' }}>
            <div className="icon-container"><Phone size={28} color="var(--color-text)" /></div>
            <h2>Contacto</h2>
            <p style={{ margin: '0' }}>WhatsApp: <strong>351-7684282</strong></p>
            <p>Correo: <strong>infotorosxv@gmail.com</strong></p>
          </div>
        </section>

        {/* CRONOGRAMA SECTION */}
        <section id="cronograma" style={{ display: activeTab === 'cronograma' ? 'block' : 'none' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '1rem' }}>
            <h1>Cronograma Oficial</h1>
          </div>
          
          <div className="solid-card stagger-1">
            <h2 className="text-primary">Día 1: Sábado 21</h2>
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '2rem' }}>La Bienvenida</p>
            
            <div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 style={{ fontSize: '1.25rem' }}>17:30 hs - Acreditación y Merienda</h3>
                <p style={{ margin: 0 }}>Recepción de delegaciones en Córdoba Rugby Club. Entrega de kits.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 style={{ fontSize: '1.25rem' }}>18:30 hs - Desfile Inaugural</h3>
                <p style={{ margin: 0 }}>Ingreso de equipos, banderas y palabras de bienvenida.</p>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 style={{ fontSize: '1.25rem' }}>20:30 hs - Ágape de Bienvenida</h3>
                <p style={{ margin: 0 }}>Cena temprana informal estilo tapeo/pizzas (con opciones TACC/vegetarianas).</p>
              </div>
            </div>
          </div>

          <div className="solid-card stagger-2">
            <h2 className="text-accent">Día 2: Domingo 22</h2>
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '2rem', color: 'var(--color-accent)', marginBottom: '2rem' }}>Acción y Fiesta</p>
            
            <div>
              <div className="timeline-item">
                <div className="timeline-dot accent"></div>
                <h3 style={{ fontSize: '1.25rem' }}>09:00 hs - Precalentamiento</h3>
                <p style={{ margin: 0 }}>Llegada al club y ubicación en gazebos.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot accent"></div>
                <h3 style={{ fontSize: '1.25rem' }}>10:00 hs - ¡Kick-off!</h3>
                <p style={{ margin: 0 }}>Inicio de competencia simultánea. Partidos de 15 a 20 min.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot accent"></div>
                <h3 style={{ fontSize: '1.25rem' }}>12:30 hs - Pausa Activa / Almuerzo</h3>
                <p style={{ margin: 0 }}>Reparto de viandas nutritivas gestionado por logística.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot accent"></div>
                <h3 style={{ fontSize: '1.25rem' }}>13:30 hs - Partidos Finales</h3>
                <p style={{ margin: 0 }}>Cruces de integración y definiciones.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot accent"></div>
                <h3 style={{ fontSize: '1.25rem' }}>16:00 a 19:00 hs - Descanso</h3>
                <p style={{ margin: 0 }}>Tiempo libre de relajación antes del gran cierre.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot accent"></div>
                <h3 style={{ fontSize: '1.25rem' }}>19:00 hs - Ceremonia de Cierre</h3>
                <p style={{ margin: 0 }}>Entrega de medallas y reconocimientos especiales.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot accent"></div>
                <h3 style={{ fontSize: '1.25rem' }}>20:30 hs - ¡Gran Fiesta Mixed Ability!</h3>
                <p style={{ margin: 0 }}>Cena formal de cierre (sandwich de carne y verduras desmenuzado), banda en vivo, DJ y baile.</p>
              </div>
            </div>
          </div>

          <div className="solid-card stagger-3">
            <h2 style={{ color: 'var(--color-text-muted)' }}>Día 3: Lunes 23</h2>
            <p style={{ fontWeight: '800', color: 'var(--color-text)', marginBottom: '1rem' }}>Opcional (Feriado Nacional)</p>
            <p style={{ margin: 0 }}>Jornada distendida con actividades recreativas, partidos casuales y espacio de camaradería en el club para los equipos que permanezcan en Córdoba.</p>
          </div>
        </section>

        {/* EQUIPOS SECTION */}
        <section id="equipos" style={{ display: activeTab === 'equipos' ? 'block' : 'none' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '1rem' }}>
            <h1>Equipos Inscritos</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text)' }}>Más de 650 participantes confirmados</p>
          </div>

          <div className="team-grid stagger-1">
            {teamsData.map((team, idx) => (
              <div key={idx} className="team-card">
                <h3>{team.name}</h3>
                <p className="team-meta" style={{ marginTop: '0.75rem' }}><strong>Responsable:</strong> {team.resp} {team.phone && `- ${team.phone}`}</p>
                {(team.city || team.province) && <p className="team-meta"><strong>Ubicación:</strong> {team.city}{team.city && team.province ? ', ' : ''}{team.province}</p>}
                {team.ig && <p className="team-meta"><strong>Instagram:</strong> <a href={`https://instagram.com/${team.ig.replace('@', '')}`} target="_blank" rel="noreferrer">{team.ig}</a></p>}
                <p className="team-meta"><strong>Jugadores aprox:</strong> {team.qty}</p>
                <div style={{ marginTop: '1rem' }}>
                  <span className="badge badge-outline" style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem' }}>
                    {team.sports}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}

export default App;
