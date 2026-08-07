"use client";
import React from "react";
import Image from "next/image";

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

const CATEGORY_CONFIG = {
  Frontend: { badge: "bg-blue-500/30 text-blue-200 border border-blue-400/50", label: "text-blue-400" },
  Backend:  { badge: "bg-purple-500/30 text-purple-200 border border-purple-400/50", label: "text-purple-400" },
  AWS:      { badge: "bg-indigo-500/30 text-indigo-200 border border-indigo-400/50", label: "text-indigo-400" },
  Testing:  { badge: "bg-green-500/30 text-green-200 border border-green-400/50", label: "text-green-400" },
  DevOps:   { badge: "bg-orange-500/30 text-orange-200 border border-orange-400/50", label: "text-orange-400" },
  AI:       { badge: "bg-rose-500/30 text-rose-200 border border-rose-400/50", label: "text-rose-400" },
  Tools:    { badge: "bg-teal-500/30 text-teal-200 border border-teal-400/50", label: "text-teal-400" },
};

const CATEGORY_ORDER = ["Frontend", "Backend", "AWS", "Testing", "DevOps", "AI", "Tools"];

const EDUCATION = [
  { title: "Plataforma 5 Coding Bootcamp", sub: "Full Stack JavaScript Developer" },
  { title: "Cabin Crew Certification", sub: "Qatar Airways" },
];

const CERTIFICATIONS = [
  "Programación Web FullStack",
  "JavaScript Bootcamp",
  "Backend Developer Certification — No Country",
  "🏆 Winner Hackathon — Backend Developer, No Country",
  "Proof of Soft Skills — No Country",
  "Service Excellence Program (SEP) — Qatar Airways",
];

const SectionTitle = ({ children }) => (
  <div className="w-fit mb-5">
    <h3 className="text-xl font-bold text-white">{children}</h3>
    <div className="h-0.5 bg-blue-500 rounded mt-1" />
  </div>
);

const AboutSection = () => (
  <section className="text-white mb-6" id="about">
    <div className="py-6 px-4 xl:px-16 sm:py-10">

      {/* Top: image + bio */}
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 mb-12">
        <div className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] mb-6 md:mb-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px]">
              <Image
                src="/images/nuevaimagen.avif"
                fill
                alt="Lorenzo Javier Colodro's portrait"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="w-fit mb-5 mt-6 sm:mt-0">
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <div className="h-1 bg-blue-500 rounded mt-2" />
          </div>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#ADB7BE] mb-6">
            I&apos;m a <span className="text-white font-semibold">Full Stack Developer</span> passionate about building
            scalable, user-friendly applications. With experience across the full stack — from crafting
            responsive UIs to designing robust APIs — I bring a collaborative mindset and a drive to
            deliver real value in every project I join.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "10+", label: "Projects" },
              { value: "2+", label: "Years Exp." },
              { value: "5+", label: "Tech Stacks" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#181818] rounded-xl p-3 text-center border border-[#2a2a2a]">
                <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                <p className="text-xs text-[#ADB7BE] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-12">
        <SectionTitle>Skills</SectionTitle>
        <div className="space-y-3 bg-[#181818] border border-[#2a2a2a] rounded-2xl p-6">
          {CATEGORY_ORDER.map((cat) => (
            <div key={cat} className="flex items-start gap-3">
              <span className={`text-xs font-bold w-20 text-center shrink-0 pt-1 ${CATEGORY_CONFIG[cat].label}`}>
                {cat}
              </span>
              <div className="flex flex-wrap gap-2">
                {SKILLS_DATA.filter((s) => s.category === cat).map((skill, i) => (
                  <span key={i} className={`text-xs px-3 py-1 rounded-full border ${CATEGORY_CONFIG[cat].badge}`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education + Certifications */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-3">
            {EDUCATION.map((item, i) => (
              <div key={i} className="bg-[#181818] border border-[#2a2a2a] border-l-4 border-l-blue-500 rounded-lg p-4">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-sm text-[#ADB7BE] mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionTitle>Certifications</SectionTitle>
          <div className="space-y-2">
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} className="bg-[#181818] border border-[#2a2a2a] border-l-4 border-l-purple-500 rounded-lg px-4 py-3">
                <p className="text-sm text-[#ADB7BE]">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default AboutSection;
