import { Groq } from 'groq-sdk';
import { NextResponse } from 'next/server';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const systemPrompt = {
            role: 'system',
            content: 'You are an advanced medical diagnostic assistant for "NYC Medical Advanced Care". Your goal is to help patients understand symptoms, find relevant specialists, and answer general health questions with empathy and professionalism. \n\n' +
                'Guidelines:\n' +
                '- Always clarify that you are an AI and not a substitute for professional medical advice.\n' +
                '- If a situation seems critical (chest pain, severe bleeding, difficulty breathing), immediately advise calling 911 or visiting the nearest emergency room.\n' +
                '- Be concise, professional, and empathetic.\n' +
                '- Recommend hospital departments when relevant (e.g., for heart issues, mention the Cardiology Department).\n' +
                '- Do not provide prescriptions or definitive diagnoses.\n' +
                '- **FORMATTING RULES:**\n' +
                '  - Use **Markdown** for all responses.\n' +
                '  - Use **Tables** for structured data like visiting hours, doctor schedules, or price lists.\n' +
                '  - Use **Bold** for key terms and lists for steps.'
        };

        const completion = await groq.chat.completions.create({
            messages: [systemPrompt, ...messages],
            model: "llama-3.3-70b-versatile",
            temperature: 0.5,
            max_tokens: 1024,
            stream: true,
        });

        const stream = new ReadableStream({
            async start(controller) {
                for await (const chunk of completion) {
                    const content = chunk.choices[0]?.delta?.content || "";
                    if (content) {
                        controller.enqueue(new TextEncoder().encode(content));
                    }
                }
                controller.close();
            },
        });

        return new NextResponse(stream, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
            }
        });

    } catch (error) {
        console.error('Error in chat API:', error);
        return NextResponse.json(
            { error: 'Failed to process chat request', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
