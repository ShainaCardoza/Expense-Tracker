import { useState } from "react";
import LiquidEther from "./LiquidEther";

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(amount);

const initialTransactions = [];

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [error, setError] = useState("");
  const [animating, setAnimating] = useState(null);

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalExpenses;

  const addTransaction = () => {
    if (!description.trim()) { setError("Please enter a description."); return; }
    const parsed = parseFloat(amount);
    if (!amount || isNaN(parsed) || parsed <= 0) { setError("Please enter a positive amount."); return; }
    setError("");
    const newTx = { id: Date.now(), description: description.trim(), amount: parsed, type };
    setTransactions([newTx, ...transactions]);
    setDescription("");
    setAmount("");
    setAnimating(newTx.id);
    setTimeout(() => setAnimating(null), 600);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div style={{ fontFamily: "'DM Mono', 'Courier New', monospace", minHeight: "100vh", position: "relative", color: "#f0ece4", padding: "0" }}>
      <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0 }}>
        <LiquidEther
          colors={['#c8f060', '#BAFca2', '#e0f79d']}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#c8f060"
          color1="#BAFca2"
          color2="#e0f79d"
        />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Playfair+Display:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0d0d0d; }
        .ticker-tape {
          background: #c8f060;
          color: #0d0d0d;
          padding: 6px 0;
          overflow: hidden;
          white-space: nowrap;
          font-size: 11px;
          letter-spacing: 0.12em;
          font-weight: 500;
        }
        .ticker-inner {
          display: inline-block;
          animation: ticker 35s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        .header {
          padding: 48px 40px 32px;
          border-bottom: 1px solid #222;
        }
        .header-eyebrow {
          font-size: 10px;
          letter-spacing: 0.25em;
          color: #666;
          margin-bottom: 8px;
          text-transform: uppercase;
        }
        .header-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(42px, 7vw, 80px);
          font-weight: 900;
          line-height: 0.95;
          color: #f0ece4;
          letter-spacing: -0.02em;
        }
        .header-title span {
          color: #c8f060;
        }
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-bottom: 1px solid #222;
        }
        .summary-card {
          padding: 32px 40px;
          border-right: 1px solid #222;
          position: relative;
          overflow: hidden;
        }
        .summary-card:last-child { border-right: none; }
        .summary-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 12px;
        }
        .summary-amount {
          font-family: 'Playfair Display', serif;
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 700;
          line-height: 1;
        }
        .summary-card.balance .summary-amount { color: ${balance >= 0 ? "#c8f060" : "#ff5f5f"}; }
        .summary-card.income .summary-amount { color: #c8f060; }
        .summary-card.expenses .summary-amount { color: #ff5f5f; }
        .summary-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          height: 2px;
          background: currentColor;
          opacity: 0.2;
          width: 100%;
        }
        .main-layout {
          display: grid;
          grid-template-columns: 380px 1fr;
          min-height: calc(100vh - 280px);
        }
        .form-panel {
          padding: 40px;
          border-right: 1px solid #222;
          position: sticky;
          top: 0;
          height: fit-content;
        }
        .form-title {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 28px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-label {
          display: block;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 8px;
        }
        .form-input, .form-select {
          width: 100%;
          background: #161616;
          border: 1px solid #2a2a2a;
          color: #f0ece4;
          padding: 14px 16px;
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
          appearance: none;
        }
        .form-input:focus, .form-select:focus {
          border-color: #c8f060;
        }
        .form-input::placeholder { color: #3a3a3a; }
        .type-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid #2a2a2a;
        }
        .type-btn {
          padding: 14px;
          background: #161616;
          border: none;
          cursor: pointer;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #555;
          transition: all 0.2s;
        }
        .type-btn.active-income {
          background: #c8f060;
          color: #0d0d0d;
        }
        .type-btn.active-expense {
          background: #ff5f5f;
          color: #fff;
        }
        .add-btn {
          width: 100%;
          padding: 16px;
          background: #c8f060;
          color: #0d0d0d;
          border: none;
          cursor: pointer;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          transition: all 0.2s;
          margin-top: 8px;
        }
        .add-btn:hover { background: #d4f57a; transform: translateY(-1px); }
        .add-btn:active { transform: translateY(0); }
        .error-msg {
          font-size: 11px;
          color: #ff5f5f;
          margin-top: 12px;
          letter-spacing: 0.05em;
        }
        .list-panel {
          padding: 40px;
        }
        .list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #1e1e1e;
        }
        .list-title {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #555;
        }
        .list-count {
          font-size: 10px;
          color: #333;
          letter-spacing: 0.1em;
        }
        .tx-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: 1px solid #161616;
          transition: all 0.3s;
          animation: slideIn 0.4s ease;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tx-new {
          background: #161e07;
          padding: 18px 16px;
          margin: 0 -16px;
          border-radius: 2px;
        }
        .tx-left {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          min-width: 0;
        }
        .tx-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .tx-dot.income { background: #c8f060; }
        .tx-dot.expense { background: #ff5f5f; }
        .tx-desc {
          font-size: 14px;
          color: #d0ccc4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .tx-right {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-shrink: 0;
        }
        .tx-amount {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.03em;
        }
        .tx-amount.income { color: #c8f060; }
        .tx-amount.expense { color: #ff5f5f; }
        .tx-delete {
          background: none;
          border: none;
          cursor: pointer;
          color: #888;
          font-size: 18px;
          line-height: 1;
          padding: 4px 8px;
          transition: all 0.2s;
          font-family: monospace;
          opacity: 0.7;
        }
        .tx-delete:hover { color: #ff5f5f; opacity: 1; }
        .empty-state {
          text-align: center;
          padding: 80px 0;
          color: #2a2a2a;
        }
        .empty-icon {
          font-size: 48px;
          margin-bottom: 16px;
          opacity: 0.4;
        }
        .empty-text {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .summary-grid { grid-template-columns: 1fr; }
          .summary-card { border-right: none; border-bottom: 1px solid #222; }
          .main-layout { grid-template-columns: 1fr; }
          .form-panel { border-right: none; border-bottom: 1px solid #222; position: relative; }
          .header { padding: 32px 24px 24px; }
          .form-panel, .list-panel { padding: 28px 24px; }
          .summary-card { padding: 24px; }
          .form-input, .form-select { font-size: 16px; } /* Prevents zoom on focus */
          .header-title { font-size: clamp(32px, 10vw, 48px); }
        }
      `}</style>

        {/* Ticker Tape */}
        <div className="ticker-tape">
          <span className="ticker-inner">
            &nbsp;&nbsp;&nbsp;EXPENSE TRACKER&nbsp;▸&nbsp;TRACK YOUR MONEY&nbsp;▸&nbsp;INCOME & EXPENSES&nbsp;▸&nbsp;STAY IN CONTROL&nbsp;▸&nbsp;FINANCIAL CLARITY&nbsp;▸&nbsp;EXPENSE TRACKER&nbsp;▸&nbsp;TRACK YOUR MONEY&nbsp;▸&nbsp;INCOME & EXPENSES&nbsp;▸&nbsp;
          </span>
        </div>

        {/* Header */}
        <div className="header">
          <p className="header-eyebrow">Personal Finance</p>
          <h1 className="header-title">
            Expense<br /><span>Tracker.</span>
          </h1>
        </div>

        {/* Summary */}
        <div className="summary-grid">
          <div className="summary-card balance">
            <p className="summary-label">Net Balance</p>
            <p className="summary-amount">{formatCurrency(balance)}</p>
          </div>
          <div className="summary-card income">
            <p className="summary-label">Total Income</p>
            <p className="summary-amount">{formatCurrency(totalIncome)}</p>
          </div>
          <div className="summary-card expenses">
            <p className="summary-label">Total Expenses</p>
            <p className="summary-amount">{formatCurrency(totalExpenses)}</p>
          </div>
        </div>

        {/* Main */}
        <div className="main-layout">
          {/* Form */}
          <div className="form-panel">
            <p className="form-title"> New Transaction</p>

            <div className="form-group">
              <label className="form-label">Type</label>
              <div className="type-toggle">
                <button
                  className={`type-btn ${type === "income" ? "active-income" : ""}`}
                  onClick={() => setType("income")}
                >+ Income</button>
                <button
                  className={`type-btn ${type === "expense" ? "active-expense" : ""}`}
                  onClick={() => setType("expense")}
                >− Expense</button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <input
                className="form-input"
                placeholder="e.g. Monthly Salary"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTransaction()}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Amount (₹)</label>
              <input
                className="form-input"
                type="number"
                min="0.01"
                step="0.01"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTransaction()}
              />
            </div>

            <button className="add-btn" onClick={addTransaction}>
              Add Transaction →
            </button>
            {error && <p className="error-msg">⚠ {error}</p>}
          </div>

          {/* List */}
          <div className="list-panel">
            <div className="list-header">
              <p className="list-title"> Transactions</p>
              <p className="list-count">{transactions.length} records</p>
            </div>

            {transactions.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">◎</div>
                <p className="empty-text">No transactions yet</p>
              </div>
            ) : (
              transactions.map((tx) => (
                <div
                  key={tx.id}
                  className={`tx-item ${animating === tx.id ? "tx-new" : ""}`}
                >
                  <div className="tx-left">
                    <div className={`tx-dot ${tx.type}`} />
                    <span className="tx-desc">{tx.description}</span>
                  </div>
                  <div className="tx-right">
                    <span className={`tx-amount ${tx.type}`}>
                      {tx.type === "income" ? "+" : "−"}{formatCurrency(tx.amount)}
                    </span>
                    <button
                      className="tx-delete"
                      onClick={() => deleteTransaction(tx.id)}
                      title="Delete"
                    >×</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
