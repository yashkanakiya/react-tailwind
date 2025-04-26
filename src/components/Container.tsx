import { Routes, Route } from 'react-router-dom'

import StockCalculator from '../pages/StockCalculator'

export default function Container() {
  return (
    <main className="py-10 lg:pl-72">
        <div className="px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/stock-calculator" element={<StockCalculator />} />
          {/* <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/reports" element={<Reports />} /> */}
        </Routes>      
        </div>
    </main>
  )
}