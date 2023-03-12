<template>
  <Form @submit="submit">
    <Field name="name" label="Name" :rules="nameRules" />
    <ErrorMessage name="name" />

    <Field name="email" label="Email" :rules="validateEmail" />
    <ErrorMessage name="email" />

    <button type="submit">Submit</button>
  </Form>
</template>

<script setup>
import { ref } from "vue";
import { useField } from "vee-validate";
import * as yup from 'yup';

const name = useField("name");
const email = useField("email");

const nameRules = ref("required");
const emailRules = ref("required|email");
const validateEmail = yup.string().required().email().min(13);
const submit = () => {

//   name.validate();
  
//   email.validate();
  debugger

  if (name.errors.value.length || email.errors.value.length) {
    return;
  }

  // handle form submission
};
</script>
