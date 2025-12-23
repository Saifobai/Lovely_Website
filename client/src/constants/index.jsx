const services = [
  {
    id: "business-consulting",
    slug: "business-consulting",
    title: "Business Consulting Services",
    children: [
      {
        id: "business-consulting-b2b",
        slug: "b2b-corporate",
        title: "B2B (Corporate Clients)",
        children: [
          {
            id: "company-formation",
            slug: "company-formation",
            title: "Company Formation",
            options: ["GmbH", "UG", "Branch"],
          },
          {
            id: "grants-incentives",
            slug: "grants-public-incentives",
            title: "Grants and Public Incentives Guidance",
          },
          {
            id: "qatar-business-setup",
            slug: "qatar-business-setup",
            title: "Qatar Business Setup",
            note: "By invitation only",
          },
        ],
      },
      {
        id: "business-consulting-b2c",
        slug: "b2c-entrepreneurs-startups",
        title: "B2C (Entrepreneurs and Startups)",
        children: [
          {
            id: "business-plan-development",
            slug: "business-plan-development",
            title: "Business Plan Development",
          },
          {
            id: "digital-presence",
            slug: "digital-presence",
            title: "Digital Presence",
            children: [
              {
                id: "website-development",
                slug: "website",
                title: "Website",
              },
              {
                id: "ai-bots",
                slug: "ai-bots",
                title: "AI Bots",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "immigration-consulting",
    slug: "immigration-consulting",
    title: "Immigration Consulting Services",
    children: [
      {
        id: "immigration-germany",
        slug: "germany",
        title: "Germany",
        children: [
          {
            id: "germany-tourist-visa",
            slug: "germany-tourist-visa",
            title: "Tourist Visa",
          },
          {
            id: "germany-student-visa",
            slug: "germany-student-visa",
            title: "Student Visa",
          },
          {
            id: "germany-other-services",
            slug: "germany-other-services",
            title: "Other Services",
            note: "Through external partners",
            children: [
              {
                id: "work-residence-permit",
                slug: "work-residence-permit",
                title: "Work and Residence Permit Application",
              },
              {
                id: "city-registration",
                slug: "city-hall-registration",
                title: "City Hall Registration",
              },
              {
                id: "bank-account",
                slug: "opening-bank-account",
                title: "Opening Bank Account",
              },
              {
                id: "relocation",
                slug: "relocation-home-search",
                title: "Relocation within Germany (Home Search)",
              },
              {
                id: "change-address",
                slug: "change-of-address",
                title: "Change of Address",
              },
              {
                id: "child-benefit",
                slug: "child-benefit-application",
                title: "Application of Child Benefit",
              },
              {
                id: "tax-class-change",
                slug: "tax-class-change",
                title: "Tax Class Change for Couples and Families",
              },
              {
                id: "drivers-license-exam",
                slug: "drivers-license-translation-exam",
                title: "Translation of Driver's License (with Exam)",
              },
              {
                id: "drivers-license-no-exam",
                slug: "drivers-license-translation-no-exam",
                title: "Translation of Driver's License (without Exam)",
              },
            ],
          },
        ],
      },
      {
        id: "immigration-usa",
        slug: "united-states",
        title: "United States of America",
        children: [
          {
            id: "usa-non-immigrant",
            slug: "non-immigrant-visas",
            title: "Non-Immigrant Visas",
            children: [
              {
                id: "visa-b1-b2",
                slug: "b1-b2-tourist",
                title: "Tourist (B-1/B-2)",
              },
              { id: "visa-f1", slug: "f1-student", title: "Student (F-1)" },
              { id: "visa-k1", slug: "k1-fiance", title: "Fiancé(e) (K-1)" },
              {
                id: "visa-h1b",
                slug: "h1b-professional",
                title: "Professional Workers (H-1B)",
              },
              {
                id: "visa-e1-e2",
                slug: "e1-e2-investor",
                title: "Investor Visa (E-1/E-2)",
              },
              {
                id: "visa-tn",
                slug: "tn-canada-mexico",
                title: "Canadians and Mexicans (TN)",
              },
              {
                id: "visa-o1",
                slug: "o1-extraordinary",
                title: "Extraordinary Ability (O-1)",
              },
              {
                id: "visa-l1",
                slug: "l1-intracompany",
                title: "Intra-company Transfer (L-1)",
              },
            ],
          },
          {
            id: "usa-green-cards",
            slug: "green-cards",
            title: "Green Cards (Permanent Residency)",
            children: [
              {
                id: "green-card-family",
                slug: "family-based",
                title: "Family-Based Green Cards",
              },
              {
                id: "green-card-employment",
                slug: "employment-based",
                title: "Employment-Based Green Cards",
                children: [
                  {
                    id: "eb1",
                    slug: "eb1-priority-workers",
                    title: "EB-1 Priority Workers",
                  },
                  {
                    id: "eb2",
                    slug: "eb2-advanced-degree",
                    title: "EB-2 Advanced Degree or Exceptional Ability",
                  },
                  {
                    id: "eb3",
                    slug: "eb3-skilled-workers",
                    title: "EB-3 Skilled Workers and Professionals",
                  },
                  {
                    id: "eb4",
                    slug: "eb4-special-immigrants",
                    title: "EB-4 Special Immigrants",
                  },
                  {
                    id: "eb5",
                    slug: "eb5-investor",
                    title: "EB-5 Investor Based Green Cards",
                  },
                ],
              },
            ],
          },
          {
            id: "usa-citizenship",
            slug: "citizenship",
            title: "Citizenship",
          },
        ],
      },
    ],
  },
  {
    id: "it-consulting",
    slug: "it-consulting",
    title: "IT Consulting Services",
    children: [
      {
        id: "website-chatbots",
        slug: "website-chatbots",
        title: "Website Chatbots",
      },
      {
        id: "messenger-bots",
        slug: "messenger-bots",
        title: "WhatsApp / SMS / Messenger Bots",
      },
      {
        id: "ai-knowledge-bots",
        slug: "ai-knowledge-bots",
        title: "AI Knowledge Bots",
      },
      {
        id: "business-process-optimization",
        slug: "business-process-optimization",
        title: "Business Process Optimization",
      },
    ],
  },
  {
    id: "real-estate",
    slug: "real-estate",
    title: "Real Estate – Buy & Sell",
    note: "With external partners",
    children: [
      {
        id: "real-estate-b2b",
        slug: "investors-developers",
        title: "B2B (Investors & Developers)",
        children: [
          {
            id: "off-market-investments",
            slug: "off-market-investments",
            title: "Off-Market Investment Sourcing",
          },
        ],
      },
      {
        id: "real-estate-b2c",
        slug: "individuals-families",
        title: "B2C (Individuals and Families)",
        children: [
          {
            id: "residential-search",
            slug: "residential-search",
            title: "Residential Search (On & Off Market)",
          },
        ],
      },
    ],
  },
  {
    id: "events",
    slug: "events",
    title: "Events",
    children: [
      {
        id: "training-coaching",
        slug: "training-coaching",
        title: "Training / Coaching Services",
      },
      {
        id: "improvisation-coaching",
        slug: "improvisation-coaching",
        title: "Improvisation Coaching",
      },
      {
        id: "english-standup-comedy",
        slug: "english-standup-comedy",
        title: "English Stand-Up Comedy",
      },
    ],
  },
];

export { services };
