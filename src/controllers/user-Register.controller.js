import { SALT } from '#Constants/salt.js';
import UserModel from '#Schemas/user.schema.js';
import { hash } from 'bcrypt';

const userRegisterController = async (req, res) => {
    const { _id, name, surname, email, password } = req.body;

    const existingUserById = await UserModel.findById(_id).exec();
    if (existingUserById)
        return res
            .status(409)
            .send({ errors: ['Ya existe un usuario con el id registrado'] });

    const existingUserByEmail = await UserModel.findOne({ email }).exec();
    if (existingUserByEmail)
        return res
            .status(409)
            .send({ errors: ['Ya existe un usuario con el email registrado'] });

    const hasedPassword = await hash(password, SALT);

    const user = new UserModel({
        _id,
        name,
        surname,
        email,
        password: hasedPassword,
    });

    await user.save();

    return res.status(201).send('Usuario registrado con exito');
};

export default userRegisterController;
