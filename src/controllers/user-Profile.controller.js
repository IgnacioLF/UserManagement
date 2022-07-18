import UserModel from '#Schemas/user.schema.js';

const userProfileController = async (req, res) => {
    const { id } = req.body;

    const existingUserById = await UserModel.findOne({ id }).exec();
    if (!existingUserById)
        return res.status(401).send({ errors: ['Usuario no autorizado'] });

    const { _id, name, surname, email } = existingUserById;

    return res.send({ _id, name, surname, email });
};

export default userProfileController;
