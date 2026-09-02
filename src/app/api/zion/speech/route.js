import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { text, voice = 'coral', language = 'French' } = await request.json();

    if (!text?.trim()) {
      return NextResponse.json({ error: 'Texto vazio.' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'OPENAI_API_KEY não configurada.' }, { status: 500 });
    }

    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_TTS_MODEL || 'gpt-4o-mini-tts',
        voice,
        input: text.trim(),
        instructions: `Fale como Zion, um guia explorador acolhedor, curioso e jovem. Soe natural, caloroso e encorajador, sem parecer um narrador formal. O idioma da fala é ${language}.`,
        response_format: 'mp3',
      }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      return NextResponse.json({ error: data?.error?.message || 'Falha ao gerar a voz do Zion.' }, { status: response.status });
    }

    const audio = await response.arrayBuffer();
    return new NextResponse(audio, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'no-store',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Não foi possível gerar a voz do Zion agora.' }, { status: 500 });
  }
}
