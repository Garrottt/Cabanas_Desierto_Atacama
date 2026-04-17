"use server"

import { supabase } from "@/lib/supabase"
import nodemailer from "nodemailer"

export async function submitReservation(formData: FormData) {
  const cabinId = formData.get("cabinId") as string
  const checkIn = formData.get("checkIn") as string
  const checkOut = formData.get("checkOut") as string
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string

  if(!cabinId || !checkIn || !checkOut || !name || !phone) {
    return { error: "Por favor completa todos los campos requeridos." }
  }

  try {
    const { data: cabinData } = await supabase.from('cabins').select('name').eq('id', cabinId).single();

    // 1. Guardar en Base de Datos Supabase
    const { error } = await supabase.from('reservations').insert([{
      cabin_id: cabinId,
      start_date: checkIn,
      end_date: checkOut,
      guest_name: name,
      guest_email: email,
      guest_phone: phone,
      status: 'pending_whatsapp'
    }])

    if (error) throw error

    // 2. Nodemailer - Enviar correo automático
    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });

      try {
        await transporter.sendMail({
          from: `"Web Cabañas" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER, // El correo te llega a ti mismo para avisarte
          subject: `🔔 NUEVA RESERVA WEB: ${cabinData?.name} (${name})`,
          html: `
            <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
              <h2 style="color: #c28854;">Nueva Solicitud de Reserva Registrada</h2>
              <p>Hola, tienes una nueva solicitud desde la página web (guardada en Supabase).</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr style="background:#f4ece1;"><td style="padding:10px; border:1px solid #ead9c3;"><strong>Cabaña</strong></td><td style="padding:10px; border:1px solid #ead9c3;">${cabinData?.name}</td></tr>
                <tr><td style="padding:10px; border:1px solid #ead9c3;"><strong>Cliente</strong></td><td style="padding:10px; border:1px solid #ead9c3;">${name}</td></tr>
                <tr style="background:#f4ece1;"><td style="padding:10px; border:1px solid #ead9c3;"><strong>Check-In</strong></td><td style="padding:10px; border:1px solid #ead9c3;">${checkIn}</td></tr>
                <tr><td style="padding:10px; border:1px solid #ead9c3;"><strong>Check-Out</strong></td><td style="padding:10px; border:1px solid #ead9c3;">${checkOut}</td></tr>
                <tr style="background:#f4ece1;"><td style="padding:10px; border:1px solid #ead9c3;"><strong>Teléfono</strong></td><td style="padding:10px; border:1px solid #ead9c3;">${phone} <a href="https://wa.me/${phone.replace('+','')}">[Abrir WhatsApp]</a></td></tr>
                <tr><td style="padding:10px; border:1px solid #ead9c3;"><strong>Email</strong></td><td style="padding:10px; border:1px solid #ead9c3;">${email || 'No especificado'}</td></tr>
              </table>
              <p style="margin-top:20px; font-size:12px; color:gray;">Mensaje automático del servidor Next.js</p>
            </div>
          `,
        });
      } catch (emailError) {
        // No bloqueamos el flujo hacia Whatsapp si falla el email, solo lo notificamos en consola del servidor
        console.error("Error enviando email con Nodemailer:", emailError);
      }
    }

    // 3. Generar enlace de WhatsApp inteligente con tu número (+56952029807)
    const adminPhone = "56952029807" 
    const message = `👋 Hola, acabo de enviar una solicitud de reserva web! 🏖️\n\n*Huésped:* ${name}\n*Cabaña:* ${cabinData?.name || 'Una cabaña'}\n*Desde:* ${checkIn}\n*Hasta:* ${checkOut}\n*Email:* ${email}\n\nQuisiera confirmar la disponibilidad. ¡Gracias!`
    
    const wameUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`

    return { success: true, redirectUrl: wameUrl }
  } catch (error) {
    console.error("Error submitting reservation:", error)
    return { error: "Hubo un error del servidor. Intenta de nuevo." }
  }
}
