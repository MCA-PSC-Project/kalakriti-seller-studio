import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
function ProductImage(){
    
  const [selectedImage, setSelectedImage] = useState(null);
  const [dpUpdateMode, setDpUpdateMode] = useState(false);
  const [imageURL, setImageURL] = useState(null);

  
    const {
    //   register: addProductForm,
    //   handleSubmit,
      formState: { errors },
    } = useForm({
    //   resolver: yupResolver(addProductSchema),
    });
  
  
  // const config = {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // };


  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setSelectedImage(img);
      setImageURL(URL.createObjectURL(img));
      setDpUpdateMode(true);
    }
  };

  // const handleImageUpload = () => {
  //   const formData = new FormData();
  //   formData.append("file", selectedImage);
  //   console.log("formdata= ", formData);
  //   api
  //     .post(`/uploads/image`, formData, config)
  //     .then((response) => {
  //       if (response.status === 201) {
  //         // console.log("image selected");
  //         console.log("response=", response.data);
  //         const mediaId = response.data.id;
  //         api
  //           .patch(`/sellers/profile`, {
  //             dp_id: mediaId,
  //           })
  //           .then((response) => {
  //             if (response.status === 200) {
  //               console.log("Image successfully uploaded");
  //               setShowModal(true);
  //               setModalProperties({
  //                 title: "Message",
  //                 body: "image successfully uploaded",
  //                 cancelButtonPresent: false,
  //                 onClose: () => {
  //                   setShowModal(false);
  //                   // window.location.reload();
  //                 },
  //               });
  //             }
  //           })
  //           .catch((error) => {
  //             console.error("Some error occured ");
  //             console.error(error);
  //             setShowModal(true);
  //             setModalProperties({
  //               title: "Message",
  //               body: "Some error occured in updloading image",
  //               cancelButtonPresent: false,
  //               onClose: () => {
  //                 setShowModal(false);
  //               //   window.location.reload();
  //               },
  //             });
  //           });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Some error occured ");
  //       console.error(error);
  //       setShowModal(true);
  //       setModalProperties({
  //         title: "Message",
  //         body: "Some error occured in uploading image",
  //         cancelButtonPresent: false,
  //       });
  //     });
  // };

    return(
            
                <div className="col-12">
                  <div>
                    <label htmlFor="mediaList" className="form-label required">
                      Upload medias for the product
                    </label>
                    <p>
                    {selectedImage && (
                      <img
                        src={imageURL ?? selectedImage}
                        class="rounded-circle"
                        alt="preview"
                        width="200"
                        height="200"
                      />
                    )}
                    <br />
                    <input
                      accept="image/*"
                      type="file"
                      id="select-image"
                      onChange={handleImageChange}
                    /><br/>
                     {/* <button
                      type="button"
                      style={{ marginTop: 20, marginLeft: 60 }}
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#modal"
                      disabled={!dpUpdateMode}
                      onClick={handleImageUpload}
                    >
                      save
                    </button> */}
                  </p>

                
                  </div>
                  {errors.mediaList && (
                    <span style={{ color: "red" }}>
                      {errors.mediaList.message}
                    </span>
                  )}
                </div>
    );
}

export default ProductImage;