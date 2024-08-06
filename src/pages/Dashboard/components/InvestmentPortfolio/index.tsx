import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function InvestmentPortfolio() {
  return (
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
              <div className="font-medium text-primary">S&P 500 Index Fund</div>
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
              <div className="font-medium text-primary">Tech Sector ETF</div>
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
              <div className="font-medium text-primary">Real Estate Fund</div>
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
  );
}
