import {
  Alert,
  Button,
  CircularProgress,
  Collapse,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MotionWrapper from "./MotionWrapper";
import { ArrowBack } from "@mui/icons-material";
import { useFormik } from "formik";
import { userProfileSchema } from "../models/userSchema";
import { toFormikValidationSchema } from "zod-formik-adapter";
import React, { useState } from "react";
import useSignUpStore from "../hooks/useSignupStore";
import {APIMethods} from "../../../lib/axios/api"

export default function CompleteProfile() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [setActiveStep, user, profile, setProfile] = useSignUpStore((state) => [
    state.setActiveStep,
    state.user,
    state.profile,
    state.setProfile,
  ]);

  const formik = useFormik({
    initialValues: {
      name: profile.name,
      username: profile.username,
      githubId: profile.githubId,
    },
    onSubmit: async (values) => {
      setProfile(values);
      let data = {
				email: user!.email,
				password: user!.password,
				profile: values
			}
      setIsLoading((v) => true);
      try {
        // console.log(data)
        await APIMethods.auth.signUp(data)
        setActiveStep(1);
      } catch (err: any) {
        console.error(err);
        setError(err.response.data);
      } finally {
        setIsLoading((v) => false);
      }
    },
    validationSchema: toFormikValidationSchema(userProfileSchema),
  });

  return (
    <MotionWrapper>
      <Stack
        border="1px solid"
        borderColor="divider"
        borderRadius="8px"
        padding="24px"
        gap="24px"
      >
        <Button
        sx={{width: "fit-content"}}
          startIcon={<ArrowBack />}
          onClick={() => {
            setProfile(formik.values);
            setActiveStep(-1);
          }}
        >
          Back
        </Button>
        <Typography variant="h3">Help us know you better</Typography>
        <Collapse in={error ? true : false}>
          <Alert severity="error">{error}</Alert>
        </Collapse>
        <Stack gap="20px">
          <TextField
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name ? true : false}
            helperText={formik.errors.name}
            required
          />
          <TextField
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.username && formik.errors.username ? true : false
            }
            helperText={formik.errors.username}
            required
          />
          <TextField
            name="githubId"
            label="Github Url"
            value={formik.values.githubId}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.githubId && formik.errors.githubId ? true : false
            }
            helperText={formik.errors.githubId}
            required
          />
        </Stack>
        <Button
          variant="contained"
          onClick={() => formik.handleSubmit()}
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress sx={{color:'white'}} size={25} /> : "Next"}
        </Button>
      </Stack>
    </MotionWrapper>
  );
}
