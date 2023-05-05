export class GenerateName {
    static generateFileName(req, file, callback) {
        let random = Math.round(Math.random() * 1e9);
        let fileNameSplint = file.originalname.split(".");
        let fileExt = fileNameSplint[fileNameSplint.length - 1];
        callback(null, `${random}.${fileExt}`);
    }
}