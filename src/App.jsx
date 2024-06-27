// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useMemo, useState } from 'react';
import Head from './components/Head.jsx';
import Main from './components/Main.jsx';
import Section from './components/Section.jsx';
import Footer from './components/Footer.jsx';
import './index.css';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(() => ({
        background: {
            color: { value: '#0d47a1' },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: { enable: true, mode: 'push' },
                onHover: { enable: true, mode: 'repulse' },
            },
            modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
            },
        },
        particles: {
            color: { value: '#ffffff' },
            links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: { default: 'bounce' },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: { enable: true },
                value: 80,
            },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
    }), []);

    return (
        <div>
            {init && (
                <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
            )}
            <div className={"app md:px-[18%] px-[5%]"}>
                <main className={"flex flex-col items-center justify-around"}>
                    <Head />
                    <Main />
                    <Section />
                </main>
                <footer className={'relative z-50 flex items-end'}>
                    <Footer />
                </footer>
            </div>
        </div>
    );
}

export default App;
