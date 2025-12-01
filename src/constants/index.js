import defaultIconBg from "../assets/icons/placeholder-icon-bg.svg";

export const navigation = [
  {
    id: crypto.randomUUID(),
    name: "features",
    url: "#features",
  },

  {
    id: crypto.randomUUID(),
    name: "collaboration",
    url: "#collaboration",
  },
  {
    id: crypto.randomUUID(),
    name: "services",
    url: "#services",
  },
  {
    id: crypto.randomUUID(),
    name: "pricing",
    url: "#pricing",
  },
];

export const authPortal = {
  register: {
    name: "create account",
    url: "#register",
  },
  login: {
    name: "sign in",
    url: "#sign-in",
  },
};

// ========================================
// HERO SECTION
// ========================================
export const heroSection = {
  heading: {
    main: {
      part1: "Explore the Possibilities",
      part2: "of AI Chatting with",
    },
    highlight: "SynapseAI",
  },
  description: {
    part1: "Unleash the power of AI within SynapseAI.",
    part2: "Upgrade your productivity with SynapseAI, the open AI chat app.",
  },
  cta: {
    text: "get started",
    url: "#sign-in",
  },
  notifications: [
    {
      id: crypto.randomUUID(),
      label: "Code Generation",
      date: "1m ago",
      position: "top-[10%] left-[-12%] ml-10",
    },
    {
      id: crypto.randomUUID(),
      label: "Image Analysis",
      date: "10m ago",
      position: "top-[60%] right-[-12%] mr-10",
    },
  ],
  carousel: {
    label: "helping people to make beautiful content at",
  },
};

// ========================================
// FEATURES SECTION
// ========================================
export const featuresSection = {
  heading: { part1: "Chat Smarter, Not Harder ", part2: "with SynapseAI" },
  features: [
    {
      id: crypto.randomUUID(),
      title: "Ask Anything",
      desc: "Get instant answers to your questions without searching through multiple sources. Our AI understands context and provides precise responses.",
      icon: defaultIconBg,
    },
    {
      id: crypto.randomUUID(),
      title: "Improve Everyday",
      desc: "Advanced natural language processing continuously learns from interactions to provide increasingly accurate and relevant responses.",
      icon: defaultIconBg,
    },
    {
      id: crypto.randomUUID(),
      title: "Connect Everywhere",
      desc: "Access your AI assistant from anywhere, on any device. Seamless synchronization keeps your conversations available wherever you need them.",
      icon: defaultIconBg,
    },
    {
      id: crypto.randomUUID(),
      title: "Fast Responding",
      desc: "Lightning-fast response times powered by optimized AI algorithms ensure you never wait for answers.",
      icon: defaultIconBg,
    },
    {
      id: crypto.randomUUID(),
      title: "Smart Context",
      desc: "Maintains conversation history and context to provide coherent, relevant responses across multiple interactions.",
      icon: defaultIconBg,
    },
    {
      id: crypto.randomUUID(),
      title: "Multilingual Support",
      desc: "Communicate in your preferred language with support for over 50 languages and automatic translation capabilities.",
      icon: defaultIconBg,
    },
  ],
};

// ========================================
// COLLABORATION SECTION
// ========================================
export const collaborationSection = {
  heading: {
    part1: "AI chat app for",
    part2: "seamless collaboration",
  },
  subtitle: "With smart automation and top-notch security.",
  description: "It's the perfect solution for teams looking to work smarter.",
  list: [
    {
      id: crypto.randomUUID(),
      label: "Seamless Integration",
      desc: "Integrate effortlessly with your existing tools and workflows. Connect with popular platforms and services to centralize your work.",
    },
    {
      id: crypto.randomUUID(),
      label: "Smart Automation",
      desc: "Automate repetitive tasks and streamline your workflow with intelligent automation that learns your preferences and adapts to your needs.",
    },
    {
      id: crypto.randomUUID(),
      label: "Seamless Collaboration",
      desc: "Connect and work together effortlessly with shared workspaces, real-time editing, and integrated communication tools",
    },
  ],
  cta: {
    text: "LEARN MORE",
    url: "#collaboration",
  },
};

// ========================================
// SERVICES SECTION
// ========================================
export const servicesSection = {
  heading: "Generative AI made for creators",
  description: "SynapseAI unlocks the potential of AI-powered applications",
  cards: [
    {
      id: crypto.randomUUID(),
      type: "primary",
      title: "smartest AI",
      description: "synapseAI unlocks the potential of AI-powered applications",
      image: "robot-v1",
      features: [
        {
          id: crypto.randomUUID(),
          text: "photo generating",
        },
        {
          id: crypto.randomUUID(),
          text: "photo enhance",
        },
        {
          id: crypto.randomUUID(),
          text: "seamless integration",
        },
      ],
      loadingText: "AI is generating!",
    },
    {
      id: crypto.randomUUID(),
      type: "secondary", // Side card
      title: "Photo editing",
      description:
        "Automatically enhance your photos using our AI app's photo editing feature. Try it now!",
      image: "robot-v2",
    },
    {
      id: crypto.randomUUID(),
      type: "secondary", // Side card
      title: "Advanced data processing",
      description:
        "Unleash the power of our AI-Powered Insight engine. We don't just process data—we transform raw information into actionable strategy.",
      image: "device-v1",
    },
  ],
};

// ========================================
// PRICING SECTION
// ========================================
export const pricingSection = {
  subtitle: "get started with synapseai",
  heading: "Pay once, use forever",
  plans: [
    {
      id: crypto.randomUUID(),
      name: "Basic",
      color: "#D4C46A",
      price: "$0",
      description: "AI chatbot, personalized recommendations",
      features: [
        {
          id: crypto.randomUUID(),
          text: "AI chatbot with natural language understanding",
        },
        {
          id: crypto.randomUUID(),
          text: "Personalized recommendations based on your preferences",
        },
        {
          id: crypto.randomUUID(),
          text: "Access to core features and basic integrations",
        },
        {
          id: crypto.randomUUID(),
          text: "Community support and documentation",
        },
        {
          id: crypto.randomUUID(),
          text: "Up to 100 messages per month",
        },
      ],
      cta: {
        buttonText: "GET STARTED",
        url: "#",
      },
    },
    {
      id: crypto.randomUUID(),
      name: "Premium",
      color: "#c261d1",
      price: "$9.99",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      features: [
        {
          id: crypto.randomUUID(),
          text: "Advanced AI with complex query understanding",
        },
        {
          id: crypto.randomUUID(),
          text: "Unlimited messages and conversations",
        },
        {
          id: crypto.randomUUID(),
          text: "Analytics dashboard to track usage and insights",
        },
        {
          id: crypto.randomUUID(),
          text: "Priority email support with 24-hour response time",
        },
        {
          id: crypto.randomUUID(),
          text: "Access to all integrations and premium features",
        },
        {
          id: crypto.randomUUID(),
          text: "Custom AI training on your data",
        },
      ],
      cta: {
        buttonText: "GET STARTED",
        url: "#",
      },
    },
    {
      id: crypto.randomUUID(),
      name: "Enterprise",
      color: "#E85959",
      price: "Contact Us",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      features: [
        {
          id: crypto.randomUUID(),
          text: "Fully customizable AI chatbot tailored to your brand",
        },
        {
          id: crypto.randomUUID(),
          text: "Advanced analytics with custom reporting",
        },
        {
          id: crypto.randomUUID(),
          text: "Dedicated account manager and onboarding specialist",
        },
        {
          id: crypto.randomUUID(),
          text: "99.9% uptime SLA with priority infrastructure",
        },
        {
          id: crypto.randomUUID(),
          text: "SSO and advanced security features",
        },
        {
          id: crypto.randomUUID(),
          text: "API access with higher rate limits",
        },
        {
          id: crypto.randomUUID(),
          text: "Custom integrations and white-label options",
        },
      ],
      cta: {
        buttonText: "CONTACT US",
        url: "#",
      },
    },
  ],
};
