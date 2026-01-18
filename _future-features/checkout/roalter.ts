
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    // Validar variable de entorno en runtime
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe configuration missing' },
        { status: 500 }
      );
    }

    // Instanciar Stripe en runtime (no en scope global)
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const { amount, currency } = await request.json();

    // Validar entrada
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Crea la sesión de pago
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      line_items: [
        {
          price_data: {
            currency: currency || 'usd',
            product_data: {
              name: 'Servicio Moviliax',
            },
            unit_amount: amount, // en centavos
          },
          quantity: 1,
        },
      ],
    });

    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    console.error('Error creando sesión de Stripe:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
