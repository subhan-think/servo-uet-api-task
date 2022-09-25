import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useTheme, useMediaQuery, Typography } from "@mui/material";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import SelectInput from "./SelectInput";
import InputLabel from "@mui/material/InputLabel";
import FormControlWrapper from "./FormControlWrapper";

import "./phoneInput.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  useForm,
  Controller,
  // useController
} from "react-hook-form";
import Alert from "@mui/material/Alert";
import { useState, useEffect } from "react";
import { API_BASE_URL, getObjectFetch } from "../../../api";

export default function FormDialog() {
  const {
    // register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    reset,
    // getValues,
    // register,
  } = useForm();
  const [images, setImages] = useState({
    images1: "",
    images2: "",
  });
  const onSubmit = (data, e) => {
    console.log("form data", data);
    console.log(data);
    reset();
    setImages({
      images1: "",
      images2: "",
    });
  };

  const [allCategoriesData, setAllCategoriesData] = useState(false);

  const [subCategoryData, setSubCategoryData] = useState(false);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   if (!value) {
  //     setPreview(undefined);
  //     return;
  //   }
  //   let setimagesPreview = async () => {
  //     let setInPreviewArray = await value.map((item, index) => {
  //       const objectUrl = URL.createObjectURL(value[0]);
  //       return objectUrl;
  //     });

  //     setPreview(setInPreviewArray);
  //     console.log(value, setInPreviewArray, preview);
  //   };
  //   setimagesPreview();
  //   // free memory when ever this component is unmounted
  //   // return () => URL.revokeObjectURL(objectUrl);
  // }, [value]);

  const { category } = watch();
  useEffect(() => {
    let fetchAllCategories = async () => {
      let fetchCategories = await fetch(
        `${API_BASE_URL}category/allCategories`,
        getObjectFetch
      ).then((res) => res.json());
      setAllCategoriesData(fetchCategories);
    };
    fetchAllCategories();
  }, []);

  //   useEffect(() => {
  //     setSubCategoryValues(category);
  //   }, [category]);

  useEffect(() => {
    let fetchSubCategories = async () => {
      let fetchSubCategory = await fetch(
        `${API_BASE_URL}category/getSubcategories/?category=${category}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            category: category,
          }),
        }
      ).then((res) => res.json());
      if (fetchSubCategory.doc) {
        fetchSubCategory.doc.length === 0
          ? setSubCategoryData(false)
          : setSubCategoryData(fetchSubCategory);
        // console.log(fetchSubCategory);
      }
    };
    fetchSubCategories();
  }, [category, allCategoriesData]);

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  //   console.log(isMobile);
  //   console.log(subCategoryData, "data of sub");
  //   console.log(allCategoriesData);

  //   console.log(watch());

  //   console.log(category);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Services
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={isMobile}
        maxWidth={"sm"}
      >
        <DialogContent className="scroll-custom">
          <Typography variant="h3">Add Services</Typography>
          <DialogContentText>
            You will Need to fill out following fields
          </DialogContentText>

          {/* <Input placeholder="enter you first Name" error={true} /> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            {/* <input defaultValue="test" {...register("example")} /> */}
            {/* <br /> */}

            {/* include validation with required or other standard HTML validation rules */}
            {/* <input {...register("exampleRequired", { required: true })} /> */}
            {/* errors will return when field validation fails  */}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            {/* <br /> */}

            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Controller
                render={({ field, formState }) => (
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Full Name"
                    type="text"
                    variant="standard"
                    color="secondary"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                  />
                )}
                control={control}
                name="fName"
                defaultValue={""}
                rules={{ required: true, maxLength: 20, minLength: 12 }}
              />
              <Stack sx={{ width: "100%" }} spacing={2}>
                {errors.fName && errors.fName.type === "required" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Full Name is required
                  </Alert>
                )}
                {errors.fName && errors.fName.type === "maxLength" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Max 20 characters
                  </Alert>
                )}
                {errors.fName && errors.fName.type === "minLength" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Min 12 characters
                  </Alert>
                )}
              </Stack>
              <Controller
                render={({ field, formState }) => (
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="CNIC No"
                    name="CNIC NO"
                    placeholder="CNIC No"
                    type="text"
                    variant="standard"
                    color="secondary"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                  />
                )}
                control={control}
                name="CNIC"
                defaultValue={""}
                rules={{ required: true, maxLength: 32, minLength: 25 }}
              />
              <Stack sx={{ width: "100%" }} spacing={2}>
                {errors.CNIC && errors.CNIC.type === "required" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Full Name is required
                  </Alert>
                )}
                {errors.CNIC && errors.CNIC.type === "maxLength" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Max 32 characters
                  </Alert>
                )}
                {errors.CNIC && errors.CNIC.type === "minLength" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Min 25 characters
                  </Alert>
                )}
              </Stack>
              <Controller
                render={({ field, formState }) => (
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="RU"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    initialValueFormat="national"
                  />
                )}
                control={control}
                name="phone"
                defaultValue={""}
                rules={{ required: true, maxLength: 20, minLength: 12 }}
              />
              <Stack sx={{ width: "100%" }} spacing={2}>
                {errors.phone && errors.phone.type === "required" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Phone is required
                  </Alert>
                )}
                {errors.phone && errors.phone.type === "maxLength" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Max length exceeded
                  </Alert>
                )}
                {errors.phone && errors.phone.type === "minLength" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Enter a valid Phone Number
                  </Alert>
                )}
              </Stack>
              <Controller
                render={({ field, formState }) => (
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Introduction"
                    name="Introduction"
                    placeholder="Write about yourself"
                    type="text"
                    variant="filled"
                    {...field}
                  />
                )}
                control={control}
                name="introduction"
                defaultValue={""}
                rules={{ required: true, maxLength: 150, minLength: 20 }}
              />
              <Stack sx={{ width: "100%" }} spacing={2}>
                {errors.introduction &&
                  errors.introduction.type === "required" && (
                    <Alert
                      severity="error"
                      sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                      variant="string"
                    >
                      Introduction is required
                    </Alert>
                  )}
                {errors.introduction &&
                  errors.introduction.type === "maxLength" && (
                    <Alert
                      severity="error"
                      sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                      variant="string"
                    >
                      Max length exceeded
                    </Alert>
                  )}
                {errors.introduction &&
                  errors.introduction.type === "minLength" && (
                    <Alert
                      severity="error"
                      sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                      variant="string"
                    >
                      Introduction is to short
                    </Alert>
                  )}
              </Stack>
              <Controller
                render={({ field, formState }) => (
                  <TextField
                    fullWidth
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Price"
                    name="price"
                    placeholder="$99"
                    type="number"
                    variant="standard"
                    color="secondary"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                  />
                )}
                control={control}
                name="rate"
                defaultValue={""}
                rules={{
                  required: true,
                  maxLength: 3,
                  minLength: 1,
                  pattern: {
                    // value: /^(|[1-9]\d*)(\.\d+)?$/,
                    value: /^(?!0*(\.0+)?$)(\d+|\d*\.\d+)$/,
                  },
                }}
              />
              <Stack sx={{ width: "100%" }} spacing={2}>
                {errors.rate && errors.rate.type === "required" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Rate is required
                  </Alert>
                )}
                {errors.rate && errors.rate.type === "maxLength" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Enter a smaller value
                  </Alert>
                )}
                {errors.rate && errors.rate.type === "minLength" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Invalid rate
                  </Alert>
                )}
                {errors.rate && errors.rate.type === "pattern" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Invalid Price
                  </Alert>
                )}
              </Stack>
              <FormControlWrapper>
                <InputLabel id={`category-select-label`} color="secondary">
                  Category
                </InputLabel>

                <Controller
                  render={({ field, formState }) => (
                    <SelectInput
                      name="category"
                      optionsData={allCategoriesData}
                      {...field}
                      ref={null}
                    />
                  )}
                  control={control}
                  name="category"
                  defaultValue={""}
                  rules={{
                    required: true,
                    //   maxLength: 3,
                    //   minLength: 1,
                    //   pattern: {
                    //     // value: /^(|[1-9]\d*)(\.\d+)?$/,
                    //     value: /^(?!0*(\.0+)?$)(\d+|\d*\.\d+)$/,
                    //   },
                  }}
                />
              </FormControlWrapper>
              <Stack sx={{ width: "100%" }} spacing={2}>
                {errors.category && errors.category.type === "required" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Category is required
                  </Alert>
                )}
                {!subCategoryData && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Select Category that has a sub category
                  </Alert>
                )}
              </Stack>
              {category && (
                <>
                  <FormControlWrapper>
                    <InputLabel
                      id={`subcategory-select-label`}
                      color="secondary"
                    >
                      Subcategory
                    </InputLabel>

                    <Controller
                      render={({ field, formState }) => (
                        <SelectInput
                          name="subcategory"
                          optionsData={
                            subCategoryData ? subCategoryData : { doc: [] }
                          }
                          {...field}
                          ref={null}
                        />
                      )}
                      control={control}
                      name="subcategory"
                      defaultValue={""}
                      rules={{
                        required: true,

                        //   maxLength: 3,
                        minLength: 1,
                        //   pattern: {
                        //     // value: /^(|[1-9]\d*)(\.\d+)?$/,
                        //     value: /^(?!0*(\.0+)?$)(\d+|\d*\.\d+)$/,
                        //   },
                      }}
                    />
                  </FormControlWrapper>

                  <Stack sx={{ width: "100%" }} spacing={2}>
                    {errors.subcategory &&
                      errors.subcategory.type === "required" && (
                        <Alert
                          severity="error"
                          sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                          variant="string"
                        >
                          Sub Category is required try chossing a different
                          category
                        </Alert>
                      )}
                  </Stack>
                </>
              )}
              <FormControlWrapper>
                <Controller
                  rules={{
                    required: true,

                    validate: (value) => {
                      let valuetoreturn = value.length > 3 ? false : true;
                      return {
                        value: valuetoreturn,
                        message: "not more than 3 pictures",
                      };
                    },
                  }}
                  name="images1"
                  control={control}
                  defaultValue=""
                  render={({ field, fieldState }) => (
                    <Input
                      name="upload-photo"
                      type="file"
                      inputProps={{
                        multiple: true,
                        accept: "image/png , image/jpeg",
                      }}
                      {...field}
                      value={images.images1}
                      onChange={(e) => {
                        setImages((prev) => {
                          return { ...prev, images1: e.target.value };
                        });
                        field.onChange(e.target.files);
                      }}
                    />
                  )}
                />
              </FormControlWrapper>
              <Stack sx={{ width: "100%" }} spacing={2}>
                {errors.images1 && errors.images1.type === "required" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    Required
                  </Alert>
                )}
              </Stack>

              <FormControlWrapper>
                <Controller
                  rules={{
                    required: true,

                    validate: (value) => {
                      let valuetoreturn = value.length > 3 ? false : true;
                      return {
                        value: valuetoreturn,
                        message: "not more than 3 pictures",
                      };
                    },
                  }}
                  name="images2"
                  control={control}
                  defaultValue=""
                  render={({ field, fieldState }) => (
                    <Input
                      name="upload-photo"
                      type="file"
                      inputProps={{
                        multiple: true,
                        accept: "image/png , image/jpeg",
                      }}
                      {...field}
                      value={images.images2}
                      onChange={(e) => {
                        setImages((prev) => {
                          return { ...prev, images2: e.target.value };
                        });
                        field.onChange(e.target.files);
                      }}
                    />
                  )}
                />
              </FormControlWrapper>
              <Stack sx={{ width: "100%" }} spacing={2}>
                {errors.images2 && errors.images2.type === "required" && (
                  <Alert
                    severity="error"
                    sx={{ padding: "0.6rem 0.8rem", color: "#c92522" }}
                    variant="string"
                  >
                    required
                  </Alert>
                )}
              </Stack>

              {/* <FileInput name="file" control={control} /> */}
              {/* upload another
              <input
                type="file"
                multiple={true}
                accept="image/png , image/jpeg"
                {...register("picture", { required: true })}
              /> */}
              {/* <FormControl>
                <InputLabel id="level-label">Level</InputLabel>
                <Controller
                  name="level"
                  defaultValue={""}
                  rules={{ required: "true" }}
                  control={control}
                  render={({ field }) => (
                    <Select labelId="level-label" {...field} label="Level">
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              {errors.level && <div>category is required</div>} */}
              {/* {value && (
                  <div style={{ display: "flex", gap: "8px" }}>
                    {preview.map((item) => (
                      <img
                        src={item}
                        alt="preview"
                        width="20px"
                        height={"25px"}
                      />
                    ))}
                  </div>
                )} */}
            </div>

            <Button variant="contained" type="submit">
              Add Your Service
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// const FileInput = ({ control, name }) => {
//   const { field } = useController({
//     control,
//     name,
//     rules: { required: true },
//     defaultValue: "",
//   });
//   const [value, setValue] = React.useState("");
//   return (
//     <input
//       type="file"
//       {...field}
//       value={value}
//       onChange={(e) => {
//         setValue(e.target.value);
//         field.onChange(e.target.files);
//       }}
//     />
//   );
// };
