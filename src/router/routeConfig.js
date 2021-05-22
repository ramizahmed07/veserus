import { Redirect } from "react-router-dom";
import { SampleIntegrations } from "../components/ApiDocsContainer";
import ApiDocsHome from "../components/ApiDocsContainer/ApiDocsHome";
import AboutUs from "../pages/AboutUs";
import ApiDocs from "../pages/ApiDocs";
import BrandAssets from "../pages/BrandAssets";
import Contact from "../pages/Contact";
import Features from "../pages/Features";
import Partners from "../pages/Partners";
import Plans from "../pages/Plans";
import Professionals from "../pages/Professionals";
import Team from "../pages/Team";
import PATHS from "./paths";

const routeConfig = [
  {
    path: `${PATHS.ABOUT_PAGE}`,
    component: AboutUs,
    key: "About Us",
    headerColor: "#fff",
    routes: [
      {
        path: `${PATHS.ABOUT_PAGE}${PATHS.ABOUT}`,
        component: () => <div>about</div>,
        key: "About",
      },
      {
        path: `${PATHS.ABOUT_PAGE}${PATHS.CAREERS}`,
        component: () => <div>careers</div>,
        key: "Careers",
      },
      {
        path: `${PATHS.ABOUT_PAGE}${PATHS.MISSION}`,
        component: () => <div>mission</div>,
        key: "Mission",
      },
      {
        path: `${PATHS.ABOUT_PAGE}${PATHS.PRESS}`,
        component: () => <div>press</div>,
        key: "Press",
      },
    ],
  },
  {
    path: `${PATHS.CONTACT_PAGE}`,
    component: Contact,
    key: "Contact Us",
    headerColor: "#465364",
  },
  {
    path: `${PATHS.PLANS_PAGE}`,
    component: Plans,
    headerColor: "#fff",
    key: "Plans",
  },
  {
    path: "/api-docs",
    component: ApiDocs,
    key: "Api Docs",
    headerColor: "#465364",
    routes: [
      {
        key: "Home",
        path: `${PATHS.API_DOCS}`,
        component: ApiDocsHome,
        exact: true,
      },
      {
        key: "Payments",
        path: `${PATHS.API_DOCS_PAYMENTS}`,
        component: () => <div>hello</div>,
        routes: [
          {
            key: "Getting started",
            path: `${PATHS.API_DOCS_PAYMENTS_GETTING_START}`,
            component: () => <div>Getting Started</div>,
          },
          {
            key: "Sample integrations",
            path: `${PATHS.API_DOCS_PAYMENTS_SAMPLE_INTEGRATIONS}`,
            component: SampleIntegrations,
          },
          {
            key: "After the payment",
            path: `${PATHS.API_DOCS_PAYMENTS_AFTER_THE_PAYMENT}`,
            component: () => <div>After the payment</div>,
          },
          {
            key: "After payment methods",
            path: `${PATHS.API_DOCS_PAYMENTS_ADD_PAYMENT_METHODS}`,
            component: () => <div>After payment methods</div>,
          },
          {
            key: "More guides",
            path: `${PATHS.API_DOCS_PAYMENTS_ADD_MORE_GUIDES}`,
            component: () => <div>More Guides</div>,
          },
        ],
      },
      {
        key: "Business Operations",
        path: `${PATHS.API_DOCS_BUSINESS_OPERATIONS}`,
        component: () => <h3>Business Operations</h3>,
      },

      {
        key: "Financial services",
        path: `${PATHS.API_DOCS_FINANCIAL_SERVICES}`,
        component: () => <div>Financial Services</div>,
      },
      {
        key: "Developer Tools",
        path: `${PATHS.API_DOCS_DEVELOPER_TOOLS}`,
        component: () => <div>Developer Tools</div>,
      },
      {
        key: "Security",
        path: `${PATHS.API_DOCS_SECURITY}`,
        component: () => <div>Security</div>,
      },
      {
        key: "Account",
        path: `${PATHS.API_DOCS_ACCOUNT}`,
        component: () => <div>Account</div>,
      },
      {
        key: "API reference",
        path: `${PATHS.API_DOCS_API_REFERENCE}`,
        component: () => <div>Api Reference</div>,
      },
      {
        key: "All products",
        path: `${PATHS.API_DOCS_ALL_PRODUCTS}`,
        component: () => <div>All Products</div>,
      },
    ],
  },
  {
    path: `${PATHS.TEAM}`,
    component: Team,
    key: "Our Team",
    headerColor: "#465364",
  },
  {
    path: `${PATHS.PARTNERS}`,
    component: Partners,
    key: "Partners",
    headerColor: "#465364",
  },
  {
    path: `${PATHS.PROFESSIONALS}`,
    component: Professionals,
    key: "Professionals",
    headerColor: "#465364",
  },
  {
    path: `${PATHS.BRAND_ASSETS}`,
    component: BrandAssets,
    key: "Brand Assets",
    headerColor: "#465364",
  },
  {
    path: `${PATHS.FEATURES_PAGE}`,
    component: Features,
    key: "Features",
    headerColor: "#465364",
  },
  {
    path: "/",
    component: () => <Redirect to={PATHS.FEATURES_PAGE} />,
    key: "Home",
    exact: true,
  },
];

export default routeConfig;
