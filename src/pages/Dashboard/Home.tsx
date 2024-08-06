import RecentTransactions from "./components/RecentTransactions";
import InvestmentPortfolio from "./components/InvestmentPortfolio";
import { FinancialAnalysis } from "./components/graphs/FinancialAnalysis";
import Balance from "./components/Balance";

export default function Home() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Balance />
      <RecentTransactions />
      <InvestmentPortfolio />
      <FinancialAnalysis />
    </div>
  );
}
