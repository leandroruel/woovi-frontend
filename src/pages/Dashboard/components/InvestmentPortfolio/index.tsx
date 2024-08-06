import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InvestmentItemProps {
  name: string;
  invested: string;
  value: string;
  change: string;
}

function InvestmentItem({
  name,
  invested,
  value,
  change,
}: InvestmentItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="font-medium text-primary">{name}</div>
        <div className="text-sm text-secondary-foreground">{invested}</div>
      </div>
      <div className="text-right">
        <div className="font-medium text-primary">{value}</div>
        <div className="text-sm text-green-600">{change}</div>
      </div>
    </div>
  );
}

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
          <InvestmentItem
            name="S&P 500 Index Fund"
            invested="$5,000 invested"
            value="$6,250.00"
            change="+25% YTD"
          />
          <InvestmentItem
            name="Tech Sector ETF"
            invested="$3,000 invested"
            value="$3,750.00"
            change="+25% YTD"
          />
          <InvestmentItem
            name="Real Estate Fund"
            invested="$2,500 invested"
            value="$3,125.00"
            change="+25% YTD"
          />
        </div>
      </CardContent>
    </Card>
  );
}
