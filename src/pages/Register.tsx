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
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const genderEnums = ["Male", "Female"] as const;

const FormSchema = z
  .object({
    name: z
      .string({
        required_error: "O nome é obrigatório.",
      })
      .min(3, "Nome deve ter pelo menos 3 caracteres."),
    email: z.string({ required_error: "E-mail é obrigatório" }).email({
      message: "Endereço de e-mail inválido",
    }),
    password: z.string({
      required_error: "A senha é obrigatória",
    }),
    confirmPassword: z.string({
      required_error: "Confirmação de senha obrigatória",
    }),
    gender: z.enum(genderEnums),
    birthdate: z.date({
      required_error: "Uma data de nascimento é obrigatória",
    }),
    taxId: z.string({
      required_error: "Um CPF é obrigatório",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });

export default function Register() {
  const [commit, isInFlight] = useMutation(CREATE_USER);
  const navigate = useNavigate();
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

  const mappedServerErrors: Record<string, string> = {
    'Email already exists': 'Este e-mail já está em uso.',
    'Document already exists': 'Este CPF já está em uso.',
  }

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
            
            navigate(`/register/success/${user.id}`);
          }

          if (errors) {
            const error = errors[0];
            const errorMessage = mappedServerErrors[error.message] || "Ocorreu um erro ao criar sua conta.";
            toast({
              title: "Erro ao criar conta",
              description: errorMessage,
              variant: "destructive",
            });
          }
        },
        onError: (error) => {
          console.error(error);
          const errorMessage = error.message || "Ocorreu um erro ao criar sua conta.";
          toast({
            title: "Erro ao criar conta",
            description: errorMessage,
            variant: "destructive",
          });
        },
      });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-md"
        >
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
