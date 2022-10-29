import { getImage } from "../../utils/formidable";
import { uploadImage } from "../../utils/cloudinary";
import prisma from "../../prisma";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handle(req, res) {
    const imageUploaded = await getImage(req);

    const imageData = await uploadImage(imageUploaded.path);

    const first = await prisma.home.findFirst({
        where: {
            processed: 0
        }
    })

    const result = await prisma.home.update({
        where: {
          id: first.id
        },
        data: {
            headerImg: imageData.public_id,
            headerImgFormat: imageData.format,
            headerImgVersion: imageData.version.toString(),
        },
    });

    res.json(result);
}