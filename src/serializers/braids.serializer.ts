import * as yup from "yup";

const createBraidsSerializer = yup.object().shape({
    type:yup.string().required("Type é um campo obrigatório"),
    price: yup.number().required("Price é um campo obrigatório"),
    time: yup.string().notRequired().matches(/^(0?[1-9]|1[0-2]):[0-5][0-9]$/,"Seguir o formato requerido hh:mm"),
    date: yup.date().notRequired(),
    image_p: yup.string().notRequired(),
    image_s: yup.string().notRequired(),
    insta: yup.string().required("Insta é um campo obrigatório")
});

const updateBraidsSerializer = yup.object().shape({
    price: yup.number(),
    type: yup.string(),
    image_p: yup.string(),
    insta: yup.string(),
    date: yup.date(),
    time: yup.string().matches(/^(0?[1-9]|1[0-2]):[0-5][0-9]$/),
    image_s: yup.string(),
})
export {createBraidsSerializer, updateBraidsSerializer}