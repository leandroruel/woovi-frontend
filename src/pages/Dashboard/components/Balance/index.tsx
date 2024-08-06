import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Balance() {
  const [showBalance, setShowBalance] = useState(true);
  const mockedBalance = 12345.67;
  const handleToggleBalance = () => setShowBalance(!showBalance);
  return (
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
  );
}
