import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import { FinancialAnalysis } from "./components/graphs/FinancialAnalysis";
import Layout from "./Layout";
import RecentTransactions from "./components/RecentTransactions";

export default function Component() {
  const [showBalance, setShowBalance] = useState(true);
  const mockedBalance = 12345.67;
  const handleToggleBalance = () => setShowBalance(!showBalance);

  return (
    <Layout>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2 lg:col-span-1">
          <CardHeader className="flex items-center justify-between">
            <div>
              <CardTitle className="text-primary text-xl">Seu Saldo</CardTitle>
              <CardDescription className="text-slate-500">
                Seu atual saldo bancário
              </CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={handleToggleBalance}>
              {showBalance ? <EyeOpenIcon /> : <EyeClosedIcon />}
              <span className="sr-only">Toggle balance visibility</span>
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-4">
            <div className="text-4xl font-bold text-primary">
              {showBalance
                ? mockedBalance.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                : "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"}
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="text-primary-foreground hover:bg-primary/90"
              >
                Transfer
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="text-secondary-foreground hover:bg-secondary/90"
              >
                Invest
              </Button>
            </div>
          </CardContent>
        </Card>
        <RecentTransactions />
        <Card className="col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-primary">Investment Portfolio</CardTitle>
            <CardDescription className="text-secondary-foreground">
              Your current investments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-primary">
                    S&P 500 Index Fund
                  </div>
                  <div className="text-sm text-secondary-foreground">
                    $5,000 invested
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-primary">$6,250.00</div>
                  <div className="text-sm text-green-600">+25% YTD</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-primary">
                    Tech Sector ETF
                  </div>
                  <div className="text-sm text-secondary-foreground">
                    $3,000 invested
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-primary">$3,750.00</div>
                  <div className="text-sm text-green-600">+25% YTD</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-primary">
                    Real Estate Fund
                  </div>
                  <div className="text-sm text-secondary-foreground">
                    $2,500 invested
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-primary">$3,125.00</div>
                  <div className="text-sm text-green-600">+25% YTD</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <FinancialAnalysis />
      </div>
    </Layout>
  );
}
