import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message, name, language, level, mission } = await request.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Mensagem vazia.' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'OPENAI_API_KEY não configurada.' }, { status: 500 });
    }

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-5-mini',
        instructions: `Você é Zion, o guia explorador do Zion Polyglot. Sua personalidade é acolhedora, curiosa, divertida, encorajadora e natural. Você ensina idiomas por meio de conversas reais, sem soar como um professor rígido. Corrija apenas erros relevantes e de forma breve, depois mantenha a conversa fluindo. Nunca humilhe ou puna o aluno por errar. Responda preferencialmente no idioma que está sendo estudado, usando português apenas quando necessário para apoiar a compreensão. O explorador se chama ${name || 'Explorador'}, escolheu ${language || 'o idioma'}, nível percebido: ${level || 'iniciante'}, missão atual: ${mission || 'primeiro contato'}.`,
        input: message.trim(),
        max_output_tokens: 250,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json({ error: data?.error?.message || 'Falha ao conversar com o Zion.' }, { status: response.status });
    }

    const reply = data.output_text || data.output?.flatMap((item) => item.content || []).map((part) => part.text).filter(Boolean).join(' ') || 'Vamos continuar nossa expedição.');

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ error: 'Não foi possível falar com o Zion agora.' }, { status: 500 });
  }
}
