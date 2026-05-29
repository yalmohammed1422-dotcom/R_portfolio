import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  LineChart, Line,
  PieChart, Pie, Legend,
} from 'recharts';
import { projectDashboards } from '../data/dashboardData.js';

const COLORS = ['#3b82f6','#8b5cf6','#ec4899','#22d3ee','#34d399','#f59e0b'];

const CHART_TYPES = [
  { key: 'bar',   label: '▬ Bar Chart'   },
  { key: 'line',  label: '╱ Line Chart'  },
  { key: 'pie',   label: '◕ Pie Chart'   },
  { key: 'radar', label: '⬡ Radar Chart' },
];

const DarkTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background:'var(--surface-3)', border:'1px solid var(--border-mid)',
      borderRadius:10, padding:'10px 16px', fontSize:'.85rem',
    }}>
      <p style={{ color:'var(--text-muted)', marginBottom:4 }}>{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color || 'var(--blue-light)', fontWeight:600 }}>
          {p.name}: {p.value}
        </p>
      ))}
    </div>
  );
};

export default function Dashboard() {
  const [activeProject, setActiveProject] = useState(0);
  const [chartType, setChartType]         = useState('bar');

  const current = projectDashboards[activeProject];

  // When switching projects, default to first available chart type
  const handleProjectChange = (i) => {
    setActiveProject(i);
    const first = projectDashboards[i].availableCharts[0] || 'bar';
    setChartType(first);
  };

  const availableTypes = CHART_TYPES.filter(t =>
    current.availableCharts.includes(t.key)
  );

  return (
    <section id="dashboard" className="section">
      <div className="sec-header">
        <div className="divider" />
        <h2 className="g-text">Project Dashboard</h2>
        <p>Select a project, then switch between chart types to explore the data</p>
      </div>

      {/* ── Project selector ── */}
      <div className="chart-tabs" style={{ marginBottom: 32 }}>
        {projectDashboards.map((p, i) => (
          <button
            key={p.id}
            className={`chart-tab${activeProject === i ? ' active' : ''}`}
            onClick={() => handleProjectChange(i)}
          >
            {p.projectName}
          </button>
        ))}
      </div>

      {/* ── Metric cards ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: 14,
        marginBottom: 28,
      }}>
        {current.metrics.map((m, i) => (
          <div key={i} className="chart-card" style={{ textAlign: 'center', padding: '20px 16px' }}>
            <div style={{
              fontSize: '1.8rem', fontWeight: 800,
              background: `linear-gradient(135deg, ${COLORS[i % COLORS.length]}, ${COLORS[(i+1) % COLORS.length]})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              {m.value}
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '.82rem', marginTop: 5 }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── Chart type switcher (interactive for visitors) ── */}
      <div className="filter-row" style={{ marginBottom: 20, justifyContent: 'flex-start' }}>
        {availableTypes.map(t => (
          <button
            key={t.key}
            className={`filter-btn${chartType === t.key ? ' active' : ''}`}
            onClick={() => setChartType(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Chart ── */}
      <div className="chart-card">
        <p style={{ color: 'var(--text-muted)', fontSize: '.88rem', marginBottom: 4 }}>
          {current.description}
        </p>
        <p style={{ color: 'var(--text-dim)', fontSize: '.78rem', marginBottom: 24, fontFamily:"'Space Mono',monospace" }}>
          Y-axis: {current.dataLabel}
        </p>

        {chartType === 'bar' && (
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={current.chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" tick={{ fill:'var(--text-muted)', fontSize:12 }} />
              <YAxis tick={{ fill:'var(--text-muted)', fontSize:12 }} />
              <Tooltip content={<DarkTooltip />} />
              <Bar dataKey="value" name={current.dataLabel} radius={[6,6,0,0]}>
                {current.chartData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}

        {chartType === 'line' && (
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={current.chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="name" tick={{ fill:'var(--text-muted)', fontSize:12 }} />
              <YAxis tick={{ fill:'var(--text-muted)', fontSize:12 }} />
              <Tooltip content={<DarkTooltip />} />
              <Line
                type="monotone" dataKey="value" name={current.dataLabel}
                stroke="#3b82f6" strokeWidth={2.5}
                dot={{ fill:'#3b82f6', r:5 }} activeDot={{ r:7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}

        {chartType === 'pie' && (
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap', gap:32 }}>
            <ResponsiveContainer width={280} height={280}>
              <PieChart>
                <Pie
                  data={current.chartData} dataKey="value" nameKey="name"
                  cx="50%" cy="50%" outerRadius={110} innerRadius={55} paddingAngle={3}
                >
                  {current.chartData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<DarkTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {current.chartData.map((d, i) => (
                <div key={d.name} style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <div style={{ width:12, height:12, borderRadius:3, background:COLORS[i%COLORS.length], flexShrink:0 }} />
                  <span style={{ color:'var(--text-muted)', fontSize:'.88rem' }}>{d.name}</span>
                  <span style={{ color:COLORS[i%COLORS.length], fontWeight:700, fontSize:'.88rem', marginLeft:'auto', paddingLeft:20 }}>
                    {d.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {chartType === 'radar' && (
          <ResponsiveContainer width="100%" height={340}>
            <RadarChart data={current.chartData}>
              <PolarGrid stroke="rgba(255,255,255,0.08)" />
              <PolarAngleAxis dataKey="name" tick={{ fill:'var(--text-muted)', fontSize:12 }} />
              <PolarRadiusAxis tick={{ fill:'var(--text-dim)', fontSize:10 }} />
              <Radar
                name={current.dataLabel} dataKey="value"
                stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.25} strokeWidth={2}
              />
              <Tooltip content={<DarkTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  );
}
