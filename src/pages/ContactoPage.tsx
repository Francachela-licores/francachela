import { Mail, Phone, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactoPage = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Contáctanos</h1>
          <p className="text-lg text-muted-foreground">
            Estamos aquí para ayudarte. Contáctanos por cualquiera de estos
            medios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-4 justify-center">
                <h3 className="font-bold text-lg mb-1">Redes Sociales: </h3>
                <div className="flex justify-center gap-6">
                  {[
                    {
                      href: "https://www.facebook.com/share/1ADbyoHvRa/",
                      Icon: Facebook,
                      label: "Facebook",
                    },
                    {
                      href: "https://www.instagram.com/licoreria_francachela?igsh=MW9pcDVlaG1tbmJ1Mg==",
                      Icon: Instagram,
                      label: "Instagram",
                    },
                  ].map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="group inline-block"
                    >
                      <div
                        className="
          p-3 rounded-lg bg-primary/20 
          transition-all duration-700 ease-in-out
          group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent
          group-hover:shadow-[0_0_12px_rgba(147,51,234,0.4)]
        "
                      >
                        <Icon
                          className="
            h-6 w-6 text-primary 
            transition-all duration-700 ease-in-out
            group-hover:text-white
          "
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Whatsapp</h3>

                  <a
                    href="https://wa.me/51951756070"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="group text-muted-foreground font-light transition-all duration-300 hover:text-primary"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r from-primary to-accent bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500">
                      +51 951 756 070
                    </span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Dirección sedes:</h3>
                  <a
                    href="https://maps.app.goo.gl/R7dkLGsRhUD8NtxG9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-muted-foreground font-light transition-all duration-300 hover:text-primary"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r from-primary to-accent bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500">
                      * Licorería Ron y Ron
                    </span>
                  </a>
                  <hr className="my-2 border-muted/30" />
                  <span className="text-muted-foreground font-light">
                    * Proximas sedes...
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Horario</h3>
                  <p className="text-muted-foreground">
                    Lunes - Viernes: 10:00 AM -12:00 AM 
                    <br />
                    Sábado: 10:00 AM - 3:00 AM
                    <br />
                    Domingo: 10:00 AM -12:00 AM 
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
          <CardContent className="p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold">¿Tienes preguntas?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No dudes en contactarnos. Nuestro equipo está listo para ayudarte
              con cualquier consulta sobre nuestros productos, pedidos o
              entregas.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactoPage;
