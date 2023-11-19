require('dotenv').config();
const aws = require('aws-sdk');

const endpoint = new aws.Endpoint(process.env.BUCKET_ENDPOINT);

const s3 = new aws.S3({
    endpoint,
    credentials: {
        accessKeyId: process.env.BUCKET_KEY_ID,
        secretAccessKey: process.env.BUCKET_APPLICATION_KEY
    }
});

const uploadImagem = async (path, buffer, mimetype) => {
    const imagem = await s3.upload({
        Bucket: process.env.BUCKET_KEY_NAME,
        Key: path,
        Body: buffer,
        ContentType: mimetype
    }).promise()

    return {
        path: imagem.Key,
        url: `https://${process.env.BUCKET_KEY_NAME}.${process.env.BUCKET_ENDPOINT}/${imagem.Key}`
    }
};

module.exports = {
    uploadImagem
}