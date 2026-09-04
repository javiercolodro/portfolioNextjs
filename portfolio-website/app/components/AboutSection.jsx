import React from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const SKILLS_DATA = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "React Router DOM", category: "Frontend" },
  { name: "React Context", category: "Frontend" },
  { name: "Redux Toolkit", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Nest", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "Mongoose", category: "Backend" },
  { name: "Sequelize", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "TypeORM", category: "Backend" },
  { name: "JWT / Bcrypt", category: "Backend" },
  { name: "Swagger", category: "Backend" },
  { name: "MercadoPago", category: "Backend" },
  { name: "LangChain", category: "AI" },
  { name: "Google Gemini", category: "AI" },
  { name: "Jest", category: "Testing" },
  { name: "Supertest", category: "Testing" },
  { name: "Cypress", category: "Testing" },
  { name: "Docker", category: "DevOps" },
  { name: "Cloudinary", category: "DevOps" },
  { name: "Nodemailer", category: "DevOps" },
  { name: "AWS CDK", category: "AWS" },
  { name: "AWS Lambda", category: "AWS" },
  { name: "API Gateway", category: "AWS" },
  { name: "DynamoDB", category: "AWS" },
  { name: "AWS Cognito", category: "AWS" },
  { name: "AWS Amplify", category: "AWS" },
  { name: "S3", category: "AWS" },
  { name: "CloudFront", category: "AWS" },
  { name: "SNS", category: "AWS" },
  { name: "SQS", category: "AWS" },
  { name: "Step Functions", category: "AWS" },
  { name: "EventBridge", category: "AWS" },
  { name: "Amazon Bedrock", category: "AWS" },
  { name: "Secrets Manager", category: "AWS" },
  { name: "CloudWatch", category: "AWS" },
  { name: "IAM", category: "AWS" },
  { name: "GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Thunder Client", category: "Tools" },
  { name: "AWS Toolkit", category: "Tools" },
  { name: "Kiro", category: "Tools" },
];

// Un color por categoría para que el bloque de skills se lea de un vistazo
const CATEGORY_CONFIG = {
  Frontend: { badge: "bg-blue-500/10 text-blue-300 border-blue-500/25", dot: "bg-blue-400" },
  Backend: { badge: "bg-purple-500/10 text-purple-300 border-purple-500/25", dot: "bg-purple-400" },
  AWS: { badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/25", dot: "bg-indigo-400" },
  Testing: { badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25", dot: "bg-emerald-400" },
  DevOps: { badge: "bg-orange-500/10 text-orange-300 border-orange-500/25", dot: "bg-orange-400" },
  AI: { badge: "bg-rose-500/10 text-rose-300 border-rose-500/25", dot: "bg-rose-400" },
  Tools: { badge: "bg-teal-500/10 text-teal-300 border-teal-500/25", dot: "bg-teal-400" },
};

const CATEGORY_ORDER = ["Frontend", "Backend", "AWS", "Testing", "DevOps", "AI", "Tools"];

const STATS = [
  { value: "12+", label: "Projects shipped" },
  { value: "2+", label: "Years coding" },
  { value: "16+", label: "AWS services" },
];

const EDUCATION = [
  {
    title: "Plataforma 5 Coding Bootcamp",
    sub: "Full Stack JavaScript Developer",
  },
  { title: "Cabin Crew Certification", sub: "Qatar Airways" },
];

const CERTIFICATIONS = [
  { text: "Programación Web FullStack", highlight: false },
  { text: "JavaScript Bootcamp", highlight: false },
  { text: "Backend Developer Certification — No Country", highlight: false },
  { text: "Winner Hackathon — Backend Developer, No Country", highlight: true },
  { text: "Proof of Soft Skills — No Country", highlight: false },
  { text: "Service Excellence Program (SEP) — Qatar Airways", highlight: false },
];

const SubHeading = ({ children }) => (
  <div className="mb-5">
    <h3 className="text-lg font-semibold text-white">{children}</h3>
    <div className="mt-2 h-0.5 w-10 rounded-full bg-accent" />
  </div>
);

const AboutSection = () => (
  <section id="about" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
    {/* Encabezado de sección */}
    <div className="mb-16">
      <SectionHeading
        label="About me"
        title="Building for the web,"
        highlight="end to end"
        description="Frontend interfaces, backend APIs and AWS cloud infrastructure."
      />
    </div>

    {/* Retrato + biografía */}
    <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
      <div className="lg:col-span-5 flex justify-center">
        <div className="relative h-72 w-72 sm:h-96 sm:w-96 lg:h-[420px] lg:w-[420px] overflow-hidden rounded-2xl border border-hairline bg-elevated">
          <Image
            src="/images/nuevaimagen.avif"
            fill
            sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 420px"
            alt="Lorenzo Javier Colodro working"
            className="object-cover"
          />
        </div>
      </div>

      <div className="lg:col-span-7">
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-muted">
          I&apos;m a{" "}
          <span className="font-semibold text-white">Full Stack Developer</span>{" "}
          who enjoys owning a feature from the interface down to the
          infrastructure. On the frontend I work with React and TypeScript,
          focusing on accessible and responsive interfaces. On the backend I
          design REST APIs with Node.js, Express and NestJS over PostgreSQL or
          MongoDB.
        </p>
        <p className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-muted">
          Lately I&apos;ve been focused on{" "}
          <span className="font-semibold text-white">AWS serverless</span>{" "}
          architectures — defining infrastructure as code with CDK and
          orchestrating event-driven workflows with Step Functions, Lambda, SQS
          and EventBridge. I also care about testing: unit and integration tests
          with Jest and Supertest.
        </p>

        <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-5">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="card p-5 text-center transition-colors duration-200 hover:border-accent/40"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-2xl sm:text-3xl font-bold text-accent-soft">
                  {stat.value}
                </span>
                <span className="mt-1.5 block text-xs sm:text-sm text-muted">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

    {/* Skills agrupadas por categoría */}
    <div className="mt-20 lg:mt-24">
      <SubHeading>Tech stack</SubHeading>
      <div className="card divide-y divide-hairline">
        {CATEGORY_ORDER.map((cat) => (
          <div
            key={cat}
            className="flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:gap-6 lg:p-7"
          >
            <div className="flex shrink-0 items-center gap-2 sm:w-32">
              <span
                className={`h-1.5 w-1.5 rounded-full ${CATEGORY_CONFIG[cat].dot}`}
                aria-hidden="true"
              />
              <span className="text-sm font-semibold text-white">{cat}</span>
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {SKILLS_DATA.filter((s) => s.category === cat).map((skill) => (
                <li
                  key={skill.name}
                  className={`rounded-md border px-3 py-1.5 font-mono text-xs ${CATEGORY_CONFIG[cat].badge}`}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Formación y certificaciones */}
    <div className="mt-20 lg:mt-24 grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-14">
      <div>
        <SubHeading>Education</SubHeading>
        <ul className="space-y-4">
          {EDUCATION.map((item) => (
            <li
              key={item.title}
              className="card border-l-2 border-l-accent p-5 transition-colors duration-200 hover:border-accent/40 hover:border-l-accent"
            >
              <p className="font-semibold text-white">{item.title}</p>
              <p className="mt-1.5 text-sm text-muted">{item.sub}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SubHeading>Certifications</SubHeading>
        <ul className="space-y-3">
          {CERTIFICATIONS.map((cert) => (
            <li
              key={cert.text}
              className={`card flex items-start gap-3 px-5 py-4 ${
                cert.highlight ? "border-l-2 border-l-amber-400" : ""
              }`}
            >
              {cert.highlight ? (
                <span className="text-sm" aria-hidden="true">
                  🏆
                </span>
              ) : (
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <p
                className={`text-sm ${
                  cert.highlight ? "font-medium text-white" : "text-muted"
                }`}
              >
                {cert.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AboutSection;
