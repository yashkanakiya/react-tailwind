import { Routes, Route, Navigate } from "react-router-dom";

import StockCalculator from "../pages/StockCalculator";
import Rule72 from "../pages/Rule72";


export default function Container() {
  return (
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        <Routes>
          {/* default route */}
          <Route
            path="/"
            element={<Navigate to="/stock-calculator" replace />}
          />

          <Route path="/stock-calculator" element={<StockCalculator />} />
          <Route path="/rule-72" element={<Rule72 />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/reports" element={<Reports />} /> */}

          {/* 404 route */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </main>
  );
}
