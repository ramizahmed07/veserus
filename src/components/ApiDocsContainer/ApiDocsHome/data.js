import BusinessOperations from "../../../assets/images/business-operations.png";
import FinancialServices from "../../../assets/images/financial-services.png";
import Product1 from "../../../assets/images/veserus-product-1.png";
import Product2 from "../../../assets/images/veserus-product-2.png";
import Product3 from "../../../assets/images/veserus-product-3.png";
import Payment1 from "../../../assets/images/payment-icon1.png";
import Payment2 from "../../../assets/images/payment-icon2.png";
import Payment3 from "../../../assets/images/payment-icon3.png";
import Payment4 from "../../../assets/images/payment-icon4.png";
import Payment5 from "../../../assets/images/payment-icon5.png";
import Payment6 from "../../../assets/images/payment-icon6.png";

const GET_STARTED = [
  {
    title: "Business operations",
    desc:
      "Programmatically or manually monitor, protect, and report on the money you make with Stripe.",
    img: BusinessOperations,
    id: 1,
  },
  {
    title: "Financial Services",
    desc:
      "Move, control, and borrow money with Stripe's APIs and financial services.",
    img: FinancialServices,
    id: 2,
  },
];

const VESERUS_PRODUCTS = [
  {
    title: "Accept a card payment",
    desc:
      "Build a checkout form for web or mobile, using a step-by-step code tutorial.",
    img: Product1,
    id: 1,
    color: "#9688f7",
  },
  {
    title: "Use a prebuilt checkout form",
    desc:
      "Support mobile wallets by default with a checkout page hosted by Veserus.",
    img: Product2,
    id: 2,
    color: "#584BEF",
  },
  {
    title: "Create a subscription",
    desc: "Set up recurring billing for your SaaS or e-commerce business.",
    img: Product3,
    id: 3,
    color: "#060884",
  },
];

const AFTER_THE_PAYMENT = {
  firstRow: [
    {
      id: 1,
      title: "How cards work",
      desc: `See how a credit or debit card payment works online, step by step.`,
      img: Payment1,
    },
    {
      id: 2,
      title: "Receiving payouts",
      desc: `Set up your bank account to receive payouts`,
      img: Payment2,
    },
    {
      id: 3,
      title: "Declines",
      desc: `Identify causes and build automatic retries.`,
      img: Payment3,
    },
  ],
  secondRow: [
    {
      id: 4,
      title: "Receipts",
      desc: `Send email receipts built by us or customized.`,
      img: Payment4,
    },
    {
      id: 5,
      title: "Refunds",
      desc: `Refund or cancel customer's payments, and avoid disputes.`,
      img: Payment5,
    },
    {
      id: 6,
      title: "Webhook events",
      desc: `Get notified about payment events and trigger actions.`,
      img: Payment6,
    },
  ],
};

const GUIDES = [
  {
    title: "Integrations",
    id: 1,
    list: [
      "One time",
      "Subscriptions",
      "Invoices",
      "Multiparty",
      "In-person POS",
    ],
  },
  {
    title: "Payment methods",
    id: 2,
    list: ["Cards", "Regional", "Digital wallets", "Bank transfers/debits"],
  },
  {
    title: "Managing payments",
    id: 3,
    list: [
      "SCA regulation support",
      "Handling disputes",
      "Fraud prevention",
      "3D Secure",
      "Testing",
    ],
  },
  {
    title: "About the APIs",
    id: 4,
    list: ["Payment intents", "Setup intents", "Payment nethods", "Older APIs"],
  },
];

const OTHER_AND_POPULAR = [
  {
    title: "API & APP",
    desc: "If your customer’s card issuer declines a payment.",
    id: 1,
    bgColor: "#0F1116",
    textColor: "#B9B9BB",
  },
  {
    title: "The Setup Intents API",
    desc: "Learn more about the Setup Intents API for payment.",
    id: 2,
    bgColor: "#060884",
    textColor: "#C4C4F3",
  },
];

export {
  GET_STARTED,
  VESERUS_PRODUCTS,
  AFTER_THE_PAYMENT,
  GUIDES,
  OTHER_AND_POPULAR,
};
