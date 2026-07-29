import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Política de Privacidad | Delanoe Growth",
  description: "Política de privacidad y protección de datos de Delanoe Growth.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/60 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-8">
            Política de Privacidad
          </h1>

          <div className="prose prose-slate prose-lg max-w-none prose-headings:text-navy prose-a:text-primary-600">
            <p>
              En <strong>Delanoe Growth</strong> respetamos tu privacidad y estamos comprometidos
              a proteger los datos personales que nos compartas. Esta política explica cómo
              recopilamos, usamos y cuidamos tu información.
            </p>

            <h2>1. Información que recopilamos</h2>
            <p>
              A través de los formularios de contacto de nuestro sitio web, recopilamos únicamente
              los datos estrictamente necesarios para poder comunicarnos contigo y brindarte una
              evaluación comercial. Estos datos incluyen:
            </p>
            <ul>
              <li>Nombre completo.</li>
              <li>Número de teléfono (WhatsApp).</li>
              <li>Correo electrónico.</li>
              <li>Información general sobre tu empresa o negocio (opcional).</li>
            </ul>

            <h2>2. Uso de la información</h2>
            <p>
              La información proporcionada se utiliza <strong>exclusivamente</strong> con los
              siguientes fines:
            </p>
            <ul>
              <li>Contactarte para responder tus consultas.</li>
              <li>Realizar el diagnóstico o auditoría solicitada.</li>
              <li>Enviarte propuestas de servicios de marketing digital y desarrollo.</li>
            </ul>
            <p>
              <strong>Bajo ninguna circunstancia</strong> vendemos, alquilamos ni compartimos tus
              datos personales con terceros, agencias externas o empresas de publicidad. Tu
              información es de uso estrictamente interno.
            </p>

            <h2>3. Protección de datos</h2>
            <p>
              Implementamos medidas de seguridad administrativas y técnicas para proteger tu
              información personal contra pérdida, uso indebido, acceso no autorizado,
              divulgación o alteración. 
            </p>

            <h2>4. Retención de los datos</h2>
            <p>
              Mantendremos tu información en nuestros registros el tiempo que sea necesario para
              cumplir con los propósitos para los cuales fue recopilada, o hasta que nos
              solicites su eliminación.
            </p>

            <h2>5. Tus derechos</h2>
            <p>
              En cualquier momento, tienes el derecho de solicitar acceder, rectificar o eliminar
              la información personal que nos hayas proporcionado. Para ejercer cualquiera de
              estos derechos, puedes contactarnos directamente a través de nuestro correo
              electrónico: <a href="mailto:delanoegrowth@gmail.com">delanoegrowth@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
