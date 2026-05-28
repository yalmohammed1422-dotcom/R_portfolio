import { useState, useCallback } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  LineChart, Line, Legend,
  PieChart, Pie, Cell,
} from 'recharts';
import Papa from 'papaparse';
import {
  skillsData,
  techFrequencyData,
  progressData,
  radarData,
  categoryData,
} from '../data/dashboardData.js';

const COLORS = ['#3b82f6','#8b5cf6','#ec4899','#22d3ee','#34d399','#f59e0b'];

const TABS = [
  { key: 'skills',    label: 'Skills' },
  { key: 'tech',      label: 'Tech Stack' },
  { key: 'progress',  label: 'Progress' },
  { key: 'radar',     label: 'Domains' },
  { key: 'pie',       label: 'Categories' },
  { key: 'csv',       label: '📂 Upload CSV' },
];

// Tooltip styled for dark theme
const DarkTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background:'var(--surface-3)', border:'1px solid var(--border-mid)',
      borderRadius:10, padding:'10px 16px', fontSize:'.85rem',
    }}>
      <p style={{ color:'var(--text-muted)', marginBottom:4 }}>{label}</p>
      {payload.map((p,i) => (
        <p key={i} style={{ color: p.color || 'var(--blue-light)', fontWeight:600 }}>
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
};

export default function Dashboard() {
  const [tab, setTab] = useState('skills');
  const [csvData, setCsvData] = useState(null);
  const [csvKey, setCsvKey]   = useState('');
  const [isDragging, setIsDragging] = useState(false);

  // Parse uploaded CSV
  const handleCSV = useCallback((file) => {
    if (!file) return;
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: ({ data }) => {
        if (!data.length) return;
        const numericKeys = Object.keys(data[0]).filter(k => typeof data[0][k] === 'number');
        setCsvData(data);
        setCsvKey(numericKeys[0] || Object.keys(data[0])[1]);
      },
    });
  }, []);

  const onFileChange = (e) => handleCSV(e.target.files[0]);
  const onDrop = (e) => {
    e.preventDefault(); setIsDragging(false);
    handleCSV(e.dataTransfer.files[0]);
  };

  return (
    <section id="dashboard" className="section">
      <div className="sec-header">
        <div className="divider" />
        <h2 className="g-text">Interactive Dashboard</h2>
        <p>Live charts from your data — edit <code style={{ color:'var(--blue-light)', fontFamily:"'Space Mono',monospace", fontSize:'.9em' }}>src/data/dashboardData.js</code> to update</p>
      </div>

      {/* Stat summary row */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:16, marginBottom:36 }}>
        {[
          { label:'Projects',     value:`${progressData[progressData.length-1]?.projects ?? 0}+` },
          { label:'Courses Done', value:`${progressData[progressData.length-1]?.courses ?? 0}+` },
          { label:'Technologies', value:`${techFrequencyData.length}+` },
          { label:'Top Skill',    value:`${skillsData.sort((a,b)=>b.value-a.value)[0]?.skill}` },
        ].map(s => (
          <div key={s.label} className="chart-card" style={{ textAlign:'center' }}>
            <div style={{ fontSize:'2rem', fontWeight:800, fontFamily:"'Syne',sans-serif", ...gradientStyle }}>{s.value}</div>
            <div style={{ color:'var(--text-muted)', fontSize:'.85rem', marginTop:4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tab selector */}
      <div className="chart-tabs">
        {TABS.map(t => (
          <button
            key={t.key}
            className={`chart-tab${tab === t.key ? ' active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Chart area */}
      <div className="chart-card">
        {tab === 'skills' && (
          <>
            <h3>Skill Proficiency</h3>
            <p>Self-assessed levels across my core technical skills (0–100)</p>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart data={skillsData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                <XAxis type="number" domain={[0,100]} tick={{ fill:'var(--text-muted)', fontSize:12 }} />
                <YAxis type="category" dataKey="skill" width={130} tick={{ fill:'var(--text-muted)', fontSize:12 }} />
                <Tooltip content={<DarkTooltip />} />
                <Bar dataKey="value" name="Level" radius={[0,6,6,0]}>
                  {skillsData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </>
        )}

        {tab === 'tech' && (
          <>
            <h3>Technology Usage Across Projects</h3>
            <p>Number of projects each technology appears in</p>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart data={techFrequencyData} margin={{ bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="tech" tick={{ fill:'var(--text-muted)', fontSize:11 }} angle={-35} textAnchor="end" interval={0} />
                <YAxis tick={{ fill:'var(--text-muted)', fontSize:12 }} />
                <Tooltip content={<DarkTooltip />} />
                <Bar dataKey="count" name="Projects" radius={[6,6,0,0]}>
                  {techFrequencyData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </>
        )}

        {tab === 'progress' && (
          <>
            <h3>Learning Progress Over Time</h3>
            <p>Cumulative projects and courses completed each month</p>
            <ResponsiveContainer width="100%" height={340}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" tick={{ fill:'var(--text-muted)', fontSize:11 }} />
                <YAxis tick={{ fill:'var(--text-muted)', fontSize:12 }} />
                <Tooltip content={<DarkTooltip />} />
                <Legend wrapperStyle={{ color:'var(--text-muted)', fontSize:'.85rem' }} />
                <Line type="monotone" dataKey="projects" name="Projects" stroke="#3b82f6" strokeWidth={2.5} dot={{ fill:'#3b82f6', r:4 }} />
                <Line type="monotone" dataKey="courses"  name="Courses"  stroke="#8b5cf6" strokeWidth={2.5} dot={{ fill:'#8b5cf6', r:4 }} />
              </LineChart>
            </ResponsiveContainer>
          </>
        )}

        {tab === 'radar' && (
          <>
            <h3>Domain Proficiency Radar</h3>
            <p>Relative strength across five broad engineering domains</p>
            <ResponsiveContainer width="100%" height={360}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.08)" />
                <PolarAngleAxis dataKey="domain" tick={{ fill:'var(--text-muted)', fontSize:12 }} />
                <PolarRadiusAxis domain={[0,100]} tick={{ fill:'var(--text-dim)', fontSize:10 }} />
                <Radar name="Level" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.25} strokeWidth={2} />
                <Tooltip content={<DarkTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </>
        )}

        {tab === 'pie' && (
          <>
            <h3>Project Category Distribution</h3>
            <p>Breakdown of your portfolio by domain focus</p>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap', gap:32 }}>
              <ResponsiveContainer width={280} height={280}>
                <PieChart>
                  <Pie data={categoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} innerRadius={55} paddingAngle={3}>
                    {categoryData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip content={<DarkTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                {categoryData.map((d, i) => (
                  <div key={d.name} style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <div style={{ width:12, height:12, borderRadius:3, background:COLORS[i%COLORS.length], flexShrink:0 }} />
                    <span style={{ color:'var(--text-muted)', fontSize:'.9rem' }}>{d.name}</span>
                    <span style={{ color:COLORS[i%COLORS.length], fontWeight:700, fontSize:'.9rem', marginLeft:'auto', paddingLeft:24 }}>{d.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {tab === 'csv' && (
          <>
            <h3>Upload Your Own Dataset</h3>
            <p>Drop any CSV file — the first numeric column will be charted automatically</p>

            {/* Drop zone */}
            <div
              className="upload-zone"
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={onDrop}
              style={{ borderColor: isDragging ? 'var(--border-blue)' : undefined }}
              onClick={() => document.getElementById('csv-upload').click()}
            >
              <div style={{ fontSize:'2.5rem' }}>📂</div>
              <p>Drop a CSV file here, or click to browse</p>
              <input id="csv-upload" type="file" accept=".csv" onChange={onFileChange} style={{ display:'none' }} />
            </div>

            {/* Column selector */}
            {csvData && (
              <div style={{ marginTop:20 }}>
                <label style={{ color:'var(--text-muted)', fontSize:'.9rem', marginRight:12 }}>
                  Chart column:
                </label>
                <select
                  value={csvKey}
                  onChange={e => setCsvKey(e.target.value)}
                  style={{
                    background:'var(--surface-2)', border:'1px solid var(--border-mid)',
                    color:'var(--text)', borderRadius:8, padding:'6px 12px',
                    fontFamily:"'DM Sans',sans-serif", fontSize:'.9rem',
                  }}
                >
                  {Object.keys(csvData[0])
                    .filter(k => typeof csvData[0][k] === 'number')
                    .map(k => <option key={k} value={k}>{k}</option>)
                  }
                </select>
              </div>
            )}

            {/* CSV chart */}
            {csvData && csvKey && (
              <div style={{ marginTop:24 }}>
                <ResponsiveContainer width="100%" height={320}>
                  <BarChart data={csvData.slice(0,30)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey={Object.keys(csvData[0])[0]} tick={{ fill:'var(--text-muted)', fontSize:11 }} />
                    <YAxis tick={{ fill:'var(--text-muted)', fontSize:12 }} />
                    <Tooltip content={<DarkTooltip />} />
                    <Bar dataKey={csvKey} name={csvKey} radius={[6,6,0,0]}>
                      {csvData.slice(0,30).map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <p style={{ color:'var(--text-dim)', fontSize:'.8rem', marginTop:8 }}>
                  Showing first 30 rows · {csvData.length} total rows
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

const gradientStyle = {
  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};
