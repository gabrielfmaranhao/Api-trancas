import * as yup from 'yup';

const createClientSerializer = yup.object().shape({
    name: yup.string().required("Name é um campo obrigatório"),
    inst: yup.string()
});

const updateClientSerializer = yup.object().shape({
    inst: yup.string().notRequired(),
    name: yup.string().notRequired()
})
export {createClientSerializer, updateClientSerializer}