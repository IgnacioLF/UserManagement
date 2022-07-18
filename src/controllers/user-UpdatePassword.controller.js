import UserModel from '#Schemas/user.schema.js';
import { compare, hash } from 'bcrypt';

const userUpdatePasswordController = async (req, res) => {
    const { id } = req;
    const { oldPassword, newPassword } = req.body;

    const existingUserById = await UserModel.findOne({ id }).exec();
    if (!existingUserById) return res.status(401).send('Usuario no autorizado');

    const checkPassword = await compare(oldPassword, existingUserById.password);
    if (!checkPassword) return res.status(401).send('Credenciales incorrectas');

    const hasedPassword = await hash(newPassword, 10);
    existingUserById.password = hasedPassword;

    await existingUserById.save();

    return res.send('Contraseña del usuario actualizada');
};

export default userUpdatePasswordController;
