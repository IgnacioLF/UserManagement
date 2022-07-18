import { Type } from '@sinclair/typebox';

export const idDTOSchema = Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'El tipo del _id no es válido, debe ser una String',
        format: 'El formato del _id no es válido, debe ser un uuid',
    },
});

export const nameDTOSchema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'El name debe tener al menos 2 caractes de longitud',
        maxLength: 'El name debe tener como máximo 20 caracteres de longitud',
        type: 'El tipo del name no es válido, debe ser una String',
    },
});

export const surnameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage: {
        minLength: 'El surname debe tener al menos 4 caractes de longitud',
        maxLength:
            'El surname debe tener como máximo 50 caracteres de longitud',
        type: 'El tipo del surname no es válido, debe ser una String',
    },
});

export const emailDTOSchema = Type.String({
    format: 'email',
    errorMessage: {
        type: 'El tipo del email no es válido, debe ser una String',
        format: 'El formato del email no es válido, debe cumplir el RFC 5322',
    },
});

export const passwordDTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        minLength: 'El password debe tener al menos 10 caractes de longitud',
        maxLength:
            'El password debe tener como máximo 25 caracteres de longitud',
        type: 'El tipo la password no es válido, debe ser una String',
        format: 'El formato de la password no es válido, debe contener una mayuscula una minuscula y un número',
    },
});
