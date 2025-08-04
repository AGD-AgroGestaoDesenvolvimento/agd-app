import { useState } from 'react';

export default function Home() {
  const [plantios, setPlantios] = useState([]);
  const [form, setForm] = useState({ cultura: '', data: '', variedade: '', area: '' });
  const [pergunta, setPergunta] = useState('');
  const [respostas, setRespostas] = useState([]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const registrarPlantio = () => {
    setPlantios([...plantios, form]);
    setForm({ cultura: '', data: '', variedade: '', area: '' });
  };

  const consultarIA = () => {
    const resposta = `Resposta simulada para: ${pergunta}`;
    setRespostas([...respostas, { pergunta, resposta }]);
    setPergunta('');
  };

  return (
    <>
      <main style={{ padding: 20 }}>
        <h1>Bem-vindo ao AGD - AgroGestão Digital</h1>
        <p>Este é um exemplo de página inicial exportada estaticamente.</p>
      </main>

      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">AGD - AgroGestão Digital</h1>

        <div className="space-y-2 mb-6">
          <input name="cultura" value={form.cultura} onChange={handleChange} placeholder="Cultura" className="border p-2 w-full" />
          <input name="data" value={form.data} onChange={handleChange} placeholder="Data" className="border p-2 w-full" />
          <input name="variedade" value={form.variedade} onChange={handleChange} placeholder="Variedade" className="border p-2 w-full" />
          <input name="area" value={form.area} onChange={handleChange} placeholder="Área (ha)" className="border p-2 w-full" />
          <button onClick={registrarPlantio} className="bg-green-600 text-white px-4 py-2">Registrar Plantio</button>
        </div>

        <div className="mb-6">
          <h2 className="font-bold">Plantios Registrados:</h2>
          <ul className="list-disc ml-6">
            {plantios.map((p, i) => (
              <li key={i}>{p.cultura} - {p.data} - {p.variedade} - {p.area} ha</li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <textarea value={pergunta} onChange={(e) => setPergunta(e.target.value)} placeholder="Digite sua dúvida..." className="border p-2 w-full" />
          <button onClick={consultarIA} className="bg-blue-600 text-white px-4 py-2">Consultar IA</button>

          {respostas.map((r, i) => (
            <div key={i} className="mt-2 border p-2 bg-gray-100">
              <strong>P:</strong> {r.pergunta}<br />
              <strong>R:</strong> {r.resposta}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}