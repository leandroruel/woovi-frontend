import { useMutation } from "react-relay";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { LOGIN_MUTATION } from "@/graphql/login";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useAuth } from "@/hooks/useAuth";
import Logo from '@/assets/logo.svg';

const Login = () => {
  const auth = useAuth();
  const setToken = auth?.setToken;
  const navigate = useNavigate();
  const { toast } = useToast();
  const schema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [commit, isInFlight] = useMutation(LOGIN_MUTATION);

  const mappedErrors: Record<string, string> = {
    "User not found": "Usuário não encontrado",
  };

  const onLogin = (input: any) => {
    if (input) {
      commit({
        variables: { input },
        onCompleted: (response: any, errors: any) => {
          if (response.login) {
            const {
              login: { token },
            } = response;

            if (setToken) setToken(token);
            navigate("/", { replace: true });
          }

          if (errors) {
            toast({
              title: "Login Error",
              description: errors
                .map((e: any) => mappedErrors[e.message])
                .join(", "),

              variant: "destructive",
            });
          }
        },
        onError: (error) => {
          // Handle login error
          console.error(error);
          toast({
            title: "Login Error",
            description: `An error occurred while trying to login: ${error}`,
          });
        },
      });
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className='w-24 mb-10'>
        <img src={Logo} alt="logo" />
      </div>
      <Card className="mx-auto min-w-96">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">Bem vindo!</CardTitle>
          <CardDescription>
            Entre com seu login e senha para entrar
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors?.email?.message as string}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                to="#"
                className="text-sm text-muted-foreground hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              {...register("password")}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors?.password?.message as string}
              </p>
            )}
          </div>
          {isInFlight ? (
            <Button disabled className="w-full">
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Aguarde
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full"
              onClick={handleSubmit(onLogin)}
            >
              Entrar
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
