"use client";

import CopyOrLink from "@/components/ui/copy-link-text/CopyOrLink";
import { Constants } from "@/utils/Constants";

/**
 * Ready-to-render company contact fields using CopyOrLink.
 * Prefer `Constants` for plain string values in data/metadata.
 */
export const CompanyContacts = {
  email: (
    <CopyOrLink
      text={Constants.company.email}
      copyText={Constants.company.email}
    />
  ),
  hrEmail: (
    <CopyOrLink
      text={Constants.company.hrEmail}
      copyText={Constants.company.hrEmail}
    />
  ),
  website: (
    <CopyOrLink
      text={Constants.company.website}
      copyText={Constants.company.website}
      url={Constants.company.website}
    />
  ),
  address: (
    <CopyOrLink
      url={Constants.company.addressMapsUrl}
      text="View office location"
    />
  ),
  contactNo: (
    <CopyOrLink
      text={Constants.company.contactNo}
      copyText={Constants.company.contactNo}
    />
  ),
};
