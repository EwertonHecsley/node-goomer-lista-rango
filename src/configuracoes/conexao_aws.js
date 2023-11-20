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

const buscarImagem = async (id) => {
    const imagem = await s3.listObjects({
        Bucket: process.env.BUCKET_KEY_NAME,
        Prefix: `restaurantes/${id}`
    }).promise();

    return imagem.Contents;
}

const buscarImagemProdutos = async (id) => {
    const imagem = await s3.listObjects({
        Bucket: process.env.BUCKET_KEY_NAME,
        Prefix: `produtos/${id}`
    }).promise();

    return imagem.Contents;
}

const excluirImagem = async (path) => {
    await s3.deleteObject({
        Bucket: process.env.BUCKET_KEY_NAME,
        Key: path
    }).promise()
};

module.exports = {
    uploadImagem,
    buscarImagem,
    excluirImagem,
    buscarImagemProdutos
}