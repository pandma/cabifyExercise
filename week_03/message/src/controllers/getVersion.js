
export default async (req, res) => {
    const version = process.env.SERVICE_NAME

    res.status(200).json(version)
    console.log("the version is", version)

};