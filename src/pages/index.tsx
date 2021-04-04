import React from "react";

import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { SubmitHandler, useForm, useFormState } from "react-hook-form";

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

type SingInFormData = {
  email: string;
  password: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<SingInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SingInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert(JSON.stringify(values));

    console.log("=>>>>>>", values);
  };

  return (
    <Flex w="100vm" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            {...register("email", { required: true })}
            error={errors.email}
          />
          <Input
            name="password"
            type="password"
            label="Sua senha"
            {...register("password", { required: true })}
            error={errors.password}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          size="lg"
          colorScheme="pink"
          isLoading={isSubmitted}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
