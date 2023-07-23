const { Configuration, OpenAIApi } = require("openai");

async function postChatResult(req, res) {
    try {

        const configuration = new Configuration({
            apiKey: process.env.API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        const { prompt } = req.body
        if (!prompt) return res.status(400).json({ message: "Prompt is required" });
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt },
            ],
        });

        res.status(200).json({
            status: "success",
            result: chatCompletion.data.choices[0].message
        });

    }
    catch (err) {
        res.status(500).json({ status: "error", message: err.message});
    }
}
module.exports = {
    postChatResult: postChatResult
}