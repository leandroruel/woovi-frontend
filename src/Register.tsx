import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "react-relay";
import { CREATE_USER } from "@/graphql/createUser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { withMask } from "use-mask-input";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { useToast } from "./components/ui/use-toast";

const genderEnums = ["Male", "Female"] as const;

const FormSchema = z
  .object({
    name: z
      .string({
        required_error: "A name is required",
      })
      .min(3, "Name must be at least 3 characters."),
    email: z.string({
      required_error: "An email is required.",
      invalid_type_error: "Invalid email address.",
    }),
    password: z.string({
      required_error: "A password is required.",
    }),
    confirmPassword: z.string({
      required_error: "A password is required.",
    }),
    gender: z.enum(genderEnums),
    birthdate: z.date({
      required_error: "A date of birth is required.",
    }),
    taxId: z.string({
      required_error: "A tax ID is required.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export default function Register() {
  const [commit, isInFlight] = useMutation(CREATE_USER);
  const { toast } = useToast();

  const defaultValues = {
    name: "",
    gender: undefined,
    email: "",
    password: "",
    confirmPassword: "",
    birthdate: undefined,
    taxId: "",
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  const onSubmit = (data: any) => {
    if (data) {
      const { confirmPassword, ...user } = data;
      commit({
        variables: { user: { ...user } },
        onCompleted: (response: any, errors: any) => {
          if (response.createUser) {
            const {
              createUser: { user },
            } = response;

            console.log(user);
          }

          if (errors) {
            console.error(errors);
          }
        },
        onError: (error) => {
          console.error(error);
          toast({
            title: "Erro ao criar conta",
            description: "Ocorreu um erro ao criar sua conta.",
            variant: "destructive",
          });
        },
      });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md">
          <Card className="w-full mx-auto">
            <CardHeader>
              <CardTitle>Crie sua conta</CardTitle>
              <CardDescription>
                cadastre-se para uma nova conta.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="name">Nome</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Digite seu nome completo"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="">Gênero</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um gênero" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Male">Masculino</SelectItem>
                          <SelectItem value="Female">Feminino</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Digite seu e-mail" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Senha</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Digite sua senha"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="confirmPassword">
                      Repita a senha
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Repita a senha"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="birthdate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="birthdate">
                      Data de nascimento
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start font-normal"
                          >
                            {field.value ? (
                              format(field.value, "dd/MM/yyyy")
                            ) : (
                              <span>Selecione uma data</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            fromYear={1900}
                            selected={field.value}
                            onSelect={field.onChange}
                            mode="single"
                            locale={ptBR}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="taxId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="taxId">CPF</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        ref={withMask("cpf")}
                        placeholder="Digite seu CPF"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              {isInFlight ? (
                <Button disabled className="w-full">
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Aguarde
                </Button>
              ) : (
                <Button type="submit" className="w-full">
                  Criar conta
                </Button>
              )}
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}
