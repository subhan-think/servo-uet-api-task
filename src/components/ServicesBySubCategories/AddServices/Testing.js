// import { Button } from "@mui/material";
// import { Controller, useForm } from "react-hook-form";
// // import { makeStyles } from "@material-ui/core/styles";
// import React, { useCallback, useState } from "react";
// // import clsx from "clsx";
// // import uuid from "react-uuid";

// // const useStyles = makeStyles((theme) => ({
// //   productImageFeaturedStar: {
// //     position: "absolute",
// //     top: 0,
// //     right: 0,
// //     color: green,
// //     opacity: 0
// //   },
// //   productImageUpload: {
// //     transitionProperty: "box-shadow",
// //     transitionDuration: theme.transitions.duration.short,
// //     transitionTimingFunction: theme.transitions.easing.easeInOut
// //   },
// //   productImageItem: {
// //     transitionProperty: "box-shadow",
// //     transitionDuration: theme.transitions.duration.short,
// //     transitionTimingFunction: theme.transitions.easing.easeInOut,
// //     "&:hover": {
// //       "& $productImageFeaturedStar": {
// //         opacity: 0.8
// //       }
// //     },
// //     "&.featured": {
// //       pointerEvents: "none",
// //       boxShadow: theme.shadows[3],
// //       "& $productImageFeaturedStar": {
// //         opacity: 1
// //       },
// //       "&:hover $productImageFeaturedStar": {
// //         opacity: 1
// //       }
// //     }
// //   }
// // }));

// export default function App(props) {
//   //   const classes = useStyles(props);
//   const { control, getValues, setValue } = useForm({
//     defaultValues: {},
//   });

//   const [image, setImage] = useState([]);
//   const [files, setFiles] = useState([]);

//   async function uploadimg(e) {
//     const file = e.target.files[0];
//     if (file) {
//       console.log("e---image", e.target.files);
//       const read = await readFileAsync(file);
//       setImage([...image, read]);
//       // setFiles([...files, file]);

//       const value = [...files, file];
//       setFiles(value);
//       setValue("images", value);
//     }
//   }

//   function readFileAsync(e) {
//     return new Promise((resolve, reject) => {
//       // const file = e.target.files[0];
//       // if (!file) {
//       //   return;
//       // }
//       const reader = new FileReader();

//       reader.onload = () => {
//         generateFromImage(reader.result, 700, 700, 0.9, (imgdata) => {
//           resolve({
//             id: `"id" ${Math.random().toString(16).slice(2)}`,
//             // url: `data:${file.type};base64,${btoa(reader.result)}`,
//             url: imgdata,
//             type: "image",
//           });
//         });
//       };

//       reader.onerror = reject;

//       // reader.readAsBinaryString(e);
//       reader.readAsDataURL(e);
//     });
//   }

//   function generateFromImage(
//     img,
//     MAX_WIDTH = 800,
//     MAX_HEIGHT = 800,
//     quality = 1,
//     callback
//   ) {
//     var canvas = document.createElement("canvas");
//     var image = new Image();

//     image.onload = () => {
//       var width = image.width;
//       var height = image.height;

//       if (width > height) {
//         if (width > MAX_WIDTH) {
//           height *= MAX_WIDTH / width;
//           width = MAX_WIDTH;
//         }
//       } else {
//         if (height > MAX_HEIGHT) {
//           width *= MAX_HEIGHT / height;
//           height = MAX_HEIGHT;
//         }
//       }
//       canvas.width = width;
//       canvas.height = height;
//       var ctx = canvas.getContext("2d");

//       ctx.drawImage(image, 0, 0, width, height);

//       // IMPORTANT: 'jpeg' NOT 'jpg'
//       var dataUrl = canvas.toDataURL("image/jpeg", quality);

//       // console.log("dataUrl", dataUrl)

//       callback(dataUrl);
//     };
//     //  return onimg
//     image.src = img;
//   }

//   function handleSaveImage() {
//     // setValue("images", files);
//     console.log(getValues().images);
//     // alert(getValues().images); // pass form data to productSlice
//   }

//   function deleteFile(id) {
//     // const s = image.filter((item, index) => item.id !== id);
//     // setImage(s);

//     const imageIndex = image.findIndex((item) => item.id === id);

//     if (imageIndex > -1) {
//       const value = files.filter((_, i) => i !== imageIndex);
//       setImage(image.filter((item) => item.id !== id));
//       setFiles(value);
//       setValue("images", value);
//     }
//   }

//   // const onSubmit = (values) => alert(JSON.stringify(values));

//   return (
//     <div>
//       <div className="flex justify-center sm:justify-start flex-wrap -mx-16">
//         <Controller
//           name="images"
//           control={control}
//           render={({ field: { value, onChange, setValue } }) => (
//             <label htmlFor="button-file">
//               <input
//                 accept="image/jpeg"
//                 name="images"
//                 className="hidden"
//                 id="button-file"
//                 type="file"
//                 multiple={true}
//                 // setValue={setValue}

//                 onChange={uploadimg}
//               />
//             </label>
//           )}
//         />
//         <Controller
//           name="featuredImageId"
//           control={control}
//           defaultValue=""
//           render={({ field: { onChange, value } }) =>
//             image.map((media) => (
//               <div
//                 onClick={() => onChange(media.id)}
//                 onKeyDown={() => onChange(media.id)}
//                 key={media.id}
//               >
//                 <span onClick={() => deleteFile(media.id)}>delete</span>
//                 <img
//                   className="max-w-none w-auto h-full"
//                   src={media.url}
//                   alt="product"
//                 />
//               </div>
//             ))
//           }
//         />
//       </div>
//       <Button
//         className="whitespace-nowrap mx-4"
//         variant="contained"
//         color="secondary"
//         onClick={handleSaveImage}
//       >
//         Save
//       </Button>
//     </div>
//   );
// }
