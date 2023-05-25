"use client"
import axios from "axios"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import * as Yup from "yup"

// for upload file
const FILE_SIZE = 1024 * 1024 * 5 // 5MB
const SUPPORTED_FORMATS = [ "image/jpg","image/jpeg", "image/gif","image/png", "image/webp"]
//  create new product validation
const validationSchema = Yup.object({
    title: Yup.string().required("title required"),
    price: Yup.number().required("price required"),
    description: Yup.string().required("description required"),
    categoryId: Yup.number().required("categoryId required"),
    file: Yup.mixed()
        .test("fileSize", " File Is Big", (value) => {
            if (!value) {
                return true
            }
            return value.size <= FILE_SIZE
        })
        .test("filsFormat", "Unsupported format", (value) => {
            if (!value) {
                return true
            }
            return SUPPORTED_FORMATS.includes(value.type)
        })
        .required("required"),
})

const uploadImage = async (values) => {
    try {
        const response = await axios.post(
            "https://api.escuelajs.co/api/v1/files/upload",
            values.file
        )
        console.log(response);
        return response.data.location;
    } catch (error) {
        console.log(error);
    }
}

// handle fetch category
export async function getCategory() {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories")
    const data = await res.json()
    console.log(data)
    return data
}

function CustomInput({ field, form, isSubmitting, ...props }) {
    const [preview, setPreview] = useState(null)
    useEffect(() => {
        if (isSubmitting) {
            setPreview(null)
        }
    }, [isSubmitting])
    return (
        <div>
            <input
                type='file'
                onChange={(event) => {
                    form.setFieldValue(field.name, event.currentTarget.files[0])
                    setPreview(URL.createObjectURL(event.currentTarget.files[0]))
                }}
                // {...props} is use to pass all props from Formik Field component
                {...props}
            />
            {preview && (
                <div className='avatar'>
                    <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                        <img
                            src={preview}
                            alt='dummy'
                            width='150'
                            height='100'
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

const Page = async () => {
    const createProduct = async (product) => {
        const { title, price, description, categoryId, images } = product
        let myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        let raw = JSON.stringify({
            title,
            price,
            description,
            categoryId,
            images: [images],
        })

        let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        }

        fetch("https://api.escuelajs.co/api/v1/products/", requestOptions)
            .then((response) => response.json())
            .then((result) => console.log(result),
                alert("create product success"),
                router.push("/")
            )

            .catch((error) => console.log("error", error))
    }

    //   fetch category
    const categories = await getCategory()
    console.log(categories)
    return (
        <Formik
            initialValues={{
                title: "",
                price: 0,
                description: "",
                categoryId: 1,
                images: ["https://placeimg.com/640/480/any"],
                file: undefined,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                const formData = new FormData()
                formData.append("file", values.file)
                const images = await uploadImage({ file: formData })

                values.images = images
                setTimeout(() => {
                    createProduct(values)
                    setSubmitting(false)
                    resetForm()
                }, 500)
            }}
        >
            {({ isSubmitting, setFieldValue }) => (

                <div className="flex justify-center w-full my-10">

                    <Form>
                        <h1 className="text-center font-bold text-3xl mb-5">Add New Product</h1>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="mb-1">
                                Title
                            </label>
                            <Field
                                type="text"
                                name="title"
                                id="name"
                                className="border border-gray-500 rounded px-4 py-2"
                            />
                            <ErrorMessage
                                name="title"
                                component="div"
                                className="text-red-500"
                            />
                        </div>

                        {/*<Field*/}
                        {/*    className='flex flex-col mb-4'*/}
                        {/*    name='title'*/}
                        {/*    type='text'*/}
                        {/*    placeholder='title'*/}
                        {/*/>{" "}*/}
                        {/*<br />*/}
                        {/*<ErrorMessage*/}
                        {/*    className='flex flex-col mb-4'*/}
                        {/*    name='title'*/}
                        {/*    component='div'*/}
                        {/*/>*/}
                        {/* price	 */}
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="mb-1">
                                price
                            </label>
                            <Field
                                type="number"
                                name="price"
                                id="name"
                                className="border border-gray-500 rounded px-4 py-2"
                            />
                            <ErrorMessage
                                name="price"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        {/*<Field*/}
                        {/*    className='flex flex-col mb-4'*/}
                        {/*    name='price'*/}
                        {/*    type='number'*/}
                        {/*    placeholder='price'*/}
                        {/*/>{" "}*/}
                        {/*<br />*/}
                        {/*<ErrorMessage*/}
                        {/*    className='text-red-500 text-xs italic'*/}
                        {/*    name='price'*/}
                        {/*    component='div'*/}
                        {/*/>*/}
                        {/* description */}
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="mb-1">
                                Description
                            </label>
                            <Field
                                type="text"
                                name="description"
                                id="description"
                                placeholder='description'
                                className="border border-gray-500 rounded px-4 py-2"
                            />
                            <ErrorMessage
                                name="description"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        {/*<Field*/}
                        {/*    className='flex flex-col mb-4'*/}
                        {/*    name='description'*/}
                        {/*    type='text'*/}

                        {/*/>{" "}*/}
                        {/*<br />*/}
                        {/*<ErrorMessage*/}
                        {/*    className='text-red-500 text-xs italic'*/}
                        {/*    name='description'*/}
                        {/*    component='div'*/}
                        {/*/>*/}
                        {/* categoryId */}
                        <div className="flex flex-col mb-4">
                            <label htmlFor="name" className="mb-1">
                                Category
                            </label>
                            <Field
                                as='select'
                                     name='categoryId'
                                 >
                                     <option
                                         selected
                                         disabled

                                     >
                                        choose category
                                     </option>
                                    {categories.map((cate) => (
                                         <option
                                             key={cate.id}
                                             value={cate.id}
                                        >
                                            {cate.name}
                                        </option>
                                    ))}
                                </Field>
                            <ErrorMessage
                                name="description"
                                component="div"
                                className="text-red-500"
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="file" className="mb-1">
                            </label>
                            <Field
                                isSubmitting={isSubmitting}
                                type="file"
                                name="file"
                                id="file"
                                setFieldValue={setFieldValue}
                                component={CustomInput}
                                className="border border-gray-500 rounded px-4 py-2"
                            />
                            <ErrorMessage
                                name="file"
                                component="div"
                                className="text-red-500"
                            />


                        </div>
                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className={`${
                                isSubmitting
                                    ? "bg-gray-500 cursor-not-allowed"
                                    : "bg-blue-500 hover:bg-blue-700"
                            } text-white font-bold py-2 px-4 rounded`}
                        >
                            Submit
                        </button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default Page