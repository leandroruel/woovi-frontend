import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link, useParams } from "react-router-dom";
import { useLazyLoadQuery, useFragment } from "react-relay";
import { USER } from "@/graphql/user";
import { ACCOUNT_FRAGMENT, ACCOUNT_QUERY } from "@/graphql/account";

export default function RegisterSuccess() {
  const params = useParams<{ userId: string }>();
  const data: any = useLazyLoadQuery(
    USER,
    { id: params.userId },
    { fetchPolicy: "store-and-network" }
  );

  const account: any = useLazyLoadQuery(
    ACCOUNT_QUERY,
    { userId: params.userId },
    { fetchPolicy: "store-and-network" }
  );

  const accountData = useFragment(ACCOUNT_FRAGMENT, account.accountByUserId);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CircleCheckIcon className="h-8 w-8" />
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Conta criada com sucesso!
        </h1>
        <p className="mt-3 text-muted-foreground">
          Sua nova conta já está pronta e você já pode começar a usá-la.
        </p>
        <p className="mt-3 text-muted-foreground">
          Bem vindo, <span className="capitalize">{data?.user?.name}</span>!
        </p>
      </div>
      <div className="mt-10 w-full max-w-md space-y-4">
        <Card>
          <CardContent className="grid gap-4 pt-6">
            <div className="grid gap-1">
              <div className="text-sm font-medium text-foreground">
                Número da conta
              </div>
              <div className="text-lg font-bold">
                {accountData.accountNumber}
              </div>
            </div>
            <Separator />
            <div className="grid gap-1">
              <div className="text-sm font-medium text-foreground">
                E-mail
              </div>
              <div className="text-lg font-bold">{data?.user?.email}</div>
            </div>
          </CardContent>
        </Card>
        <Link
          to={`/dashboard/${params.userId}`}
          className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

function CircleCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
