import openai from 'openai';

// Setup OpenAI Client
const openaiClient = new openai({ apiKey: process.env.OPENAI_API_KEY });

export const analysis = async (screenshot: Buffer, prompt: string): Promise<any> => {
    try {
        // Convert screenshot to base64
        const base64 = Buffer.from(screenshot).toString('base64')

        const response = await openaiClient.chat.completions.create({
            model: "gpt-4o",    // Any vision capable model
            response_format: { "type": "json_object" },
            messages: [
                {
                    role: "user",
                    content: [
                        { type: "text", text: prompt },
                        {
                            type: "image_url",
                            image_url: { "url": "data:image/jpeg;base64," + base64 },
                        },
                    ],
                },
            ]
        });

        return JSON.parse(response.choices[0].message.content || '{}')

    } catch (error) {
        console.error(error)
    }
}

