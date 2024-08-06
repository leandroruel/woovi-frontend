import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
  } from "@/components/ui/table";

export default function RecentTransactions() {
    return (
        <Card className="col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle className="text-primary">Transações recentes</CardTitle>
          <CardDescription className="text-secondary-foreground">
            Suas últimas transações
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-primary">Date</TableHead>
                <TableHead className="text-primary">Description</TableHead>
                <TableHead className="text-primary">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-secondary-foreground">
                  2023-04-01
                </TableCell>
                <TableCell className="text-secondary-foreground">
                  Paycheck
                </TableCell>
                <TableCell className="text-right text-secondary-foreground text-green-600">
                  $2,500.00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-secondary-foreground">
                  2023-03-25
                </TableCell>
                <TableCell className="text-secondary-foreground">
                  Rent Payment
                </TableCell>
                <TableCell className="text-right text-secondary-foreground text-red-600">
                  -$1,200.00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-secondary-foreground">
                  2023-03-15
                </TableCell>
                <TableCell className="text-secondary-foreground">
                  Grocery Shopping
                </TableCell>
                <TableCell className="text-right text-secondary-foreground text-red-600">
                  -$150.00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-secondary-foreground">
                  2023-03-05
                </TableCell>
                <TableCell className="text-secondary-foreground">
                  Utility Bill
                </TableCell>
                <TableCell className="text-right text-secondary-foreground text-red-600">
                  -$75.00
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
}