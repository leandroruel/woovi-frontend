import { graphql, useMutation } from "react-relay";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "./components/ui/use-toast";

const Login = () => {
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

  const [commit, isInFlight] = useMutation(
    graphql`
      mutation LoginMutation($input: LoginInput!) {
        login(input: $input) {
          token
        }
      }
    `
  );

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

            sessionStorage.setItem("token", token);
            navigate("/"); // TODO: trocar para url de dashboard
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

  if (isInFlight) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="mx-auto max-w-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
          <CardDescription>
            Enter your email and password to access your account.
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
          <Button
            type="submit"
            className="w-full"
            onClick={handleSubmit(onLogin)}
          >
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
