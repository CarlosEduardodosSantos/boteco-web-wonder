
import { motion } from "framer-motion";
import { Award, Target, Clock, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "20k+",
    label: "Clientes Satisfeitos",
    description: "Pessoas que confiam em nossa qualidade"
  },
  {
    icon: Clock,
    value: "13",
    label: "Anos de História",
    description: "Tradição e experiência em cada detalhe"
  },
  {
    icon: Award,
    value: "32",
    label: "Prêmios Conquistados",
    description: "Reconhecimento da crítica especializada"
  },
  {
    icon: Target,
    value: "98%",
    label: "Taxa de Satisfação",
    description: "Avaliações positivas dos clientes"
  }
];

const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nossos Números
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto">
            Resultados que comprovam nossa excelência
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center p-6 rounded-3xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </h3>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-primary/70 text-sm">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
