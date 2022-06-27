import React from "react";
import { Context } from "../contextStore";
import { useForm, SubmitHandler } from "react-hook-form";
import { Project } from "../types";
import { addProject, updateProjects } from "../services/projectsAPI";
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  StyledMainButton,
  StyledSimpleButton,
  StyledButtonBox,
  StyledRoot,
  Text,
} from "./styled";

const StyledFormComponent = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

type Keys = (keyof Project)[];
const ProjectKeys: Keys = ["title", "type", "state", "loan", "interest"];

export const AddEdit: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Project>();
  const navigate = useNavigate();
  const { projects, setProjects, setSelected, selected } =
    React.useContext(Context);

  const onSubmit: SubmitHandler<Project> = (data) => {
    if (selected) {
      const updatedProjects = projects.map((obj) => {
        if (obj.title === selected.title) {
          return { ...data };
        }
        return obj;
      });

      updateProjects(updatedProjects);
      setProjects(updatedProjects);
      setSelected(null);
      navigate("/");
    } else {
      addProject(data);
      setProjects([...projects, data]);
      navigate("/");
    }
  };

  const titleExists = (title: string) => {
    if (selected) {
      return true;
    }
    if (projects.some((e) => e.title === title)) {
      return false;
    }
    return true;
  };

  React.useEffect(() => {
    if (selected) {
      ProjectKeys.forEach((key) => setValue(key, selected[key]));
    }
  }, [setValue, selected]);

  return (
    <StyledRoot>
      <Text variant="h6">Add new project</Text>
      <StyledFormComponent onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Title"
          {...register("title", { required: true, validate: titleExists })}
        />
        {errors.title && errors.title.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.title && errors.title.type === "validate" && (
          <span>Project with this title already exists</span>
        )}

        <TextField label="Type" {...register("type", { required: true })} />
        {errors.type && <span>This field is required</span>}

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
          <Select
            label="State"
            sx={{ textAlign: "left" }}
            defaultValue={selected?.state || "-"}
            {...register("state", { required: true })}
          >
            <MenuItem value="-">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Project">Project</MenuItem>
            <MenuItem value="Declined">Declined</MenuItem>
            <MenuItem value="Analyzed">Analyzed</MenuItem>
          </Select>
        </FormControl>
        {errors.state && <span>This field is required</span>}

        <TextField
          fullWidth
          label="Loan"
          {...register("loan", { required: true })}
          type="number"
          InputProps={{
            inputProps: { min: 0 },
            startAdornment: (
              <InputAdornment
                position="start"
                component="div"
                style={{ paddingLeft: "-14px" }}
                disablePointerEvents
              >
                $
              </InputAdornment>
            ),
          }}
        />
        {errors.loan && <span>This field is required</span>}
        <TextField
          label="Interest"
          {...register("interest", { required: true })}
          type="number"
          InputProps={{
            inputProps: { min: 0 },
            startAdornment: (
              <InputAdornment
                position="start"
                component="div"
                style={{ paddingLeft: "-14px" }}
                disablePointerEvents
              >
                %
              </InputAdornment>
            ),
          }}
        />

        {errors.interest && <span>This field is required</span>}

        <StyledButtonBox>
          <Link href="/" underline="none">
            <StyledSimpleButton variant="contained">Cancel</StyledSimpleButton>
          </Link>
          <StyledMainButton type="submit" variant="contained">
            Save
          </StyledMainButton>
        </StyledButtonBox>
      </StyledFormComponent>
    </StyledRoot>
  );
};
