// ============================================================
//  EXPERIENCE
//  Add / edit jobs here. Most recent first.
// ============================================================

const EXPERIENCE = [
  {
    role:     "Staff Software Engineer – Enterprise Pricing",
    company:  "The Home Depot",
    location: "Atlanta, GA",
    period:   "Jul 2018 – Present",
    bullets: [
      "Led migration of 50+ APIs to Kubernetes (GKE) — first team at THD to complete this at scale.",
      "Architected high-performance data migration to BigQuery, processing millions of pricing records efficiently.",
      "Drove Apigee → self-managed JWT authentication model, reducing third-party dependency.",
      "Designed Regional Assortment feature enabling business-unit-specific retail pricing.",
      "Redesigned order pipelines with Google Pub/Sub for real-time streaming and improved throughput.",
      "Implemented OAuth2 security and automated CI/CD pipelines across the microservices fleet.",
      "Set up AppDynamics for end-to-end service monitoring and observability.",
    ],
    tech: ["Spring Boot","GCP","BigQuery","GKE","Kafka","Pub/Sub","OAuth2","Cassandra","PCF","AppDynamics","Kubernetes"],
  },
  {
    role:     "Lead Developer",
    company:  "BPM Links",
    location: "Atlanta, GA",
    period:   "Aug 2017 – Jun 2018",
    bullets: [
      "Modernized KONY mobile business logic enabling cross-platform support for a SunTrust banking application.",
      "Integrated RSA SDK and Kafka-based Audit Logging to mask sensitive transaction data.",
      "Implemented OAM header-based authentication for SunTrust mobile login flow.",
      "Built Base64 encryption/decryption logic for securing sensitive customer data in transit.",
    ],
    tech: ["Spring Boot","Kafka","Spring Cloud","Apache CXF","Hystrix","OAuth2"],
  },
  {
    role:     "Lead Java Developer",
    company:  "Kforce (Client: ADP)",
    location: "Atlanta, GA",
    period:   "Apr 2017 – Jul 2017",
    bullets: [
      "Built Spring Boot microservices consuming Kafka messages and exposing REST APIs for Siebel CRM integration.",
      "Implemented Jenkins CI/CD pipelines with SonarQube quality gates and Docker containerized deployments.",
      "Developed a property/configuration server using Spring Boot to externalize application configuration.",
    ],
    tech: ["Spring Boot","Kafka","Docker","Jenkins","SonarQube","Oracle","WebSphere"],
  },
  {
    role:     "Lead Java Developer",
    company:  "Randstad Technologies",
    location: "Atlanta, GA",
    period:   "Dec 2014 – Mar 2017",
    bullets: [
      "Owned two of four modules in a large enterprise microservices initiative on Spring Boot + PCF.",
      "Implemented Netflix Eureka service discovery and RabbitMQ for centralized audit log streaming.",
      "Authored Drools business rules (.drl files and decision tables) for complex rule-engine-driven logic.",
      "Used SMPP protocol to process Mobile Originated messages from Short Message Service Centres.",
    ],
    tech: ["Spring Boot","PCF","RabbitMQ","Drools","Eureka","AngularJS","Maven","Jenkins"],
  },
  {
    role:     "Lead Java Developer",
    company:  "Tata Consultancy Services",
    location: "India / US Clients",
    period:   "Jun 2006 – Nov 2014",
    bullets: [
      "Developed JSR 168-compliant portlets on WebSphere Portal Server 6.0/6.1 with event handling and WSRP.",
      "Administered WebSphere servers: installation, upgrade, patching, and platform migration (5.x → 6.1).",
      "Developed SOA-based RESTful web services for LeadTime Services; validated with JUnit.",
      "Designed interactive web UIs using HTML5, jQuery, and AJAX; profiled with JProbe.",
    ],
    tech: ["Java EE","WebSphere","Struts","Spring","JDBC","DB2","Oracle","Tomcat","JSP"],
  },
];
