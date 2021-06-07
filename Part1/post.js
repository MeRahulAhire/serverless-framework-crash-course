exports.handler = async (event) => {

    const body = JSON.parse(event.body)

    return{
        statusCode: 200,
        headers:{
            'Content-Type': `text/html`
        },
        body: JSON.stringify(body)
    }
}