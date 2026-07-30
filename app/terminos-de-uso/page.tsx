import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Términos de Uso | Delanoe Growth",
  description: "Términos y condiciones de uso del sitio web de Delanoe Growth.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/60 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-8">
            Términos y Condiciones de Uso
          </h1>

          <div className="prose prose-slate prose-lg max-w-none prose-headings:text-navy prose-a:text-primary-600">
            <p>
              Al acceder y utilizar el sitio web de <strong>Delanoe Growth</strong>, aceptas estar
              sujeto a los siguientes Términos y Condiciones. Si no estás de acuerdo con alguna
              parte de estos términos, te solicitamos que no utilices nuestro sitio.
            </p>

            <h2>1. Uso del sitio web</h2>
            <p>
              El contenido publicado en este sitio web tiene propósitos informativos y
              comerciales relacionados con nuestros servicios de marketing digital, optimización
              de conversión (CRO) y desarrollo web.
            </p>
            <ul>
              <li>
                Te comprometes a utilizar el sitio web de forma legal y adecuada, sin infringir
                los derechos de terceros ni restringir el uso y disfrute del sitio por parte de
                otros.
              </li>
              <li>
                Queda prohibido utilizar nuestros formularios de contacto para enviar spam,
                publicidad no solicitada, material difamatorio o malicioso.
              </li>
            </ul>

            <h2>2. Propiedad intelectual</h2>
            <p>
              Todo el contenido de este sitio web, incluyendo textos, diseños, gráficos, logotipos,
              metodologías descritas y estructura, es propiedad intelectual de Delanoe Growth
              o de sus respectivos autores bajo licencia.
            </p>
            <p>
              No está permitida la reproducción, distribución o modificación total o parcial
              del contenido de este sitio sin el consentimiento previo y por escrito de Delanoe
              Growth.
            </p>

            <h2>3. Servicios y Diagnósticos</h2>
            <p>
              La solicitud de un "Diagnóstico Gratuito" o "Auditoría" a través de nuestros
              formularios está sujeta a revisión y disponibilidad. Delanoe Growth se reserva
              el derecho de aceptar o rechazar solicitudes basadas en la viabilidad del proyecto
              o la capacidad operativa de la agencia en el momento.
            </p>
            <p>
              La información brindada durante las asesorías o en los artículos de nuestra
              sección "Metodología" se basa en nuestra experiencia y conocimientos generales del
              mercado. No garantizamos resultados económicos específicos, ya que el éxito de 
              cualquier estrategia de marketing depende de múltiples factores externos al control 
              de la agencia.
            </p>

            <h2>4. Limitación de responsabilidad</h2>
            <p>
              Delanoe Growth no será responsable por daños directos, indirectos o consecuentes
              que surjan del uso o la incapacidad de usar nuestro sitio web, la dependencia de
              la información contenida en el mismo, o interrupciones técnicas que puedan ocurrir.
            </p>

            <h2>5. Enlaces a terceros</h2>
            <p>
              Nuestro sitio web puede contener enlaces a sitios externos o herramientas de terceros.
              No tenemos control sobre el contenido ni las políticas de privacidad de esos sitios,
              por lo que no asumimos responsabilidad alguna por ellos.
            </p>

            <h2>6. Modificaciones a los términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos de Uso en cualquier momento
              sin previo aviso. Los cambios entrarán en vigencia inmediatamente después de su
              publicación en esta página.
            </p>
            
            <h2>7. Contacto</h2>
            <p>
              Si tienes alguna pregunta o inquietud sobre estos Términos de Uso, por favor
              comunícate con nosotros escribiendo a: <a href="mailto:contacto@delanoegrowth.com">contacto@delanoegrowth.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
