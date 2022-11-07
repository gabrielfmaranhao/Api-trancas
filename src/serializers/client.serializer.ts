import * as yup from 'yup';

const createClientSerializer = yup.object().shape({
    name: yup.string().required("Name é um campo obrigatório"),
    inst: yup.string()
});

const updateClientSerializer = yup.object().shape({
    inst: yup.string().required("Inst é um campo requirido")
})
export {createClientSerializer, updateClientSerializer}