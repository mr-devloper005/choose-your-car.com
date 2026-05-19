import Page, {
  generateMetadata as generateAliasMetadata,
} from "../../classifieds/[slug]/page";

export const revalidate = 3;
export const generateMetadata = generateAliasMetadata;
export default Page;
