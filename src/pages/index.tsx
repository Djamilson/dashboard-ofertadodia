import React from "react";

import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

import { SubmitHandler, useForm, useFormState } from "react-hook-form";

type SingInFormData = {
  email: string;
  password: string;
};

export default function Home() {
  const { register, handleSubmit, formState } = useForm();

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
          />
          <Input
            name="password"
            type="password"
            label="Sua senha"
            {...register("password", { required: true })}
          />
        </Stack>
        <Button type="submit" mt="6" size="lg" colorScheme="pink" isLoading={formState.isSubmitted}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
