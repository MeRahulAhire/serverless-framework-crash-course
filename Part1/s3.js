exports.handler = async (event) => {

    const s3Body = event.Records[0]
    console.log(s3Body)
}